export function Skeleton({ className = '', height = 'h-4' }) {
  return <div className={`skeleton ${height} ${className}`} />
}

export function CardSkeleton() {
  return (
    <div className="card p-6 space-y-4">
      <Skeleton height="h-6" className="w-1/3" />
      <Skeleton height="h-10" className="w-2/3" />
      <Skeleton height="h-4" className="w-full" />
      <Skeleton height="h-4" className="w-5/6" />
    </div>
  )
}
