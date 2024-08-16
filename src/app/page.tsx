import { Metadata } from 'next'
import ProfileHero from '@/components/ProfileHero'

export const metadata: Metadata = {
  title: 'Jonathan Pe',
  description: 'Personal website of Jonathan Pe',
}

export default function Home() {
  return (
    <main className="flex flex-1 w-full flex-col items-center justify-between px-8 sm:px-12 md:px-14 lg:px-24">
      <ProfileHero />
    </main>
  )
}
