"use client";

import Image from "next/image";
import HeroSection from "@/app/components/Herosection";

import VideoComponent from "./components/VideoSection";
import Ticket from "@/public/images/event-ticket-template.jpg";
import Speakers from "@/public/images/speaker-big-stage.jpg";
import Exhibitors from "@/public/images/digital-environment-scene.jpg";
import Getintech from "@/public/images/businessman-holding-smartphone-with-message-calling-email-icon-concept-contact-support-people-contacting-information-business.jpg";
import Link from "next/link";
import WhyProptech from "./components/whyproptech";
import ShowcaseSection from "./components/showcase-section";
import DubaiSection from "./components/dubai-section";
import SponsorsSection from "./components/SponsorsSection";
import HighlightedSpeakersMarquee from "./components/HighlightedSpeakersMarquee";

export default function Home() {
  return (
    <div className="bg-gray-200">
      <HeroSection />
      <section className="w-full  bg-white p-10">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start">
          <div className="lg:w-1/2">
            <h2 className="mb-4 text-3xl font-bold text-blue-900">
              Welcome To The Future Of Real Estate In Dubai: Future Proptech
              Summit
            </h2>
            <div className="text-lg text-gray-700">
              <p>
                The global PropTech market, valued at $33.57 billion in 2023, is
                set to reach $89.93 billion by 2032, growing at a CAGR of 11.9%.
                PropTech is revolutionizing real estate with AI, blockchain,
                IoT, and VR. Dubai leads this transformation with innovations
                like fractional ownership, backed by progressive government
                initiatives.
              </p>
              <p className="mt-4">
                The Future PropTech Summit 2025 unites industry leaders,
                innovators, and investors to explore cutting-edge technologies
                reshaping real estate. Discover how PropTech drives efficiency,
                sustainability, and accessibility in the sector.
              </p>
              <a
                href="/about"
                className="mt-4 inline-block text-blue-600 hover:underline"
              >
                Know more about us
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:w-1/2">
            <VideoComponent
              src="./video/Video_1n.mp4"
              className="h-auto w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              href: "/register?type=delegates",
              bg: "bg-black",
              title: "Book your tickets",
              image: Ticket,
            },

            {
              href: "/register?type=participants",
              bg: "bg-green-600",
              title: "Register as Participant",
              image: Speakers,
            },
            {
              href: "/register?type=exhibitors",
              bg: "bg-red-600",
              title: "Register as Exhibitor",
              image: Exhibitors,
            },
            {
              href: "/register",
              bg: "bg-purple-600",
              title: "Get In Touch",
              image: Getintech,
            },
          ].map((item, index) => (
            <Link key={index} href={item.href} className="group block">
              <div className="overflow-hidden rounded-xl shadow-lg transition-transform group-hover:scale-105">
                <div className={`relative h-72 sm:h-80 ${item.bg}`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="bg-black opacity-90"
                  />
                </div>
                <div className="bg-blue-950 py-4 text-center">
                  <span className="text-xl font-semibold text-white">
                    {item.title}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <WhyProptech />
      <div className="container mx-auto px-4 py-8">
        <div className="overflow-hidden rounded-lg bg-white shadow-xl">
          <HighlightedSpeakersMarquee />
        </div>
      </div>

      {/* <ConferenceThemes /> */}
      {/* <KeyTopicsSection /> */}
      <ShowcaseSection />
      <SponsorsSection />

      <DubaiSection />
    </div>
  );
}
