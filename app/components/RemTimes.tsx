"use client";

import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import remtimesLogo from "@/public/image/partners/REM Times logo_2023.png"; // ✅ Ensure you add this image

export default function RemTimes() {
  return (
    <div className="bg-white text-black font-serif">
      <main className="container mx-auto py-16 px-4">
        {/* Partner Card */}
        <section className="flex justify-center">
          <div className="relative max-w-4xl bg-gray-100 p-8 rounded-lg shadow-2xl flex flex-col md:flex-row items-center">
            {/* Badge */}
            <div className="absolute top-4 right-4 bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full shadow-md z-10">
              Media Partner
            </div>

            {/* Logo */}
            <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
              <a
                href="https://www.remtimes.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={remtimesLogo}
                  alt="REM TIMES Logo"
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </a>
            </div>

            {/* Description */}
            <div className="md:w-2/3 md:pl-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center md:text-left break-words">
                REM TIMES
              </h2>
              <p className="text-lg mb-4 text-center md:text-left">
                Website:{" "}
                <a
                  href="https://www.remtimes.com/"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.remtimes.com
                </a>
              </p>
              <p className="text-lg leading-relaxed mb-4 text-center md:text-left">
                REM TIMES, a flagship initiative of Crestus Publications, is the premier global hub
                for professionals in the dynamic and ever-evolving Real Estate Market. Reaching over
                50,000 industry experts worldwide, REM TIMES delivers the latest reports, articles,
                key trends, thought-provoking insights, and exclusive updates that shape the sector.
              </p>
              <p className="text-lg leading-relaxed mb-4 text-center md:text-left">
                Built on a foundation of knowledge, REM TIMES adds value across all facets of the
                real estate industry, including Real Estate Developments, Investments, Brokerage,
                Community Management, Facilities Management, Property Management, and supporting
                Service Industries.
              </p>
              <p className="text-lg leading-relaxed text-center md:text-left">
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
