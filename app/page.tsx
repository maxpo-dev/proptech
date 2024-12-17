"use client"

import { useEffect, useState } from 'react';
import HeroSection from './components/Herosection';
import JoinUs from './components/join-us';
import KeyTopicsSection from './components/Keytopics';
import Image from 'next/image';
import Aboutimg from '@/app/images/WhatsApp Image 2024-11-07 at 3.59.25 PM.jpeg';
// import Vid from '@/public/_next-video/PROPERTY SHOW V02 LOW.mp4'
// import WhatsAppChat from './components/WhatsApp';
// import LiveChat from './components/WhatsApp';
// import ChatWidget from './components/WhatsApp';
// import BrevoScript from './components/WhatsApp';
// import VideoSection from './components/VideoSection';
import VideoComponent from './components/VideoSection';
import YourComponent from './components/WhatsApp';
import ConferenceThemes from './components/conference-themes';
import WhyAttend from './components/why-attend';

// import VOdeoSection from './components/VideoSection';

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
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Welcome To Future Proptech Summit</h2>
          
          <div className="flex flex-col lg:flex-row items-center lg:items-start">
            {/* Text content (60%) */}
            <div className="lg:w-3/5 text-lg text-gray-700 mb-4 lg:mb-0 lg:pr-8">
              <p>
              The global PropTech market is on the rise, valued at an impressive $33.57 billion in 2023 and set to soar to $89.93 billion by 2032, with a remarkable CAGR of 11.9% from 2024 to 2032! PropTech is revolutionizing the real estate landscape by seamlessly blending property management with cutting-edge digital technologies. Imagine software applications and advanced data analysis tools that not only streamline transactions but also enhance sustainability, boost investor returns, and elevate client experiences.
              </p>
              <br />
              <p>
              In Dubai, this transformation is even more exhilarating with the emergence of fractional ownership. Supported by dynamic government initiatives and technological breakthroughs, fractional ownership is making real estate more accessible than ever. This innovative approach opens doors for a wider range of investors, creating a vibrant and inclusive market. Experience the future of real estate with PropTech where opportunity meets innovation!
              </p>
              <br />
              <p>
              Featuring an expansive 3000+ square metre exhibition hall, attendees have the O opportunity to explore the latest proptech solutions and innovations from 100+ exhibi ors firsthand. From cutting-edge software platforms to groundbreaking hardware, our exhibition showcases the diverse range of technologies driving hange in the real estate industry.
              </p>
              <br />
              <p>
              Join the Dubai Proptech Show 2025 to connect with like-minded professionals, gain valuable insights, and discover the latest and the greatest products, services and strategies shaping the future of the industry.
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
      <ConferenceThemes />

      <KeyTopicsSection />

      {/* <VideoSection /> */}
      <div className=" bg-gray-200 py-20">
      <h2 className="text-4xl font-bold text-center text-black mb-8">
          Experience Our Event
        </h2>
        <p className="text-xl text-center text-slate-800 mb-12 max-w-3xl mx-auto">
          Get a glimpse of the innovation and networking opportunities at the International Proptech Investment Expo.
        </p>
      <div className='flex items-center justify-center '>
        <VideoComponent src="/video/Video_1.mp4" className="w-auto max-w-4xl h-auto" />
        </div>
      
    </div>
     <WhyAttend />
      <div className=''>
        <JoinUs />
      </div>
      <div >
      
      {/* Other components and content */}
      
      <YourComponent />
    </div>
    </div>
    
  );
}
