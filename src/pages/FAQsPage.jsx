import SectionTag from '../components/ui/SectionTag'
import FAQItem from '../components/ui/FAQ'
import { FAQS } from '../utils/constants'

export default function FAQsPage() {
  return (
    <div className="pt-24 pb-20 bg-white dark:bg-navy">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <SectionTag>Help Center</SectionTag>
          <h1 className="text-4xl sm:text-5xl font-extrabold -tracking-[1.5px] mt-2 text-gray-900 dark:text-white">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h1>
        </div>
        <div className="space-y-2.5">
          {FAQS.map((faq) => <FAQItem key={faq.q} q={faq.q} a={faq.a} />)}
        </div>
      </div>
    </div>
  )
}
