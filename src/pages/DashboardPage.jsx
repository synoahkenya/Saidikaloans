import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import API from '../services/api'
import { useAuthStore } from '../store/authStore'
import DashboardSidebar from '../components/dashboard/DashboardSidebar'
import DashboardStats from '../components/dashboard/DashboardStats'
import TransactionList from '../components/dashboard/TransactionList'

export default function DashboardPage() {
  const { user, token, logout } = useAuthStore()
  const navigate = useNavigate()
  const [dashboard, setDashboard] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!token) {
      setLoading(false)
      return
    }

    const loadDashboard = async () => {
      setLoading(true)
      try {
        const response = await API.get('/loans/dashboard', {
          headers: { Authorization: `Bearer ${token}` },
        })
        setDashboard(response.data)
      } catch (error) {
        if (error.response?.status === 401) {
          logout()
          navigate('/login')
        } else {
          toast.error('Unable to load dashboard data')
        }
      } finally {
        setLoading(false)
      }
    }

    loadDashboard()
  }, [token, logout, navigate])

  if (!token) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-navy-light pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Please sign in to view your dashboard</h1>
          <p className="text-gray-500 dark:text-gray-400 mb-8">Your personal loan summary, repayment history, and credit score are available once you log in.</p>
          <div className="flex justify-center gap-4">
            <Link to="/login" className="btn-primary">Sign In</Link>
            <Link to="/register" className="btn-ghost">Create Account</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-navy-light pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white -tracking-[1px]">My Dashboard</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              Welcome back, {dashboard?.user?.firstName || user?.firstName || 'Borrower'} 👋
            </p>
          </div>
          <Link to="/products" className="btn-primary">+ Apply for Loan</Link>
        </div>

        {loading ? (
          <div className="rounded-3xl bg-white dark:bg-navy-light border border-gray-100 dark:border-navy-card p-10 text-center text-gray-500 dark:text-gray-400">
            Loading your dashboard...
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
            <DashboardSidebar user={dashboard?.user || user} />
            <div className="space-y-5">
              <DashboardStats
                activeLoan={dashboard?.activeLoan}
                availableLimit={dashboard?.creditSummary?.availableLimit}
              />
              <TransactionList transactions={dashboard?.transactions} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
