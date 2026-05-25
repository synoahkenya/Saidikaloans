import jwt from 'jsonwebtoken'
import { getDB } from '../data/db.js'

const JWT_SECRET = process.env.JWT_SECRET || 'saidika_dev_secret'

export async function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization
  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const token = authHeader.split(' ')[1]

  try {
    const payload = jwt.verify(token, JWT_SECRET)
    const db = await getDB()
    const user = db.users.find((item) => item.id === payload.id)

    if (!user) {
      return res.status(401).json({ error: 'User not found' })
    }

    req.user = user
    next()
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' })
  }
}
