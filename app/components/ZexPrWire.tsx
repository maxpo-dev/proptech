"use client";

import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import zexPrWireLogo from "@/public/image/partners/ZEX PR Wire Icon - Colored.png";

export default function ZexPrWire() {
  return (
    <div className="bg-white text-black font-sans">
      <main className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <section className="flex justify-center">
          <div className="relative w-full max-w-5xl bg-gray-100 p-6 sm:p-8 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-6">
            {/* Top-right Badge */}
            <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 rounded-full shadow-md z-10">
              Media Partner
            </div>

            {/* Logo Section */}
            <div className="w-full md:w-1/3 flex justify-center items-center">
              <a
                href="https://www.zexprwire.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={zexPrWireLogo}
                  alt="ZEX PR WIRE Logo"
                  width={250}
                  height={250}
                  className="object-contain max-h-24 sm:max-h-32"
                />
              </a>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4">
                ZEX PR WIRE
              </h2>

              <p className="text-sm sm:text-base mb-3">
                <span className="font-medium">Website:</span>{" "}
                <a
                  href="https://www.zexprwire.com"
                  className="text-blue-600 hover:underline break-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.zexprwire.com
                </a>
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                ZEX PR WIRE® is a Press Release Distribution SAAS platform that syndicates press release content to Tier 1, 2, and 3 media outlets globally. With over 500+ media partnerships, it’s a 99% automated tool ideal for marketing or PR teams, individual PR professionals, and agencies to run and manage successful campaigns.
              </p>

              {/* Optional: Social Link */}
              {/* <div className="mt-4">
                <p className="text-sm sm:text-base font-medium mb-2">Social Media:</p>
                <a
                  href="https://www.linkedin.com/company/zexprwire/"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 text-xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="mr-2" /> LinkedIn
                </a>
              </div> */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
