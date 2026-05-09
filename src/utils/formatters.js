// Currency formatter
export const formatKES = (amount) => {
  return `KES ${Number(amount).toLocaleString('en-KE')}`
}

// Short currency
export const formatKESShort = (amount) => {
  if (amount >= 1000000) return `KES ${(amount / 1000000).toFixed(1)}M`
  if (amount >= 1000) return `KES ${(amount / 1000).toFixed(0)}K`
  return `KES ${amount}`
}

// Date formatter
export const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString('en-KE', {
    day: 'numeric', month: 'short', year: 'numeric',
  })
}

// Loan calculator
export const calculateLoan = (amount, days, ratePercent) => {
  const interest = Math.round(amount * (ratePercent / 100) * (days / 365))
  const fee = Math.max(50, Math.round(amount * 0.01))
  const total = amount + interest + fee
  const daily = Math.round(total / days)
  return { interest, fee, total, daily }
}

// Period label
export const periodLabel = (days) => {
  if (days < 30) return `${days} days`
  if (days < 60) return '1 month'
  return `${Math.round(days / 30)} months`
}

// Percentage
export const pct = (part, whole) => Math.min(100, Math.round((part / whole) * 100))
