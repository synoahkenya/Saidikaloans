import { create } from 'zustand'

export const useLoanStore = create((set) => ({
  loanAmount: 20000,
  loanPeriod: 30,
  interestRate: 12,
  setLoanAmount: (v) => set({ loanAmount: v }),
  setLoanPeriod: (v) => set({ loanPeriod: v }),
  setInterestRate: (v) => set({ interestRate: v }),

  activeLoan: {
    id: 'LN-2025-00847',
    type: 'Personal Loan',
    principal: 100000,
    balance: 38500,
    repaid: 61500,
    nextPayment: 5200,
    nextDueDate: '2025-03-15',
    disbursedDate: '2024-12-15',
    status: 'active',
  },

  transactions: [
    { id: 1, type: 'credit', description: 'Loan Disbursement',    amount: 20000, date: '2025-02-14', time: '09:14 AM', ref: 'QHJ7KL234' },
    { id: 2, type: 'debit',  description: 'Repayment via M-PESA', amount: 5200,  date: '2025-02-07', time: '02:30 PM', ref: 'QHJ6AB123' },
    { id: 3, type: 'credit', description: 'Loan Disbursement',    amount: 30000, date: '2025-01-15', time: '10:22 AM', ref: 'QHF4CD890' },
    { id: 4, type: 'debit',  description: 'Repayment via M-PESA', amount: 5200,  date: '2025-01-08', time: '11:00 AM', ref: 'QHF3EF678' },
    { id: 5, type: 'debit',  description: 'Processing Fee',        amount: 200,   date: '2024-12-15', time: '10:23 AM', ref: 'QHD2GH456' },
  ],
}))
