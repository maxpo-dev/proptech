import React from 'react';
import Image from 'next/image';
import sponsorImg1 from '@/public/image/brochure/sponcership brochure-01 (1).jpg';
import sponsorImg2 from '@/public/image/brochure/sponcership brochure-02 (1).jpg';

const SponsorshipBrochure: React.FC = () => {
  return (
    <div className='py-20'
      style={{
        // maxWidth: '600px',
        // margin: 'calc(2rem + 80px) auto 0', // Extra top margin for the fixed navbar....
        // padding: '2rem',
        // textAlign: 'center',
      }}
    >
      <Image
        src={sponsorImg1}
        alt="Sponsorship Brochure"
        // width={600}
        // height={480}
        style={{ display: 'block', margin: '0 auto' }}
      />
      <Image
        src={sponsorImg2}
        alt="Sponsorship Brochure"
        // width={600}
        // height={480}
        style={{ display: 'block', margin: '0.1rem auto 0' }}
      />
    </div>
  );
};

export default SponsorshipBrochure;
