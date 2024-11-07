'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { CalendarDays, MapPin } from 'lucide-react';
import Image from 'next/image';
import bg from '@/app/images/pixelcut-export (2).jpeg';
import '@/app/styles/animations.css';
import ParticlesComponent from './Particles';

export default function AboutHeroSection() {
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setContentVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const whoShouldAttend = [
    'Property Development Firms',
    'Fractional Ownership Platforms',
    'Asset Management Companies',
    'Legal Advisory Firms',
    'Financial Institutions',
    'PropTech Solutions Providers',
    'Investment Advisory Services',
    'Real Estate Analytics Firms',
    'Property Management Software Companies',
    'Exit Strategy Facilitators',
  ];

  const whyAttend = [
    'Reach a targeted audience',
    'Showcase Innovative solutions',
    'Generate leads & sales',
    'Enhance brand visibility',
    'Network with Industry peers',
    'Gain market insights',
    'Position yourself as an industry expert',
    'Build trust & credibility',
  ];

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
          {/* Grid layout for "Who Should Attend" and "Why Should Attend" */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            {/* Who Should Attend Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-center text-black">Who Should Exhibit</h2>
              <ul className="space-y-4 text-lg text-gray-800">
                {whoShouldAttend.map((item, index) => (
                  <li 
                    key={index} 
                    className="flex items-start transform transition-transform duration-300 hover:scale-105"
                  >
                    <span className="text-green-500 mr-4">✔</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Why Should Attend Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-center text-black">Why Should Exhibit</h2>
              <ul className="space-y-4 text-lg text-gray-800">
                {whyAttend.map((item, index) => (
                  <li 
                    key={index} 
                    className="flex items-start transform transition-transform duration-300 hover:scale-105"
                  >
                    <span className="text-green-500 mr-4">✔</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
