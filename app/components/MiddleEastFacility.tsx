"use client";

import Image from "next/image";
import mefmaLogo from "@/public/image/partners/MEFMA Bilingual Logo-01trans.png";

export default function MiddleEastFacility() {
  return (
    <div className="bg-white text-black ">
      <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Partner Card */}
        <section className="flex justify-center">
          <div className="hover:shadow-3xl relative flex w-full max-w-5xl flex-col items-center gap-6 rounded-2xl bg-gray-100 p-6 shadow-2xl transition-transform hover:scale-[1.01] sm:p-8 md:flex-row md:gap-12">
            {/* Badge */}
            <div className="absolute right-4 top-4 z-10 rounded-full bg-blue-700 px-3 py-1 text-xs font-semibold text-white shadow-md sm:text-sm">
              Supporting Partner
            </div>

            {/* Logo */}
            <div className="flex w-full justify-center md:w-1/3 md:justify-start">
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
                  className="mx-auto size-auto max-h-24 object-contain sm:max-h-32 md:mx-0"
                />
              </a>
            </div>

            {/* Description */}
            <div className="w-full space-y-4 text-center md:w-2/3 md:p-5 md:text-left">
              <h2 className="break-words text-2xl font-bold text-blue-900 sm:text-3xl">
                Middle East Facility Management Association (MEFMA)
              </h2>

              <p className="text-base sm:text-lg">
                Website:{" "}
                <a
                  href="https://www.mefma.org/"
                  className="break-words text-blue-700 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.mefma.org
                </a>
              </p>

              <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                The Middle East Facility Management Association (MEFMA) is a professional
                membership-based body aimed to unify the facility management industry and help
                advance the FM sector in the Middle East.
              </p>

              <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                MEFMA focuses on developing and promoting facility management best practices and
                professional standards in the region, through membership packages with unique
                benefits, educational opportunities via professional training programs and
                certifications, reports & research studies on latest industry trends, and extensive
                regional events being a knowledge sharing platform, thereby adding value to its
                members and FM industry professionals.
              </p>

              <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                Headquartered in Dubai (UAE) whilst operating around the GCC and Middle East
                region, MEFMA was established in 2009 as a nonprofit association and formed under
                The Dubai Association Centre (DAC), which has been established by the Dubai
                Chamber of Commerce & Industry, Dubai Business Events (part of Department for
                Tourism and Commerce Marketing) and the Dubai World Trade Centre. MEFMA is also
                a registered member of Global Facility Management Association (Global FM).
              </p>

              <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
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
