import AboutConferenceContent from '@/app/components/About-conference'
import ConferenceThemes from '@/app/components/conference-themes'
// import Header from '@/app/components/subnavi'

export default function AboutConference() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* <Header /> */}
      <AboutConferenceContent />
      <ConferenceThemes />
    </main>
  )
}

