"use client";

import Image from "next/image";
import automatedBuildingsLogo from "@/public/image/partners/Asset-22-1024x264.png";

export default function AutomatedBuildings() {
  return (
    <div className="bg-white text-black font-serif">
      <main className="container mx-auto py-12 px-4">
        {/* Partner Card */}
        <section className="flex justify-center">
          <div className="relative w-full max-w-4xl bg-gray-100 p-6 sm:p-8 rounded-lg shadow-2xl flex flex-col md:flex-row items-center">
            {/* Badge */}
            <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1 rounded-full shadow-md z-10">
              Media Partner
            </div>

            {/* Logo */}
            <div className="w-full md:w-1/3 flex justify-center items-center mb-6 md:mb-0">
              <div className="w-full flex justify-center">
                <Image
                  src={automatedBuildingsLogo}
                  alt="AutomatedBuildings.com Logo"
                  width={250}
                  height={250}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Content */}
            <div className="w-full md:w-2/3 md:pl-8">
              <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-center md:text-left break-words">
                AutomatedBuildings.com
              </h2>
              <p className="text-base sm:text-lg mb-3 text-center md:text-left">
                Website:{" "}
                <a
                  href="https://www.automatedbuildings.com/index.htm"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.automatedbuildings.com/index.htm
                </a>
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-center md:text-left">
                Since 1999, AutomatedBuildings.com has been an online magazine and web resource.
                We provide the news and connection to the community of change agents that are creating our
                present definition of smart, intelligent, integrated, connected, green, and converged large buildings.
                Our virtual magazine and web resource offers a searchable platform for discussion and exchange,
                creating opportunities for B2B for all new and existing stakeholders.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
