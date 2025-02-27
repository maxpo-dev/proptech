import SpeakerCard from "./SpeakerCard";

export default function SpeakersPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-black pt-24 relative z-10">
          Meet Our Speakers
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center mt-8">
          {/* Amit Puri */}
          <SpeakerCard
            name="Amit Puri"
            jobTitle="Group CEO"
            companyName="BNW Developments"
            linkedIn="https://www.linkedin.com/in/amitpuri75"
            speakerImage="/image/speakers/AmitPuri.jpg"
            companyLogo="/image/speakersCompanyLogo/BnW Developments - Stack Logo.png"
          />

          {/* Sam Achampong */}
          <SpeakerCard
            name="Sam Achampong"
            jobTitle="Regional Managing Director Asia, Middle East & Africa (AMEA)"
            companyName="Chartered Institute of Procurement & Supply (CIPS)"
            linkedIn="https://www.linkedin.com/in/samachampong/"
            speakerImage="/image/speakers/Sam Achampong photo pic.jpg"
            companyLogo="/image/speakersCompanyLogo/CIPS_Logo_Blue_RGB.jpg"
            biography="Sam is a senior executive with extensive experience across the Europe, Middle East and Africa (EMEA) region. He has held senior roles at Land Securities, Abu Dhabi Municipality, and MTN. He is an alumnus of the University of Oxford Business School and holds multiple degrees, including an MSc in International Procurement from the University of South Wales. Sam is a Fellow of the Chartered Institute of Procurement & Supply (CIPS) and a strong advocate for professional standards, diversity & inclusion, ESG, and sustainable supply chain practices."
          />
        </div>
      </div>
    </div>
  );
}
