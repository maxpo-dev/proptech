import { useEffect, useState } from 'react';
import Link from 'next/link';
import { CalendarDays, MapPin } from 'lucide-react';
import Image from 'next/image';
import bg from '@/app/images/zq-lee-VbDjv8-8ibc-unsplash.jpg';

export default function HeroSection() {
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setContentVisible(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="text-white min-h-screen flex items-center relative overflow-hidden">
      <Image
        src={bg}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="bg-black bg-opacity-90 animate-zoomInImage"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {contentVisible && (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fadeInContent">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">International Proptech Investment Expo</h1>
            <p className="text-xl mb-8">Shaping the Future of Real Estate Technology</p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <div className="flex items-center">
                <CalendarDays className="mr-2" />
                <span>February 2025</span>
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
