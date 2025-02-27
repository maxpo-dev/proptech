import Image from 'next/image';
import logo from '@/public/image/VR logo (1).jpg';

export default function Exhibitors2025() {
  return (
    <main className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-950 mb-8">Exhibitors 2025</h1>

        <p className="text-lg text-gray-700 mb-12">
          Discover the leading exhibitors at the Future PropTech Summit. 
          Explore innovations in Virtual Reality, Real Estate Tech, and more!
        </p>

        {/* SmartVizX - New Exhibitor Card */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col md:flex-row items-center p-6">
          {/* Logo Section */}
          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
            <Image
              src={logo}
              alt="SmartVizX - We are VR® Logo"
              width={200}
              height={120}
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Exhibitor Info */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold text-blue-900 mb-2">
              SmartVizX - We are VR®
            </h2>
            <p className="text-gray-600 mb-4">
              Revolutionizing Virtual Reality for Architecture & Real Estate.
            </p>

            {/* Links */}
            <div className="space-x-4">
              <a
                href="https://trezi.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition"
              >
                Visit Website
              </a>
              <a
                href="https://www.linkedin.com/company/smartvizs-pvt-ltd-/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-100 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
