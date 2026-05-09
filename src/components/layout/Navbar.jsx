import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useThemeStore } from '../../store/themeStore'
import { useScrolled } from '../../hooks/useScrolled'
import { NAV_LINKS } from '../../utils/constants'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { isDark, toggleTheme } = useThemeStore()
  const scrolled = useScrolled()

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass shadow-card' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center h-[68px] gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 no-underline flex-shrink-0">
            <div
              className="w-9 h-9 rounded-[10px] flex items-center justify-center text-white font-extrabold text-sm tracking-tight"
              style={{ background: 'linear-gradient(135deg,#00C896,#1A6BF5)' }}
            >
              SL
            </div>
            <span className="font-extrabold text-[17px] tracking-tight text-gray-900 dark:text-white">
              Saidika <span style={{ color: '#00C896' }}>Loans</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 ml-auto">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-2 ml-4">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-lg flex items-center justify-center bg-gray-100 dark:bg-navy-light text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <Link to="/login" className="btn-ghost text-gray-700 dark:text-gray-300">
              Login
            </Link>
            <Link to="/register" className="btn-primary">
              Apply Now
            </Link>
          </div>

          {/* Mobile: theme + hamburger */}
          <div className="flex md:hidden items-center gap-2 ml-auto">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-lg flex items-center justify-center bg-gray-100 dark:bg-navy-light"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-9 h-9 rounded-lg flex items-center justify-center bg-gray-100 dark:bg-navy-light text-gray-700 dark:text-gray-300"
              aria-label="Open menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[68px] left-0 right-0 z-40 bg-white dark:bg-navy-light border-b border-gray-100 dark:border-navy-card shadow-card-lg md:hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-xl font-medium text-sm no-underline transition-colors ${
                      isActive
                        ? 'text-brand-green bg-brand-green-light'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-navy-card'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="flex gap-2 pt-3 border-t border-gray-100 dark:border-navy-card mt-2">
                <Link
                  to="/login"
                  onClick={() => setMobileOpen(false)}
                  className="btn-ghost flex-1 text-center"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary flex-1 text-center"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
