// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// interface ExpandableSpeakerCardProps {
//   name: string;
//   jobTitle: string;
//   companyName: string;
//   linkedIn: string;
//   speakerImage: string;
//   companyLogo: string;
//   shortBio: string;
//   fullBio: string;
// }

// export default function ExpandableSpeakerCard({
//   name,
//   jobTitle,
//   companyName,
//   linkedIn,
//   speakerImage,
//   companyLogo,
//   shortBio,
//   fullBio,
// }: ExpandableSpeakerCardProps) {
//   const [isExpanded, setIsExpanded] = useState(false);

//   return (
//     <div className="bg-white shadow-md rounded-lg p-6 text-center">
//       {/* Speaker Image */}
//       <div className="flex justify-center">
//         <Image
//           src={speakerImage}
//           alt={name}
//           width={150}
//           height={150}
//           className="rounded-full object-cover"
//         />
//       </div>

//       {/* Speaker Details */}
//       <h2 className="mt-4 text-lg font-bold text-gray-900">{name}</h2>
//       <p className="text-sm text-gray-600">{jobTitle}</p>
//       <p className="text-sm text-gray-500">{companyName}</p>

//       {/* Company Logo */}
//       <div className="flex justify-center mt-3">
//         <Image
//           src={companyLogo}
//           alt={`${companyName} Logo`}
//           width={100}
//           height={50}
//           className="object-contain"
//         />
//       </div>

//       {/* Biography with Read More */}
//       <p className="mt-4 text-sm text-gray-700 text-left">
//         {isExpanded ? fullBio : `${shortBio} `}
//         {!isExpanded && (
//           <button
//             onClick={() => setIsExpanded(true)}
//             className="text-blue-600 font-semibold hover:underline"
//           >
//             Read More
//           </button>
//         )}
//       </p>

//       {/* LinkedIn Button */}
//       <div className="mt-4">
//         <Link
//           href={linkedIn}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-blue-600 font-semibold hover:underline"
//         >
//           View LinkedIn Profile
//         </Link>
//       </div>
//     </div>
//   );
// }
