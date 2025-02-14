import { Suspense } from 'react'
import LandingPage from '@/components/landing-page'
import Loading from './loading'

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <main>
        <LandingPage />
      </main>
    </Suspense>
  )
}
