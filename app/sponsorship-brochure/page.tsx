import React from 'react';
import Image from 'next/image';
import sponsorImg1 from '@/public/image/brochure/fps-b21.jpg';
import sponsorImg2 from '@/public/image/brochure/fps-b22.jpg';

const SponsorshipBrochure: React.FC = () => {
  return (
    <div className="pb-20 pt-[100px]"> {/* Adjusted top padding */}
      <Image
        src={sponsorImg1}
        alt="Sponsorship Brochure"
        style={{ display: 'block', margin: '0 auto' }}
      />
      <Image
        src={sponsorImg2}
        alt="Sponsorship Brochure"
        style={{ display: 'block', margin: '0.1rem auto 0' }}
      />
    </div>
  );
};

export default SponsorshipBrochure;
