'use client';

import Image from "next/image";
import img1 from "@/app/images/sponsers/img (1).png";
import img2 from "@/app/images/sponsers/img (2).png";
import img3 from "@/app/images/sponsers/img (3).png";
import img4 from "@/app/images/sponsers/img (4).png";
import img5 from "@/app/images/sponsers/img (5).png";
import img6 from "@/app/images/sponsers/img (6).png";
import img7 from "@/app/images/sponsers/img (7).png";
import img8 from "@/app/images/sponsers/img (8).png";
import img9 from "@/app/images/sponsers/img (9).png";
import img10 from "@/app/images/sponsers/img (10).png";
import img11 from "@/app/images/sponsers/img (11).png";
import img12 from "@/app/images/sponsers/img (12).png";
import img13 from "@/app/images/sponsers/img (13).png";
import img14 from "@/app/images/sponsers/img (14).png";

const sponsors = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
];

export default function SponsorsSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-screen-lg mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-12 text-gray-900">Our Previous Sponsors</h2>

        {/* Sponsors Scroll */}
        <div className="relative overflow-hidden">
          <div className="flex space-x-8 animate-marquee">
            {sponsors.map((sponsor, index) => (
              <div key={index} className="flex-shrink-0">
                <Image
                  src={sponsor}
                  alt={`Sponsor ${index + 1}`}
                  className="h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee Animation Styles */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          display: flex;
          gap: 2rem;
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </section>
  );
}
