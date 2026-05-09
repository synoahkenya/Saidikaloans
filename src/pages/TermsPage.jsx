export default function TermsPage() {
  return (
    <div className="pt-24 pb-20 bg-white dark:bg-navy">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="text-4xl font-extrabold -tracking-[1.5px] mb-2 text-gray-900 dark:text-white">Terms & Conditions</h1>
        <p className="text-sm text-gray-400 mb-10">Last Updated: February 14, 2025</p>
        <div className="space-y-8 text-gray-600 dark:text-gray-400 leading-relaxed text-[15px]">
          {[
            ['1. Eligibility', 'To use Saidika Loans services, you must be a Kenyan citizen or permanent resident aged 18 years or older, possess a valid national ID or passport, and have an active Safaricom M-PESA mobile money account.'],
            ['2. Loan Agreement', 'Upon acceptance of a loan offer, a binding loan agreement is formed between you and Saidika Financial Services Limited. The agreement details the principal amount, applicable interest rate, processing fees, repayment schedule, and consequences of default.'],
            ['3. Interest and Fees', 'Interest rates and processing fees are displayed clearly before you accept any loan. Rates vary based on your credit profile, loan type, and repayment period. We reserve the right to update our rate schedule with 30 days\' notice.'],
            ['4. Repayment Obligations', 'You are obligated to repay all amounts due on or before the agreed due date. Failure to repay may result in late fees, reduced credit limits, negative CRB listing, and legal action.'],
            ['5. Data Usage', 'By using Saidika Loans, you authorise us to access and use your M-PESA transaction data, credit bureau information, and other data for the purpose of credit assessment. Please review our Privacy Policy for full details.'],
            ['6. Dispute Resolution', 'Any disputes arising from these Terms shall be resolved through the Central Bank of Kenya\'s Financial Consumer Protection framework or through binding arbitration in Nairobi, Kenya.'],
            ['7. Contact', 'For questions about these Terms, contact us at legal@saidikaloans.co.ke or call 0800 723 384 (toll free).'],
          ].map(([title, body]) => (
            <div key={title}>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h2>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
