export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Loading..."
      className="w-20 h-20 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inset-0 z-50 bg-gray-900 flex items-center justify-center rounded-full"
    >
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-600"></div>
    </div>
  )
}
