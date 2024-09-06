import { Metadata } from 'next'
import GameCatalog from './gameCatalog'

export const metadata: Metadata = {
  title: 'Jonathan Pe | Gamer',
  description: '',
}

export default function Gamer() {
  return (
    <main className="flex flex-1 w-full flex-col items-start justify-center sm:justify-start px-4 sm:px-12 md:mt-16 md:px-14 lg:px-24">
      <section className="mx-auto w-full flex justify-between flex-col lg:flex-row px-2 lg:px-24 xl:px-28 gap-10 md:gap-20 mt-10">
        <div className="flex flex-col justify-start flex-1">
          <h1 className="text-2xl font-bold tracking-tight md:text-2xl xl:text-4xl 2xl:text-5xl">Gamer.</h1>
          <p className="text-md md:text-lg text-muted-foreground mt-2">
            My love for video games started when I was a kid. I would play at my cousin&apos;s house whenever my family
            and I would go over for a visit and we would play until it was time to go home. Those late nights are some
            of my fondest memories growing up.
          </p>
          <p className="text-md md:text-lg text-muted-foreground mt-6">
            I&apos;ve always loved the social aspect of playing video games. It&apos;s how many of my friends and I have
            bonded and grown closer over the years. I&apos;ve played a variety of games from first-person shooters to
            role-playing games, but I always have the best time as long as I&apos;m playing with friends. Here are some
            of my favorites games and some that I&apos;m currently playing.
          </p>
        </div>

        <GameCatalog />
      </section>
    </main>
  )
}
