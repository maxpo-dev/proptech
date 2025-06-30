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
      <div className="bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group h-full flex flex-col">
        {/* Speaker Image with Logo Overlay */}
        <div className="relative w-full pt-[120%] overflow-visible">
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
              className="absolute -bottom-8 left-1/2  ml-1 w-16 h-16 rounded-full bg-white shadow-md overflow-hidden border-2 border-white flex items-center justify-center z-10"
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
              <div className="relative w-12 h-12">
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
        <div className="p-5 pt-10 flex-grow flex flex-col">
          <div className="flex-grow">
            <h2 className="text-lg font-bold text-gray-900 line-clamp-1">
              {name}
            </h2>
            <p className="text-sm text-gray-800 font-semibold line-clamp-1">
              {jobTitle}
            </p>
            <p className="text-xs text-gray-500 mt-1 italic line-clamp-1">
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
                className="text-blue-600 hover:text-blue-800 transition-transform duration-300 hover:scale-105"
              >
                <Linkedin size={20} />
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Modal with full speaker details */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-3xl max-h-[100vh] overflow-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">{name}</DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            <div className="flex flex-col items-center">
              <div className="relative w-full pt-[100%] overflow-visible rounded-lg">
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
                  className="absolute -bottom-8 left-1/2  ml-1 w-16 h-16 rounded-full bg-white shadow-md overflow-hidden border-2 border-white flex items-center justify-center z-10"
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
                  <div className="relative w-12 h-12">
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
                <h3 className="font-semibold text-gray-900 text-base">
                  {jobTitle}
                </h3>
                <p className="text-sm text-gray-600 italic">{companyName}</p>

                {linkedIn && (
                  <Link
                    href={linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-blue-600 hover:text-blue-800 mt-4"
                  >
                    <Linkedin size={20} />
                    <span>LinkedIn Profile</span>
                  </Link>
                )}
              </div>
            </div>

            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold mb-2">Biography</h3>
              <p className="text-gray-700 whitespace-pre-line">{fullBio}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
