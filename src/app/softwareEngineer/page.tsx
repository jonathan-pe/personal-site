import { Metadata } from 'next'
import ResumeAccordion from './ResumeAccordion'

export const metadata: Metadata = {
  title: 'Jonathan Pe | Software Engineer',
  description: '',
}

export default function SoftwareEngineer() {
  return (
    <main className="flex flex-1 w-full flex-col items-start justify-center sm:justify-start px-4 sm:px-12 md:mt-16 md:px-14 lg:px-24">
      <section className="mx-auto w-full flex justify-between flex-col lg:flex-row px-2 lg:px-10 xl:px-28 gap-4 md:gap-20 mt-10">
        <div className="flex flex-col justify-start flex-1">
          <h1 className="text-2xl font-bold tracking-tight md:text-2xl xl:text-4xl 2xl:text-5xl">Software Engineer.</h1>
          <p className="text-md md:text-lg text-muted-foreground mt-2">
            I have a strong affinity for developing web applications. It&apos;s where I started my career and I
            haven&apos;t looked back since. I&apos;ve been fortunate enough to have been placed in a variety of roles
            that have allowed me to grow and learn. I initially started working in QA and then slowly transitioned into
            Full Stack development. I&apos;ve worked backend-focused roles and mobile roles, but I ultimately discovered
            that I really enjoy the frontend work the most. I love the creativity and the problem-solving that comes
            with it. I strangely get a kick out of trying to predict what the user will do and how they will interact
            with the application and so here we are!
          </p>
          <p className="text-md md:text-lg text-muted-foreground mt-6">
            Moving forward in my career, I would like to keep growing as a frontend developer and learn new and exciting
            technologies. I&apos;d love to work with a team that values collaboration and mentorship. But at the same
            time, I want to be able to lead and showcase my skills and knowledge to help others grow as well.
          </p>
        </div>

        <ResumeAccordion />
      </section>
    </main>
  )
}
