import { useLoanStore } from '../../store/loanStore'
import { formatKES, pct } from '../../utils/formatters'
import { ArrowUpRight, Calendar, AlertCircle } from 'lucide-react'

export default function DashboardStats() {
  const { activeLoan } = useLoanStore()
  const repaidPct = pct(activeLoan.repaid, activeLoan.principal)

  return (
    <div className="space-y-5">
      {/* Main balance */}
      <div className="bg-white dark:bg-navy-light border border-gray-100 dark:border-navy-card rounded-3xl p-6">
        <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Current Loan Balance</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          <div>
            <div className="text-4xl font-extrabold -tracking-[2px] text-gray-900 dark:text-white">
              <span className="text-xl text-gray-400">KES </span>{activeLoan.balance.toLocaleString()}
            </div>
            <div className="text-sm text-gray-500 mt-1">Outstanding · {activeLoan.type}</div>
            <div className="progress-bar mt-4">
              <div className="progress-fill" style={{ width: `${repaidPct}%` }} />
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-1.5">
              <span>Repaid: {formatKES(activeLoan.repaid)}</span>
              <span>Total: {formatKES(activeLoan.principal)}</span>
            </div>
          </div>
          <div className="text-center sm:text-right">
            <div className="text-6xl font-extrabold text-brand-green">{repaidPct}%</div>
            <div className="text-sm text-gray-500">Repaid</div>
            <div className="inline-block mt-2 text-xs font-bold px-3 py-1 rounded-full bg-brand-green-light dark:bg-green-900/20 text-brand-green-dark dark:text-brand-green">
              On Track ✓
            </div>
          </div>
        </div>
      </div>

      {/* Quick stats row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: 'Next Due Date',   value: 'Mar 15',              color: '', icon: Calendar },
          { label: 'Next Payment',    value: formatKES(activeLoan.nextPayment), color: 'text-red-500', icon: AlertCircle },
          { label: 'Available Limit', value: 'KES 45,000',          color: 'text-brand-green', icon: ArrowUpRight },
        ].map(({ label, value, color, icon: Icon }) => (
          <div key={label} className="bg-gray-50 dark:bg-navy-card rounded-2xl p-4 text-center">
            <Icon size={16} className="mx-auto mb-2 text-gray-400" />
            <div className={`text-xl font-extrabold ${color || 'text-gray-900 dark:text-white'}`}>{value}</div>
            <div className="text-xs text-gray-500 mt-1">{label}</div>
          </div>
        ))}
      </div>

      {/* Credit limit card */}
      <div className="rounded-3xl p-6" style={{ background: 'linear-gradient(135deg,#0A1628,#162040)' }}>
        <div className="text-xs text-white/50 uppercase tracking-widest mb-2">Credit Limit</div>
        <div className="text-4xl font-extrabold text-brand-green -tracking-[1px]">KES 45,000</div>
        <div className="text-xs text-white/40 mt-1">Maximum limit: KES 500,000</div>
        <div className="mt-4 h-2 rounded-full bg-white/10">
          <div className="h-2 rounded-full gradient-bg" style={{ width: '9%' }} />
        </div>
        <div className="flex justify-between text-xs text-white/40 mt-1.5">
          <span>KES 45,000 used</span>
          <span>Keep repaying to grow your limit →</span>
        </div>
      </div>
    </div>
  )
}
