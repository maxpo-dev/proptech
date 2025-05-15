'use client';

import Image from 'next/image';
import logo from '@/public/image/exhibitor/Moderlab LOGO (1).jpg';

const Moderlab = () => {
  return (
    <div className="bg-white shadow-xl rounded-2xl overflow-hidden p-6 sm:p-8 w-full max-w-7xl mx-auto relative">
      {/* Startup Exhibitor Badge */}
      <div className="bg-green-500 text-white px-4 py-1.5 text-sm font-semibold rounded-md shadow-md mb-6 sm:absolute sm:top-4 sm:right-4 sm:mb-0">
        Startup Exhibitor
      </div>

      {/* Content Layout */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        {/* Logo Section */}
        <div className="w-40 h-40 sm:w-48 sm:h-48 flex-shrink-0 overflow-hidden rounded-xl shadow-md transform transition duration-300 hover:scale-105 bg-white">
          <Image
            src={logo}
            alt="Moderlab Logo"
            width={192}
            height={192}
            className="object-contain w-full h-full"
          />
        </div>

        {/* Text Content */}
        <div className="text-center sm:text-left flex-1">
          <h2 className="text-2xl sm:text-3xl font-semibold text-blue-900 mb-3 sm:mb-4">
            Moderlab
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-4">
            Moderlab is shaping the Future of Real Estate with Immersive and Interactive 3D Technology.
          </p>
          <p className="text-gray-700 text-base sm:text-lg mb-4">
            Moderlab is the world’s most photorealistic 3D co-design and marketing platform, built for the real estate, retail, and hospitality sectors. Combining the power of Unreal Engine and a proprietary cloud streaming infrastructure, Moderlab enables developers, architects, and marketers to visualize, customize, and present projects in real time—from anywhere, on any device.
          </p>
          <p className="text-gray-700 text-base sm:text-lg mb-6">
            At the Future of PropTech Summit, Moderlab will showcase how immersive collaboration and digital twins are redefining the property lifecycle from design to sale.
          </p>

          {/* Links */}
          <div className="flex flex-col sm:flex-row sm:space-x-4 gap-3 sm:gap-0">
            <a
              href="https://www.moderlab.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition text-center"
            >
              Visit Website
            </a>
            <a
              href="https://www.linkedin.com/company/moderlab/"
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

export default Moderlab;
