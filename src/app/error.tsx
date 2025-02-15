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
    <main
      role="alert"
      aria-live="assertive"
      className="min-h-screen bg-gray-900 flex items-center justify-center"
    >
      <div className="text-center">
        <h1 id="error-message" className="text-2xl font-bold text-white mb-4">
          Algo deu errado!
        </h1>
        <p className="text-gray-300 mb-4">
          Ocorreu um erro inesperado. Tente novamente.
        </p>
        <button
          onClick={() => reset()}
          className="bg-purple-600 text-white px-4 py-2 rounded focus:ring-2 focus:ring-purple-400 focus:outline-none"
          aria-label="Tentar recarregar a página"
          aria-describedby="error-message"
        >
          Tentar novamente
        </button>
      </div>
    </main>
  )
}
