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
    <section className="mx-auto my-12 flex w-full max-w-6xl flex-col lg:flex-row">
      {/* Image Section */}
      <div className="mb-6 w-full lg:mb-0 lg:w-1/2">
        <div className="relative h-full min-h-[400px] overflow-hidden rounded-xl shadow-md">
          <Image
            src={Img}
            alt="Conference"
            className="size-full object-cover"
            fill
            priority
          />
        </div>
      </div>

      {/* Themes List */}
      <div className="flex w-full flex-col justify-start rounded-xl bg-white p-6 shadow-inner lg:w-1/2 lg:p-10">
        <div>
          <h2 className="mb-6  text-3xl font-bold text-gray-900">
            Conference Themes
          </h2>
          <div className="flex flex-col gap-4">
            {themes.map((theme, idx) => (
              <div key={idx} className="flex items-center space-x-3">
                <theme.icon className="size-5 text-blue-600" strokeWidth={1.5} />
                <span className="text-sm text-gray-800">
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
