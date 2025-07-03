"use client";

import Image from "next/image";
import remtimesLogo from "@/public/image/partners/REM Times logo_2023.png";

export default function RemTimes() {
  return (
    <div className="bg-white text-black ">
      <main className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Partner Card */}
        <section className="flex justify-center">
          <div className="relative w-full max-w-5xl bg-gray-100 p-6 sm:p-8 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-6 md:gap-12">
            {/* Badge */}
            <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-full shadow-md z-10">
              Media Partner
            </div>

            {/* Logo */}
            <div className="w-full md:w-1/3 flex justify-center md:justify-start">
              <a
                href="https://www.remtimes.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block max-w-[250px] md:max-w-full"
              >
                <Image
                  src={remtimesLogo}
                  alt="REM TIMES Logo"
                  width={300}
                  height={300}
                  className="object-contain max-h-24 sm:max-h-32 mx-auto md:mx-0"
                />
              </a>
            </div>

            {/* Description */}
            <div className="w-full md:w-2/3 text-center md:text-left space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 break-words">
                REM TIMES
              </h2>

              <p className="text-base sm:text-lg">
                Website:{" "}
                <a
                  href="https://www.remtimes.com/"
                  className="text-blue-600 hover:underline break-words"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.remtimes.com
                </a>
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                REM TIMES, a flagship initiative of Crestus Publications, is the premier global hub
                for professionals in the dynamic and ever-evolving Real Estate Market. Reaching over
                50,000 industry experts worldwide, REM TIMES delivers the latest reports, articles,
                key trends, thought-provoking insights, and exclusive updates that shape the sector.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                Built on a foundation of knowledge, REM TIMES adds value across all facets of the
                real estate industry, including Real Estate Developments, Investments, Brokerage,
                Community Management, Facilities Management, Property Management, and supporting
                Service Industries.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                Through diverse multimedia channels, REM TIMES provides exclusive access to facility
                insights, interviews with industry leaders, and cutting-edge technological
                advancements. Our mission is to be the leading voice of the industry, creating value
                for contributors and readers alike.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
