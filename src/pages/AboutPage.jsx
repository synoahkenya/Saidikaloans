import SectionTag from '../components/ui/SectionTag'

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 bg-white dark:bg-navy">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <SectionTag>Our Story</SectionTag>
        <h1 className="text-4xl sm:text-5xl font-extrabold -tracking-[1.5px] mt-2 mb-4 text-gray-900 dark:text-white">
          About <span className="gradient-text">Saidika Loans</span>
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-10">Empowering Kenyans with fair, fast, and transparent credit since 2019.</p>
        <div className="prose prose-gray dark:prose-invert max-w-none space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed">
          <p>Saidika Loans Kenya was founded in 2019 with a single mission: to make credit accessible to every hardworking Kenyan, regardless of their income level, employment status, or proximity to a bank branch. The word "Saidika" — meaning "to be helped" in Swahili — captures the essence of everything we do.</p>
          <p>We recognised that millions of Kenyans were underserved by traditional financial institutions. Informal traders, boda boda operators, farmers, casual workers, and small business owners often found themselves locked out of the formal credit system — not because they weren't creditworthy, but because the system wasn't designed for them.</p>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-3">Our Mission</h2>
          <p>To democratise access to credit in Kenya by building a mobile-first lending platform that is fast, fair, transparent, and built for the real economy — where M-PESA is currency.</p>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-3">Our Vision</h2>
          <p>A Kenya where every citizen has access to the financial tools they need to build a better life — regardless of where they live, how much they earn, or whether they have a bank account.</p>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-3">Regulatory Compliance</h2>
          <p>Saidika Loans Kenya is fully licensed and regulated by the Central Bank of Kenya (CBK) under the Digital Credit Providers Regulations, 2022. We are a proud member of AMFI-K and adhere to the highest standards of responsible lending.</p>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-3">Our Impact</h2>
          <ul className="space-y-2 list-disc list-inside">
            <li>500,000+ Kenyans served across all 47 counties</li>
            <li>KES 8 billion+ in loans disbursed since 2019</li>
            <li>Average loan disbursement time: under 3 minutes</li>
            <li>98% customer satisfaction score</li>
            <li>70% of borrowers are first-time formal credit recipients</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
