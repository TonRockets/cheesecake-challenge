import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Bibi Bus',
    template: '%s | Bibi Bus',
  },
  description:
    'Acompanhe o status, localização, horários e compre a passagem do seu ônibus com a Bibi Bus',
  metadataBase: new URL('https://bibibus.com'),
  openGraph: {
    title: 'Bibi Bus',
    description:
      'Acompanhe o status, localização, horários e compre a passagem do seu ônibus com a Bibi Bus',
    url: 'https://your-domain.com',
    siteName: 'Bibi Bus',
    locale: 'pt-BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/app-icon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
