import React from 'react';
import { Building2, Users, Lightbulb, Target, Calendar, MapPin } from 'lucide-react';
import Aboutimg from '@/public/images/zq-lee-VbDjv8-8ibc-unsplash.jpg';
import Image from 'next/image';

const AboutSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-12">
    <h2 className="mb-4 text-3xl font-bold text-gray-800">{title}</h2>
    {children}
  </div>
);

const FeatureCard = ({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) => (
  <div className="flex items-start space-x-4">
    <div className="shrink-0">
      <Icon className="size-6 text-blue-600" />
    </div>
    <div>
      <h3 className="mb-1 text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default function About() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mb-16 text-start">
          <h2 className="mb-4 text-center text-4xl font-extrabold text-gray-900 sm:text-5xl">
            About Future Proptech Summit
          </h2>
          <p className="mx-auto max-w-3xl text-center text-xl text-gray-600">
            Exploring the future of real estate technology in Dubai, October 2025
          </p>
        </div>

        <div className="my-40 grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <Image 
              src={Aboutimg}
              alt="Proptech Conference" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col pl-10">
            <AboutSection title="Event Overview">
              <p className="mb-4 text-gray-600">
                Join us for an event that explores how technology is reshaping the real estate industry. 
                The Future Proptech Summit, organized by Maxpo Exhibitions, 
                brings together industry leaders, investors, and innovators to connect, collaborate, and 
                create a smarter future for real estate.
              </p>
              <p className="text-gray-600">
                Discover the latest advancements in PropTech and Fractional Ownership as Dubai continues 
                to lead the way in real estate innovation.
              </p>
            </AboutSection>
          </div>
        </div>

        <AboutSection title="Our Mission">
          <p className="mb-40 text-gray-600">
            To revolutionize the real estate landscape by integrating advanced technology solutions that 
            drive efficiency, improve tenant experience, and increase investment returns. This event aims 
            to inspire and empower attendees with insights and tools for success in the fast-evolving 
            proptech industry.
          </p>
        </AboutSection>

        <AboutSection title="Why Attend?">
          <div className="mb-40 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <FeatureCard 
              icon={Lightbulb}
              title="Gain Insights"
              description="Access expert-led presentations and comprehensive understanding of proptech and fractional ownership."
            />
            <FeatureCard 
              icon={Users}
              title="Network"
              description="Participate in networking sessions with industry leaders and innovators."
            />
            <FeatureCard 
              icon={Building2}
              title="Explore Solutions"
              description="Discover a wide range of solutions from property management tools to sustainable construction practices."
            />
            <FeatureCard 
              icon={Target}
              title="Address Challenges"
              description="Learn how technology can address the biggest challenges in real estate."
            />
          </div>
        </AboutSection>

        <AboutSection title="Who Should Attend?">
          <ul className="mb-40 grid grid-cols-1 gap-4 text-gray-600 sm:grid-cols-2">
            <li className="flex items-center space-x-2">
              <span className="size-2 rounded-full bg-blue-600"></span>
              <span>Real Estate Developers and Investors</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="size-2 rounded-full bg-blue-600"></span>
              <span>Property Management Companies</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="size-2 rounded-full bg-blue-600"></span>
              <span>Tech Providers and Innovators</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="size-2 rounded-full bg-blue-600"></span>
              <span>Financial Institutions and Government Agencies</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="size-2 rounded-full bg-blue-600"></span>
              <span>Legal and Consulting Professionals</span>
            </li>
          </ul>
        </AboutSection>

        <AboutSection title="Event Highlights">
          <ul className="mb-40 grid grid-cols-1 gap-4 text-gray-600 sm:grid-cols-2">
            <li className="flex items-center space-x-2">
              <span className="size-2 rounded-full bg-blue-600"></span>
              <span>Keynote Sessions with Industry Thought Leaders</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="size-2 rounded-full bg-blue-600"></span>
              <span>Panel Discussions on IoT, Blockchain, AI, and Fractional Ownership</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="size-2 rounded-full bg-blue-600"></span>
              <span>Networking Opportunities with Peers and Experts</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="size-2 rounded-full bg-blue-600"></span>
              <span>Exhibitions Showcasing Innovative Proptech Solutions</span>
            </li>
          </ul>
        </AboutSection>

        {/* Event Details Card */}
        <div className="mt-12 rounded-lg bg-blue-100 p-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-800">Event Details</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex items-center space-x-2">
              <Calendar className="size-5 text-blue-600" />
              <span className="text-gray-700">October 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="size-5 text-blue-600" />
              <span className="text-gray-700">Le Méridien Dubai Hotel & Conference Centre</span>
            </div>
          </div>
        </div>

        {/* Register CTA Button Outside the Card */}
        <div className="mt-8 text-center">
          <a
            href="/register"
            className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-blue-700"
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
}
