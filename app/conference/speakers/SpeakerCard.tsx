"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa"; // LinkedIn icon import

interface SpeakerCardProps {
  name: string;
  jobTitle: string;
  companyName: string;
  linkedIn: string;
  speakerImage: string;
  companyLogo: string;
  fullBio: string;
}

export default function SpeakerCard({
  name,
  jobTitle,
  companyName,
  linkedIn,
  speakerImage,
  companyLogo,
  fullBio,
}: SpeakerCardProps) {
  const [expanded, setExpanded] = useState(false);
  const shortBio = fullBio.split(" ").slice(0, 50).join(" ") + "...";

  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center">
      {/* Speaker Image */}
      <div className="flex justify-center">
        <div className="w-[150px] h-[250px] overflow-hidden rounded-full flex items-center justify-center">
          <Image
            src={speakerImage}
            alt={name}
            width={150}
            height={150}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Speaker Details */}
      <h2 className="mt-4 text-lg font-bold text-gray-900">{name}</h2>
      <p className="text-sm text-gray-600">{jobTitle}</p>
      <p className="text-sm text-gray-500">{companyName}</p>

      {/* Company Logo */}
      <div className="flex justify-center mt-4">
        <Image
          src={companyLogo}
          alt={`${companyName} Logo`}
          width={100}
          height={50}
          className="w-24 h-auto object-contain"
        />
      </div>

      {/* Biography */}
      <p className="mt-4 text-sm text-gray-700 text-left">
        {expanded ? fullBio : shortBio}
      </p>

      {/* Read More Button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-blue-600 font-semibold hover:underline mt-2"
      >
        {expanded ? "Read Less" : "Read More"}
      </button>

      {/* LinkedIn Icon Button */}
      <div className="mt-4">
        <Link
          href={linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center text-blue-600 hover:text-blue-800"
        >
          <FaLinkedin size={24} title="LinkedIn Profile" />
        </Link>
      </div>
    </div>
  );
}
