'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import bg from '@/public/images/PP 2 (1).png';
import '@/app/styles/animations.css';
import Link from 'next/link';
// import ParticlesComponent from './Particles';

export default function AboutHeroSection() {
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setContentVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden text-white">
      {/* <Image
        src={bg}
        alt="Background"
        fill
        quality={100}
        className="bg-black bg-opacity-90 animate-zoomInImage"
      /> */}
      <Image
  src={bg}
  alt="Background"
  fill
  quality={100}
  className="animate-zoomInImage bg-black bg-opacity-90"
/>

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Particles component */}
      {/* <div className="absolute inset-0 z-10">
        <ParticlesComponent />
      </div> */}

      {contentVisible && (
        <div className="animate-fadeInContent container relative z-20 mx-auto p-10 px-4 sm:px-6  lg:px-8">
          {/* Heading */}
          <h1 className="mb-6 text-4xl font-semibold  transition-transform duration-200 ease-in-out hover:scale-105 sm:text-5xl">
            About
          </h1>

          {/* Additional info section */}
          <div className="max-w-2xl rounded-lg text-start text-white shadow-md">
            {/* <p>
            The Future Proptech Summit is designed for professionals, entrepreneurs, and organizations seeking to understand and invest in the future of real estate technology. If you are passionate about innovation in the real estate and property sectors, this event is tailored for you.
            </p> */}

            <p>
  The Future Proptech Summit is designed for professionals, entrepreneurs, and organizations seeking to understand and <Link href="/investor-pitch" className="text-blue-400 underline transition hover:text-blue-600">invest</Link> in the future of real estate technology. If you are passionate about innovation in the real estate and property sectors, this event is tailored for you.
</p>
          </div>
        </div>
      )}
    </section>
  );
}
