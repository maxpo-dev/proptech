'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
// import ParticlesComponent from '@/app/components/Particles';

export default function JoinUs() {
  return (
    <section className="overflow-hidden bg-gradient-to-r from-blue-950 to-blue-800 py-20  sm:py-32">
      {/* Ensure particles background is positioned correctly */}
      {/* <div className="absolute inset-0 z-0">
        <ParticlesComponent />
      </div> */}
      
      {/* Main content placed above the particles */}
      <div className="container relative z-10 mx-auto px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">Join Us at the Event</h2>
        <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90">
        Seize this opportunity to be at the forefront of the proptech revolution. Connect with industry leaders, gain invaluable insights, and drive the future of real estate innovation.
        </p>
        <Link 
          href="/register" 
          className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 font-semibold text-blue-600 transition-colors duration-200 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-blue-950"
        >
          Register Now
          <ArrowRight className="ml-2 size-5" />
        </Link>
      </div>
    </section>
  );
}
