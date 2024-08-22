import React from 'react'
import { ArrowDownCircleIcon, BriefcaseIcon } from '@heroicons/react/24/outline'
import { RESUME } from '@/lib/meInfo'
import { shortenJobTitle } from '@/lib/utils'
import { Button } from './ui/button'

const MiniResume: React.FC = () => {
  return (
    <div className="overflow-hidden rounded-lg bg-card text-card-foreground border max-w-xl shadow-md">
      <div className="px-4 py-5 sm:px-6">
        <div className="flex gap-2 mb-3 items-center">
          <BriefcaseIcon className="h-6 w-6" />
          <h3 className="text-md font-semibold leading-6">Work</h3>
        </div>

        <div className="flex flex-col gap-4">
          {RESUME.map((job) => {
            return (
              <div key={job.id} className="flex gap-4">
                <div className="flex items-center gap-4 w-full">
                  <a
                    href={job.icon.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex h-10 w-10 flex-none items-center justify-center rounded-full ring-1 ring-ring/50 hover:bg-muted"
                  >
                    <job.icon.icon className="h-6 w-6 fill-foreground" />
                  </a>

                  <div className="flex flex-col flex-grow">
                    <h4 className="text-sm font-semibold">{job.companyName}</h4>
                    <div className="flex justify-between items-center">
                      <span className="text-xs">{shortenJobTitle(job.role)}</span>
                      <div className="flex justify-center items-center gap-1">
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

        <Button className="mt-4 w-full p-0" size="sm">
          <a
            href="/Jonathan Pe's Resume.pdf"
            download="Jonathan Pe's Resume"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center w-full h-full"
          >
            <span>Download CV</span>
            <ArrowDownCircleIcon className="h-5 w-5 ml-2" />
          </a>
        </Button>
      </div>
    </div>
  )
}

export default MiniResume
