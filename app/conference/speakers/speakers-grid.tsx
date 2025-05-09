"use client"

import { useState } from "react"
import SpeakerCard from "./SpeakerCard"
import type { Speaker } from "./speakersData"

interface SpeakersGridProps {
  speakers: Speaker[]
}

export default function SpeakersGrid({ speakers }: SpeakersGridProps) {
  const [isClient, setIsClient] = useState(true)

  // Split speakers into rows of 2 for better layout control
  const rows: Speaker[][] = []
  for (let i = 0; i < speakers.length; i += 2) {
    rows.push(speakers.slice(i, i + 2))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col space-y-12">
        {rows.map((row, rowIndex) => (
          <div key={`row-${rowIndex}`} className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
            {row.map((speaker) => (
              <div key={speaker.name} className="flex-1">
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
            {/* If we have an odd number of speakers in the last row, add an empty div to maintain layout */}
            {row.length === 1 && <div className="flex-1 hidden md:block"></div>}
          </div>
        ))}
      </div>
    </div>
  )
}
