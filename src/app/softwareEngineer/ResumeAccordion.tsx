import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { RESUME } from '@/lib/meInfo'
import { shortenJobTitle } from '@/lib/utils'
import Link from 'next/link'

export default function ResumeAccordion() {
  return (
    <Accordion type="single" collapsible className="flex flex-1 flex-col w-full min-w-[352px]">
      {RESUME.map((job) => {
        return (
          <AccordionItem value={job.id} key={job.id}>
            <AccordionTrigger>
              <div className="flex gap-4 items-center w-full">
                <Link
                  href={job.icon.href}
                  prefetch={false}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full flex items-center justify-center ring-input ring-1 hover:bg-accent"
                >
                  <job.icon.icon className="h-6 w-6 fill-foreground" />
                  <span className="sr-only">{job.companyName} Logo</span>
                </Link>
                <div className="flex flex-col flex-grow items-start">
                  <h4 className="text-sm sm:text-md font-semibold">{job.companyName}</h4>
                  <div className="flex justify-between items-center gap-4 w-full pr-2 font-normal">
                    <span className="text-xs sm:text-sm text-muted-foreground">{shortenJobTitle(job.role)}</span>
                    <div className="flex justify-center items-center gap-1 text-xs sm:text-sm">
                      {/* cut month from date on small screens */}
                      <span className="sm:hidden text-muted-foreground">{`${job.startDate.split(' ')[1]} - ${
                        job.endDate.split(' ')[1]
                      }`}</span>
                      {/* show full date on larger screens */}
                      <span className="hidden sm:block text-muted-foreground">{`${job.startDate} - ${job.endDate}`}</span>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc list-inside">
                {job.accomplishments.map((responsibility, index) => (
                  <li key={index} className="text-sm sm:text-md text-muted-foreground list-item">
                    {responsibility}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}
