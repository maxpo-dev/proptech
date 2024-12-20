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
    <div className="flex flex-col lg:flex-row ">
      {/* Left Section - Image */}
      <div className="lg:w-1/2 relative h-[300px] lg:h-auto">
        <Image
          src={Img}
          alt="Conference"
          
          className="object-cover"
          priority
        />
      </div>

      {/* Right Section - Themes */}
      <div className="lg:w-1/2 bg-gradient-to-br from-black via-blue-950 to-blue-900 p-8 lg:p-12">
        <h2 className="text-4xl font-bold text-white mb-12">
          Conference Themes
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8">
          {themes.map((theme, index) => (
            <div key={index} className="flex items-center gap-4">
              <theme.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
              <span className="text-white text-lg">{theme.title}</span>
            </div>
          ))}
        </div>

        <div className="flex gap-4 mt-12">
          <Link 
            href="/book-tickets"
            className="bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700 transition-colors"
          >
            Book Tickets
          </Link>
          
          {/* <Link 
            href="/learn-more" 
            className="flex items-center text-white hover:text-blue-200 transition-colors"
          >
            Know More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link> */}
        </div>
      </div>
    </div>
  )
}

