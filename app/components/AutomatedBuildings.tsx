"use client";

import Image from "next/image";
import automatedBuildingsLogo from "@/public/image/partners/Asset-22-1024x264.png";

export default function AutomatedBuildings() {
  return (
    <div className="bg-white text-black font-sans">
      <main className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <section className="flex justify-center">
          <div className="relative w-full max-w-5xl bg-gray-100 p-6 sm:p-8 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-6 box-border">
            {/* Badge */}
            <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 rounded-full shadow-md z-10">
              Media Partner
            </div>

            {/* Logo Section */}
            <div className="w-full md:w-1/3 flex justify-center items-center">
              <Image
                src={automatedBuildingsLogo}
                alt="AutomatedBuildings.com Logo"
                width={250}
                height={100}
                className="object-contain max-h-24 sm:max-h-32 max-w-full"
              />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4 break-words max-w-full">
                AutomatedBuildings.com
              </h2>

              <p className="text-sm sm:text-base mb-3 break-words max-w-full">
                <span className="font-medium">Website:</span>{" "}
                <a
                  href="https://www.automatedbuildings.com/index.htm"
                  className="text-blue-600 hover:underline break-all max-w-full inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.automatedbuildings.com/index.htm
                </a>
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-gray-700 break-words max-w-full">
                Since 1999, AutomatedBuildings.com has been an online magazine and web resource. We provide news and
                connections to a global community of change agents shaping smart, intelligent, integrated, connected,
                green, and converged large buildings. Our virtual magazine offers a searchable platform for discussion
                and exchange, creating B2B opportunities for both new and existing stakeholders.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
