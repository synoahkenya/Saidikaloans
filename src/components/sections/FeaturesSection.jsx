import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'
import SectionTag from '../ui/SectionTag'

const features = [
  { icon: '⚡', color: 'green', title: 'Instant Disbursement',    desc: 'Receive your loan directly to M-PESA within 3 minutes of approval. No waiting — money when you need it most.' },
  { icon: '🔒', color: 'blue',  title: 'No Collateral Needed',     desc: 'Your phone and repayment history are enough. No property, no guarantors, no hidden requirements.' },
  { icon: '📊', color: 'green', title: 'Transparent Interest',     desc: 'Know exactly what you pay from day one. No hidden fees, no surprise charges. Clear repayment schedules always.' },
  { icon: '🚀', color: 'blue',  title: 'Growing Credit Limit',     desc: 'Start small and watch your limit grow as you build trust. Consistent repayments unlock up to KES 500,000.' },
  { icon: '📱', color: 'green', title: '100% Mobile',              desc: 'Apply, repay, and manage your loan entirely from your smartphone. Available on Android and iOS.' },
  { icon: '💎', color: 'blue',  title: 'Flexible Repayment',       desc: 'Choose repayment periods that work for your income cycle — 7 days to 12 months. Partial payments accepted.' },
]

export default function FeaturesSection() {
  const [ref, inView] = useInView()
  return (
    <section ref={ref} className="py-20 bg-white dark:bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <SectionTag>Why Saidika Loans</SectionTag>
          <h2 className="text-4xl sm:text-5xl font-extrabold -tracking-[1.5px] mt-2 text-gray-900 dark:text-white">
            Banking Designed for <span className="gradient-text">Everyday Kenyans</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg mt-3 max-w-xl mx-auto">
            We believe every Kenyan deserves access to fair, transparent, and instant credit.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="group relative bg-white dark:bg-navy-light border border-gray-100 dark:border-navy-card rounded-3xl p-7 hover:-translate-y-1.5 hover:shadow-card-lg transition-all duration-300 overflow-hidden"
            >
              {/* Top gradient line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] gradient-bg scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-t-3xl" />
              <div className={`w-13 h-13 rounded-2xl flex items-center justify-center text-2xl mb-5 ${
                f.color === 'green' ? 'bg-brand-green-light dark:bg-green-900/20' : 'bg-brand-blue-light dark:bg-blue-900/20'
              }`} style={{ width: 52, height: 52 }}>
                {f.icon}
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{f.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
