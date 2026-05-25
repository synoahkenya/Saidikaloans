import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const DB_PATH = path.join(__dirname, 'database.json')

async function ensureDb() {
  try {
    await fs.access(DB_PATH)
  } catch {
    const initialState = {
      users: [],
      loans: [],
      transactions: [],
      otps: [],
      messages: [],
    }
    await fs.writeFile(DB_PATH, JSON.stringify(initialState, null, 2), 'utf8')
  }
}

export async function getDB() {
  await ensureDb()
  const raw = await fs.readFile(DB_PATH, 'utf8')
  return JSON.parse(raw)
}

export async function writeDB(data) {
  await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2), 'utf8')
  return data
}
