import { useLoanStore } from '../../store/loanStore'
import { formatKES } from '../../utils/formatters'

export default function TransactionList() {
  const { transactions } = useLoanStore()
  return (
    <div className="bg-white dark:bg-navy-light border border-gray-100 dark:border-navy-card rounded-3xl p-6">
      <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">Recent Transactions</div>
      <div className="space-y-1">
        {transactions.map((txn) => (
          <div key={txn.id} className="flex items-center gap-3.5 py-3 border-b border-gray-50 dark:border-navy-card last:border-none">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-base flex-shrink-0 ${
              txn.type === 'credit' ? 'bg-brand-green-light dark:bg-green-900/20' : 'bg-brand-blue-light dark:bg-blue-900/20'
            }`}>
              {txn.type === 'credit' ? '📥' : '💳'}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-sm text-gray-900 dark:text-white truncate">{txn.description}</div>
              <div className="text-xs text-gray-500">{txn.date} · {txn.time} · Ref: {txn.ref}</div>
            </div>
            <div className={`font-bold text-sm flex-shrink-0 ${txn.type === 'credit' ? 'text-brand-green' : 'text-red-500'}`}>
              {txn.type === 'credit' ? '+' : '-'}{formatKES(txn.amount)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
