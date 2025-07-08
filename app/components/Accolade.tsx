'use client';

import Image from 'next/image';
import logo from '@/public/image/exhibitor/accolade_logo.png'; // make sure logo is in this path

const Accolade = () => {
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
            alt="Accolade Logo"
            width={192}
            height={192}
            className="size-full object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center sm:text-left">
          <h2 className="mb-3 text-2xl font-semibold text-blue-900 sm:mb-4 sm:text-3xl">
            Accolade
          </h2>
          <p className="mb-4 text-base text-gray-700 sm:text-lg">
            Accolade offers an Operations Centralization Platform for Multifamily. Accolade has developed a comprehensive AI-enabled solution covering the prospect and resident lifecycle, enabling top-performing property managers and developers to deliver exceptional service through a centralized operating model.
          </p>


          {/* Links */}
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-0 sm:space-x-4">
            <a
              href="https://www.accoladehq.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-blue-600 px-5 py-2 text-center text-white shadow-md transition hover:bg-blue-700"
            >
              Visit Website
            </a>
            <a
              href="https://www.linkedin.com/company/accoladehq/"
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

export default Accolade;
