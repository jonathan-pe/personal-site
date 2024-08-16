import Image from 'next/image'
import Watching from '@/images/watching.jpg'
import { GitHubIcon, InstagramIcon, LinkedInIcon, SoundCloudIcon, TwitchIcon } from '@/images/SocialMediaIcons'

export default function ProfileHero() {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="mx-auto px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40 lg:gap-12">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8 mb-10">
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-base-content sm:text-6xl">Software Engineer.</h1>
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">Gamer.</h1>
          <h1 className="text-4xl font-bold tracking-tight text-accent sm:text-6xl">Bedroom DJ.</h1>
          <p className="mt-6 text-lg leading-8 text-base-content/75">
            {`Hello there! I'm Jonathan, a software engineer located in the San Francisco Bay Area. I'm a user-focused
            front-end specialist who loves building pixel-perfect, responsive, and aesthetically pleasing web
            applications. I also enjoy playing video games, mixing music, and playing pickleball in my free time.`}
          </p>
          <div className="mt-10 flex items-center gap-x-1">
            <a
              href={LinkedInIcon.href}
              className="px-2 py-2 text-sm font-semibold fill-base-content border border-none border-transparent hover:bg-blue-500 hover:fill-black"
            >
              <LinkedInIcon.icon />
            </a>
            <a
              href={GitHubIcon.href}
              className="px-2 py-2 text-sm font-semibold fill-base-content border border-transparent hover:bg-neutral hover:fill-neutral-content"
            >
              <GitHubIcon.icon />
            </a>
            <a
              href={SoundCloudIcon.href}
              className="px-2 py-2 text-sm font-semibold fill-base-content border border-none border-transparent hover:bg-orange-500 hover:fill-black"
            >
              <SoundCloudIcon.icon />
            </a>
            <a
              href={InstagramIcon.href}
              className="px-2 py-2 text-sm font-semibold fill-base-content border border-none hover:bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:fill-black"
            >
              <InstagramIcon.icon />
            </a>
            <a
              href={TwitchIcon.href}
              className="px-2 py-2 text-sm font-semibold fill-base-content border border-none border-transparent hover:bg-purple-600 hover:fill-black"
            >
              <TwitchIcon.icon />
            </a>
          </div>
        </div>
        <div className="max-w-md flex-none md:max-w-xl lg:max-w-2xl">
          <Image alt="App screenshot" src={Watching} className="rounded-xl" height={800} />
        </div>
      </div>
    </div>
  )
}
