import { clsx } from 'clsx'

export default function Badge({ children, variant = 'green', className = '' }) {
  const variants = {
    green:  'bg-brand-green-light text-brand-green-dark dark:bg-green-900/30 dark:text-brand-green',
    blue:   'bg-brand-blue-light  text-brand-blue-dark  dark:bg-blue-900/30  dark:text-brand-blue',
    yellow: 'bg-yellow-50 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400',
    red:    'bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400',
    gray:   'bg-gray-100 text-gray-600 dark:bg-navy-card dark:text-gray-400',
  }
  return (
    <span className={clsx('inline-block text-xs font-bold px-3 py-1 rounded-full', variants[variant], className)}>
      {children}
    </span>
  )
}
