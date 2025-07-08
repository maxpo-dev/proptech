"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";
import { motion } from "framer-motion";

interface SpeakerCardProps {
  name: string;
  jobTitle: string;
  companyName: string;
  linkedIn: string;
  speakerImage: string;
  companyLogo: string;
  fullBio: string;
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [logoError, setLogoError] = useState(false);

  return (
    <>
      <div className="group flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
        {/* Speaker Image with Logo Overlay */}
        <div className="relative w-full overflow-visible pt-[120%]">
          <div className="absolute inset-0">
            <Image
              src={
                imageError
                  ? "/placeholder.svg?height=400&width=400"
                  : speakerImage
              }
              alt={name}
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
              onError={() => setImageError(true)}
              priority
            />
          </div>

          {/* Centered, Half-outside Logo with Margin Adjustment */}
          {logoError ? null : (
            <motion.div
              className="absolute -bottom-8 left-1/2  z-10 ml-1 flex size-16 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-white shadow-md"
              initial={{ y: 0 }}
              animate={{
                y: [0, -10, 0],
                transition: {
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "mirror",
                  ease: "easeInOut",
                },
              }}
            >
              <div className="relative size-12">
                <Image
                  src={companyLogo}
                  alt={`${companyName} Logo`}
                  fill
                  className="object-contain"
                  onError={() => setLogoError(true)}
                />
              </div>
            </motion.div>
          )}
        </div>

        {/* Speaker Details */}
        <div className="flex grow flex-col p-5 pt-10">
          <div className="grow">
            <h2 className="line-clamp-1 text-lg font-bold text-gray-900">
              {name}
            </h2>
            <p className="line-clamp-1 text-sm font-semibold text-gray-800">
              {jobTitle}
            </p>
            <p className="mt-1 line-clamp-1 text-xs italic text-gray-500">
              {companyName}
            </p>
          </div>

          <div className="mt-auto flex items-center justify-between">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsModalOpen(true)}
              className="transition-colors duration-300 hover:bg-gray-100 hover:text-gray-900"
            >
              View More
            </Button>

            {linkedIn && (
              <Link
                href={linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 transition-transform duration-300 hover:scale-105 hover:text-blue-800"
              >
                <Linkedin size={20} />
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Modal with full speaker details */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="z-[10000] max-h-screen max-w-3xl  overflow-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">{name}</DialogTitle>
          </DialogHeader>

          <div className="z-[10000] mt-4 grid grid-cols-1 gap-6  md:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="relative w-full overflow-visible rounded-lg pt-[100%]">
                <div className="absolute inset-0">
                  <Image
                    src={
                      imageError
                        ? "/placeholder.svg?height=400&width=400"
                        : speakerImage
                    }
                    alt={name}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-contain object-center"
                    onError={() => setImageError(true)}
                  />
                </div>

                {/* Centered, Half-outside Logo with Margin Adjustment in Modal */}
                {logoError ? null : (
                <motion.div
                  className="absolute -bottom-8 left-1/2  z-10 ml-1 flex size-16 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-white shadow-md"
                  initial={{ y: 0 }}
                  animate={{
                    y: [0, -10, 0],
                    transition: {
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "mirror",
                      ease: "easeInOut",
                    },
                  }}
                >
                  <div className="relative size-12">
                    <Image
                      src={
                        logoError
                          ? "/placeholder.svg?height=60&width=60"
                          : companyLogo
                      }
                      alt={`${companyName} Logo`}
                      fill
                      className="object-contain"
                      onError={() => setLogoError(true)}
                    />
                  </div>
                </motion.div>
                )}
              </div>

              <div className="mt-10 w-full text-center">
                <h3 className="text-base font-semibold text-gray-900">
                  {jobTitle}
                </h3>
                <p className="text-sm italic text-gray-600">{companyName}</p>

                {linkedIn && (
                  <Link
                    href={linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center justify-center gap-2 text-blue-600 hover:text-blue-800"
                  >
                    <Linkedin size={20} />
                    <span>LinkedIn Profile</span>
                  </Link>
                )}
              </div>
            </div>

            <div className="md:col-span-2">
              <h3 className="mb-2 text-lg font-semibold">Biography</h3>
              <p className="whitespace-pre-line text-gray-700">{fullBio}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
