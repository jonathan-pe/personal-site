import { Metadata } from 'next'
import SoundCloudEmbed from './SoundCloudEmbed'

export const metadata: Metadata = {
  title: 'Jonathan Pe | DJ',
  description: '',
}

export default function DJ() {
  return (
    <main className="flex flex-1 w-full flex-col items-start justify-center sm:justify-start px-4 sm:px-12 md:mt-16 md:px-14 lg:px-20">
      <section className="mx-auto w-full flex justify-between flex-col lg:flex-row px-2 lg:px-10 xl:px-28 gap-10 md:gap-20 mt-10">
        <div className="flex flex-col justify-start flex-1">
          <h1 className="text-2xl font-bold tracking-tight md:text-2xl xl:text-4xl 2xl:text-5xl">DJ.</h1>
          <p className="text-md md:text-lg text-muted-foreground mt-2">
            Music has always been a big part of my life. I learned how to play the piano and guitar when I was little
            and I&apos;ve always loved listening to music. I&apos;ve listened to a wide variety of genres, ranging from
            heavy metal to R&B. If it sounded good, then I listened!
          </p>
          <p className="text-md md:text-lg text-muted-foreground mt-6">
            Ironically, EDM was a genre I never thought I would get into. I actually really disliked it the first time I
            heard it. But around 2015 after my grandpa had passed, I somehow found solitude in it. Something about the
            synths and the beat was extremly comforting to me and I discovered that the world of EDM was so much bigger
            than I imagined. The EDM community also turned out to be so welcoming and loving and it&apos;s absolutely
            one of my favorite things in this world. I started DJing shortly after and I&apos;ve been doing it ever
            since. I mostly make mixes and post them on SoundCloud, but I&apos;ve also been trying my hand at producing
            music as well. It&apos;s been a arduous, yet rewarding journey and we&apos;ll see where it ends up leading
            me. So if you&apos;re into EDM or just want to check out some of my mixes, feel free to chill here and
            listen!
          </p>
        </div>

        <div className="flex flex-1">
          <SoundCloudEmbed />
        </div>
      </section>
    </main>
  )
}
