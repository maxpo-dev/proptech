import React from "react";
import Image from "next/image";
import Logo from '@/app/images/white logo.png'

const AboutPage = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 mt-10">
      {/* Event Information Section */}
      <section className="container mx-auto bg-white rounded-lg shadow-md p-8 mb-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Event Information</h2>
        <p className="text-lg text-gray-700 mb-4">
          The International Proptech Conference & Investment Expo is a premier event that focuses on
          the transformative impact of technology in the property industry. This year’s event will
          place a special emphasis on innovative solutions such as fractional ownership and the
          potential of PropTech in the Dubai real estate sector.
        </p>
        <h3 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">Vision</h3>
        <p className="text-gray-700 mb-4">
          To redefine the real estate investment landscape by embracing cutting-edge technology and
          making property ownership more accessible and efficient.
        </p>
        <h3 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">Mission</h3>
        <p className="text-gray-700 mb-4">
          Our mission is to connect industry leaders, innovators, and investors under one roof to
          explore the future of property technology. We aim to highlight advancements in IoT, AI,
          blockchain, and other key technologies shaping the future of real estate.
        </p>
        <h3 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">Relevance of the Event</h3>
        <p className="text-gray-700 mb-4">
          As Dubai continues to be a global hub for innovation and real estate, this expo is a
          vital platform for understanding and adopting new trends. The event will serve as a
          launchpad for cutting-edge technology solutions that make property investments simpler and
          more secure.
        </p>
      </section>

      {/* Organizers Section */}
      <section className="container mx-auto bg-blue-900 rounded-lg shadow-md p-8">
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
      </section>
    </div>
  );
};

export default AboutPage;
