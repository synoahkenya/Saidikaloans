import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrolled } from '../../hooks/useScrolled'

const HIDDEN_ON = ['/register', '/login', '/dashboard']

export default function FloatingCTA() {
  const scrolled = useScrolled(400)
  const { pathname } = useLocation()
  const hidden = HIDDEN_ON.includes(pathname)

  return (
    <AnimatePresence>
      {scrolled && !hidden && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <Link
            to="/register"
            className="btn-primary text-sm px-5 py-3 rounded-2xl shadow-green"
          >
            🚀 Apply Now
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
