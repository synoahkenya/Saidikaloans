export default function Input({ label, error, ...props }) {
  return (
    <div>
      {label && (
        <label className="block text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1.5">
          {label}
        </label>
      )}
      <input className="input-field" {...props} />
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  )
}
