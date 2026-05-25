import { Router } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { v4 as uuidv4 } from 'uuid'
import { getDB, writeDB } from '../data/db.js'

const router = Router()
const JWT_SECRET = process.env.JWT_SECRET || 'saidika_dev_secret'
const OTP_EXPIRE_MS = 5 * 60 * 1000
const TOKEN_EXPIRY = '7d'

function createToken(user) {
  return jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: TOKEN_EXPIRY })
}

function sanitizeUser(user) {
  const { passwordHash, ...rest } = user
  return rest
}

router.post('/register', async (req, res) => {
  const { firstName, lastName, phone, nationalId, county, email, password } = req.body

  if (!firstName || !lastName || !phone || !nationalId || !county || !email || !password) {
    return res.status(400).json({ error: 'All registration fields are required.' })
  }

  const db = await getDB()
  const duplicate = db.users.find((user) => user.email === email || user.phone === phone)

  if (duplicate) {
    return res.status(409).json({ error: 'A user with that email or phone number already exists.' })
  }

  const passwordHash = await bcrypt.hash(password, 10)
  const user = {
    id: uuidv4(),
    firstName,
    lastName,
    phone,
    nationalId,
    county,
    email,
    passwordHash,
    creditScore: 720,
    creditLimit: 45000,
    availableLimit: 45000,
    createdAt: new Date().toISOString(),
  }

  db.users.push(user)
  await writeDB(db)

  const token = createToken(user)
  return res.json({ user: sanitizeUser(user), token })
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' })
  }

  const db = await getDB()
  const user = db.users.find((item) => item.email === email)
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials.' })
  }

  const isMatch = await bcrypt.compare(password, user.passwordHash)
  if (!isMatch) {
    return res.status(401).json({ error: 'Invalid credentials.' })
  }

  const token = createToken(user)
  return res.json({ user: sanitizeUser(user), token })
})

router.post('/otp', async (req, res) => {
  const { phone } = req.body
  if (!phone) {
    return res.status(400).json({ error: 'Phone number is required.' })
  }

  const db = await getDB()
  const user = db.users.find((item) => item.phone === phone)
  if (!user) {
    return res.status(404).json({ error: 'Phone number not found. Please register first.' })
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString()
  db.otps = db.otps.filter((record) => record.phone !== phone)
  db.otps.push({ phone, code: otp, expiresAt: Date.now() + OTP_EXPIRE_MS })
  await writeDB(db)

  console.log(`DEBUG: OTP for ${phone} is ${otp}`)
  return res.json({ message: 'OTP has been generated and sent to your phone. Use it to verify login.', otp })
})

router.post('/verify-otp', async (req, res) => {
  const { phone, otp } = req.body

  if (!phone || !otp) {
    return res.status(400).json({ error: 'Phone number and OTP code are required.' })
  }

  const db = await getDB()
  const record = db.otps.find((item) => item.phone === phone && item.code === otp)
  if (!record || record.expiresAt < Date.now()) {
    return res.status(400).json({ error: 'Invalid or expired OTP.' })
  }

  const user = db.users.find((item) => item.phone === phone)
  if (!user) {
    return res.status(404).json({ error: 'User not found.' })
  }

  db.otps = db.otps.filter((item) => item.phone !== phone)
  await writeDB(db)

  const token = createToken(user)
  return res.json({ user: sanitizeUser(user), token })
})

router.get('/me', async (req, res) => {
  const authHeader = req.headers.authorization
  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized.' })
  }

  const token = authHeader.split(' ')[1]

  try {
    const payload = jwt.verify(token, JWT_SECRET)
    const db = await getDB()
    const user = db.users.find((item) => item.id === payload.id)

    if (!user) {
      return res.status(401).json({ error: 'User not found.' })
    }

    return res.json({ user: sanitizeUser(user) })
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token.' })
  }
})

export default router
