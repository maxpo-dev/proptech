// app/components/ConferenceThemes.tsx
'use client';

import { Sprout, Lightbulb, Briefcase, ScrollText, Rocket, BuildingIcon as Buildings, PiggyBank, Brain, Home, PieChart } from 'lucide-react';
import Image from 'next/image';
import Img from '@/app/images/1x.jpg';

export default function ConferenceThemes() {
  const themes = [
    { icon: Sprout, title: 'Sustainability and Green Initiatives' },
    { icon: Lightbulb, title: 'Proptech Innovation and Digital Transformation' },
    { icon: Briefcase, title: 'Future of Work' },
    { icon: ScrollText, title: 'Policies and Regulation in Real Estate' },
    { icon: Rocket, title: 'Startup ScaleUp Pitch Competition' },
    { icon: Buildings, title: 'Smart Cities and Urban Innovation' },
    { icon: PiggyBank, title: 'Investment Strategies and Opportunities' },
    { icon: Brain, title: 'Artificial Intelligence (AI) in Real Estate' },
    { icon: Home, title: 'Future of Property Management' },
    { icon:  PieChart, title: 'Fractional Ownership' },
  ];

  return (
    <section className="flex flex-col lg:flex-row w-full max-w-6xl mx-auto my-12">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
        <div className="relative rounded-xl overflow-hidden shadow-md h-full min-h-[400px]">
          <Image
            src={Img}
            alt="Conference"
            className="object-cover w-full h-full"
            fill
            priority
          />
        </div>
      </div>

      {/* Themes List */}
      <div className="w-full lg:w-1/2 bg-white p-6 lg:p-10 rounded-xl shadow-inner flex flex-col justify-start">
        <div>
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
            Conference Themes
          </h2>
          <div className="flex flex-col gap-4">
            {themes.map((theme, idx) => (
              <div key={idx} className="flex items-center space-x-3">
                <theme.icon className="w-5 h-5 text-blue-600" strokeWidth={1.5} />
                <span className="text-gray-800 text-sm">
                  {theme.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
