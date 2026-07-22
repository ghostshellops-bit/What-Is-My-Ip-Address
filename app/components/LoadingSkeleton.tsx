export default function LoadingSkeleton() {
  return (
    <div className="space-y-4">
      <div className="skeleton h-12 w-3/4 mx-auto" />
      <div className="skeleton h-8 w-1/2 mx-auto" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="skeleton h-32" />
        <div className="skeleton h-32" />
        <div className="skeleton h-32" />
      </div>
      <div className="skeleton h-64 w-full" />
    </div>
  )
}