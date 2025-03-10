import React from 'react';
import Image from 'next/image';
import proptechfloorplan from '@/public/image/brochure/PROPTECH FLOOR PLAN.jpg';

export default function ProptechFloorPlan() {
  return (
    <div
      style={{
        maxWidth: '1000px', // Increased container width
        margin: '0 auto',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <h1 style={{ marginBottom: '1rem' }}>Future PropTech Summit Floor Plan</h1>
      <Image
        src={proptechfloorplan}
        alt="PropTech Summit Floor Plan"
        width={1000}   // Image width
        height={800}   // Image height
        style={{ display: 'block', margin: '0 auto' }}
      />
    </div>
  );
}
