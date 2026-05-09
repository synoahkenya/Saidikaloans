import SectionTag from '../ui/SectionTag'

export default function MpesaSection() {
  return (
    <section className="py-20" style={{ background: 'linear-gradient(135deg,#0A1628,#162040)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTag>M-PESA Integrated</SectionTag>
            <h2 className="text-4xl sm:text-5xl font-extrabold -tracking-[1.5px] mt-2 text-white">
              Send & Repay via <span className="gradient-text">M-PESA</span> Instantly
            </h2>
            <p className="text-white/60 text-base mt-4 leading-relaxed">Fully integrated with Safaricom M-PESA. Receive your approved loan straight to your wallet and repay with a single USSD code — anytime, anywhere in Kenya.</p>
            <div className="grid grid-cols-3 gap-3 mt-7">
              {[['⚡','Instant Transfer','Under 3 minutes'],['🔐','PIN Secured','M-PESA PIN only'],['📱','USSD Repay','Dial *384# anytime']].map(([icon,title,sub]) => (
                <div key={title} className="bg-white/8 border border-white/10 rounded-2xl p-4 text-center" style={{ background: 'rgba(255,255,255,0.06)' }}>
                  <div className="text-xl mb-2">{icon}</div>
                  <div className="text-white font-bold text-sm">{title}</div>
                  <div className="text-white/50 text-xs mt-1">{sub}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/6 border border-white/10 rounded-3xl p-8" style={{ background: 'rgba(255,255,255,0.06)' }}>
            <div className="text-xs text-white/40 mb-1">USSD Code</div>
            <div className="text-5xl font-extrabold text-brand-green -tracking-[2px]">*384#</div>
            <div className="text-white/50 text-sm mt-4 mb-4">Or repay via M-PESA Pay Bill:</div>
            <div className="grid grid-cols-2 gap-4">
              <div><div className="text-xs text-white/30 mb-1">PAYBILL</div><div className="text-3xl font-extrabold text-white">384384</div></div>
              <div><div className="text-xs text-white/30 mb-1">ACCOUNT</div><div className="text-3xl font-extrabold text-white">ID Number</div></div>
            </div>
            <div className="mt-5 bg-brand-green/15 border border-brand-green/30 rounded-xl p-3 text-sm text-white/75">
              ✅ All M-PESA transactions confirmed via SMS within seconds
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
