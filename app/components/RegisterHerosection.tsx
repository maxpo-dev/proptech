'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import bg from '@/app/images/pixelcut-export (2).jpeg';
import '@/app/styles/animations.css';
import ParticlesComponent from './Particles';
import RegisterForm from '@/app/components/exhibitor'; // Import your RegisterForm component if needed\
import img from "@/app/images/Screenshot 2024-09-17 191649.png"

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
      <div className="absolute inset-0 z-10">
        <ParticlesComponent />
      </div>

      {contentVisible && (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 animate-fadeInContent">
          {/* Grid layout for the hero section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            {/* Left Side: Content Section */}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center h-full text-center">
  <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-black">Interested in Taking Part?</h1>

  {/* Image */}
  <div className="mb-6">
    <Image
      src={img} // Add your image path here
      alt="Event"
      width={500}
      height={300}
      className="rounded-lg"
    />
  </div>

  {/* Description Paragraph */}
  <p className="text-lg text-gray-800 mb-6">
    Join us for the International Proptech Conference & Investment Expo. 
    A unique opportunity to showcase your innovations and network with key industry players.
  </p>

  {/* Book a Stand Button */}
  <button className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-200">
    Book a Stand
  </button>
</div>

            {/* Right Side: RegisterForm or other content */}
            <div className=" p-6 rounded-lg shadow-md">
              <RegisterForm /> {/* Your RegisterForm component */}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
