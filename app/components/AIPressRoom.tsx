"use client";

import Image from "next/image";
import aiPressRoomLogo from "@/public/image/partners/AIPressRoom_1500_1500_transparent-1.png";

export default function AIPressRoom() {
  return (
    <div className="bg-white text-black font-sans">
      <main className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Card Container */}
        <section className="flex justify-center">
          <div className="relative w-full max-w-5xl bg-gray-100 p-6 sm:p-8 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-6">
            {/* Badge */}
            <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full shadow-md z-10">
              Media Partner
            </div>

            {/* Logo Section */}
            <div className="w-full md:w-1/3 flex justify-center items-center">
              <Image
                src={aiPressRoomLogo}
                alt="AI PressRoom Logo"
                width={250}
                height={250}
                className="object-contain max-h-24 sm:max-h-32"
              />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4">
                AI PressRoom
              </h2>

              <p className="text-sm sm:text-base mb-3">
                <span className="font-medium">Website:</span>{" "}
                <a
                  href="https://aipressroom.com"
                  className="text-blue-600 hover:underline break-words"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AIPressRoom - Trusted AI News, Interviews, Events & Insights
                </a>
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                AIPressRoom spotlights AI innovation through exclusive interviews, global event coverage, expert insights, and press releases.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
