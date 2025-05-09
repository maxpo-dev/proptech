"use client";

import Image from "next/image";

export default function GameChangerBlogPage() {
  return (
    <div className="w-full px-4 py-24 text-center flex flex-col items-center">
      <div className="w-full h-[70vh] sm:h-[100vh] relative">
        <Image
          src="/image/blogs/Blogs (1).png" // replace with actual image path if different
          alt="Dubai Game-Changer in PropTech"
          fill
          className="object-contain sm:object-cover"
          priority
            sizes="100vw"
        />
      </div>

      <article className="bg-white shadow-2xl rounded-lg p-6 w-full md:w-3/4 lg:w-2/3 text-left relative">
        <h1 className="text-2xl font-extrabold mb-4">
          Why Dubai is a Game-changer in PropTech: A Bold Vision for the Future
        </h1>

        <p className="text-gray-800 text-base mb-4">
          When it comes to innovation, Dubai has always been at the forefront, and its latest focus on proptech is no exception. As global property markets embrace digital transformation, Dubai is solidifying its position as a global leader in real estate innovation.
        </p>

        <p className="text-gray-800 text-base mb-4">
          The emirate's proptech strategy includes rising property values, alluring rental yields, and the introduction of technologies like blockchain and AI. Globally, the market is set to surpass $89 billion by 2032, growing at 11.9% CAGR. Dubai's proptech sector is growing even faster—at 20% CAGR between 2022 and 2028.
        </p>

        <p className="text-gray-800 text-base mb-4">
          Dubai’s property prices are projected to rise by 5–8% this year, with average rental yields nearing 7%. This makes the city attractive not only for its returns but also for its cutting-edge infrastructure.
        </p>

        <p className="text-gray-800 text-base mb-4">
          Early adopters are already benefiting from blockchain-powered smart contracts, digital transactions, and AI analytics. Government efforts like the DIEZ and DLD collaboration underscore Dubai’s goal of becoming a proptech powerhouse.
        </p>

        <p className="text-gray-800 text-base mb-4">
          One exciting trend is fractional ownership—thanks to blockchain platforms, people can now invest as little as AED 500 in luxury real estate. This democratizes access and lowers the barrier to entry for investors worldwide.
        </p>

        <p className="text-gray-800 text-base mb-4">
          Dubai's strategic initiatives like the Real Estate Sector Strategy 2033, REES and RDI Grant Initiatives, and the Dubai Economic Agenda (D33) aim to double GDP and attract $177 billion in FDI by 2033. These efforts ensure proptech plays a central role in the city’s future.
        </p>

        <p className="text-gray-800 text-base mb-4">
          Dubai’s ecosystem supports SMEs and startups, especially in tech and digital transformation. The combination of public policy, private innovation, and international collaboration is creating fertile ground for proptech entrepreneurs.
        </p>

        <p className="text-gray-800 text-base mb-4">
          This model is not only benefiting Dubai's real estate landscape but is also offering a blueprint for global markets. With unmatched vision, support, and execution, Dubai is set to lead the global real estate revolution.
        </p>

        <p className="text-lg font-bold mt-4">Want to see it firsthand?</p>
        <p className="text-base mt-1">
          Join us at{" "}
          <a
            href="https://www.futureproptechsummit.com"
            className="text-blue-500 underline"
          >
            Future PropTech Summit 2025
          </a>{" "}
          and experience Dubai's proptech future.
        </p>

        <p className="text-gray-400 text-right mt-4">by Nazish Shah</p>

        <div className="w-full mt-6 relative">
          <Image
            src="/image/blogs/futureproptechblogfooter.jpg"
            alt="Future PropTech Footer"
            width={800}
            height={400}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </article>
    </div>
  );
}
