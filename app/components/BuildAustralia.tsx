"use client";

import Image from "next/image";
import buildAustraliaLogo from "@/public/image/partners/Build logo HR.jpg";

export default function BuildAustralia() {
  return (
    <div className="bg-white text-black font-serif">
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
                href="https://buildaustralia.com.au/"
                target="_blank"
                rel="noopener noreferrer"
                className="block max-w-[250px] md:max-w-full"
              >
                <Image
                  src={buildAustraliaLogo}
                  alt="Build Australia Logo"
                  width={300}
                  height={300}
                  className="object-contain w-auto h-auto max-h-24 sm:max-h-32 mx-auto md:mx-0"
                />
              </a>
            </div>

            {/* Description */}
            <div className="w-full md:w-2/3 text-center md:text-left space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2563EB] break-words">
                Build Australia
              </h2>

              <p className="text-base sm:text-lg">
                Website:{" "}
                <a
                  href="https://buildaustralia.com.au/"
                  className="text-[#2563EB] hover:underline break-words"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.buildaustralia.com.au
                </a>
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                Build Australia is one of the country’s leading industry publications,
                providing news, project updates, and in-depth features across the Australian
                construction and infrastructure sectors.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                It serves as a knowledge-sharing platform for professionals and companies
                engaged in shaping Australia’s built environment—covering architecture,
                engineering, construction, property, and sustainability.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                With a strong digital presence and industry reach, Build Australia delivers
                high-quality editorial content, exclusive interviews, and insight on
                cutting-edge technologies and future-focused developments in the
                construction industry.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                Email:{" "}
                <a
                  href="mailto:info@buildaustralia.com.au"
                  className="text-[#2563EB] hover:underline"
                >
                  info@buildaustralia.com.au
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
