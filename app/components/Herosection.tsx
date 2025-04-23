'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { CalendarDays, MapPin } from 'lucide-react';
// import Image from 'next/image';
import '@/app/styles/animations.css';
// import logo1 from '@/app/images/PROPTECH_logo_alex_logo-3_alex_logo-3.png';
// import logo2 from '@/public/image/gulf news w.png';
// import logo2 from '@/public/image/gulfnews logo white logo 2.png';
import CountdownTimer from '@/app/components/CountdownTimer';

export default function HeroSection() {
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setContentVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="text-white min-h-screen flex items-center relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src='/video/2x.mp4' type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      
      {contentVisible && (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-30 animate-fadeInContent">
          {/* <div className="relative w-[150px] h-[50px] mx-auto mb-2">
            <Image
              src={logo2}
              alt="Gulf News Logo"
              fill
              className="object-contain"
              sizes="150px"
            />
          </div>
          <div className="relative w-[150px] h-[50px] mx-auto">
            <Image
              src={logo1}
              alt="Proptech Expo 2025 Logo"
              fill
              className="object-contain"
              sizes="150px"
            />
          </div> */}
          
          <div className="max-w-3xl mx-auto text-center mt-2">
            <h1 className="text-4xl sm:text-5xl font-semibold font-serif mb-6 hover:scale-105 transition-transform duration-200 ease-in-out">
              Future Proptech Summit 2025 
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
                <span>14-15 October 2025</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2" />
                <span>Dubai, UAE</span>
              </div>
            </div>
<div className="mt-8 mb-8 flex justify-center">
  <div className="bg-transparent backdrop-blur-lg p-6 rounded-2xl shadow-lg">
    <CountdownTimer targetDate="2025-10-14T00:00:00" />
  </div>
</div>
                   

<div className="flex justify-center space-x-4 mt-4">
  <Link
    href="/about"
    className="inline-block bg-transparent border border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-blue-600 transition-colors duration-200"
  >
    Know More
  </Link>
  <Link
    href="/register"
    className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors duration-200"
  >
    Enquire
  </Link>
</div>

          </div>
        </div>
      )}
    </section>
  );
}
