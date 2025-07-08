"use client";

import Image from "next/image";
import businessFocusLogo from "@/public/image/partners/BFM 1000x600.png"; // Make sure this path matches your file structure

export default function BusinessFocusMagazine() {
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
                href="https://www.businessfocusmagazine.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block max-w-[250px] md:max-w-full"
              >
                <Image
                  src={businessFocusLogo}
                  alt="Business Focus Magazine Logo"
                  width={300}
                  height={300}
                  className="mx-auto size-auto max-h-24 object-contain sm:max-h-32 md:mx-0"
                />
              </a>
            </div>

            {/* Description */}
            <div className="w-full space-y-4 text-center md:w-2/3 md:text-left">
              <h2 className="break-words text-2xl font-bold text-[#2563EB] sm:text-3xl">
                Business Focus Magazine
              </h2>

              <p className="text-base sm:text-lg">
                Website:{" "}
                <a
                  href="https://www.businessfocusmagazine.com"
                  className="break-words text-[#2563EB] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.businessfocusmagazine.com
                </a>
              </p>

              <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                Business Focus Magazine is a leading global business magazine directed at
                high-level executives. The primary objective of Business Focus Magazine is
                to provide quality coverage of truly inspiring companies that have
                achieved the highest standard in their field of expertise.
              </p>

              <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                With a core readership of director and c-level executives across the
                worldwide business spectrum, we make sure your exposure is to the people
                you want to be seen by.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
