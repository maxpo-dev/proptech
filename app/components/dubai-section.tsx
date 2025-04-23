'use client'

import Image from 'next/image'
import DubaiImg from '@/app/images/Dubai.jpg'

export default function DubaiSection() {
  return (
    <section className="mx-auto px-4 md:px-8 py-16">
      {/* Flex Container */}
      <div className="flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0">
        {/* Content Section - Left Side */}
        <div className="max-w-3xl flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Dubai: The Ideal Catalyst for PropTech Innovation
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Dubai&apos;s dynamic real estate market and forward-thinking government policies make it the perfect venue for the Future PropTech Summit.
          </p>
        </div>

        {/* Image Section - Right Side */}
        <div className="relative w-full md:w-[50%] h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
          <Image
            src={DubaiImg}
            alt="Dubai Skyline"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
