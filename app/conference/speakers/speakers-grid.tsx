"use client"

import { useState } from "react"
import SpeakerCard from "./SpeakerCard"
import type { Speaker } from "./speakersData"

interface SpeakersGridProps {
  speakers: Speaker[]
}

export default function SpeakersGrid({ speakers }: SpeakersGridProps) {
  const [isClient, setIsClient] = useState(true)

  // Split speakers into rows of 4 for better layout control
  const rows: Speaker[][] = []
  for (let i = 0; i < speakers.length; i += 4) {
    rows.push(speakers.slice(i, i + 4))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col space-y-8">
        {rows.map((row, rowIndex) => (
          <div key={`row-${rowIndex}`} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {row.map((speaker) => (
              <div key={speaker.name}>
                <SpeakerCard
                  name={speaker.name}
                  jobTitle={speaker.jobTitle}
                  companyName={speaker.companyName}
                  linkedIn={speaker.linkedIn}
                  speakerImage={speaker.speakerImage}
                  companyLogo={speaker.companyLogo}
                  fullBio={speaker.fullBio}
                />
              </div>
            ))}
            {/* Fill in empty slots if needed to maintain grid */}
            {row.length < 4 &&
              Array.from({ length: 4 - row.length }).map((_, i) => (
                <div key={`empty-${i}`} className="hidden lg:block"></div>
              ))}
          </div>
        ))}
      </div>
    </div>
  )
}
