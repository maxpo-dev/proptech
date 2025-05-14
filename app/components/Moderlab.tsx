'use client';

import Image from 'next/image';
import logo from '@/public/image/exhibitor/Moderlab LOGO (1).jpg';

const Moderlab = () => {
  return (
    <div className="bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col md:flex-row items-center md:items-center p-8 w-full max-w-7xl mx-auto relative">
      {/* Startup Exhibitor Banner */}
      <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 text-sm font-semibold rounded-md shadow-md">
        Startup Exhibitor
      </div>

      {/* Logo Section */}
      <div className="flex-shrink-0 w-48 h-48 mb-6 md:mb-0 md:mr-10 overflow-hidden rounded-xl shadow-md transform transition duration-300 hover:scale-105 bg-white">
        <Image
          src={logo}
          alt="Moderlab Logo"
          width={192}
          height={192}
          className="object-contain w-full h-full"
        />
      </div>

      {/* Exhibitor Info */}
      <div className="text-center md:text-left flex-1">
        <h2 className="text-3xl font-semibold text-blue-900 mb-4">Moderlab</h2>
        <p className="text-gray-700 text-base md:text-lg mb-4">
          Moderlab is shaping the Future of Real Estate with Immersive and Interactive 3D Technology
        </p>
        <p className="text-gray-700 text-base md:text-lg mb-4">
          Moderlab is the world’s most photorealistic 3D co-design and marketing platform, built for the real estate, retail, and hospitality sectors. Combining the power of Unreal Engine and a proprietary cloud streaming infrastructure, Moderlab enables developers, architects, and marketers to visualize, customize, and present projects in real time; from anywhere, on any device.
        </p>
        <p className="text-gray-700 text-base md:text-lg mb-6">
          At the Future of PropTech Summit, Moderlab will showcase how immersive collaboration and digital twins are redefining the property lifecycle from design to sale.
        </p>

        {/* Links */}
        <div className="space-x-4">
          <a
            href="https://www.moderlab.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition"
          >
            Visit Website
          </a>
          <a
            href="https://www.linkedin.com/company/moderlab/"
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

export default Moderlab;
