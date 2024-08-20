import React from 'react'
import { ArrowDownCircleIcon, BriefcaseIcon } from '@heroicons/react/24/outline'
import { RESUME } from '@/lib/meInfo'
import { shortenJobTitle } from '@/lib/utils'

const MiniResume: React.FC = () => {
  return (
    <div className="divide-base-content overflow-hidden rounded-lg bg-base-200 border border-base-content/25 max-w-96">
      <div className="px-4 py-5 sm:px-6">
        <div className="flex gap-2 mb-3 items-center">
          <BriefcaseIcon className="h-6 w-6" />
          <h3 className="text-md font-semibold leading-6">Work</h3>
        </div>

        <div className="flex flex-col gap-4">
          {RESUME.map((job) => {
            return (
              <div key={job.id} className="flex text-base-content gap-4">
                <div className="flex items-center gap-4 w-full">
                  <a
                    href={job.icon.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex h-10 w-10 flex-none items-center justify-center rounded-full ring-1 ring-base-content/25 bg-base-300 hover:bg-base-300/50"
                  >
                    <job.icon.icon className="h-6 w-6 fill-base-content" />
                  </a>

                  <div className="flex flex-col flex-grow">
                    <h4 className="text-sm font-semibold">{job.companyName}</h4>
                    <div className="flex justify-between items-center">
                      <span className="text-xs">{shortenJobTitle(job.role)}</span>
                      <div>
                        <span className="text-xs">{job.startDate}</span> -{' '}
                        <span className="text-xs">{job.endDate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <a
          href="/Résumé.pdf"
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
