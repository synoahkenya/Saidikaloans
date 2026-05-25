import { NavLink, useNavigate } from 'react-router-dom'
import { LayoutDashboard, CreditCard, RefreshCw, TrendingUp, Bell, Settings, LogOut } from 'lucide-react'
import { useAuthStore } from '../../store/authStore'

const links = [
  { label: 'Overview',      to: '/dashboard',      icon: LayoutDashboard },
  { label: 'My Loans',      to: '/dashboard/loans', icon: CreditCard },
  { label: 'Repayments',    to: '/dashboard/repay', icon: RefreshCw },
  { label: 'Credit Score',  to: '/dashboard/score', icon: TrendingUp },
  { label: 'Notifications', to: '/dashboard/notif', icon: Bell },
  { label: 'Settings',      to: '/dashboard/settings', icon: Settings },
]

export default function DashboardSidebar({ user }) {
  const navigate = useNavigate()
  const { logout } = useAuthStore()
  const displayUser = user || {
    firstName: 'Jane',
    lastName: 'Kamau',
    nationalId: 'KE-2024-00847',
    creditScore: 752,
  }
  const initials = `${displayUser.firstName?.[0] || 'J'}${displayUser.lastName?.[0] || 'K'}`

  return (
    <aside className="bg-white dark:bg-navy-light border border-gray-100 dark:border-navy-card rounded-3xl p-6 h-fit sticky top-24">
      {/* User */}
      <div className="text-center pb-5 border-b border-gray-100 dark:border-navy-card mb-5">
        <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center text-2xl font-extrabold text-white mx-auto mb-3">
          {initials}
        </div>
        <div className="font-bold text-gray-900 dark:text-white">{displayUser.firstName} {displayUser.lastName}</div>
        <div className="text-xs text-gray-500 mt-0.5">ID: {displayUser.nationalId}</div>
        <div className="inline-block mt-2 text-xs font-bold px-3 py-1 rounded-full bg-brand-green-light dark:bg-green-900/20 text-brand-green-dark dark:text-brand-green">
          Credit Score: {displayUser.creditScore}
        </div>
      </div>

      {/* Nav */}
      <nav className="space-y-1">
        {links.map(({ label, to, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/dashboard'}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium no-underline transition-all ${
                isActive
                  ? 'bg-brand-green-light dark:bg-green-900/20 text-brand-green-dark dark:text-brand-green font-bold'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-navy-card'
              }`
            }
          >
            <Icon size={16} />
            {label}
          </NavLink>
        ))}
        <button
          onClick={() => {
            logout()
            navigate('/')
          }}
          className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-all mt-4"
        >
          <LogOut size={16} />
          Sign Out
        </button>
      </nav>
    </aside>
  )
}
