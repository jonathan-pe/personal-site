import ProfileHero from '@/components/ProfileHero'
import SkillsSection from './components/SkillsSection'
import MiniResume from './components/MiniResume'
import SendEmailModal from './components/Contact'

export default function Home() {
  return (
    <main className="flex flex-1 w-full flex-col items-center justify-between px-6 sm:px-12 md:px-14 lg:px-24">
      <ProfileHero />

      <section className="relative isolate overflow-hidden">
        <div className="mx-auto px-6 pb-10 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-10 lg:gap-12">
          <SkillsSection />

          <div className="flex flex-col gap-10">
            <SendEmailModal />
            <MiniResume />
          </div>
        </div>
      </section>
    </main>
  )
}
