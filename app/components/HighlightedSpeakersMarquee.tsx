'use client';

// import { SpeakerIcon } from 'lucide-react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

export default function HighlightedSpeakersMarquee() {
  const highlighted = [
    { name: 'Amit Puri', image: '/image/speakers/AmitPuri.JPG' },
    { name: 'Sam Achampong', image: '/image/speakers/Sam Achampong photo pic.jpg' },
    { name: 'Patrick Nessenthaler', image: '/image/speakers/Primary Headshot (High Resolution).jpg' },
    { name: 'Dong Min Lee', image: '/image/speakers/Min Lee.jpg' },
    { name: 'Moataz Mosallam', image: '/image/speakers/PHOTO-2025-02-20-17-48-34.jpg' },
    { name: 'Syed Mazhar', image: '/image/speakers/Syed Mazhar.jpeg' },
    { name: 'Boris Segal', image: '/image/speakers/Boris Segal-21-Largess.jpg' },
    { name: 'Hans Christensen', image: '/image/speakers/Hans Picture.jpg' },
    { name: 'Dr. Abdulla AlWahedi', image: '/image/speakers/400x400-01.jpg' }
  ];

  return (
    <div className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 py-4 border-y border-gray-300 shadow-lg">
      <Marquee speed={40} gradient={false} pauseOnHover>
        {highlighted.map((speaker, index) => (
          <div key={index} className="flex items-center mx-6 space-x-4">
            <div className="relative w-16 h-20 rounded-full overflow-hidden shadow-lg">
              <Image src={speaker.image} alt={speaker.name} fill className="object-cover" />
            </div>
            <span className="text-lg font-serif text-gray-800 whitespace-nowrap">{speaker.name}</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
