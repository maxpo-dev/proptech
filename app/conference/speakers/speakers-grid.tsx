"use client"

import SpeakerCard from "./SpeakerCard"

interface Speaker {
  id: string
  name: string
  jobTitle: string
  companyName: string
  linkedIn: string
  speakerImage: string
  companyLogo: string
  fullBio: string
}

interface SpeakersGridProps {
  speakers: Speaker[]
}

export default function SpeakersGrid({ speakers }: SpeakersGridProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {speakers.map((speaker) => (
          <SpeakerCard
            key={speaker.id}
            name={speaker.name}
            jobTitle={speaker.jobTitle}
            companyName={speaker.companyName}
            linkedIn={speaker.linkedIn}
            speakerImage={speaker.speakerImage}
            companyLogo={speaker.companyLogo}
            fullBio={speaker.fullBio}
          />
        ))}
      </div>
    </div>
  )
}
