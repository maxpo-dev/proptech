import React from 'react';
import { Building2, Users, Lightbulb, Target, Calendar, MapPin } from 'lucide-react';
import Aboutimg from '@/app/images/zq-lee-VbDjv8-8ibc-unsplash.jpg'
import Image from 'next/image';

const AboutSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-12">
    <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
    {children}
  </div>
);

const FeatureCard = ({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0">
      <Icon className="h-6 w-6 text-blue-600" />
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default function About() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-start mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 text-center">
            About Future Proptech Summit
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
            Exploring the future of real estate technology in Dubai, October 2025
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-40 ">
          <div>
            <Image 
              src= {Aboutimg}
              alt="Proptech Conference" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col pl-10">
            <AboutSection title="Event Overview">
              <p className="text-gray-600 mb-4">
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
          <p className="text-gray-600 mb-40">
            To revolutionize the real estate landscape by integrating advanced technology solutions that 
            drive efficiency, improve tenant experience, and increase investment returns. This event aims 
            to inspire and empower attendees with insights and tools for success in the fast-evolving 
            proptech industry.
          </p>
        </AboutSection>

        <AboutSection title="Why Attend?">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-40">
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
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600 mb-40">
            <li className="flex items-center space-x-2">
              <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
              <span>Real Estate Developers and Investors</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
              <span>Property Management Companies</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
              <span>Tech Providers and Innovators</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
              <span>Financial Institutions and Government Agencies</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
              <span>Legal and Consulting Professionals</span>
            </li>
          </ul>
        </AboutSection>

        <AboutSection title="Event Highlights">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600 mb-40">
            <li className="flex items-center space-x-2">
              <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
              <span>Keynote Sessions with Industry Thought Leaders</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
              <span>Panel Discussions on IoT, Blockchain, AI, and Fractional Ownership</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
              <span>Networking Opportunities with Peers and Experts</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
              <span>Exhibitions Showcasing Innovative Proptech Solutions</span>
            </li>
          </ul>
        </AboutSection>

        <div className="bg-blue-100 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Event Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-blue-600" />
              <span className="text-gray-700">October 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-blue-600" />
              <span className="text-gray-700">Dubai, UAE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}