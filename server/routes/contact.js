import { Router } from 'express'
import { v4 as uuidv4 } from 'uuid'
import { getDB, writeDB } from '../data/db.js'

const router = Router()

router.post('/', async (req, res) => {
  const { firstName, lastName, phone, email, topic, message } = req.body

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ error: 'First name, last name, email and message are required.' })
  }

  const db = await getDB()
  db.messages.push({
    id: uuidv4(),
    firstName,
    lastName,
    phone,
    email,
    topic,
    message,
    createdAt: new Date().toISOString(),
  })

  await writeDB(db)
  return res.json({ message: 'Your message has been received. We will reply within 4 hours.' })
})

export default router
