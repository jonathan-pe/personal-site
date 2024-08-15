import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Watching from '/public/watching.jpg'

export default function ProfileHero() {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="mx-auto px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="#" className="inline-flex space-x-6">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold leading-6 text-primary ring-1 ring-inset ring-primary/20">
                What's new
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-secondary">
                <span>Just shipped v1.0</span>
                <ChevronRightIcon aria-hidden="true" className="h-5 w-5 text-gray-500" />
              </span>
            </a>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-base-content sm:text-6xl">
            Deploy to the cloud with confidence
          </h1>
          <p className="mt-6 text-lg leading-8 text-base-content/75">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat fugiat aliqua.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-primary-content shadow-sm hover:bg-primary/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              Get started
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-base-content">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <Image
              alt="App screenshot"
              src={Watching}
              className="w-[20%] rounded-xl bg-white/5 shadow-2xl ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
