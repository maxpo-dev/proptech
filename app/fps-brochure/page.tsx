import React from 'react';
import Image from 'next/image';
import img1 from '@/public/image/brochure/1x(1).jpg';
import img2 from '@/public/image/brochure/2x.jpg';
import img3 from '@/public/image/brochure/3x.jpg';
import img4 from '@/public/image/brochure/3x.jpg';
import img5 from '@/public/image/brochure/4x.jpg';
import img6 from '@/public/image/brochure/5x.jpg';
import img7 from '@/public/image/brochure/6x.jpg';
import img8 from '@/public/image/brochure/7x.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const FpsBrochure: React.FC = () => {
  return (
    <div
      // style={{
      //   maxWidth: '600px',
      //   margin: 'calc(2rem + 80px) auto 0', // Adds extra 80px for the fixed navbar
      //   padding: '2rem',
      //   textAlign: 'center',
      // }}
    >
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`FPS Brochure - Page ${index + 1}`}
          width={1800}
          height={480}
          style={{ display: 'block', margin: '0 auto 1rem' }}
        />
      ))}
    </div>
  );
};

export default FpsBrochure;
