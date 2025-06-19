'use client'

import Image from 'next/image';
import HeroSection from '@/app/components/Herosection';

import VideoComponent from './components/VideoSection';
import Ticket from "@/app/images/event-ticket-template.jpg"
import Speakers from '@/app/images/speaker-big-stage.jpg';
import Exhibitors from '@/app/images/digital-environment-scene.jpg';
import Getintech from '@/app/images/businessman-holding-smartphone-with-message-calling-email-icon-concept-contact-support-people-contacting-information-business.jpg';
import Link from 'next/link';
import WhyProptech from './components/whyproptech';
import ShowcaseSection from './components/showcase-section';
import DubaiSection from './components/dubai-section';
import SponsorsSection from './components/SponsorsSection';
import HighlightedSpeakersMarquee from './components/HighlightedSpeakersMarquee';

export default function Home() {
  
  

  return (
    <div className='bg-gray-200 '>
      <HeroSection />
      <section className="bg-white  p-10 w-full">
  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
    <div className="lg:w-1/2">
      <h2 className="text-3xl font-bold text-blue-900 mb-4">
        Welcome To The Future Of Real Estate In Dubai: Future Proptech Summit
      </h2>
      <div className="text-lg text-gray-700">
        <p>
          The global PropTech market, valued at $33.57 billion in 2023, is set to reach $89.93 billion by 2032, growing at a CAGR of 11.9%. PropTech is revolutionizing real estate with AI, blockchain, IoT, and VR. Dubai leads this transformation with innovations like fractional ownership, backed by progressive government initiatives.
        </p>
        <p className="mt-4">
          The Future PropTech Summit 2025 unites industry leaders, innovators, and investors to explore cutting-edge technologies reshaping real estate. Discover how PropTech drives efficiency, sustainability, and accessibility in the sector.
        </p>
        <a href="/about" className="text-blue-600 hover:underline mt-4 inline-block">
          Know more about us
        </a>
      </div>
    </div>

    <div className="lg:w-1/2 flex justify-center">
      <VideoComponent
        src="./video/Video_1n.mp4"
        className="w-full h-auto rounded-lg shadow-lg"
      />
    </div>
  </div>
</section>



<section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {[
      { href: "/register?type=delegates", bg: "bg-black", title: "Book your tickets", image: Ticket },

      { href: "/register?type=participants", bg: "bg-green-600", title: "Register as Participant", image: Speakers },
      { href: "/register?type=exhibitors", bg: "bg-red-600", title: "Register as Exhibitor", image: Exhibitors },
      { href: "/register", bg: "bg-purple-600", title: "Get In Touch", image: Getintech },
    ].map((item, index) => (
      <Link key={index} href={item.href} className="block group">
        <div className="rounded-xl overflow-hidden shadow-lg transition-transform transform group-hover:scale-105">
          <div className={`relative h-72 sm:h-80 ${item.bg}`}>
            <Image
              src={item.image}
              alt={item.title}
              layout="fill"
              objectFit="cover"
              className="bg-black opacity-90"
            />
          </div>
          <div className="bg-blue-950 text-center py-4">
           
            <span className="text-xl font-semibold text-white">
  {item.title}
</span>

          </div>
        </div>
      </Link>
    ))}
  </div>
</section>





<WhyProptech />
<div className="container mx-auto px-4 py-8">
  <div className="bg-white rounded-lg shadow-xl overflow-hidden">
    <HighlightedSpeakersMarquee />
  </div>
</div>


      {/* <ConferenceThemes /> */}
      {/* <KeyTopicsSection /> */}
      <ShowcaseSection />
      <SponsorsSection />
     
      <DubaiSection />
    </div>
  );
}

