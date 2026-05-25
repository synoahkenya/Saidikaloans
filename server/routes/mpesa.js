import { Router } from 'express'
import { authMiddleware } from '../middleware/auth.js'

const router = Router()

router.post('/stkpush', authMiddleware, async (req, res) => {
  const { amount, phone } = req.body
  if (!amount || !phone) {
    return res.status(400).json({ error: 'Amount and phone are required.' })
  }

  const checkoutRequestID = `STK${Date.now()}`
  return res.json({
    status: 'pending',
    checkoutRequestID,
    message: 'M-PESA STK Push initiated. Confirm the request on your Safaricom phone.',
  })
})

router.post('/callback', async (req, res) => {
  return res.json({ status: 'callback received', payload: req.body })
})

export default router
