"use client";

import Image from "next/image";
import propertyNewsLogo from "@/public/image/partners/PN-Black.png";

export default function PropertyNewsInternational() {
  return (
    <div className="bg-white text-black font-serif">
      <main className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Partner Card */}
        <section className="flex justify-center">
          <div className="relative w-full max-w-5xl bg-gray-100 p-6 sm:p-8 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-6">
            {/* Badge */}
            <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full shadow-md z-10">
              Media Partner
            </div>

            {/* Logo Section */}
            <div className="w-full md:w-1/3 flex justify-center items-center">
              <Image
                src={propertyNewsLogo}
                alt="Property News International Logo"
                width={250}
                height={250}
                className="object-contain max-h-24 sm:max-h-32"
              />
            </div>

            {/* Details Section */}
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4">
                Property News International
              </h2>

              <p className="text-sm sm:text-base mb-4">
                Website:{" "}
                <a
                  href="https://www.propertynewsint.com"
                  className="text-blue-600 hover:underline break-words"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.propertynewsint.com
                </a>
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                Property News International is a global media platform that delivers daily news about real estate, construction, and development from around the world. It is a key source for decision-makers, investors, property developers, and real estate companies. We cover upcoming projects, major updates, expert insights, exclusive features, and interviews with global real estate leaders, all focused on the business of building the future.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
