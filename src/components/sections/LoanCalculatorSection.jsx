import { Link } from 'react-router-dom'
import { useLoanStore } from '../../store/loanStore'
import { calculateLoan, formatKES, periodLabel } from '../../utils/formatters'
import SectionTag from '../ui/SectionTag'

export default function LoanCalculatorSection({ fullPage = false }) {
  const { loanAmount, loanPeriod, interestRate, setLoanAmount, setLoanPeriod, setInterestRate } = useLoanStore()
  const { interest, fee, total } = calculateLoan(loanAmount, loanPeriod, interestRate)

  return (
    <section className={`${fullPage ? 'pt-28 pb-20' : 'py-20'} bg-gray-50 dark:bg-navy-light`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-4">
          <SectionTag>Loan Calculator</SectionTag>
          <h2 className="text-4xl sm:text-5xl font-extrabold -tracking-[1.5px] mt-2 text-gray-900 dark:text-white">
            Calculate Your <span className="gradient-text">Repayments</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3">Fully transparent — no hidden surprises.</p>
        </div>

        <div className="max-w-2xl mx-auto mt-10 bg-white dark:bg-navy-light border border-gray-100 dark:border-navy-card rounded-[28px] p-8 shadow-card-lg">
          {/* Amount */}
          <div className="mb-7">
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-gray-700 dark:text-gray-300">Loan Amount</span>
              <span className="text-lg font-extrabold text-brand-green">{formatKES(loanAmount)}</span>
            </div>
            <input type="range" min={500} max={500000} step={500} value={loanAmount} onChange={(e) => setLoanAmount(+e.target.value)} />
            <div className="flex justify-between text-xs text-gray-400 mt-1"><span>KES 500</span><span>KES 500,000</span></div>
          </div>

          {/* Period */}
          <div className="mb-7">
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-gray-700 dark:text-gray-300">Repayment Period</span>
              <span className="text-lg font-extrabold text-brand-green">{periodLabel(loanPeriod)}</span>
            </div>
            <input type="range" min={7} max={365} step={1} value={loanPeriod} onChange={(e) => setLoanPeriod(+e.target.value)} />
            <div className="flex justify-between text-xs text-gray-400 mt-1"><span>7 days</span><span>12 months</span></div>
          </div>

          {/* Rate */}
          <div className="mb-7">
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-gray-700 dark:text-gray-300">Interest Rate</span>
              <span className="text-lg font-extrabold text-brand-green">{interestRate}% p.a.</span>
            </div>
            <input type="range" min={12} max={24} step={0.5} value={interestRate} onChange={(e) => setInterestRate(+e.target.value)} />
            <div className="flex justify-between text-xs text-gray-400 mt-1"><span>12% p.a.</span><span>24% p.a.</span></div>
          </div>

          {/* Result */}
          <div className="rounded-2xl p-6 grid grid-cols-3 gap-4 text-center mb-5" style={{ background: 'linear-gradient(135deg,#0A1628,#162040)' }}>
            {[
              { label: 'Total Interest',  value: formatKES(interest), green: false },
              { label: 'Processing Fee',  value: formatKES(fee),      green: false },
              { label: 'Total Repayment', value: formatKES(total),    green: true  },
            ].map((r) => (
              <div key={r.label}>
                <div className="text-[11px] text-white/50 uppercase tracking-wide mb-1">{r.label}</div>
                <div className={`text-lg sm:text-xl font-extrabold ${r.green ? 'text-brand-green' : 'text-white'}`}>{r.value}</div>
              </div>
            ))}
          </div>

          <Link to="/register" className="btn-primary w-full py-4 text-base rounded-2xl text-center block">
            Apply for This Loan →
          </Link>
        </div>
      </div>
    </section>
  )
}
