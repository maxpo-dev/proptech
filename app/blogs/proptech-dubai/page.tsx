import Image from "next/image";

export default function DubaiPropTechBlogPage() {
  return (
    <div className="w-full px-4 py-24 text-center flex flex-col items-center">
      {/* Optimized full-width image */}
      <div className="w-full h-[88vh] relative">
        <Image
          src="/image/blogs/Dubai – The PropTech Powerhouse Driving the Future of Real Estate.jpg"
          alt="Dubai PropTech Powerhouse"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      <article className="bg-white shadow-2xl rounded-lg p-6 w-full md:w-3/4 lg:w-2/3 text-center relative">
        <h2 className="text-2xl font-extrabold mb-4">
          Dubai – The PropTech Powerhouse Driving the Future of Real Estate
        </h2>

        <h3 className="text-xl font-extrabold mt-6 mb-3">
          Dubai: A Global Hub for PropTech Innovation
        </h3>
        <p className="text-gray-800 text-base font-semibold mb-4">
          Dubai is revolutionizing the real estate industry with cutting-edge PropTech solutions. From AI-powered smart cities
          to blockchain-secured transactions, the city is setting global benchmarks for digital transformation in real estate.
        </p>

        <h3 className="text-xl font-extrabold mt-6 mb-3">
          Why is Dubai Leading the PropTech Revolution?
        </h3>

        <p className="text-gray-800 text-base font-semibold mb-4">
          <strong>1. AI and Smart Cities: The Future of Real Estate</strong>
          <br />
          Artificial intelligence is transforming real estate by optimizing property management, streamlining investments,
          and enhancing customer experiences. Platforms like Bayut and Property Finder leverage AI to deliver precise
          property matches between buyers and sellers.
        </p>
        <p className="text-gray-800 text-base font-semibold mb-4">
          Dubai’s smart city initiatives integrate AI-driven property management systems, IoT-enabled infrastructure,
          and blockchain-secured transactions, making urban planning and real estate operations seamless and efficient.
        </p>

        <p className="text-gray-800 text-base font-semibold mb-2">
          <strong>2. Blockchain-Powered Transactions: Secure and Hassle-Free</strong>
          <br />
          Dubai is setting global standards in digital real estate transactions through blockchain technology. The emirate has
          introduced paperless property registration and digital mortgage platforms, ensuring faster and more secure deals.
        </p>
        <p className="text-left text-black text-base font-bold mb-2">Key Highlights</p>
        <ul className="pl-5 text-left text-gray-800 text-base font-semibold list-none">
          <li>✔ Propy, a blockchain-powered real estate platform, has facilitated over $1 billion in transactions, reducing processing time by 20%</li>
          <li>✔ Dubai’s Real Estate Blockchain Strategy aims for 100% digital transactions by 2030</li>
          <li>✔ The PropTech market is expected to reach $64.3 billion by 2028, growing at a 15.4% CAGR</li>
        </ul>

        <p className="text-gray-800 text-base font-semibold mt-4 mb-2">
          <strong>3. Fractional Ownership: Democratizing Real Estate Investments</strong>
          <br />
          Fractional ownership is making luxury real estate more accessible by allowing investors to buy shares in
          high-value properties. This innovative model reduces risk and provides more investment flexibility.
        </p>
        <p className="text-left text-black text-base font-bold mb-2">Key Benefits</p>
        <ul className="pl-5 text-left text-gray-800 text-base font-semibold list-none">
          <li>✔ Lower capital investment for premium properties</li>
          <li>✔ Increased liquidity and flexibility</li>
          <li>✔ Blockchain-powered transparency for secure investments</li>
        </ul>

        <h3 className="text-xl font-extrabold mt-6 mb-3">The Future of PropTech in Dubai</h3>
        <p className="text-gray-800 text-base font-semibold mb-4">
          Dubai is leading the PropTech revolution with AI-driven real estate, blockchain innovations, and smart city
          developments. As the Future PropTech Summit 2025 approaches, industry leaders, investors and innovators
          will explore the next wave of digital transformation.
        </p>

        <p className="text-lg font-extrabold mt-4">
          Join the revolution and be part of Dubai’s digital real estate evolution!
        </p>
        <p className="text-base mt-1">
          Register at <a href="https://www.futureproptechsummit.com" className="text-blue-500 underline">Future PropTech Summit 2025</a>.
        </p>

        <p className="text-gray-400 text-right mt-4">by Nazish Shah</p>

        <div className="relative w-full h-64 mt-6">
          <Image
            src="/image/blogs/futureproptechblogfooter.jpg"
            alt="Dubai PropTech Innovation"
            fill
            className="object-cover rounded-lg shadow-md"
            sizes="100vw"
          />
        </div>
      </article>
    </div>
  );
}
