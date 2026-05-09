import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'
import { TESTIMONIALS } from '../../utils/constants'
import SectionTag from '../ui/SectionTag'

export default function TestimonialsSection() {
  const [ref, inView] = useInView()
  return (
    <section ref={ref} className="py-20 bg-white dark:bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <SectionTag>Customer Stories</SectionTag>
          <h2 className="text-4xl sm:text-5xl font-extrabold -tracking-[1.5px] mt-2 text-gray-900 dark:text-white">
            What Kenyans Say <span className="gradient-text">About Us</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="bg-white dark:bg-navy-light border border-gray-100 dark:border-navy-card rounded-3xl p-6 relative shadow-card"
            >
              <div className="absolute top-5 right-5 bg-brand-green-light dark:bg-green-900/30 text-brand-green-dark dark:text-brand-green text-[11px] font-bold px-3 py-1 rounded-full">
                ✓ Verified
              </div>
              <div className="text-yellow-400 text-sm mb-3">{'★'.repeat(t.rating)}</div>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-[1.75] italic mb-5">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-sm font-bold text-white flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold text-sm text-gray-900 dark:text-white">{t.name}</div>
                  <div className="text-xs text-gray-500">📍 {t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
