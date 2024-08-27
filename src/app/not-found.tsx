import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HomeIcon } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="flex flex-1 w-full flex-col items-center justify-center gap-5 px-4 sm:px-12 md:px-14 lg:px-24">
      <p className="font-semibold text-primary">404</p>
      <h1 className="text-5xl font-bold tracking-tight">Uh oh!</h1>
      <p>Looks like we got a little lost...</p>

      <Button variant="default" size="icon">
        <Link href="/" prefetch={false}>
          <HomeIcon height={28} />
        </Link>
      </Button>
    </main>
  )
}
