import { Link } from 'react-router-dom'

const cols = [
  {
    title: 'Products',
    links: [
      { label: 'Saidika Instant',  to: '/products' },
      { label: 'Saidika Personal', to: '/products' },
      { label: 'Saidika Business', to: '/products' },
      { label: 'Loan Calculator',  to: '/calculator' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us',     to: '/about' },
      { label: 'How It Works', to: '/how-it-works' },
      { label: 'Financial Tips', to: '/blog' },
      { label: 'Contact Us',   to: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms & Conditions', to: '/terms' },
      { label: 'Privacy Policy',     to: '/privacy' },
      { label: 'FAQs',               to: '/faqs' },
      { label: 'CRB Opt-Out',        to: '/contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 no-underline mb-4">
              <div
                className="w-9 h-9 rounded-[10px] flex items-center justify-center text-white font-extrabold text-sm"
                style={{ background: 'linear-gradient(135deg,#00C896,#1A6BF5)' }}
              >
                SL
              </div>
              <span className="font-extrabold text-[17px] text-white tracking-tight">
                Saidika <span style={{ color: '#00C896' }}>Loans</span>
              </span>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Fast, fair, and transparent mobile loans for every Kenyan. Licensed by the Central Bank of Kenya.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {['🏛 CBK Licensed', '🛡 CRB Compliant', '🔒 Data Protected'].map((tag) => (
                <span key={tag} className="text-xs text-white/30 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-white/50 hover:text-brand-green no-underline transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © 2025 Saidika Financial Services Limited. All rights reserved.
            CBK License No. DCL/2022/0047
          </p>
          <div className="flex gap-2">
            {['𝕏', 'f', 'in', '▶'].map((icon) => (
              <a
                key={icon}
                href="#"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-sm text-white/50 bg-white/5 hover:bg-brand-green hover:text-white transition-all no-underline"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
