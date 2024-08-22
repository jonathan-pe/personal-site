import Image from 'next/image'
import Watching from '@/images/watching.jpg'
import ICONS from '@/images/SocialMediaIcons'

export default function ProfileHero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="mx-auto px-6 py-2 sm:pb-32 lg:flex lg:px-8 lg:py-32 lg:gap-12">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8 mb-10">
          <h1 className="mt-10 text-3xl font-bold tracking-tight sm:text-6xl">Software Engineer.</h1>
          <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-6xl">Gamer.</h1>
          <h1 className="text-3xl font-bold tracking-tight text-secondary sm:text-6xl">DJ.</h1>

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
        <div className="mx-auto max-w-md flex-none md:max-w-xl lg:max-w-2xl">
          <Image alt="App screenshot" src={Watching} className="rounded-xl" height={800} />
        </div>
      </div>
    </section>
  )
}
