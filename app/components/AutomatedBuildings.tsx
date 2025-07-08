"use client";

import Image from "next/image";
import automatedBuildingsLogo from "@/public/image/partners/Asset-22-1024x264.png";

export default function AutomatedBuildings() {
  return (
    <div className="bg-white text-black ">
      <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <section className="flex justify-center">
          <div className="relative box-border flex w-full max-w-5xl flex-col items-center gap-6 rounded-2xl bg-gray-100 p-6 shadow-2xl sm:p-8 md:flex-row">
            {/* Badge */}
            <div className="absolute right-4 top-4 z-10 rounded-full bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white shadow-md sm:px-4 sm:text-sm">
              Media Partner
            </div>

            {/* Logo Section */}
            <div className="flex w-full items-center justify-center md:w-1/3">
              <a
                href="https://www.automatedbuildings.com/index.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={automatedBuildingsLogo}
                  alt="AutomatedBuildings.com Logo"
                  width={250}
                  height={100}
                  className="max-h-24 max-w-full object-contain sm:max-h-32"
                />
              </a>
            </div>

            {/* Content Section */}
            <div className="w-full text-center md:w-2/3 md:text-left">
              <h2 className="mb-4 max-w-full break-words text-2xl font-bold text-blue-900 sm:text-3xl">
                AutomatedBuildings.com
              </h2>

              <p className="mb-3 max-w-full break-words text-sm sm:text-base">
                <span className="font-medium">Website:</span>{" "}
                <a
                  href="https://www.automatedbuildings.com/index.htm"
                  className="inline-block max-w-full break-all text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.automatedbuildings.com/index.htm
                </a>
              </p>

              <p className="max-w-full break-words text-sm leading-relaxed text-gray-700 sm:text-base">
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
