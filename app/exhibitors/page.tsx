// import { SimpleSpeakerRegistrationForm } from "@/app/components/speaker-registration-form"
import { ExhibitorRegistrationForm } from "../components/exhibitor-registration-form"

export default function Home() {
  return (
    <main className=" mx-auto py-40 px-4 text-black bg-slate-200">
      <h1 className="text-3xl font-bold mb-6 text-center">Exhibitor Registration</h1>
      <ExhibitorRegistrationForm />
    </main>
  )
}

