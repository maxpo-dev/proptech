'use client';

import Image from 'next/image';
import logo from '@/public/image/exhibitor/VR logo (1).jpg';

const SmartVizX = () => {
  return (
    <div className="bg-white shadow-xl rounded-2xl overflow-hidden p-6 sm:p-8 w-full max-w-7xl mx-auto relative">
      {/* Startup Exhibitor Banner */}
      <div className="bg-green-500 text-white px-4 py-1.5 text-sm font-semibold rounded-md shadow-md mb-6 sm:absolute sm:top-4 sm:right-4 sm:mb-0">
        Startup Exhibitor
      </div>

      {/* Content */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        {/* Logo Section */}
        <div className="w-40 h-40 sm:w-48 sm:h-48 flex-shrink-0 overflow-hidden rounded-xl shadow-md transform transition duration-300 hover:scale-105 bg-white">
          <Image
            src={logo}
            alt="SmartVizX Logo"
            width={192}
            height={192}
            className="object-contain w-full h-full"
          />
        </div>

        {/* Exhibitor Info */}
        <div className="text-center sm:text-left flex-1">
          <h2 className="text-2xl sm:text-3xl font-semibold text-blue-900 mb-3 sm:mb-4">
            SmartVizX - We are VR®
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-5 sm:mb-6">
            Revolutionizing Virtual Reality for Architecture & Real Estate.
          </p>

          {/* Links */}
          <div className="flex flex-col sm:flex-row sm:space-x-4 gap-3 sm:gap-0">
            <a
              href="https://trezi.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition text-center"
            >
              Visit Website
            </a>
            <a
              href="https://www.linkedin.com/company/smartvizs-pvt-ltd-/"
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

export default SmartVizX;
