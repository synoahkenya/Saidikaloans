import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useThemeStore } from './store/themeStore'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import CookieBanner from './components/ui/CookieBanner'
import FloatingCTA from './components/ui/FloatingCTA'

// Pages
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProductsPage from './pages/ProductsPage'
import HowItWorksPage from './pages/HowItWorksPage'
import CalculatorPage from './pages/CalculatorPage'
import FAQsPage from './pages/FAQsPage'
import ContactPage from './pages/ContactPage'
import DashboardPage from './pages/DashboardPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import BlogPage from './pages/BlogPage'
import TermsPage from './pages/TermsPage'
import PrivacyPage from './pages/PrivacyPage'

// Pages that don't show the default footer/navbar
const DASHBOARD_ROUTES = ['/dashboard']
const AUTH_ROUTES = ['/login', '/register']

export default function App() {
  const { isDark } = useThemeStore()

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  return (
    <div className="min-h-screen bg-white dark:bg-navy transition-colors duration-300">
      <Navbar />
      <main>
        <Routes>
          <Route path="/"            element={<HomePage />} />
          <Route path="/about"       element={<AboutPage />} />
          <Route path="/products"    element={<ProductsPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/calculator"  element={<CalculatorPage />} />
          <Route path="/faqs"        element={<FAQsPage />} />
          <Route path="/contact"     element={<ContactPage />} />
          <Route path="/dashboard"   element={<DashboardPage />} />
          <Route path="/login"       element={<LoginPage />} />
          <Route path="/register"    element={<RegisterPage />} />
          <Route path="/blog"        element={<BlogPage />} />
          <Route path="/terms"       element={<TermsPage />} />
          <Route path="/privacy"     element={<PrivacyPage />} />
        </Routes>
      </main>
      <Footer />
      <CookieBanner />
      <FloatingCTA />
    </div>
  )
}
