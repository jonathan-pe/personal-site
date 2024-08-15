import { Metadata } from 'next'
import Image from 'next/image'
import ProfileHero from '@/components/ProfileHero'

export const metadata: Metadata = {
  title: 'Jonathan Pe',
  description: 'Personal website of Jonathan Pe',
}

export default function Home() {
  return (
    <main className="flex flex-1 w-full flex-col items-center justify-between p-24">
      <ProfileHero />
    </main>
  )
}
