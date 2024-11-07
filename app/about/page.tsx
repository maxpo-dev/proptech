import React from "react";
// import Image from "next/image";
// import Logo from '@/app/images/white logo.png'
import AboutHeroSection from "../components/AboutHerosection";

const AboutPage = () => {
  return (
    <div>
      <AboutHeroSection />
    {/* <div className="bg-gray-100 py-12 px-4"> */}
      {/* Event Information Section */}
      

      {/* Organizers Section */}
      {/* <section className="container mx-auto bg-blue-900 rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-white mb-4">About the Organizers</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <Image
              src={Logo}// Replace with the actual path to the Maxpo logo
              alt="Maxpo Exhibitions Logo"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold text-white mb-3">Maxpo Exhibitions</h3>
            <p className="text-slate-300 mb-4">
              Maxpo Exhibitions is a leader in organizing high-profile events across various
              sectors, with a particular focus on real estate and technology. Known for its
              innovative approach and ability to bring together industry stakeholders, Maxpo
              Exhibitions is dedicated to promoting new developments and fostering global
              connections.
            </p>
            <p className="text-slate-300">
              With extensive experience in hosting conferences and expos, Maxpo is the ideal
              organizer to lead this Proptech event, ensuring a well-curated lineup of speakers,
              workshops, and networking opportunities.
            </p>
          </div>
        </div>
      </section> */}
    {/* </div> */}
    </div>
  );
};

export default AboutPage;
