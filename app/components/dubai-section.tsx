'use client'

import Image from 'next/image'
import DubaiImg from '@/public/images/Dubai.jpg'

export default function DubaiSection() {
  return (
    <section className="mx-auto px-4 py-12 md:px-8">
      {/* Flex Contain
      er */}
      <div className="flex flex-col items-center justify-between gap-6 rounded-xl border border-border bg-card p-6 shadow-lg md:flex-row">
        {/* Content Section - Left Side */}
        <div className="w-full max-w-lg md:w-1/2">
          <h2 className="mb-2 text-3xl font-bold text-primary md:text-4xl">
            Dubai: The Ideal Catalyst for PropTech Innovation
          </h2>
          <p className="mb-4 text-lg text-muted-foreground">
            Dubai's dynamic real estate market and forward-thinking government policies make it the perfect venue for the Future PropTech Summit.
          </p>
        </div>

        {/* Image Section - Right Side */}
        <div className="relative h-[300px] w-full overflow-hidden rounded-xl md:h-[400px] md:w-1/2">
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