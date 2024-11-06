'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ParticlesComponent from '@/app/components/Particles';

export default function JoinUs() {
  return (
    <section className="bg-gradient-to-r from-blue-950 to-blue-800 py-20 sm:py-32  overflow-hidden">
      {/* Ensure particles background is positioned correctly */}
      <div className="absolute inset-0 z-0">
        <ParticlesComponent />
      </div>
      
      {/* Main content placed above the particles */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl font-bold mb-4 text-white sm:text-4xl">Join Us at the Event</h2>
        <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
          Don&apos;t miss this opportunity to be part of the proptech revolution!
        </p>
        <Link 
          href="/register" 
          className="inline-flex items-center justify-center bg-white text-blue-600 font-semibold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-blue-950"
        >
          Register Now
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}
