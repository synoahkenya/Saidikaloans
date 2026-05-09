import DashboardSidebar from '../components/dashboard/DashboardSidebar'
import DashboardStats from '../components/dashboard/DashboardStats'
import TransactionList from '../components/dashboard/TransactionList'
import { Link } from 'react-router-dom'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-navy-light pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white -tracking-[1px]">My Dashboard</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">Welcome back, Jane 👋</p>
          </div>
          <Link to="/products" className="btn-primary">+ Apply for Loan</Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
          <DashboardSidebar />
          <div className="space-y-5">
            <DashboardStats />
            <TransactionList />
          </div>
        </div>
      </div>
    </div>
  )
}
