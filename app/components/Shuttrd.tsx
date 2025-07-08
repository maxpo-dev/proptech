"use client";

import Image from "next/image";
import shuttrdLogo from "@/public/image/exhibitor/Original Logo.png"; // Update with actual logo path

const Shuttrd = () => {
  return (
    <div className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-2xl bg-white p-6 shadow-xl sm:p-8">
      {/* Startup Exhibitor Badge */}
      <div className="mb-6 rounded-md bg-green-500 px-4 py-1.5 text-sm font-semibold text-white shadow-md sm:absolute sm:right-4 sm:top-4 sm:mb-0">
        Startup Exhibitor
      </div>

      {/* Content */}
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
        {/* Logo Section */}
        <a
          href="https://www.shuttrd.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block size-40 shrink-0 overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:scale-105 sm:size-48"
        >
          <Image
            src={shuttrdLogo}
            alt="Shuttrd Logo"
            width={192}
            height={192}
            className="size-full object-contain"
          />
        </a>

        {/* Exhibitor Info */}
        <div className="flex-1 text-center sm:text-left">
          <h2 className="mb-3 text-2xl font-semibold text-blue-900 sm:mb-4 sm:text-3xl">
            Shuttrd
          </h2>
          <p className="mb-5 text-base text-gray-700 sm:mb-6 sm:text-lg">
            Shuttrd.com is the region’s leading platform for booking unique spaces by the hour — built for content creators, brands, and event planners. Whether it’s a photo studio, a rooftop terrace, a minimalist café, or a cozy living room — if it’s creative, it’s on Shuttrd.
          </p>
          <p className="mb-5 text-base text-gray-700 sm:mb-6 sm:text-lg">
            We connect space owners with creators in need of inspiring locations — enabling monetization of underused properties and frictionless bookings across the city.
          </p>
          <p className="mb-5 text-base text-gray-700 sm:mb-6 sm:text-lg">
            Built for the cultural and creative industry. Backed by creators. Powered by purpose.
          </p>

          {/* Links */}
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-0 sm:space-x-4">
            <a
              href="https://www.shuttrd.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-blue-600 px-5 py-2 text-center text-white shadow-md transition hover:bg-blue-700"
            >
              Visit Website
            </a>
            <a
              href="https://www.linkedin.com/company/shuttrd/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-blue-600 px-5 py-2 text-center text-blue-600 transition hover:bg-blue-100"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shuttrd;
