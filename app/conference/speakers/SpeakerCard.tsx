import Image from "next/image";
import Link from "next/link";

interface SpeakerCardProps {
  name: string;
  jobTitle: string;
  companyName: string;
  linkedIn: string;
  speakerImage: string;
  companyLogo: string;
  biography?: string; // Optional biography
}

export default function SpeakerCard({
  name,
  jobTitle,
  companyName,
  linkedIn,
  speakerImage,
  companyLogo,
  biography,
}: SpeakerCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center">
      {/* Speaker Image */}
      <div className="flex justify-center">
        <Image
          src={speakerImage}
          alt={name}
          width={150}
          height={150}
          className="rounded-full object-cover"
        />
      </div>

      {/* Speaker Details */}
      <h2 className="mt-4 text-lg font-bold text-gray-900">{name}</h2>
      <p className="text-sm text-gray-600">{jobTitle}</p>
      <p className="text-sm text-gray-500">{companyName}</p>

      {/* Company Logo */}
      <div className="flex justify-center mt-3">
        <Image
          src={companyLogo}
          alt={`${companyName} Logo`}
          width={100}
          height={50}
          className="object-contain"
        />
      </div>

      {/* Biography (if available) */}
      {biography && (
        <p className="mt-4 text-sm text-gray-700 text-left">{biography}</p>
      )}

      {/* LinkedIn Button */}
      <div className="mt-4">
        <Link
          href={linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 font-semibold hover:underline"
        >
          View LinkedIn Profile
        </Link>
      </div>
    </div>
  );
}
