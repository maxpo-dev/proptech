'use client';

import Image from 'next/image';
import logo from '@/public/image/exhibitor/accolade_logo.png'; // make sure logo is in this path

const Accolade = () => {
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
            alt="Accolade Logo"
            width={192}
            height={192}
            className="object-contain w-full h-full"
          />
        </div>

        {/* Text Content */}
        <div className="text-center sm:text-left flex-1">
          <h2 className="text-2xl sm:text-3xl font-semibold text-blue-900 mb-3 sm:mb-4">
            Accolade
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-4">
            Accolade offers an Operations Centralization Platform for Multifamily. Accolade has developed a comprehensive AI-enabled solution covering the prospect and resident lifecycle, enabling top-performing property managers and developers to deliver exceptional service through a centralized operating model.
          </p>


          {/* Links */}
          <div className="flex flex-col sm:flex-row sm:space-x-4 gap-3 sm:gap-0">
            <a
              href="https://www.accoladehq.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition text-center"
            >
              Visit Website
            </a>
            <a
              href="https://www.linkedin.com/company/accoladehq/"
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

export default Accolade;
