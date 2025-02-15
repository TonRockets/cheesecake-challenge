import Link from 'next/link'

export default function NotFound() {
  return (
    <main
      role="alert"
      aria-live="assertive"
      className="min-h-screen bg-gray-900 flex items-center justify-center"
    >
      <div className="text-center">
        <h1 className="text-2xl font-bold text-white mb-4">
          Página não encontrada
        </h1>
        <p className="text-gray-300 mb-4">
          Desculpe, a página que você procura não existe.
        </p>
        <Link
          href="/"
          className="bg-purple-600 text-white px-4 py-2 rounded inline-block focus:ring-2 focus:ring-purple-400 focus:outline-none"
          aria-label="Voltar para a página inicial"
        >
          Voltar para o início
        </Link>
      </div>
    </main>
  )
}
