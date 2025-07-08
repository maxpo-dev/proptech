"use client";

import Image from "next/image";
import entrepreneurLogo from "@/public/image/partners/entrepreneurme.jpg"; // Update with actual logo path

export default function EntrepreneurME() {
  return (
    <div className="bg-white text-black ">
      <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Partner Card */}
        <section className="flex justify-center">
          <div className="hover:shadow-3xl relative flex w-full max-w-5xl flex-col items-center gap-6 rounded-2xl bg-gray-100 p-6 shadow-2xl transition-transform hover:scale-[1.01] sm:p-8 md:flex-row md:gap-12">
            {/* Badge */}
            <div className="absolute right-4 top-4 z-10 rounded-full bg-[#2563EB] px-3 py-1 text-xs font-semibold text-white shadow-md sm:text-sm">
              Media Partner
            </div>

            {/* Logo */}
            <div className="flex w-full justify-center md:w-1/3 md:justify-start">
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
                  className="mx-auto size-auto max-h-24 object-contain sm:max-h-32 md:mx-0"
                />
              </a>
            </div>

            {/* Description */}
            <div className="w-full space-y-4 text-center md:w-2/3 md:text-left">
              <h2 className="break-words text-2xl font-bold text-[#2563EB] sm:text-3xl">
                Entrepreneur ME
              </h2>

              <p className="text-base sm:text-lg">
                Website:{" "}
                <a
                  href="https://www.entrepreneur.com/en-ae"
                  className="break-words text-[#2563EB] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.entrepreneur.com/en-ae
                </a>
              </p>

              <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                Entrepreneur Middle East is the guide for the region&apos;s entrepreneurs
                and business-minded readership. It is the flagship publication of BNC
                Publishing, officially licensed by the US-based business and growth title,
                Entrepreneur.
              </p>

              <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                Launched in February 2014 together with its subsidiary, Entrepreneur Al
                Arabiya, Entrepreneur Middle East is now considered an authoritative read
                in the MENA region for business people, government entities, technology
                enthusiasts, and startup founders.
              </p>

              <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                <strong>Entrepreneur Middle East</strong> – Start, run and grow your business.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
