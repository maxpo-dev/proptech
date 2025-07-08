"use client";

import Image from "next/image";
import zexPrWireLogo from "@/public/image/partners/ZEX PR Wire Icon - Colored.png";

export default function ZexPrWire() {
  return (
    <div className="bg-white text-black">
      <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <section className="flex justify-center">
          <div className="relative flex w-full max-w-5xl flex-col items-center gap-6 rounded-2xl bg-gray-100 p-6 shadow-2xl sm:p-8 md:flex-row">
            {/* Top-right Badge */}
            <div className="absolute right-4 top-4 z-10 rounded-full bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white shadow-md sm:px-4 sm:text-sm">
              Media Partner
            </div>

            {/* Logo Section */}
            <div className="flex w-full items-center justify-center md:w-1/3">
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
                  className="max-h-24 object-contain sm:max-h-32"
                />
              </a>
            </div>

            {/* Content Section */}
            <div className="w-full text-center md:w-2/3 md:text-left">
              <h2 className="mb-4 text-2xl font-bold text-blue-900 sm:text-3xl">
                ZEX PR WIRE
              </h2>

              <p className="mb-3 text-sm sm:text-base">
                <span className="font-medium">Website:</span>{" "}
                <a
                  href="https://www.zexprwire.com"
                  className="break-all text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.zexprwire.com
                </a>
              </p>

              <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
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
