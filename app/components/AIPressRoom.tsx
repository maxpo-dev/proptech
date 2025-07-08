"use client";

import Image from "next/image";
import aiPressRoomLogo from "@/public/image/partners/AIPressRoom_1500_1500_transparent-1.png";

export default function AIPressRoom() {
  return (
    <div className="bg-white text-black ">
      <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Card Container */}
        <section className="flex justify-center">
          <div className="relative flex w-full max-w-5xl flex-col items-center gap-6 rounded-2xl bg-gray-100 p-6 shadow-2xl sm:p-8 md:flex-row">
            {/* Badge */}
            <div className="absolute right-4 top-4 z-10 rounded-full bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white shadow-md sm:text-sm">
              Media Partner
            </div>

            {/* Logo Section */}
            <div className="flex w-full items-center justify-center md:w-1/3">
              <a
                href="https://aipressroom.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={aiPressRoomLogo}
                  alt="AI PressRoom Logo"
                  width={250}
                  height={250}
                  className="max-h-24 object-contain sm:max-h-32"
                />
              </a>
            </div>

            {/* Content Section */}
            <div className="w-full text-center md:w-2/3 md:text-left">
              <h2 className="mb-4 text-2xl font-bold text-blue-900 sm:text-3xl">
                AIPressRoom
              </h2>

              <p className="mb-3 text-sm sm:text-base">
                <span className="font-medium">Website:</span>{" "}
                <a
                  href="https://aipressroom.com"
                  className="break-words text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AIPressRoom - Trusted AI News, Interviews, Events & Insights
                </a>
              </p>

              <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                AIPressRoom spotlights AI innovation through exclusive interviews, global event coverage, expert insights, and press releases.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
