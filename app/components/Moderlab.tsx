'use client';

import Image from 'next/image';
import logo from '@/public/image/exhibitor/Moderlab LOGO (1).jpg';

const Moderlab = () => {
  return (
    <div className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-2xl bg-white p-6 shadow-xl sm:p-8">
      {/* Startup Exhibitor Badge */}
      <div className="mb-6 rounded-md bg-green-500 px-4 py-1.5 text-sm font-semibold text-white shadow-md sm:absolute sm:right-4 sm:top-4 sm:mb-0">
        Startup Exhibitor
      </div>

      {/* Content Layout */}
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
        {/* Logo Section */}
        <div className="size-40 shrink-0 overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:scale-105 sm:size-48">
          <Image
            src={logo}
            alt="Moderlab Logo"
            width={192}
            height={192}
            className="size-full object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center sm:text-left">
          <h2 className="mb-3 text-2xl font-semibold text-blue-900 sm:mb-4 sm:text-3xl">
            Moderlab
          </h2>
          <p className="mb-4 text-base text-gray-700 sm:text-lg">
            Moderlab is shaping the Future of Real Estate with Immersive and Interactive 3D Technology.
          </p>
          <p className="mb-4 text-base text-gray-700 sm:text-lg">
            Moderlab is the world’s most photorealistic 3D co-design and marketing platform, built for the real estate, retail, and hospitality sectors. Combining the power of Unreal Engine and a proprietary cloud streaming infrastructure, Moderlab enables developers, architects, and marketers to visualize, customize, and present projects in real time—from anywhere, on any device.
          </p>
          <p className="mb-6 text-base text-gray-700 sm:text-lg">
            At the Future of PropTech Summit, Moderlab will showcase how immersive collaboration and digital twins are redefining the property lifecycle from design to sale.
          </p>

          {/* Links */}
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-0 sm:space-x-4">
            <a
              href="https://www.moderlab.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-blue-600 px-5 py-2 text-center text-white shadow-md transition hover:bg-blue-700"
            >
              Visit Website
            </a>
            <a
              href="https://www.linkedin.com/company/moderlab/"
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

export default Moderlab;
