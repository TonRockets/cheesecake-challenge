'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Algo deu errado!</h2>
        <button
          onClick={() => reset()}
          className="bg-purple-600 text-white px-4 py-2 rounded"
        >
          Tentar novamente
        </button>
      </div>
    </div>
  )
}
