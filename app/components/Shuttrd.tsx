"use client";

import Image from "next/image";
import shuttrdLogo from "@/public/image/exhibitor/Original Logo.png"; // Update with actual logo path

const Shuttrd = () => {
  return (
    <div className="bg-white shadow-xl rounded-2xl overflow-hidden p-6 sm:p-8 w-full max-w-7xl mx-auto relative">
      {/* Startup Exhibitor Badge */}
      <div className="bg-green-500 text-white px-4 py-1.5 text-sm font-semibold rounded-md shadow-md mb-6 sm:absolute sm:top-4 sm:right-4 sm:mb-0">
        Startup Exhibitor
      </div>

      {/* Content */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        {/* Logo Section */}
        <a
          href="https://www.shuttrd.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-40 h-40 sm:w-48 sm:h-48 flex-shrink-0 overflow-hidden rounded-xl shadow-md transform transition duration-300 hover:scale-105 bg-white block"
        >
          <Image
            src={shuttrdLogo}
            alt="Shuttrd Logo"
            width={192}
            height={192}
            className="object-contain w-full h-full"
          />
        </a>

        {/* Exhibitor Info */}
        <div className="text-center sm:text-left flex-1">
          <h2 className="text-2xl sm:text-3xl font-semibold text-blue-900 mb-3 sm:mb-4">
            Shuttrd
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-5 sm:mb-6">
            Shuttrd.com is the region’s leading platform for booking unique spaces by the hour — built for content creators, brands, and event planners. Whether it’s a photo studio, a rooftop terrace, a minimalist café, or a cozy living room — if it’s creative, it’s on Shuttrd.
          </p>
          <p className="text-gray-700 text-base sm:text-lg mb-5 sm:mb-6">
            We connect space owners with creators in need of inspiring locations — enabling monetization of underused properties and frictionless bookings across the city.
          </p>
          <p className="text-gray-700 text-base sm:text-lg mb-5 sm:mb-6">
            Built for the cultural and creative industry. Backed by creators. Powered by purpose.
          </p>

          {/* Links */}
          <div className="flex flex-col sm:flex-row sm:space-x-4 gap-3 sm:gap-0">
            <a
              href="https://www.shuttrd.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition text-center"
            >
              Visit Website
            </a>
            <a
              href="https://www.linkedin.com/company/shuttrd/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-100 transition text-center"
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
