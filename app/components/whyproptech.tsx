"use client"

import { Sprout, Lightbulb, Briefcase, ScrollText, Rocket, BuildingIcon as Buildings, PiggyBank, Brain, Home } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import Img from "@/app/images/1x.jpg"

export default function ConferenceThemes() {
  const themes = [
    {
      icon: Sprout,
      title: "Sustainability and Green Initiatives",
    },
    {
      icon: Lightbulb,
      title: "Proptech Innovation and Digital Transformation",
    },
    {
      icon: Briefcase,
      title: "Future of Work",
    },
    {
      icon: ScrollText,
      title: "Policies and Regulation in Real Estate",
    },
    {
      icon: Rocket,
      title: "Startup ScaleUp Pitch Competition",
    },
    {
      icon: Buildings,
      title: "Smart Cities and Urban Innovation",
    },
    {
      icon: PiggyBank,
      title: "Investment Strategies and Opportunities",
    },
    {
      icon: Brain,
      title: "Artificial Intelligence (AI) in Real Estate",
    },
    {
      icon: Home,
      title: "Future of Property Management",
    },
  ]

  return (
    <div className="flex flex-col lg:flex-row w-full  mx-auto">
      {/* Container with fixed aspect ratio */}
      <div className="w-full lg:w-1/2 aspect-square">
        {/* Left Section - Image */}
        <div className="relative w-full h-full">
          <Image
            src={Img}
            alt="Conference"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Right Section - Themes */}
      <div className="w-full lg:w-1/2 aspect-square bg-gradient-to-br from-black via-blue-950 to-blue-900 p-8 lg:p-12 overflow-y-auto">
        <h2 className="text-4xl font-bold text-white mb-8">
          Conference Themes
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6">
          {themes.map((theme, index) => (
            <div key={index} className="flex items-center gap-3">
              <theme.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
              <span className="text-white text-base">{theme.title}</span>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link 
            href="/register"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700 transition-colors"
          >
            Book Tickets
          </Link>
        </div>
      </div>
    </div>
  )
}

