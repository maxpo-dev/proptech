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

  const Placeholder = "/placeholder.svg?height=400&width=400";

  return (
    <>
      <div className="group relative flex h-full flex-col rounded-2xl bg-white shadow-sm hover:shadow-lg overflow-hidden">
        {/* Image */}
        <div className="relative w-full pt-[120%]">
          <Image
            src={imageError ? Placeholder : speakerImage}
            alt={name}
            fill
            onError={() => setImageError(true)}
            className="object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-105"
          />

          {/* Centered Logo */}
          {!logoError && (
            <motion.div
              className="absolute -bottom-8 overflow-hidden z-10 flex size-16 -translate-x-1/2 items-center justify-center rounded-full border-2 border-white bg-white shadow-md"
              style={{ left: "40%" }}
              initial={{ y: 0 }}
              animate={{
                y: [0, -8, 0],
                transition: {
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <div className="relative size-14">
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

        {/* Content */}
        <div className="flex flex-col px-5 pb-6 pt-10 text-center">
          <h2 className="text-lg font-bold text-gray-900">{name}</h2>
          <p className="text-sm text-gray-700">{jobTitle}</p>
          <p className="text-xs italic text-gray-500">{companyName}</p>

          <div className="mt-3 flex justify-center items-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white text-sm font-semibold py-2 px-5 rounded-full shadow-md transition-all duration-300"
            >
              View More
            </button>

            {linkedIn && (
              <Link
                href={linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 transition-transform hover:scale-105 hover:text-blue-800"
              >
                <Linkedin size={20} />
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
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
                    className="absolute -bottom-8 z-10 ml-1 flex size-16 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-white shadow-md"
                    initial={{ y: 0 }}
                    style={{ left: "35%" }}
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
              <div className="mt-8 text-center">
                <p className="text-base font-medium text-gray-900">
                  {jobTitle}
                </p>
                <p className="text-sm italic text-gray-500">{companyName}</p>

                {linkedIn && (
                  <Link
                    href={linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
                  >
                    <Linkedin size={20} />
                    <span className="pt-1">LinkedIn Profile</span>
                  </Link>
                )}
              </div>
            </div>

            {/* Right column */}
            <div className="md:col-span-2">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                Biography
              </h3>
              <p className="text-gray-700 whitespace-pre-line">{fullBio}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
