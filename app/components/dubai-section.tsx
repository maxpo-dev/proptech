'use client'

import Image from 'next/image'
import DubaiImg from '@/app/images/Dubai.jpg'

export default function DubaiSection() {
  return (
    <section className="mx-auto px-4 md:px-8 py-12">
      {/* Flex Contain
      er */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-card rounded-xl shadow-lg border border-border p-6">
        {/* Content Section - Left Side */}
        <div className="w-full md:w-1/2 max-w-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            Dubai: The Ideal Catalyst for PropTech Innovation
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            Dubai's dynamic real estate market and forward-thinking government policies make it the perfect venue for the Future PropTech Summit.
          </p>
        </div>

        {/* Image Section - Right Side */}
        <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px] rounded-xl overflow-hidden">
          <Image
            src={DubaiImg}
            alt="Dubai Skyline"
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            priority
          />
        </div>
      </div>
    </section>
  )
}