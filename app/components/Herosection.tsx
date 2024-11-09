'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { CalendarDays, MapPin } from 'lucide-react';
import Image from 'next/image';
import bg from '@/app/images/pixelcut-export (2).jpeg';
import '@/app/styles/animations.css';
import ParticlesComponent from './Particles';
import logo1 from '@/app/images/PROPTECH_logo_alex_logo-3_alex_logo-3.png'

export default function HeroSection() {
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
        // objectFit="cover"
        quality={100}
        className="bg-black bg-opacity-90 animate-zoomInImage"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      
      {/* Particles component */}
      <div className="absolute inset-0 z-10">
        <ParticlesComponent />
      </div>
      
      {contentVisible && (
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 animate-fadeInContent">
    <div className="realtive flex justify-center">
      <Image
        src={logo1}
        alt="Proptech Expo 2025 Logo"
        width={150}
        height={50}
        className="mx-auto" // Center the logo
      />
    </div>
    <div className="max-w-3xl mx-auto text-center mt-2"> {/* Adjusted spacing */}
      <h1 className="text-4xl sm:text-5xl font-semibold font-serif mb-6 hover:scale-105 transition-transform duration-200 ease-in-out">
        International Proptech Investment Expo
      </h1>
      <p
        className="text-xl mb-8 text-transparent bg-clip-text bg-gradient-to-r font-extrabold"
        style={{
          backgroundImage: 'linear-gradient(to right, #0091EB, #00D4D5)',
        }}
      >
        Shaping the Future of Real Estate Technology
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
        <div className="flex items-center">
          <CalendarDays className="mr-2" />
          <span>19-20 April 2025</span>
        </div>
        <div className="flex items-center">
          <MapPin className="mr-2" />
          <span>Dubai, UAE</span>
        </div>
      </div>
      <Link href="/register" className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors duration-200">
        Register Now
      </Link>
    </div>
  </div>
)}


    </section>
  );
}