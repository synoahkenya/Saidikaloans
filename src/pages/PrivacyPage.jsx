export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-20 bg-white dark:bg-navy">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="text-4xl font-extrabold -tracking-[1.5px] mb-2 text-gray-900 dark:text-white">Privacy Policy</h1>
        <p className="text-sm text-gray-400 mb-10">Last Updated: February 14, 2025</p>
        <div className="space-y-8 text-gray-600 dark:text-gray-400 leading-relaxed text-[15px]">
          {[
            ['1. Information We Collect', null, ['Personal identification: Name, national ID, date of birth, phone number','Financial data: M-PESA transaction history, loan repayment history, CRB records','Device data: Phone model, OS version, app usage patterns','Location data: General county/region for fraud prevention']],
            ['2. How We Use Your Information', null, ['Credit assessment and loan limit determination','Loan disbursement and repayment processing','Fraud prevention and security','Customer support and communications','Regulatory compliance and CRB reporting']],
            ['3. Data Sharing', 'We share your data only with regulated partners: Credit Reference Bureaux (as required by law), M-PESA/Safaricom for transaction processing, and our banking partners. We do not sell your personal data to third parties for marketing.', []],
            ['4. Data Security', 'We use bank-grade 256-bit SSL encryption for all data transmission and storage. Our systems are audited regularly by independent security firms. All employee access to customer data is strictly controlled and logged.', []],
            ['5. Your Rights', 'Under Kenya\'s Data Protection Act 2019, you have the right to access, correct, or delete your personal data. Submit requests to privacy@saidikaloans.co.ke. We will respond within 30 days.', []],
            ['6. Contact Our DPO', 'Data Protection Officer: privacy@saidikaloans.co.ke | Saidika Financial Services Limited, Westlands Square, Nairobi.', []],
          ].map(([title, body, items]) => (
            <div key={title}>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h2>
              {body && <p className="mb-2">{body}</p>}
              {items && items.length > 0 && (
                <ul className="space-y-1.5 list-disc list-inside">
                  {items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
