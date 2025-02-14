import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Página não encontrada</h2>
        <Link
          href="/"
          className="bg-purple-600 text-white px-4 py-2 rounded inline-block"
        >
          Voltar para o início
        </Link>
      </div>
    </div>
  )
}
