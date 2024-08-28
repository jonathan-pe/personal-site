import ResumeCarousel from './ResumeAccordion'

export default function SoftwareEngineer() {
  return (
    <main className="flex flex-1 w-full flex-col items-start justify-start px-4 sm:px-12 md:mt-16 md:px-14 lg:px-24">
      <section className="mx-auto w-full flex justify-center flex-col px-2 py-4">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl xl:text-5xl 2xl:text-6xl">Software Engineer.</h1>
        <p className="text-md leading-8 sm:text-lg text-muted-foreground">blurb about me</p>

        <div className="flex flex-1 justify-center mt-4 md:mt-10">
          <ResumeCarousel />
        </div>
      </section>
    </main>
  )
}
