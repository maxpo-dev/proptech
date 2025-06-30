"use client";

import Image from "next/image";
import mefmaLogo from "@/public/image/partners/MEFMA Bilingual Logo-01trans.png";

export default function MiddleEastFacility() {
  return (
    <div className="bg-white text-black font-serif">
      <main className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Partner Card */}
        <section className="flex justify-center">
          <div className="relative w-full max-w-5xl bg-gray-100 p-6 sm:p-8 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-6 md:gap-12 transition-transform hover:scale-[1.01] hover:shadow-3xl">
            {/* Badge */}
            <div className="absolute top-4 right-4 bg-blue-700 text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-full shadow-md z-10">
              Association Partner
            </div>

            {/* Logo */}
            <div className="w-full md:w-1/3 flex justify-center md:justify-start">
              <a
                href="https://www.mefma.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="block max-w-[250px] md:max-w-full"
              >
                <Image
                  src={mefmaLogo}
                  alt="MEFMA Logo"
                  width={300}
                  height={300}
                  className="object-contain w-auto h-auto max-h-24 sm:max-h-32 mx-auto md:mx-0"
                />
              </a>
            </div>

            {/* Description */}
            <div className="w-full md:w-2/3 text-center md:text-left space-y-4 md:p-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 break-words">
                Middle East Facility Management Association (MEFMA)
              </h2>

              <p className="text-base sm:text-lg">
                Website:{" "}
                <a
                  href="https://www.mefma.org/"
                  className="text-blue-700 hover:underline break-words"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.mefma.org
                </a>
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                The Middle East Facility Management Association (MEFMA) is a professional
                membership-based body aimed to unify the facility management industry and help
                advance the FM sector in the Middle East.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                MEFMA focuses on developing and promoting facility management best practices and
                professional standards in the region, through membership packages with unique
                benefits, educational opportunities via professional training programs and
                certifications, reports & research studies on latest industry trends, and extensive
                regional events being a knowledge sharing platform, thereby adding value to its
                members and FM industry professionals.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                Headquartered in Dubai (UAE) whilst operating around the GCC and Middle East
                region, MEFMA was established in 2009 as a nonprofit association and formed under
                The Dubai Association Centre (DAC), which has been established by the Dubai
                Chamber of Commerce & Industry, Dubai Business Events (part of Department for
                Tourism and Commerce Marketing) and the Dubai World Trade Centre. MEFMA is also
                a registered member of Global Facility Management Association (Global FM).
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                PO Box 9525, Dubai, UAE<br />
                Email:{" "}
                <a href="mailto:info@mefma.org" className="text-blue-700 hover:underline">
                  info@mefma.org
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
