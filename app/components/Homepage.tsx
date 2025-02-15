import React from "react";

const HomePage = () => {
  return (
    <main className="bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-teal-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            International Proptech Conference & Investment Expo
          </h1>
          <p className="text-lg md:text-xl mb-8">February 2025 | Dubai</p>
          <button className="bg-gold-600 hover:bg-gold-700 text-white py-3 px-6 rounded-lg font-semibold">
            Register Now
          </button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Empowering the Future of Real Estate</h2>
          <p className="text-lg text-gray-700 mb-6">
            Join us to explore the transformative impact of proptech and fractional ownership in Dubai’s real estate industry.
            Discover insights into innovative technologies like IoT, AI, and Blockchain reshaping the property market.
          </p>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto">
          <h3 className="text-3xl font-semibold text-center mb-8">Key Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Highlight Card */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-md text-center">
              <h4 className="text-xl font-bold mb-2">Cutting-edge Tech Exhibits</h4>
              <p className="text-gray-600">
                Discover the latest advancements in proptech, featuring IoT, AI, and blockchain technologies.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md text-center">
              <h4 className="text-xl font-bold mb-2">Expert-led Panels</h4>
              <p className="text-gray-600">
                Join interactive panels with industry leaders to discuss real estate trends and investment opportunities.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md text-center">
              <h4 className="text-xl font-bold mb-2">Networking Opportunities</h4>
              <p className="text-gray-600">
                Connect with global industry professionals and discover collaborative opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About the Conference Section */}
      <section className="py-12 px-6 bg-gray-100">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-6">About the Conference</h3>
          <p className="text-lg text-gray-700 mb-8">
            Dive into transformative discussions on how technology is reshaping the real estate landscape.
            Explore topics such as IoT, AI, blockchain, and smart contracts, with insights from top industry experts.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <img src="/icons/iot-icon.png" alt="IoT" className="w-12 h-12 mb-4" />
              <p className="text-xl font-semibold">IoT Integration</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/icons/ai-icon.png" alt="AI" className="w-12 h-12 mb-4" />
              <p className="text-xl font-semibold">AI in Real Estate</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/icons/blockchain-icon.png" alt="Blockchain" className="w-12 h-12 mb-4" />
              <p className="text-xl font-semibold">Blockchain</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
