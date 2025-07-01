"use client";

import Image, { StaticImageData } from "next/image";

interface PartnerCardProps {
  partnerName: string;
  logo: StaticImageData;
  websiteUrl: string;
  websiteDisplayText: string;
  badgeText?: string;
  description: string;
}

export default function PartnerCard({
  partnerName,
  logo,
  websiteUrl,
  websiteDisplayText,
  badgeText = "Media Partner",
  description,
}: PartnerCardProps) {
  return (
    <div className="bg-white text-black font-serif">
      <main className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <section className="flex justify-center">
          <div className="relative w-full max-w-5xl bg-gray-100 p-6 sm:p-8 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-6 md:gap-12 transition-transform hover:scale-[1.01] hover:shadow-3xl">
            {/* Badge */}
            {badgeText && (
              <div className="absolute top-4 right-4 bg-[#2563EB] text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-full shadow-md z-10">
                {badgeText}
              </div>
            )}

            {/* Logo */}
            <div className="w-full md:w-1/3 flex justify-center md:justify-start">
              <a
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block max-w-[250px] md:max-w-full"
              >
                <Image
                  src={logo}
                  alt={`${partnerName} Logo`}
                  width={300}
                  height={300}
                  className="object-contain w-auto h-auto max-h-24 sm:max-h-32 mx-auto md:mx-0"
                />
              </a>
            </div>

            {/* Description */}
            <div className="w-full md:w-2/3 text-center md:text-left space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2563EB] break-words">
                {partnerName}
              </h2>

              <p className="text-base sm:text-lg">
                Website:{" "}
                <a
                  href={websiteUrl}
                  className="text-[#2563EB] hover:underline break-words"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {websiteDisplayText}
                </a>
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                {description}
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
