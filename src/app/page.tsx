import ProfileHero from '@/components/ProfileHero'
import SkillBars from './components/SkillBars'
import MiniResume from './components/MiniResume'
import ContactForm from './components/ContactForm'

export default function Home() {
  return (
    <main className="flex flex-1 w-full flex-col items-center justify-between px-8 sm:px-12 md:px-14 lg:px-24">
      <ProfileHero />

      <section className="relative isolate overflow-hidden">
        <div className="mx-auto px-6 pb-10 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-10 lg:gap-12">
          <SkillBars />
          <div>
            <MiniResume />
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  )
}
