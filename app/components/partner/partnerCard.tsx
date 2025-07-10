"use client";

import Image, { StaticImageData } from "next/image";

interface PartnerCardProps {
  name: string;
  logo: StaticImageData;
  website: string;
  email?: string;
  websiteDisplayText: string;
  badgeText?: string;
  description: string [];
}

export default function PartnerCard({
  name,
  logo,
  email,
  website,
  websiteDisplayText,
  badgeText = "Media Partner",
  description=[],
}: PartnerCardProps) {
  return (
    <div className="bg-white text-black ">
      <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <section className="flex justify-center">
          <div className="hover:shadow-3xl relative flex w-full max-w-5xl flex-col items-center gap-6 rounded-2xl bg-gray-100 p-6 shadow-2xl transition-transform hover:scale-[1.01] sm:p-8 md:flex-row md:gap-12">
            {/* Badge */}
            {badgeText && (
              <div className="absolute right-4 top-4 z-10 rounded-full bg-[#2563EB] px-3 py-1 text-xs font-semibold text-white shadow-md sm:text-sm">
                {badgeText}
              </div>
            )}

            {/* Logo */}
            <div className="flex w-full justify-center md:w-1/3 md:justify-start">
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="block max-w-[250px] md:max-w-full"
              >
                <Image
                  src={logo}
                  alt={`${name} Logo`}
                  width={300}
                  height={300}
                  className="mx-auto size-auto max-h-30 object-contain sm:max-h-42"
                />
              </a>
            </div>

            {/* Description */}
            <div className="w-full space-y-4 text-center md:w-2/3 p-4 md:text-left">
              <h2 className="break-words text-2xl font-bold text-[#2563EB] sm:text-3xl">
                {name}
              </h2>

              <p className="text-base sm:text-lg">
                Website:{" "}
                <a
                  href={website}
                  className="break-words text-[#2563EB] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {websiteDisplayText}
                </a>
              </p>

                  {description.map((text, i) => (
            <p key={i} className="text-sm leading-relaxed text-gray-700 sm:text-base">
              {text}
            </p>
          ))}
               {email && (
            <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
              Email:{" "}
              <a href={`mailto:${email}`} className="text-blue-700 hover:underline">
                {email}
              </a>
            </p>
          )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
