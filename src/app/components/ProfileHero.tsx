import Image from 'next/image'
import Watching from '@/images/watching.jpg'
import ICONS from '@/images/SocialMediaIcons'

export default function ProfileHero() {
  return (
    <section className="flex w-full flex-col lg:flex-row justify-center items-center gap-10 mx-auto py-12 px-4 max-w-7xl lg:mt-16">
      <div className="flex flex-col justify-center flex-1">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl xl:text-5xl 2xl:text-6xl">Software Engineer.</h1>
        <h1 className="text-3xl font-bold tracking-tight text-primary md:text-4xl xl:text-5xl 2xl:text-6xl">Gamer.</h1>
        <h1 className="text-3xl font-bold tracking-tight text-secondary md:text-4xl xl:text-5xl 2xl:text-6xl">DJ.</h1>

        <p className="mt-6 text-md leading-8 sm:text-lg">
          Hello there! I&apos;m Jonathan, a software engineer located in the San Francisco Bay Area. I&apos;m a
          user-focused, front-end specialist who loves building pixel-perfect, responsive, and aesthetically pleasing
          web applications. I also enjoy playing video games, mixing music, and playing pickleball in my free time.
        </p>

        <div className="mt-10 flex items-center gap-x-4">
          {ICONS.map((icon) => (
            <a
              key={icon.name}
              href={icon.href}
              className="fill-foreground hover:fill-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">{icon.name}</span>
              <icon.icon aria-hidden="true" className="h-8 w-8" />
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center">
        <Image alt="App screenshot" src={Watching} className="rounded-xl" height={500} />
      </div>
    </section>
  )
}
