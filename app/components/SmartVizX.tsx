'use client';

import Image from 'next/image';
import logo from '@/public/image/exhibitor/VR logo (1).jpg';

const SmartVizX = () => {
  return (
    <div className="bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col md:flex-row items-center md:items-start p-8 w-full max-w-7xl mx-auto">
      {/* Logo Section */}
      <div className="flex-shrink-0 w-48 h-48 mb-6 md:mb-0 md:mr-10 overflow-hidden rounded-xl shadow-md transform transition duration-300 hover:scale-105 bg-white">
        <Image
          src={logo}
          alt="SmartVizX Logo"
          width={192}
          height={192}
          className="object-contain w-full h-full"
        />
      </div>

      {/* Exhibitor Info */}
      <div className="text-center md:text-left flex-1">
        <h2 className="text-3xl font-semibold text-blue-900 mb-4">
          SmartVizX - We are VR®
        </h2>
        <p className="text-gray-700 text-base md:text-lg mb-6">
          Revolutionizing Virtual Reality for Architecture & Real Estate.
        </p>

        {/* Links */}
        <div className="space-x-4">
          <a
            href="https://trezi.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition"
          >
            Visit Website
          </a>
          <a
            href="https://www.linkedin.com/company/smartvizs-pvt-ltd-/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-100 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default SmartVizX;
