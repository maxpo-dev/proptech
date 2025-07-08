"use client";

import Image from "next/image";
import remtimesLogo from "@/public/image/partners/REM Times logo_2023.png";

export default function RemTimes() {
  return (
    <div className="bg-white text-black ">
      <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Partner Card */}
        <section className="flex justify-center">
          <div className="relative flex w-full max-w-5xl flex-col items-center gap-6 rounded-2xl bg-gray-100 p-6 shadow-2xl sm:p-8 md:flex-row md:gap-12">
            {/* Badge */}
            <div className="absolute right-4 top-4 z-10 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white shadow-md sm:text-sm">
              Media Partner
            </div>

            {/* Logo */}
            <div className="flex w-full justify-center md:w-1/3 md:justify-start">
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
                  className="mx-auto max-h-24 object-contain sm:max-h-32 md:mx-0"
                />
              </a>
            </div>

            {/* Description */}
            <div className="w-full space-y-4 text-center md:w-2/3 md:text-left">
              <h2 className="break-words text-2xl font-bold text-blue-900 sm:text-3xl">
                REM TIMES
              </h2>

              <p className="text-base sm:text-lg">
                Website:{" "}
                <a
                  href="https://www.remtimes.com/"
                  className="break-words text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.remtimes.com
                </a>
              </p>

              <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                REM TIMES, a flagship initiative of Crestus Publications, is the premier global hub
                for professionals in the dynamic and ever-evolving Real Estate Market. Reaching over
                50,000 industry experts worldwide, REM TIMES delivers the latest reports, articles,
                key trends, thought-provoking insights, and exclusive updates that shape the sector.
              </p>

              <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                Built on a foundation of knowledge, REM TIMES adds value across all facets of the
                real estate industry, including Real Estate Developments, Investments, Brokerage,
                Community Management, Facilities Management, Property Management, and supporting
                Service Industries.
              </p>

              <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
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
