import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function CookieBanner() {
  const [visible, setVisible] = useState(() => !localStorage.getItem('saidika-cookies'))

  const accept = () => { localStorage.setItem('saidika-cookies', 'accepted'); setVisible(false) }
  const decline = () => { localStorage.setItem('saidika-cookies', 'declined'); setVisible(false) }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-2xl"
        >
          <div className="bg-navy text-white rounded-2xl px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-card-lg border border-white/10">
            <p className="text-sm text-white/75 flex-1">
              🍪 We use cookies to improve your experience and for analytics. By continuing, you agree to our{' '}
              <Link to="/privacy" className="text-brand-green underline">Privacy Policy</Link>.
            </p>
            <div className="flex gap-2 flex-shrink-0">
              <button onClick={decline} className="text-xs text-white/60 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors">
                Decline
              </button>
              <button onClick={accept} className="text-xs font-bold bg-brand-green text-white px-4 py-2 rounded-lg hover:bg-brand-green-dark transition-colors">
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
