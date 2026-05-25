import { Router } from 'express'
import { v4 as uuidv4 } from 'uuid'
import { authMiddleware } from '../middleware/auth.js'
import { getDB, writeDB } from '../data/db.js'

const router = Router()

router.get('/dashboard', authMiddleware, async (req, res) => {
  const db = await getDB()
  const activeLoan = db.loans.find((loan) => loan.userId === req.user.id && loan.status === 'active') || null
  const transactions = db.transactions
    .filter((txn) => txn.userId === req.user.id)
    .sort((a, b) => new Date(b.date) - new Date(a.date))

  return res.json({
    user: req.user,
    activeLoan,
    transactions,
    creditSummary: {
      availableLimit: req.user.availableLimit,
      creditLimit: req.user.creditLimit,
      creditScore: req.user.creditScore,
    },
  })
})

router.post('/apply', authMiddleware, async (req, res) => {
  const { amount, type = 'Personal Loan', termMonths = 3 } = req.body
  const numericAmount = Number(amount)

  if (!numericAmount || numericAmount < 500) {
    return res.status(400).json({ error: 'Loan amount must be at least KES 500.' })
  }

  const db = await getDB()

  const loan = {
    id: uuidv4(),
    userId: req.user.id,
    type,
    principal: numericAmount,
    balance: numericAmount,
    repaid: 0,
    nextPayment: Math.ceil(numericAmount / termMonths),
    nextDueDate: new Date(Date.now() + termMonths * 30 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
    disbursedDate: new Date().toISOString().slice(0, 10),
    status: 'active',
  }

  req.user.availableLimit = Math.max(0, req.user.creditLimit - numericAmount)
  db.loans.push(loan)
  db.transactions.unshift({
    id: uuidv4(),
    userId: req.user.id,
    type: 'credit',
    description: 'Loan disbursement',
    amount: numericAmount,
    date: new Date().toISOString().slice(0, 10),
    time: '09:00 AM',
    ref: `LN-${Date.now().toString().slice(-6)}`,
  })

  await writeDB(db)
  return res.json({ loan })
})

export default router
