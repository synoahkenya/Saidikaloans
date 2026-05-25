import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import API from '../services/api'
import { useAuthStore } from '../store/authStore'

export default function LoginPage() {
  const [tab, setTab] = useState('email')
  const [otpSent, setOtpSent] = useState(false)
  const navigate = useNavigate()
  const login = useAuthStore((state) => state.login)

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    phone: '',
    otp: '',
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      if (tab === 'email') {
        if (!formData.email || !formData.password) {
          toast.error('Please fill in all fields')
          return
        }

        const response = await API.post('/auth/login', {
          email: formData.email,
          password: formData.password,
        })

        login(response.data.user, response.data.token)
        toast.success('Login successful 🎉')
        navigate('/dashboard')
      } else {
        if (!formData.phone) {
          toast.error('Please enter your phone number')
          return
        }

        if (!otpSent) {
          const response = await API.post('/auth/otp', {
            phone: formData.phone,
          })

          setOtpSent(true)
          toast.success(response.data.message)
        } else {
          if (!formData.otp) {
            toast.error('Please enter the OTP code')
            return
          }

          const response = await API.post('/auth/verify-otp', {
            phone: formData.phone,
            otp: formData.otp,
          })

          login(response.data.user, response.data.token)
          toast.success('Login successful 🎉')
          navigate('/dashboard')
        }
      }
    } catch (error) {
      toast.error(error.response?.data?.error || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-navy-light flex items-center justify-center px-4 pt-20 pb-12">
      <div className="bg-white dark:bg-navy-light border border-gray-100 dark:border-navy-card rounded-3xl p-8 sm:p-10 w-full max-w-md shadow-card-lg">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-2xl gradient-bg flex items-center justify-center text-xl font-extrabold text-white mx-auto mb-4">
            SL
          </div>

          <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white">
            Welcome Back
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Sign in to your Saidika Loans account
          </p>
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-2 bg-gray-100 dark:bg-navy-card rounded-xl p-1 mb-6">
          {[
            ['mpesa', '📱 M-PESA'],
            ['email', '✉️ Email'],
          ].map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => setTab(key)}
              className={`py-2.5 rounded-lg text-sm font-semibold transition-all ${
                tab === key
                  ? 'bg-white dark:bg-navy-light shadow text-brand-green'
                  : 'text-gray-500'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          {tab === 'mpesa' ? (
            <div className="space-y-4">
              <div>
                <label className="text-sm font-semibold text-gray-600 dark:text-gray-400 block mb-1.5">
                  M-PESA Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="0712 345 678"
                  className="input-field"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              {otpSent && (
                <div>
                  <label className="text-sm font-semibold text-gray-600 dark:text-gray-400 block mb-1.5">
                    OTP Code
                  </label>
                  <input
                    type="text"
                    name="otp"
                    placeholder="123456"
                    className="input-field"
                    value={formData.otp}
                    onChange={handleChange}
                  />
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl font-bold text-white text-sm transition-all hover:-translate-y-0.5 mt-4"
                style={{ background: '#00B236' }}
              >
                {loading
                  ? otpSent
                    ? 'Verifying OTP...'
                    : 'Sending OTP...'
                  : otpSent
                  ? 'Verify OTP'
                  : '📱 Send M-PESA OTP'}
              </button>

              {otpSent && (
                <p className="text-xs text-gray-500 mt-2">
                  Enter the 6-digit OTP sent to your phone. In dev mode, the code is logged to the backend console.
                </p>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="text-sm font-semibold text-gray-600 dark:text-gray-400 block mb-1.5">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="jane@example.com"
                  className="input-field"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-600 dark:text-gray-400 block mb-1.5">
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className="input-field"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full py-3.5 text-sm rounded-xl"
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </button>
            </div>
          )}
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-5">
          Don't have an account?{' '}
          <Link
            to="/register"
            className="text-brand-green font-bold no-underline"
          >
            Apply Now
          </Link>
        </p>
      </div>
    </div>
  )
}