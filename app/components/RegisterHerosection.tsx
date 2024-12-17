'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import bg from '@/app/images/WhatsApp Image 2024-11-07 at 3.59.25 PM (1).jpeg';
import '@/app/styles/animations.css';
// import ParticlesComponent from './Particles';

export default function RegisterHeroSection() {
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 animate-fadeInContent">
          {/* New content with heading and paragraph */}
          <div className="text-start max-w-2xl   p-12 rounded-lg shadow-md text-white">
            <h1 className="text-4xl font-bold mb-4">Join the International Proptech Conference</h1>
            <p className="text-lg">
              Experience a dynamic event where industry leaders, innovators, and investors gather to shape the future of property technology. Gain insights, discover trends, and expand your network in this transformative event.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
