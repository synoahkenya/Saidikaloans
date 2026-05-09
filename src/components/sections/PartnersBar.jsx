export default function PartnersBar() {
  const partners = ['📱 M-PESA','🏦 Equity Bank','🏦 KCB','💳 Airtel Money','🏛 CBK Regulated','🛡 CRB Listed']
  return (
    <div className="py-8 bg-gray-50 dark:bg-navy-light border-y border-gray-100 dark:border-navy-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Trusted Partners & Payment Methods</div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {partners.map((p) => (
            <span key={p} className="text-xs font-bold text-gray-500 dark:text-gray-400 bg-white dark:bg-navy-card border border-gray-200 dark:border-navy-light px-4 py-2 rounded-xl">
              {p}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
