import { Link } from 'react-router-dom'
import { FAQS } from '../../utils/constants'
import FAQItem from '../ui/FAQ'
import SectionTag from '../ui/SectionTag'

export default function FAQPreviewSection() {
  return (
    <section className="py-20 bg-white dark:bg-navy">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <SectionTag>Common Questions</SectionTag>
          <h2 className="text-4xl sm:text-5xl font-extrabold -tracking-[1.5px] mt-2 text-gray-900 dark:text-white">
            Got <span className="gradient-text">Questions?</span>
          </h2>
        </div>
        <div className="space-y-2.5 mb-8">
          {FAQS.slice(0, 4).map((faq) => <FAQItem key={faq.q} q={faq.q} a={faq.a} />)}
        </div>
        <div className="text-center">
          <Link to="/faqs" className="btn-ghost">View All FAQs →</Link>
        </div>
      </div>
    </section>
  )
}
