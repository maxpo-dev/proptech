"use client";

import Image from "next/image";
import propertyNewsLogo from "@/public/image/partners/PN-Black.png";

export default function PropertyNewsInternational() {
  return (
    <div className="bg-white text-black ">
      <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Partner Card */}
        <section className="flex justify-center">
          <div className="relative flex w-full max-w-5xl flex-col items-center gap-6 rounded-2xl bg-gray-100 p-6 shadow-2xl sm:p-8 md:flex-row">
            {/* Badge */}
            <div className="absolute right-4 top-4 z-10 rounded-full bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white shadow-md sm:text-sm">
              Media Partner
            </div>

            {/* Logo Section */}
            <div className="flex w-full items-center justify-center md:w-1/3">
              <a
                href="https://www.propertynewsint.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={propertyNewsLogo}
                  alt="Property News International Logo"
                  width={250}
                  height={250}
                  className="max-h-24 object-contain sm:max-h-32"
                />
              </a>
            </div>

            {/* Details Section */}
            <div className="w-full text-center md:w-2/3 md:text-left">
              <h2 className="mb-4 text-2xl font-bold text-blue-900 sm:text-3xl">
                Property News International
              </h2>

              <p className="mb-4 text-sm sm:text-base">
                Website:{" "}
                <a
                  href="https://www.propertynewsint.com"
                  className="break-words text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.propertynewsint.com
                </a>
              </p>

              <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                Property News International is a global media platform that delivers daily news about real estate, construction, and development from around the world. It is a key source for decision-makers, investors, property developers, and real estate companies. We cover upcoming projects, major updates, expert insights, exclusive features, and interviews with global real estate leaders, all focused on the business of building the future.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
