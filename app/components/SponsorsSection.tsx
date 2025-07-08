'use client';

import Image from "next/image";
import img1 from "@/public/images/sponsers/img (1).png";
import img2 from "@/public/images/sponsers/img (2).png";
import img3 from "@/public/images/sponsers/img (3).png";
import img4 from "@/public/images/sponsers/img (4).png";
import img5 from "@/public/images/sponsers/img (5).png";
import img6 from "@/public/images/sponsers/img (6).png";
import img7 from "@/public/images/sponsers/img (7).png";
import img8 from "@/public/images/sponsers/img (8).png";
import img9 from "@/public/images/sponsers/img (9).png";
import img10 from "@/public/images/sponsers/img (10).png";
import img11 from "@/public/images/sponsers/img (11).png";
import img12 from "@/public/images/sponsers/img (12).png";
import img13 from "@/public/images/sponsers/img (13).png";
import img14 from "@/public/images/sponsers/img (14).png";

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
      <div className="mx-auto max-w-screen-lg px-6 text-center">
        <h2 className="mb-12 text-4xl font-extrabold text-gray-900">Sponsors from Our Past Events</h2>

        {/* Sponsors Scroll */}
        <div className="relative overflow-hidden">
          <div className="animate-marquee flex space-x-8">
            {sponsors.map((sponsor, index) => (
              <div key={index} className="shrink-0">
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
