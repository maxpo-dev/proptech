"use client";

import Image from "next/image";
import timesofAILogo from "@/public/image/partners/timesofai 01.png"; // Replace with actual logo path

export default function TimesofAI() {
  return (
    <div className="bg-white text-black ">
      <main className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Partner Card */}
        <section className="flex justify-center">
          <div className="relative w-full max-w-5xl bg-gray-100 p-6 sm:p-8 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-6 md:gap-12 transition-transform hover:scale-[1.01] hover:shadow-3xl">
            {/* Badge */}
            <div className="absolute top-4 right-4 bg-[#2563EB] text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-full shadow-md z-10">
              Media Partner
            </div>

            {/* Logo */}
            <div className="w-full md:w-1/3 flex justify-center md:justify-start">
              <a
                href="https://www.timesofai.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block max-w-[250px] md:max-w-full"
              >
                <Image
                  src={timesofAILogo}
                  alt="Times of AI Logo"
                  width={300}
                  height={300}
                  className="object-contain w-auto h-auto max-h-24 sm:max-h-32 mx-auto md:mx-0"
                />
              </a>
            </div>

            {/* Description */}
            <div className="w-full md:w-2/3 text-center md:text-left space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2563EB] break-words">
                Times of AI
              </h2>

              <p className="text-base sm:text-lg">
                Website:{" "}
                <a
                  href="https://www.timesofai.com/"
                  className="text-[#2563EB] hover:underline break-words"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.timesofai.com
                </a>
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                TimesofAI was created to provide accurate and up-to-date insights in the rapidly evolving AI industry. As AI transforms businesses and society, the need for reliable information has grown. TimesofAI bridges this gap by delivering expert-driven analysis, emerging trends, and simplified reporting.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
