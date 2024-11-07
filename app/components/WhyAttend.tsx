'use client'

import { useEffect, useRef, useState } from 'react';
import { Users, Zap, ChartBar } from 'lucide-react';

const features = [
  { icon: Zap, title: 'Latest Innovations', description: 'Discover cutting-edge proptech solutions shaping the future of real estate.' },
  { icon: Users, title: 'Networking Opportunities', description: 'Connect with industry leaders, innovators, and potential partners.' },
  { icon: ChartBar, title: 'Investment Insights', description: 'Gain valuable insights into proptech investment opportunities and trends.' }
];

export default function WhyAttend() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`bg-white py-40 transition-opacity duration-1000 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">Why Attend?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center transform transition-transform duration-500 ease-in-out hover:scale-105">
              <feature.icon 
                className={`mx-auto h-12 w-12 text-orange-600 mb-4 opacity-0 ${isVisible ? 'animate-fadeIn' : ''}`} 
                style={{animationDelay: `${index * 1000}ms`}} 
              />
              <h3 className="text-xl font-semibold mb-2 text-black">{feature.title}</h3>
              <p 
                className={`text-gray-900 opacity-0 ${isVisible ? 'animate-fadeIn' : ''}`} 
                style={{animationDelay: `${index * 1000 + 500}ms`}}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}