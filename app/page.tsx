"use client"

import { useEffect, useState } from 'react';
import HeroSection from './components/Herosection';
import JoinUs from './components/join-us';
import KeyTopicsSection from './components/Keytopics';
import Image from 'next/image';
import Aboutimg from '@/app/images/WhatsApp Image 2024-11-07 at 3.59.25 PM.jpeg';
// import WhatsAppChat from './components/WhatsApp';
// import LiveChat from './components/WhatsApp';
// import ChatWidget from './components/WhatsApp';
import BrevoScript from './components/WhatsApp';

export default function Home() {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollPos, setLastScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > lastScrollPos) {
        // User is scrolling down
        setIsScrollingDown(true);
      } else {
        // User is scrolling up
        setIsScrollingDown(false);
      }
      setLastScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollPos]);

  return (
    <div>
      <HeroSection />
      <div>
        <section className="bg-white shadow-md p-20 w-full py-40">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Proptech Dubai</h2>
          
          <div className="flex flex-col lg:flex-row items-center lg:items-start">
            {/* Text content (60%) */}
            <div className="lg:w-3/5 text-lg text-gray-700 mb-4 lg:mb-0 lg:pr-8">
              <p>
                Proptech and Fractional Ownership in Dubai are rapidly transforming the real estate landscape. With government support, technological advancements, and increased accessibility through fractional ownership, Dubai is at the forefront of this industry revolution. Proptech has emerged as a driving force in Dubai&apos;s real estate market, revolutionizing the way properties are bought, sold, managed, and experienced. From AI-powered property valuation to blockchain-based transactions, proptech is reshaping the industry and offering innovative solutions for both investors and residents.
              </p>
              <br />
              <p>
                The advancement in technologies such as artificial intelligence, machine learning, and digitization of property data assets is revolutionizing the real estate sector. Several enterprises and organizations are investing in the market for better returns in the real estate industry.
              </p>
              <br />
              <p>
                Recent investments in Dubai&apos;s proptech sector have been substantial, with both local and international investors recognizing the immense potential of this emerging field. Startups and established companies alike are pouring resources into developing cutting-edge technologies that address the unique challenges and opportunities presented by Dubai&apos;s dynamic real estate market.
              </p>
              <br />
              <p>
                Join us at the <span className="font-bold text-black">International Proptech Investment Expo</span> Dubai in April 2025, organized by <span className="font-bold text-black">Maxpo Exhibitions.</span>
              </p>
            </div>

            {/* Image (40%) with scroll-down animation */}
            <div className="lg:w-2/5 overflow-hidden">
              <Image
                src={Aboutimg}
                alt="Event image"
                width={1000}
                height={1000}
                className={`pl-14 pt-2 ${isScrollingDown ? 'animate-slide-left' : ''}`}
              />
            </div>
          </div>
        </section>
      </div>

      <KeyTopicsSection />

      <div className=''>
        <JoinUs />
      </div>
      <div >
      
      {/* Other components and content */}
      
      <BrevoScript />
    </div>
    </div>
    
  );
}
