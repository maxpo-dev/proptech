'use client';

import { useEffect, useRef, useState } from 'react';
import { Users, Zap, ChartBar } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Latest Innovations',
    description: 'Discover cutting-edge proptech solutions shaping the future of real estate.',
  },
  {
    icon: Users,
    title: 'Networking Opportunities',
    description: 'Connect with industry leaders, innovators, and potential partners.',
  },
  {
    icon: ChartBar,
    title: 'Investment Insights',
    description: 'Gain valuable insights into proptech investment opportunities and trends.',
  },
];

export default function WhyAttend() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;

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

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
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
        <h2 className="mb-12 text-center text-3xl font-bold text-black">Why Attend?</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center transition-transform duration-500 ease-in-out hover:scale-105"
            >
              <feature.icon
                className={`mx-auto mb-4 size-12 text-orange-600 opacity-0 ${
                  isVisible ? 'animate-fadeIn' : ''
                }`}
                style={{ animationDelay: `${index * 1000}ms` }}
              />
              <h3 className="mb-2 text-xl font-semibold text-black">{feature.title}</h3>
              <p
                className={`text-gray-900 opacity-0 ${
                  isVisible ? 'animate-fadeIn' : ''
                }`}
                style={{ animationDelay: `${index * 1000 + 500}ms` }}
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
