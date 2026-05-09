import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'

function PhoneMockup() {
  return (
    <div className="relative flex justify-center">
      {/* Floating badges */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute -top-4 -right-4 sm:-right-8 bg-white dark:bg-navy-light rounded-2xl px-4 py-3 shadow-card-lg border border-gray-100 dark:border-navy-card z-10"
      >
        <div className="text-xs text-gray-500 font-semibold">CREDIT SCORE</div>
        <div className="text-2xl font-extrabold text-brand-green">752</div>
        <div className="text-xs text-gray-500">⬆ Excellent</div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-16 -left-4 sm:-left-8 bg-white dark:bg-navy-light rounded-2xl px-4 py-3 shadow-card-lg border border-gray-100 dark:border-navy-card z-10"
      >
        <div className="text-xs text-gray-500 font-semibold">INSTANT M-PESA</div>
        <div className="text-lg font-extrabold text-gray-900 dark:text-white">⚡ 3 mins</div>
        <div className="text-xs text-gray-500">avg disbursement</div>
      </motion.div>

      {/* Phone */}
      <motion.div
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="w-[220px] sm:w-[240px] rounded-[40px] p-3 shadow-[0_32px_80px_rgba(10,22,40,0.35)]"
        style={{ background: '#0A1628' }}
      >
        <div className="rounded-[32px] overflow-hidden" style={{ background: 'linear-gradient(160deg,#0F1C30,#162040)', minHeight: 420, padding: 20 }}>
          {/* Notch */}
          <div className="w-20 h-5 rounded-b-2xl mx-auto mb-4" style={{ background: '#0A1628' }} />
          {/* Header */}
          <div className="flex items-center mb-5">
            <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm text-white mr-2.5" style={{ background: 'linear-gradient(135deg,#00C896,#1A6BF5)' }}>JK</div>
            <div className="flex-1">
              <div className="text-[10px] text-gray-500">Good morning 👋</div>
              <div className="text-[13px] font-bold text-white">Jane Kamau</div>
            </div>
            <span className="text-xl">🔔</span>
          </div>
          {/* Balance card */}
          <div className="rounded-[18px] p-4 mb-3 relative overflow-hidden" style={{ background: 'linear-gradient(135deg,#00C896,#1A6BF5)' }}>
            <div className="absolute -top-5 -right-5 w-24 h-24 rounded-full bg-white/10" />
            <div className="text-[10px] text-white/75 uppercase tracking-wider">Available Limit</div>
            <div className="text-[26px] font-extrabold text-white -tracking-wider my-1">KES 45,000</div>
            <div className="text-[11px] text-white/80">Next: KES 5,200 · Mar 15</div>
            <div className="mt-3 h-1.5 rounded-full bg-white/25">
              <div className="h-1.5 rounded-full bg-white" style={{ width: '62%' }} />
            </div>
          </div>
          {/* Quick actions */}
          <div className="grid grid-cols-2 gap-2 mb-3">
            {[['💸','Borrow'],['📱','M-PESA'],['📊','History'],['🎯','Score']].map(([icon,label]) => (
              <div key={label} className="rounded-xl p-2.5 text-center border" style={{ background: 'rgba(255,255,255,0.06)', borderColor: 'rgba(255,255,255,0.08)' }}>
                <div className="text-lg mb-1">{icon}</div>
                <div className="text-[10px] text-gray-300 font-medium">{label}</div>
              </div>
            ))}
          </div>
          {/* Transactions */}
          {[
            { icon:'📥', bg:'#E6FBF5', name:'Loan Disbursed', date:'Today, 09:14', amt:'+KES 20,000', color:'#00C896' },
            { icon:'💳', bg:'#FEF3C7', name:'Repayment',      date:'Yesterday',    amt:'-KES 5,200',  color:'#E53E3E' },
          ].map((t) => (
            <div key={t.name} className="flex items-center gap-2.5 mb-1.5 rounded-xl p-2.5" style={{ background: 'rgba(255,255,255,0.04)' }}>
              <div className="w-7 h-7 rounded-lg flex items-center justify-center text-sm flex-shrink-0" style={{ background: t.bg }}>{t.icon}</div>
              <div className="flex-1">
                <div className="text-[11px] text-white font-semibold">{t.name}</div>
                <div className="text-[10px] text-gray-500">{t.date}</div>
              </div>
              <span className="text-[12px] font-bold" style={{ color: t.color }}>{t.amt}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }

export default function HeroSection() {
  const [ref, inView] = useInView()

  return (
    <section ref={ref} className="min-h-screen flex items-center pt-[88px] pb-16 bg-white dark:bg-navy relative overflow-hidden">
      {/* BG orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.07] pointer-events-none" style={{ background: 'radial-gradient(circle,#00C896,transparent 70%)' }} />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-[0.05] pointer-events-none" style={{ background: 'radial-gradient(circle,#1A6BF5,transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left */}
        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 text-xs font-bold px-4 py-1.5 rounded-full mb-6 border" style={{ background: '#E6FBF5', color: '#00A07A', borderColor: 'rgba(0,200,150,0.3)' }}>
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse-dot" />
            Trusted by 500,000+ Kenyans
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-[clamp(38px,5vw,62px)] font-extrabold leading-[1.08] -tracking-[2px] mb-5 text-gray-900 dark:text-white">
            Fast & Flexible<br />
            <span className="gradient-text">Mobile Loans</span><br />
            in Kenya
          </motion.h1>

          <motion.p variants={fadeUp} className="text-lg text-gray-500 dark:text-gray-400 mb-9 max-w-[480px] leading-relaxed">
            Access <strong className="text-gray-700 dark:text-gray-200">KES 500 – 500,000</strong> instantly on your phone. No paperwork, no branch visits. Just M-PESA to your pocket in minutes.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-10">
            <Link to="/register" className="btn-primary text-base px-8 py-4 rounded-2xl">
              🚀 Apply Now
            </Link>
            <Link to="/calculator" className="btn-outline text-base px-8 py-4 rounded-2xl text-gray-700 dark:text-gray-300">
              🧮 Check Eligibility
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="flex items-center gap-5 flex-wrap">
            {[
              { num: '500K+', lbl: 'Active Borrowers' },
              { num: 'KES 8B+', lbl: 'Loans Disbursed' },
              { num: '4.8★', lbl: 'App Rating' },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-5">
                {i > 0 && <div className="w-px h-9 bg-gray-200 dark:bg-navy-card" />}
                <div>
                  <div className="text-xl font-extrabold text-gray-900 dark:text-white">{s.num}</div>
                  <div className="text-xs text-gray-500">{s.lbl}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: phone */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden lg:block"
        >
          <PhoneMockup />
        </motion.div>
      </div>
    </section>
  )
}
