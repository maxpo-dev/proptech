"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CalendarDays, MapPin } from "lucide-react";
import "@/app/styles/animations.css";
import CountdownTimer from "@/app/components/CountdownTimer";

export default function HeroSection() {
  const [contentVisible, setContentVisible] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
      setContentVisible(true);
    }, 1000); // Delay video loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden text-white">
      {showVideo && (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/images/4x.jpg" // use compressed WebP or JPEG
          className="absolute left-0 top-0 z-0 size-full object-cover"
        >
          <source src="/video/2x.mp4" type="video/mp4" />
        </video>
      )}

      <div className="absolute inset-0 z-10 bg-black bg-opacity-50"></div>

      {contentVisible && (
        <div className="animate-fadeInContent container relative z-30 mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto mt-2 max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-semibold  transition-transform duration-200 ease-in-out hover:scale-105 sm:text-5xl">
              Future Proptech Summit 2025
            </h1>
            <p
              className="mb-8 bg-gradient-to-r bg-clip-text text-xl font-extrabold text-transparent"
              style={{
                backgroundImage: "linear-gradient(to right, #0091EB, #00D4D5)",
              }}
            >
              Shaping the Future of Real Estate Technology
            </p>
            <div className="mb-8 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <div className="flex items-center">
                <CalendarDays className="mr-2" />
                <span>14-15 October 2025</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2" />
                <span>Le Méridien Dubai Hotel & Conference Centre</span>
              </div>
            </div>
            <div className="my-8 flex justify-center">
              <div className="rounded-2xl bg-transparent p-6 shadow-lg backdrop-blur-lg">
                <CountdownTimer targetDate="2025-10-14T00:00:00" />
              </div>
            </div>

            <div className="mt-4 flex justify-center space-x-4">
              <Link
                href="/about"
                className="inline-block rounded-full border border-white bg-transparent px-8 py-3 font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-blue-600"
              >
                Know More
              </Link>
              <Link
                href="/register"
                className="inline-block rounded-full bg-white px-8 py-3 font-semibold text-blue-600 transition-colors duration-200 hover:bg-blue-50"
              >
                Enquire
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
