'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import bg from '@/app/images/PP 2 (1).png';
import '@/app/styles/animations.css';
// import ParticlesComponent from './Particles';

export default function AboutHeroSection() {
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setContentVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="text-white min-h-screen flex items-center relative overflow-hidden">
      <Image
        src={bg}
        alt="Background"
        fill
        quality={100}
        className="bg-black bg-opacity-90 animate-zoomInImage"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Particles component */}
      {/* <div className="absolute inset-0 z-10">
        <ParticlesComponent />
      </div> */}

      {contentVisible && (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 animate-fadeInContent  p-10">
          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-semibold  mb-6 hover:scale-105 transition-transform duration-200 ease-in-out">
            About
          </h2>

          {/* Additional info section */}
          <div className="text-start max-w-2xl rounded-lg shadow-md text-white">
            <p>
            The Future Proptech Summit is designed for professionals, entrepreneurs, and organizations seeking to understand and invest in the future of real estate technology. If you are passionate about innovation in the real estate and property sectors, this event is tailored for you.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
