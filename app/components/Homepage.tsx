import React from "react";
import Image from "next/image";

const HomePage = () => {
  return (
    <main className="bg-gray-100 text-gray-800">
      {/* Hero Section */}
    <section className="bg-gradient-to-r from-blue-900 to-teal-600 py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            International Proptech Conference & Investment Expo
          </h1>
          <p className="mb-8 text-lg md:text-xl">February 2025 | Dubai</p>
          <button className="bg-gold-600 hover:bg-gold-700 rounded-lg px-6 py-3 font-semibold text-white">
            Register Now
          </button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="px-6 py-12">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 text-3xl font-semibold">Empowering the Future of Real Estate</h2>
          <p className="mb-6 text-lg text-gray-700">
            Join us to explore the transformative impact of proptech and fractional ownership in Dubai’s real estate industry.
            Discover insights into innovative technologies like IoT, AI, and Blockchain reshaping the property market.
          </p>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto">
          <h3 className="mb-8 text-center text-3xl font-semibold">Key Highlights</h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-blue-50 p-6 text-center shadow-md">
              <h4 className="mb-2 text-xl font-bold">Cutting-edge Tech Exhibits</h4>
              <p className="text-gray-600">
                Discover the latest advancements in proptech, featuring IoT, AI, and blockchain technologies.
              </p>
            </div>
            <div className="rounded-lg bg-blue-50 p-6 text-center shadow-md">
              <h4 className="mb-2 text-xl font-bold">Expert-led Panels</h4>
              <p className="text-gray-600">
                Join interactive panels with industry leaders to discuss real estate trends and investment opportunities.
              </p>
            </div>
            <div className="rounded-lg bg-blue-50 p-6 text-center shadow-md">
              <h4 className="mb-2 text-xl font-bold">Networking Opportunities</h4>
              <p className="text-gray-600">
                Connect with global industry professionals and discover collaborative opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About the Conference Section */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="container mx-auto text-center">
          <h3 className="mb-6 text-3xl font-semibold">About the Conference</h3>
          <p className="mb-8 text-lg text-gray-700">
            Dive into transformative discussions on how technology is reshaping the real estate landscape.
            Explore topics such as IoT, AI, blockchain, and smart contracts, with insights from top industry experts.
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center">
              <Image
                src="/icons/iot-icon.png"
                alt="IoT"
                width={48}
                height={48}
                className="mb-4"
              />
              <p className="text-xl font-semibold">IoT Integration</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/icons/ai-icon.png"
                alt="AI"
                width={48}
                height={48}
                className="mb-4"
              />
              <p className="text-xl font-semibold">AI in Real Estate</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/icons/blockchain-icon.png"
                alt="Blockchain"
                width={48}
                height={48}
                className="mb-4"
              />
              <p className="text-xl font-semibold">Blockchain</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
