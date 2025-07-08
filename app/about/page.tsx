'use client'

// import WhoShouldAttend from '@/app/components/WhoShouldAttend';
// import WhyShouldAttend from '@/app/components/WhyShouldAttend';
import AboutHeroSection from '@/app/components/AboutHerosection';
// import Image from 'next/image';
// import Keyimg from '@/public/images/Core Insights_Mesa de trabajo 1.png';
import About from '../components/About';

export default function Page() {
  return (
    <div>
      {/* About Hero Section */}
      <AboutHeroSection />

      <About />

      {/* <div className="bg-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className='flex justify-center'>
            <Image
              src={Keyimg}
              alt="Event image"
              width={1000}
              height={1000}
              className="transform transition-transform duration-300 hover:scale-110" // Hover zoom effect
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          
            <div className="w-full bg-white p-6 rounded-lg shadow-md">
              <WhoShouldAttend />
            </div>

            <div className="w-full bg-white p-6 rounded-lg shadow-md">
              <WhyShouldAttend />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
