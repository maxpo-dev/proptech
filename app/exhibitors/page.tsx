// import { SimpleSpeakerRegistrationForm } from "@/app/components/speaker-registration-form"
import {ExhibitorRegistrationForm}  from "../components/exhibitor-registration-form"

export default function Home() {
  return (
    <main className=" mx-auto bg-slate-200  px-4 py-40 text-black">
      <h1 className="mb-6 text-center text-3xl font-bold">Exhibitor Registration</h1>
      <ExhibitorRegistrationForm />
    </main>
  )
}

