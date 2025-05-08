"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Linkedin } from "lucide-react"

interface SpeakerCardProps {
  name: string
  jobTitle: string
  companyName: string
  linkedIn: string
  speakerImage: string
  companyLogo: string
  fullBio: string
}

export default function SpeakerCard({
  name,
  jobTitle,
  companyName,
  linkedIn,
  speakerImage,
  companyLogo,
  fullBio,
}: SpeakerCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300 transform hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] group">
        {/* Speaker Image */}
        <div className="relative w-full aspect-[4/3] overflow-hidden">
  <Image
    src={speakerImage || "/placeholder.svg"}
    alt={name}
    fill
    className="object-cover transition-transform duration-300 group-hover:scale-110"
  />
</div>
        {/* Speaker Details */}
        <div className="p-4">
          <h2 className="text-lg font-bold text-gray-900 line-clamp-1">{name}</h2>
          <p className="text-sm text-gray-600 line-clamp-1">{jobTitle}</p>
          <p className="text-sm text-gray-500 line-clamp-1">{companyName}</p>

          {/* Company Logo */}
          <div className="h-12 flex items-center mt-2">
            <Image
              src={companyLogo || "/placeholder.svg"}
              alt={`${companyName} Logo`}
              width={80}
              height={40}
              className="max-h-full object-contain"
            />
          </div>

          <div className="mt-4 flex items-center justify-between">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsModalOpen(true)}
              className="transition-colors duration-300 hover:bg-gray-100 hover:text-gray-900"
            >
              View More
            </Button>

            <Link
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-transform duration-300 hover:scale-110"
            >
              <Linkedin size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Modal with full speaker details */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">{name}</DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            <div className="flex flex-col items-center">
              <div className="relative w-full aspect-square overflow-hidden rounded-lg">
                <Image src={speakerImage || "/placeholder.svg"} alt={name} fill className="object-cover" />
              </div>

              <div className="mt-4 w-full">
                <h3 className="font-semibold text-gray-900">{jobTitle}</h3>
                <p className="text-gray-600">{companyName}</p>

                <div className="h-16 flex items-center justify-center mt-2">
                  <Image
                    src={companyLogo || "/placeholder.svg"}
                    alt={`${companyName} Logo`}
                    width={120}
                    height={60}
                    className="max-h-full object-contain"
                  />
                </div>

                <Link
                  href={linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-blue-600 hover:text-blue-800 mt-4"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn Profile</span>
                </Link>
              </div>
            </div>

            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold mb-2">Biography</h3>
              <p className="text-gray-700">{fullBio}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
