import { useState } from 'react'
import toast from 'react-hot-toast'
import SectionTag from '../components/ui/SectionTag'
import API from '../services/api'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    topic: 'Loan Application',
    message: '',
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      await API.post('/contact', formData)
      toast.success('Message sent! We\'ll reply within 4 hours.')
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        topic: 'Loan Application',
        message: '',
      })
    } catch (error) {
      toast.error(error.response?.data?.error || 'Unable to send your message')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="pt-24 pb-20 bg-white dark:bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <SectionTag>Get In Touch</SectionTag>
          <h1 className="text-4xl sm:text-5xl font-extrabold -tracking-[1.5px] mt-2 text-gray-900 dark:text-white">
            We're Here to <span className="gradient-text">Help You</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <div className="space-y-5">
            {[
              { icon:'📞', title:'Customer Care', sub:'0800 723 384 (Toll Free)\nMon – Sat, 7am – 9pm' },
              { icon:'💬', title:'WhatsApp Support', sub:'+254 712 384 384\n24/7 automated + live agents' },
              { icon:'✉️', title:'Email Support', sub:'support@saidikaloans.co.ke\nResponse within 4 hours' },
              { icon:'📍', title:'Head Office', sub:'Westlands Square, 4th Floor\nNairobi, Kenya' },
            ].map((c) => (
              <div key={c.title} className="flex items-start gap-4">
                <div className="w-11 h-11 bg-brand-green-light dark:bg-green-900/20 rounded-2xl flex items-center justify-center text-xl flex-shrink-0">{c.icon}</div>
                <div>
                  <div className="font-bold text-gray-900 dark:text-white mb-0.5">{c.title}</div>
                  <div className="text-sm text-gray-500 whitespace-pre-line">{c.sub}</div>
                </div>
              </div>
            ))}
            <div className="bg-brand-green-light dark:bg-green-900/20 border border-brand-green/20 rounded-2xl p-5 mt-2">
              <div className="font-bold text-brand-green-dark dark:text-brand-green mb-1">⚡ Quick Help via USSD</div>
              <div className="text-4xl font-extrabold text-brand-green">*384#</div>
              <div className="text-sm text-gray-500 mt-1">Check balance, repay, apply — from any phone</div>
            </div>
          </div>
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 dark:bg-navy-light border border-gray-100 dark:border-navy-card rounded-3xl p-7">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold text-gray-600 dark:text-gray-400 block mb-1.5">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Jane"
                  className="input-field"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-600 dark:text-gray-400 block mb-1.5">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Kamau"
                  className="input-field"
                  required
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-600 dark:text-gray-400 block mb-1.5">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="0712 345 678"
                className="input-field"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-600 dark:text-gray-400 block mb-1.5">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="jane@example.com"
                className="input-field"
                required
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-600 dark:text-gray-400 block mb-1.5">Topic</label>
              <select
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                className="input-field"
              >
                {['Loan Application','Repayment Issue','Account Problem','Credit Score Query','General Enquiry'].map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-600 dark:text-gray-400 block mb-1.5">Message</label>
              <textarea
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us how we can help..."
                className="input-field resize-none"
                required
              />
            </div>
            <button type="submit" disabled={loading} className="btn-primary w-full py-4 text-base rounded-2xl">
              {loading ? 'Sending Message...' : 'Send Message →'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
