"use client"

import { MapPin } from 'lucide-react'
// import Link from "next/link"
import Image from "next/image"
import DubaiImg from "@/app/images/Dubai.jpg"

export default function DubaiSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      {/* Image Section */}
      <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden mb-12">
        <Image
          src={DubaiImg}
          alt="Dubai Skyline"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          Dubai: The Ideal Backdrop for PropTech Innovation
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Dubai&apos;s dynamic real estate market and forward-thinking government policies make it the perfect venue for the Future PropTech Summit.
        </p>

        {/* Location Info */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-start gap-2">
            <MapPin className="w-6 h-6 mt-1 text-blue-600" />
            <div>
              <h3 className="font-semibold text-xl text-gray-900">Dubai World Trade Centre</h3>
              <p className="text-gray-600">
                Sheikh Zayed Road, Dubai<br />
                United Arab Emirates
              </p>
            </div>
          </div>
          {/* <Link 
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
          >
            Get Directions
          </Link> */}
        </div>
      </div>
    </section>
  )
}

