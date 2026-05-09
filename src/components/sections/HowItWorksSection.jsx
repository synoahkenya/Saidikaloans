import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'
import SectionTag from '../ui/SectionTag'

const steps = [
  { n: 1, title: 'Register & Verify',     desc: 'Sign up with your phone number and national ID. Our smart system verifies your identity in seconds using M-PESA data.' },
  { n: 2, title: 'Choose Your Loan',      desc: 'Pick the amount and repayment period that suits your needs. Our AI calculates the best offer tailored just for you.' },
  { n: 3, title: 'Receive via M-PESA',    desc: 'Approve with your M-PESA PIN and receive money instantly. Track everything from your Saidika dashboard.' },
]

export default function HowItWorksSection() {
  const [ref, inView] = useInView()
  return (
    <section ref={ref} className="py-20 bg-gray-50 dark:bg-navy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <SectionTag>Simple Process</SectionTag>
          <h2 className="text-4xl sm:text-5xl font-extrabold -tracking-[1.5px] mt-2 text-gray-900 dark:text-white">
            Get Your Loan in <span className="gradient-text">3 Easy Steps</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[calc(16.67%+32px)] right-[calc(16.67%+32px)] h-0.5 gradient-bg opacity-40 z-0" />
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative z-10 text-center"
            >
              <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center text-3xl font-extrabold text-white mx-auto mb-6 shadow-green">
                {s.n}
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">{s.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs mx-auto">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
