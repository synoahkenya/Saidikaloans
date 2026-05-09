import SectionTag from '../components/ui/SectionTag'

const steps = [
  { n: 1, title: 'Create Your Account', desc: 'Download the Saidika app or visit our website. Register with your M-PESA phone number and national ID. Verification takes under 5 minutes.', items: ['Valid Kenyan national ID or passport','Active Safaricom M-PESA line (min 3 months)','Smartphone or feature phone for USSD'] },
  { n: 2, title: 'Get Your Credit Score', desc: 'Our AI engine analyses your M-PESA history and repayment behavior to generate your personalised Saidika Credit Score instantly.', items: ['Score calculated in 30 seconds','No bank statements needed','Grows with every on-time repayment'] },
  { n: 3, title: 'Apply for Your Loan', desc: 'Select the amount and repayment period. Review the full repayment schedule — including interest and fees — before accepting.', items: [] },
  { n: 4, title: 'Receive via M-PESA', desc: 'Confirm with your M-PESA PIN and receive funds instantly to your wallet. SMS and push notification confirm the transfer.', items: [] },
  { n: 5, title: 'Repay Easily', desc: 'Repay via M-PESA Pay Bill (384384) or dial *384# anytime. Early repayment is free and improves your limit.', items: ['Paybill: 384384 — Account: Your ID','USSD: *384#','App: One-tap repayment'] },
]

export default function HowItWorksPage() {
  return (
    <div className="pt-24 pb-20 bg-white dark:bg-navy">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <SectionTag>Step by Step</SectionTag>
        <h1 className="text-4xl sm:text-5xl font-extrabold -tracking-[1.5px] mt-2 mb-3 text-gray-900 dark:text-white">
          How Saidika <span className="gradient-text">Works</span>
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg mb-14">Everything you need to know about getting a loan with Saidika Loans Kenya.</p>
        <div className="space-y-12">
          {steps.map((s) => (
            <div key={s.n} className="grid grid-cols-[80px_1fr] gap-7 items-start">
              <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center text-2xl font-extrabold text-white shadow-green flex-shrink-0">
                {s.n}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{s.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">{s.desc}</p>
                {s.items.length > 0 && (
                  <ul className="space-y-1.5">
                    {s.items.map((item) => (
                      <li key={item} className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                        <span className="text-brand-green">•</span> {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
