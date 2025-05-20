"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";
import Link from "next/link";


export default function HighlightedSpeakersMarquee() {
  const highlighted = [
                {
      name: "Mohamad Ibrahim Hoteit",
      designation: "Director - Real Estate Development Department",
      image: "/image/speakers/MH. Image.png",
      companyLogo: "/image/speakersCompanyLogo/download.jpg",
    },
    
    {
      name: "Amit Puri",
      designation: "Group CEO",
      image: "/image/speakers/AmitPuri.JPG",
      companyLogo: "/image/speakersCompanyLogo/BnW Developments - Stack Logo.png",
    },
    {
      name: "Sam Achampong",
      designation: "Regional MD - AMEA",
      image: "/image/speakers/Sam Achampong photo pic.jpg",
      companyLogo: "/image/speakersCompanyLogo/CIPS_Logo_Blue_RGB.jpg",
    },
    {
      name: "Patrick Nessenthaler",
      designation: "Professor of Real Estate Finance",
      image: "/image/speakers/Primary Headshot (High Resolution).jpg",
      companyLogo: "/image/speakersCompanyLogo/U of L College of Business Logo.png",
    },
    {
      name: "Dong Min Lee",
      designation: "Sr. Director - Development",
      image: "/image/speakers/Min Lee.jpg",
      companyLogo: "/image/speakersCompanyLogo/RSG_EN_RGB_HORIZONTAL.png",
    },
    {
      name: "Moataz Mosallam",
      designation: "Partner - Head of PDS",
      image: "/image/speakers/PHOTO-2025-02-20-17-48-34.jpg",
      companyLogo: "/image/speakersCompanyLogo/knightfranklogo.svg",
    },
    {
      name: "Syed Mazhar",
      designation: "Director, HSSE Department",
      image: "/image/speakers/Syed Mazhar.jpeg",
      companyLogo: "/image/speakersCompanyLogo/GIA-Gold-Sponsor-Al-Bawani.png",
    },
    {
      name: "Boris Segal",
      designation: "Director - Digital Partnerships",
      image: "/image/speakers/Boris Segal-21-Largess.jpg",
      companyLogo: "/image/speakersCompanyLogo/cbre.jpg",
    },
    {
      name: "Hans Christensen",
      designation: "VP - DTEC",
      image: "/image/speakers/Hans Picture.jpg",
      companyLogo: "/image/speakersCompanyLogo/DTEC Logo.jpg",
    },
    {
      name: "Dr. Abdulla AlWahedi",
      designation: "Chief Executive Officer",
      image: "/image/speakers/400x400-01.jpg",
      companyLogo: "/image/speakersCompanyLogo/Logo.jpg",
    },
  ];

  return (
    <div>
      <div className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 py-4 border-y border-gray-300 shadow-inner">
        <Marquee speed={40} gradient={false} pauseOnHover>
          {highlighted.map((speaker, index) => (
            <div key={index} className="flex items-center space-x-3 mx-6">
              {/* Speaker Image */}
              <div
                className="relative rounded-full overflow-hidden shadow-lg border border-white"
                style={{ width: "6rem", height: "7.5rem" }}
              >
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Speaker Details */}
              <div className="flex flex-col text-gray-800">
                <span className="text-sm font-semibold">{speaker.name}</span>
                <span className="text-xs text-gray-600">{speaker.designation}</span>

                {/* Company Logo */}
                <div className="relative w-20 h-8 mt-2">
                  <Image
                    src={speaker.companyLogo}
                    alt={`${speaker.name} company logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </Marquee>
        <div className="flex justify-center mt-6">
        <Link href="/conference/speakers">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 hover:scale-105 transition-transform duration-300">
            View All
          </button>
        </Link>
      </div>
      </div>

      {/* Centered View All Button */}
   
    </div>
  );
}
