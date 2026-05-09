import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

export default function RegisterPage() {
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    toast.success('Account created! Welcome to Saidika Loans 🎉')
    navigate('/dashboard')
  }
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-navy-light flex items-center justify-center px-4 pt-20 pb-12">
      <div className="bg-white dark:bg-navy-light border border-gray-100 dark:border-navy-card rounded-3xl p-8 sm:p-10 w-full max-w-lg shadow-card-lg">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-2xl gradient-bg flex items-center justify-center text-xl font-extrabold text-white mx-auto mb-4">SL</div>
          <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white">Create Account</h1>
          <p className="text-sm text-gray-500 mt-1">Start your Saidika Loans journey today</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-semibold text-gray-600 dark:text-gray-400 block mb-1.5">First Name</label>
              <input type="text" placeholder="Jane" className="input-field" required />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-600 dark:text-gray-400 block mb-1.5">Last Name</label>
              <input type="text" placeholder="Kamau" className="input-field" required />
            </div>
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-600 dark:text-gray-400 block mb-1.5">M-PESA Phone Number</label>
            <input type="tel" placeholder="0712 345 678" className="input-field" required />
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-600 dark:text-gray-400 block mb-1.5">National ID Number</label>
            <input type="text" placeholder="12345678" className="input-field" required />
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-600 dark:text-gray-400 block mb-1.5">Email (optional)</label>
            <input type="email" placeholder="jane@example.com" className="input-field" />
          </div>
          <div className="bg-gray-50 dark:bg-navy-card rounded-xl p-4 text-xs text-gray-500 leading-relaxed">
            🔒 By creating an account you agree to our{' '}
            <Link to="/terms" className="text-brand-green font-semibold no-underline">Terms & Conditions</Link>{' '}and{' '}
            <Link to="/privacy" className="text-brand-green font-semibold no-underline">Privacy Policy</Link>.
          </div>
          <button type="submit" className="btn-primary w-full py-4 text-base rounded-2xl">
            Create My Account →
          </button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-5">
          Already have an account?{' '}
          <Link to="/login" className="text-brand-green font-bold no-underline">Sign In</Link>
        </p>
      </div>
    </div>
  )
}
