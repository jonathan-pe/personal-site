import React from 'react'
import { ArrowDownCircleIcon, BriefcaseIcon } from '@heroicons/react/24/outline'
import { RESUME } from '@/lib/meInfo'
import { shortenJobTitle } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

const MiniResume: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex gap-2 items-center">
          <BriefcaseIcon className="h-6 w-6" />
          Work
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        {RESUME.map((job) => {
          return (
            <div key={job.id} className="flex gap-4">
              <div className="flex items-center gap-4 w-full">
                <Button variant="outline" size="icon" className="h-10 w-10 rounded-full">
                  <Link href={job.icon.href} prefetch={false} target="_blank" rel="noopener noreferrer">
                    <job.icon.icon className="h-6 w-6 fill-foreground" />
                    <span className="sr-only">{job.companyName} Logo</span>
                  </Link>
                </Button>

                <div className="flex flex-col flex-grow">
                  <h4 className="text-sm sm:text-md font-semibold">{job.companyName}</h4>
                  <div className="flex justify-between items-center gap-4">
                    <span className="text-xs sm:text-sm text-muted-foreground">{shortenJobTitle(job.role)}</span>
                    <div className="flex justify-center items-center gap-1 text-xs sm:text-sm">
                      {/* cut month from date on small screens */}
                      <span className="sm:hidden text-muted-foreground">{`${job.startDate.split(' ')[1]} - ${
                        job.endDate.split(' ')[1] ?? 'Present'
                      }`}</span>

                      {/* show full date on larger screens */}
                      <span className="hidden sm:block text-muted-foreground">{`${job.startDate} - ${job.endDate}`}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </CardContent>
      <CardFooter>
        <Button className="w-full" size="sm">
          <Link
            href="/Jonathan Pe's Resume.pdf"
            download="Jonathan Pe's Resume"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center w-full "
          >
            <span>Download CV</span>
            <ArrowDownCircleIcon className="h-5 w-5 ml-2" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default MiniResume
