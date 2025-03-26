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
            speakerImage="/image/speakers/AmitPuri.JPG"
            companyLogo="/image/speakersCompanyLogo/BnW Developments - Stack Logo.png"
            fullBio="Qualified as an Architect MBA, Amit has been working to contribute to the global real estate sector for two and a half decades. He has spent a decade in the region curating stories for mixed-use and retail assets. He believes in focusing on growing value through his varied expertise and network. He is currently the CEO at BNW Developments, where he sets direction with the Board to achieve profitable growth for his team of 300+ professionals. He oversees the function of sales, marketing, project design and delivery, HR, legal, technology, property management and experiential customer service. He is helping expand the company's market presence as well as share in the luxury branded residences domain and fostering partnerships with key stakeholders."
          />

          {/* Sam Achampong */}
          <SpeakerCard
            name="Sam Achampong"
            jobTitle="Regional Managing Director Asia, Middle East & Africa (AMEA)"
            companyName="Chartered Institute of Procurement & Supply (CIPS)"
            linkedIn="https://www.linkedin.com/in/samachampong/"
            speakerImage="/image/speakers/Sam Achampong photo pic.jpg"
            companyLogo="/image/speakersCompanyLogo/CIPS_Logo_Blue_RGB.jpg"
            fullBio="Sam is a senior executive with extensive experience across the Europe, Middle East and Africa (EMEA) region. He has held senior roles at Land Securities, Abu Dhabi Municipality, and MTN. He is an alumnus of the University of Oxford Business School and holds multiple degrees, including an MSc in International Procurement from the University of South Wales. Sam is a Fellow of the Chartered Institute of Procurement & Supply (CIPS) and a strong advocate for professional standards, diversity & inclusion, ESG, and sustainable supply chain practices."
          />

          {/* Patrick Nessenthaler */}
          <SpeakerCard
            name="Patrick Nessenthaler"
            jobTitle="Professor of Real Estate Finance & Real Estate Program Director"
            companyName="University of Louisville College of Business"
            linkedIn="https://www.linkedin.com/in/patricknessenthaler/"
            speakerImage="/image/speakers/Primary Headshot (High Resolution).jpg"
            companyLogo="/image/speakersCompanyLogo/U of L College of Business Logo.png"
            fullBio="Patrick Nessenthaler is a seasoned real estate investment strategist with two decades of experience in the commercial real estate industry. He has successfully sourced, negotiated, and executed over $4 billion in complex debt and equity transactions across various asset classes. Patrick is a full-time professor of Real Estate Finance at the University of Louisville, where he is spearheading the establishment of the university’s first Center for Real Estate, dedicated to expanding education and research in the field. He also serves on the Advisory Board of the Kelley School of Business’ Center for Real Estate Studies. He also serves as a Partner & Co-Founder of CREnetics where Patrick leads the integration of innovative technology and non-traditional data to provide AI-powered insights, reshaping decision-making in the commercial real estate market. Patrick is a sought-after speaker and educator, having lectured at leading universities and presented at numerous industry forums. Since 2017, he has organized CFA Society New York’s Annual Real Estate Outlook events and currently serves as Vice Chair of its Alternative Investments Group."
          />

          {/* Dong Min Lee */}
          <SpeakerCard
            name="Dong Min Lee"
            jobTitle="Senior Director - Development"
            companyName="Red Sea Global"
            linkedIn=""
            speakerImage="/image/speakers/Min Lee.jpg"
            companyLogo="/image/speakersCompanyLogo/RSG_EN_RGB_HORIZONTAL.png"
            fullBio="As a seasoned real estate development professional, Min Lee brings extensive experience managing projects of varying scales, from micro-developments to Giga-projects. His expertise spans across diverse markets and regions, including the UK, UAE, Korea, China, Qatar, Morocco, and KSA. Min Lee specializes in the development of hospitality and residential assets in major urban centers. He is recognized as a strategic thinker with a strong track record of successful project delivery. His ability to lead and inspire teams has consistently driven project success and excellence. His professional journey is marked by a commitment to quality, innovation, and sustainable development practices. In his current role as Sr. Director of Development at RSG, Min Lee leverages integrated development management and lean design & construction methodologies to optimize project outcomes. Additionally, Min Lee is deeply interested in exploring the applications of AI and ML in real estate to drive efficiency and innovation in the industry."
          />

<SpeakerCard
            name="Moataz Mosallam"
            jobTitle="Partner- Head of Project & Development Services"
            companyName="Knight Frank MENA"
            linkedIn="https://www.linkedin.com/in/moataz-a-mosallam-729b2172/"
            speakerImage="/image/speakers/PHOTO-2025-02-20-17-48-34.jpg"
            companyLogo="/image/speakersCompanyLogo/knightfranklogo.svg"
            fullBio="Moataz Heads our Project & Development services  team for UAE & Egypt, A construction spearhead, development and project management professional with over 15 years of experience in the MENA region of managing different kinds of developments, Programs and Projects for flagship clients. An Architectural Engineer by Background, Master's holder in Business administration (MBA) from University of Wales, (PMP) Accredited and Chartered Construction Manager MCIOB of the CIOB (UK) in addition to Harvard business school diploma in Leadership and management strategies."
          />

           {/* Syed Mazhar */}
           <SpeakerCard
            name="Syed Mazhar"
            jobTitle="Director, HSSE Department"
            companyName="AlBawani"
            linkedIn=""
            speakerImage="/image/speakers/Syed Mazhar.jpeg"
            companyLogo="/image/speakersCompanyLogo/GIA-Gold-Sponsor-Al-Bawani.png"
            fullBio="Syed Mazhar is Director, HSSE Department at AlBawani, the appointed Chair for IOSH UAE/KSA Branch, a Chartered Fellow Safety Professional and Authorized OHSE Trainer & Assessor for IOSH and NVQ Qualifications.He holds BBA, BSc in fire and safety engineering with professional OHSE Qualifications such as NVQ, NEBOSH, ISOs, IOSH, NASP and OSHA. He has over 18 years of experience in the field of HSE and previously worked with world well known organizations in the middle east."
          />

           {/* Boris Segal */}
           <SpeakerCard
            name="Boris Segal"
            jobTitle="Director of Strategic Digital Partnerships"
            companyName="CBRE"
            linkedIn="https://www.linkedin.com/in/segalboris/"
            speakerImage="/image/speakers/Boris Segal-21-Largess.jpg"
            companyLogo="/image/speakersCompanyLogo/CBRE_white.png"
            fullBio="Boris Segal is a dynamic technology leader with a proven track record of driving
innovation and delivering results in fast-paced environments.
With over 25 years of experience, Boris has consistently been at the forefront of
technological advancements, leading teams and managing critical business projects.
Currently, Boris serves as the Director of Strategic Digital Partnerships at CBRE, where
he oversees the company's relationships with partner venture capital firms and Proptech
startups. He is responsible for piloting and implementing innovative Proptech solutions.
His expertise includes change management and enhancing business models through
technologies such as IoT, AR/VR, and AI.
Before joining CBRE, Boris held leadership positions in startups and telecom
companies, where he led technology integrations that improved operational efficiency
and enhanced client experiences.
Boris holds a Master of Science degree in Information Management from City University
London and an MBA from Cass Business School."
          />
        </div>
      </div>
    </div>
  );
}
