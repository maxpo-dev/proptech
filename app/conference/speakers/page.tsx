"use client"

import React from "react"
import { useRouter } from "next/navigation"
import SpeakerCard from "./SpeakerCard"
import speakers, { type Speaker } from "./speakersData"

const SpeakersPage: React.FC = () => {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h1 className="relative z-10  text-center text-4xl font-bold text-black">
          Meet Our Speakers
        </h1>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {speakers.map((speaker: Speaker, index: number) => (
            <SpeakerCard
              key={index}
              {...speaker}
              speakerImage={
                speaker.speakerImage.startsWith("/")
                  ? speaker.speakerImage
                  : `/${speaker.speakerImage}`
              }
              companyLogo={
                speaker.companyLogo.startsWith("/")
                  ? speaker.companyLogo
                  : `/${speaker.companyLogo}`
              }
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button
            onClick={() => router.push("/register?type=participants")}
            className="rounded-lg bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition-all duration-300 hover:bg-blue-700"
          >
            Enquire Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default SpeakersPage
