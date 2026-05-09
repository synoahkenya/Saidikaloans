import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'

export default function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`border rounded-xl overflow-hidden transition-colors ${
      open
        ? 'border-brand-green/40 dark:border-brand-green/30'
        : 'border-gray-100 dark:border-navy-card'
    }`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-5 py-4 text-left flex justify-between items-center gap-4 bg-white dark:bg-navy-light hover:bg-gray-50 dark:hover:bg-navy-card transition-colors"
      >
        <span className={`font-semibold text-sm sm:text-base ${open ? 'text-brand-green' : 'text-gray-900 dark:text-white'}`}>
          {q}
        </span>
        <motion.div animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.2 }}>
          <Plus size={20} className={open ? 'text-brand-green' : 'text-gray-400'} />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="px-5 pb-5 text-sm text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-navy-card pt-4">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
