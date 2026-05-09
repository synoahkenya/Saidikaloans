import { motion } from 'framer-motion'
import { useCountUp } from '../../hooks/useCountUp'
import { useInView } from '../../hooks/useInView'
import { STATS } from '../../utils/constants'

function StatItem({ value, suffix, label, prefix, start }) {
  const count = useCountUp(value, 2000, start)
  return (
    <div className="text-center">
      <div className="text-4xl sm:text-5xl font-extrabold -tracking-[2px] gradient-text">
        {prefix || ''}{count}{suffix}
      </div>
      <div className="text-sm text-white/50 mt-2 font-medium">{label}</div>
    </div>
  )
}

export default function StatsSection() {
  const [ref, inView] = useInView()
  return (
    <section ref={ref} className="py-16 relative overflow-hidden" style={{ background: 'linear-gradient(135deg,#0A1628,#162040)' }}>
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }} />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <StatItem {...s} start={inView} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
