"use client";

import Image from "next/image";
import entrepreneurLogo from "@/public/image/partners/entrepreneurme.jpg"; // Update with actual logo path

export default function EntrepreneurME() {
  return (
    <div className="bg-white text-black font-serif">
      <main className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Partner Card */}
        <section className="flex justify-center">
          <div className="relative w-full max-w-5xl bg-gray-100 p-6 sm:p-8 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-6 md:gap-12 transition-transform hover:scale-[1.01] hover:shadow-3xl">
            {/* Badge */}
            <div className="absolute top-4 right-4 bg-[#2563EB] text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-full shadow-md z-10">
              Media Partner
            </div>

            {/* Logo */}
            <div className="w-full md:w-1/3 flex justify-center md:justify-start">
              <a
                href="https://www.entrepreneur.com/en-ae"
                target="_blank"
                rel="noopener noreferrer"
                className="block max-w-[250px] md:max-w-full"
              >
                <Image
                  src={entrepreneurLogo}
                  alt="Entrepreneur Middle East Logo"
                  width={300}
                  height={300}
                  className="object-contain w-auto h-auto max-h-24 sm:max-h-32 mx-auto md:mx-0"
                />
              </a>
            </div>

            {/* Description */}
            <div className="w-full md:w-2/3 text-center md:text-left space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2563EB] break-words">
                Entrepreneur ME
              </h2>

              <p className="text-base sm:text-lg">
                Website:{" "}
                <a
                  href="https://www.entrepreneur.com/en-ae"
                  className="text-[#2563EB] hover:underline break-words"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.entrepreneur.com/en-ae
                </a>
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                Entrepreneur Middle East is the guide for the region&apos;s entrepreneurs
                and business-minded readership. It is the flagship publication of BNC
                Publishing, officially licensed by the US-based business and growth title,
                Entrepreneur.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                Launched in February 2014 together with its subsidiary, Entrepreneur Al
                Arabiya, Entrepreneur Middle East is now considered an authoritative read
                in the MENA region for business people, government entities, technology
                enthusiasts, and startup founders.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                <strong>Entrepreneur Middle East</strong> – Start, run and grow your business.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
