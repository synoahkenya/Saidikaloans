import { Link } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { LOAN_PRODUCTS } from '../utils/constants'
import SectionTag from '../components/ui/SectionTag'

const colorMap = {
  green:  { header: 'linear-gradient(135deg,#00C896,#00A07A)', btn: 'gradient-bg' },
  blue:   { header: 'linear-gradient(135deg,#1A6BF5,#1252CC)', btn: 'gradient-bg' },
  purple: { header: 'linear-gradient(135deg,#8B5CF6,#6D28D9)', btn: 'gradient-bg' },
}

export default function ProductsPage() {
  const [income, setIncome] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const limits = [5000, 30000, 80000, 150000, 300000]

  return (
    <div className="pt-24 pb-20 bg-white dark:bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <SectionTag>Loan Products</SectionTag>
          <h1 className="text-4xl sm:text-5xl font-extrabold -tracking-[1.5px] mt-2 text-gray-900 dark:text-white">
            Choose Your <span className="gradient-text">Perfect Loan</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg mt-3 max-w-xl mx-auto">
            From emergency cash to business capital — a loan for every need.
          </p>
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {LOAN_PRODUCTS.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-3xl overflow-hidden border border-gray-100 dark:border-navy-card hover:-translate-y-1.5 hover:shadow-card-lg transition-all duration-300"
            >
              <div className="p-6" style={{ background: colorMap[p.color].header }}>
                <div className="text-4xl mb-3">{p.icon}</div>
                <div className="text-xl font-extrabold text-white">{p.name}</div>
                <div className="text-sm text-white/80 mt-1">{p.range}</div>
              </div>
              <div className="bg-white dark:bg-navy-light p-6">
                <ul className="space-y-2.5 mb-5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400 border-b border-gray-50 dark:border-navy-card pb-2.5 last:border-none">
                      <span className="text-brand-green font-bold flex-shrink-0">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/register"
                  onClick={() => toast.success(`${p.name} selected! Let's get started.`)}
                  className="btn-primary w-full text-center block"
                >
                  Apply Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Eligibility checker */}
        <div className="bg-gray-50 dark:bg-navy-light border border-gray-100 dark:border-navy-card rounded-3xl p-8">
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-2">Quick Eligibility Checker</h2>
          <p className="text-gray-500 text-sm mb-6">Answer a few questions to see your estimated limit.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="text-sm font-semibold text-gray-600 dark:text-gray-400 block mb-2">Monthly Income</label>
              <select value={income} onChange={(e) => setIncome(+e.target.value)} className="input-field">
                {['Under 10,000','10,000 – 30,000','30,000 – 60,000','60,000 – 100,000','Over 100,000'].map((o, i) => (
                  <option key={o} value={i}>{o}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-600 dark:text-gray-400 block mb-2">Employment</label>
              <select className="input-field">
                {['Employed (formal)','Self-employed','Casual worker','Farmer','Other'].map((o) => <option key={o}>{o}</option>)}
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-600 dark:text-gray-400 block mb-2">M-PESA Activity</label>
              <select className="input-field">
                {['Very active (daily)','Active (weekly)','Moderate (monthly)','Occasional'].map((o) => <option key={o}>{o}</option>)}
              </select>
            </div>
          </div>
          <button
            onClick={() => setShowResult(true)}
            className="btn-primary px-8 py-3.5"
          >
            Check My Limit →
          </button>
          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 bg-brand-green-light dark:bg-green-900/20 border border-brand-green/30 rounded-2xl p-5"
            >
              <div className="text-xs font-bold uppercase tracking-widest text-brand-green-dark dark:text-brand-green mb-2">✅ Estimated Loan Limit</div>
              <div className="text-4xl font-extrabold text-brand-green">KES {limits[income].toLocaleString()}</div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Based on your profile. Actual limit determined upon verification.{' '}
                <Link to="/register" className="text-brand-green font-bold no-underline">Apply Now →</Link>
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
