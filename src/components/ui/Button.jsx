import { Link } from 'react-router-dom'
import { clsx } from 'clsx'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  onClick,
  type = 'button',
  disabled = false,
  fullWidth = false,
  className = '',
}) {
  const base = 'inline-flex items-center justify-center gap-2 font-bold transition-all duration-200 cursor-pointer border-none no-underline'

  const variants = {
    primary: 'btn-primary',
    outline: 'btn-outline text-gray-700 dark:text-gray-300',
    ghost:   'btn-ghost text-gray-700 dark:text-gray-300',
    danger:  'bg-red-500 hover:bg-red-600 text-white rounded-xl',
    mpesa:   'bg-[#00B236] hover:bg-[#009B2E] text-white rounded-xl shadow-lg',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-sm rounded-xl',
    lg: 'px-8 py-4 text-base rounded-xl',
    xl: 'px-10 py-5 text-lg rounded-2xl',
  }

  const classes = clsx(
    base,
    variant !== 'primary' && variant !== 'mpesa' ? sizes[size] : '',
    variants[variant],
    fullWidth && 'w-full',
    disabled && 'opacity-50 cursor-not-allowed',
    className
  )

  if (to) return <Link to={to} className={classes}>{children}</Link>

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  )
}
