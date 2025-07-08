"use client";

import Image from "next/image";
import buildAustraliaLogo from "@/public/image/partners/Build logo HR.jpg";

export default function BuildAustralia() {
  return (
    <div className="bg-white text-black ">
      <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Partner Card */}
        <section className="flex justify-center">
          <div className="hover:shadow-3xl relative flex w-full max-w-5xl flex-col items-center gap-6 rounded-2xl bg-gray-100 p-6 shadow-2xl transition-transform hover:scale-[1.01] sm:p-8 md:flex-row md:gap-12">
            {/* Badge */}
            <div className="absolute right-4 top-4 z-10 rounded-full bg-[#2563EB] px-3 py-1 text-xs font-semibold text-white shadow-md sm:text-sm">
              Media Partner
            </div>

            {/* Logo */}
            <div className="flex w-full justify-center md:w-1/3 md:justify-start">
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
                  className="mx-auto size-auto max-h-24 object-contain sm:max-h-32 md:mx-0"
                />
              </a>
            </div>

            {/* Description */}
            <div className="w-full space-y-4 text-center md:w-2/3 md:text-left">
              <h2 className="break-words text-2xl font-bold text-[#2563EB] sm:text-3xl">
                Build Australia
              </h2>

              <p className="text-base sm:text-lg">
                Website:{" "}
                <a
                  href="https://buildaustralia.com.au/"
                  className="break-words text-[#2563EB] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.buildaustralia.com.au
                </a>
              </p>

              <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                Build Australia is one of the country’s leading industry publications,
                providing news, project updates, and in-depth features across the Australian
                construction and infrastructure sectors.
              </p>

              <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                It serves as a knowledge-sharing platform for professionals and companies
                engaged in shaping Australia’s built environment—covering architecture,
                engineering, construction, property, and sustainability.
              </p>

              <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                With a strong digital presence and industry reach, Build Australia delivers
                high-quality editorial content, exclusive interviews, and insight on
                cutting-edge technologies and future-focused developments in the
                construction industry.
              </p>

              <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
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
