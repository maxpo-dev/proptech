"use client";

import Image from "next/image";
import aiPressRoomLogo from "@/public/image/partners/AIPressRoom_1500_1500_transparent-1.png";

export default function AIPressRoom() {
  return (
    <div className="bg-white text-black font-serif">
      <main className="container mx-auto py-16 px-4">
        {/* Single Card for Partner Details */}
        <section className="flex justify-center">
          <div className="relative max-w-4xl bg-gray-100 p-8 rounded-lg shadow-2xl flex flex-col md:flex-row items-center">

            {/* Top-right Badge */}
            <div className="absolute top-4 right-4 bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full shadow-md z-10">
              Media Partner
            </div>

            {/* Logo Section */}
            <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
              <Image
                src={aiPressRoomLogo}
                alt="AI PressRoom Logo"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>

            {/* Details Section */}
            <div className="md:w-2/3 md:pl-10">
              <h2 className="text-4xl font-bold mb-4">AI PressRoom</h2>
              <p className="text-xl mb-4">
                Website:{" "}
                <a
                  href="https://aipressroom.com"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AIPressRoom - Trusted AI News, Interviews, Events & Insights
                </a>
              </p>
              <p className="text-lg leading-relaxed">
                AIPressRoom spotlights AI innovation through exclusive interviews, global event coverage, expert insights, and press releases.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
