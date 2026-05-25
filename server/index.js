import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import authRoutes from './routes/auth.js'
import loanRoutes from './routes/loan.js'
import mpesaRoutes from './routes/mpesa.js'
import contactRoutes from './routes/contact.js'
import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()
const PORT = process.env.PORT || 5000
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || true
const CLIENT_BUILD_PATH = path.join(__dirname, '..', 'dist')

app.use(cors({ origin: CLIENT_ORIGIN, credentials: true }))
app.use(express.json())
app.use(morgan('dev'))

app.use('/api/auth', authRoutes)
app.use('/api/loans', loanRoutes)
app.use('/api/mpesa', mpesaRoutes)
app.use('/api/contact', contactRoutes)

if (fs.existsSync(CLIENT_BUILD_PATH)) {
  app.use(express.static(CLIENT_BUILD_PATH))
  app.get('*', (req, res) => {
    res.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html'))
  })
} else {
  app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' })
  })
}

app.use((error, req, res, next) => {
  console.error(error)
  res.status(500).json({ error: 'Server error' })
})

app.listen(PORT, () => {
  console.log(`Backend API running on http://localhost:${PORT}`)
})
