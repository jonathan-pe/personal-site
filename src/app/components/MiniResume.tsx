import React from 'react'
import { ArrowDownCircleIcon, BriefcaseIcon } from '@heroicons/react/24/outline'

const MiniResume: React.FC = () => {
  return (
    <div className="divide-base-content overflow-hidden rounded-lg bg-base-200 border border-base-content/25 max-w-96">
      <div className="px-4 py-5 sm:px-6">
        <div className="flex gap-2 mb-3 items-center">
          <BriefcaseIcon className="h-6 w-6" />
          <h3 className="text-md font-semibold leading-6">Work</h3>
        </div>
        <span className="mt-1 text-sm text-base-content">
          Hey, thanks for visiting 😊 Send over a message and let me know where you&apos;re visiting from!
        </span>

        <a
          href="/public/Résumé.pdf"
          download="Jonathan Pe Résumé"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 px-2 py-1 w-full flex justify-center items-center bg-primary border border-base-content/25 text-primary-content font-semibold"
        >
          <span>Download CV</span>
          <ArrowDownCircleIcon className="h-5 w-5 ml-2" />
        </a>
      </div>
    </div>
  )
}

export default MiniResume
