import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

export default function LoginPage() {
  const [tab, setTab] = useState('mpesa')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    toast.success('Logged in successfully! Welcome back.')
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-navy-light flex items-center justify-center px-4 pt-20 pb-12">
      <div className="bg-white dark:bg-navy-light border border-gray-100 dark:border-navy-card rounded-3xl p-8 sm:p-10 w-full max-w-md shadow-card-lg">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-2xl gradient-bg flex items-center justify-center text-xl font-extrabold text-white mx-auto mb-4">SL</div>
          <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white">Welcome Back</h1>
          <p className="text-sm text-gray-500 mt-1">Sign in to your Saidika Loans account</p>
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-2 bg-gray-100 dark:bg-navy-card rounded-xl p-1 mb-6">
          {[['mpesa','📱 M-PESA'],['email','✉️ Email']].map(([key,label]) => (
            <button key={key} onClick={() => setTab(key)}
              className={`py-2.5 rounded-lg text-sm font-semibold transition-all ${tab===key ? 'bg-white dark:bg-navy-light shadow text-brand-green' : 'text-gray-500'}`}>
              {label}
            </button>
          ))}
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          {tab === 'mpesa' ? (
            <>
              <div>
                <label className="text-sm font-semibold text-gray-600 dark:text-gray-400 block mb-1.5">M-PESA Phone Number</label>
                <input type="tel" placeholder="0712 345 678" className="input-field" required />
              </div>
              <button type="submit" className="w-full py-3.5 rounded-xl font-bold text-white text-sm transition-all hover:-translate-y-0.5" style={{ background: '#00B236' }}>
                📱 Send M-PESA OTP
              </button>
            </>
          ) : (
            <>
              <div>
                <label className="text-sm font-semibold text-gray-600 dark:text-gray-400 block mb-1.5">Email Address</label>
                <input type="email" placeholder="jane@example.com" className="input-field" required />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-600 dark:text-gray-400 block mb-1.5">Password</label>
                <input type="password" placeholder="••••••••" className="input-field" required />
              </div>
              <button type="submit" className="btn-primary w-full py-3.5 text-sm rounded-xl">Sign In</button>
            </>
          )}
        </form>
        <p className="text-center text-sm text-gray-500 mt-5">
          Don't have an account?{' '}
          <Link to="/register" className="text-brand-green font-bold no-underline">Apply Now</Link>
        </p>
      </div>
    </div>
  )
}
