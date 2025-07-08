import { SimpleSpeakerRegistrationForm } from "@/app/components/speaker-registration-form"

export default function Home() {
  return (
    <main className=" mx-auto bg-slate-200 px-4 py-40 text-black">
      <h1 className="mb-6 text-center text-3xl font-bold">Speaker Registration</h1>
      <SimpleSpeakerRegistrationForm />
    </main>
  )
}

