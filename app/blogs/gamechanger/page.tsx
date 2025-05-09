"use client";

import Image from "next/image";

export default function GameChangerBlogPage() {
  return (
    <div className="w-full px-4 py-24 text-center flex flex-col items-center">
      {/* Hero Image */}
      <div className="w-full h-[70vh] sm:h-[100vh] relative">
        <Image
          src="/image/blogs/Blogs (2).png"
          alt="Dubai Game-Changer in PropTech"
          fill
          className="object-contain sm:object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Blog Article */}
      <article className="bg-white shadow-2xl rounded-lg p-6 w-full md:w-3/4 lg:w-2/3 text-left relative">
        <h1 className="text-2xl font-extrabold mb-4">
          Why Dubai is a Game-changer in PropTech: A Bold Vision for the Future
        </h1>

        <p className="text-gray-800 text-base mb-4">
          When it comes to innovation, Dubai has always been at the forefront, and its latest focus on proptech is no exception. As global property markets embrace digital transformation, Dubai is solidifying its position as a global leader in real estate innovation. The future of the sector is being reshaped by the emirate's proptech strategy, which includes rising property values, alluring rental yields, and the introduction of innovative technology like blockchain and AI.
        </p>

        <p className="text-gray-800 text-base mb-4">
          Proptech is rapidly becoming a cornerstone of modern real estate. Globally, the market is set to surpass $89 billion by 2032, growing at a strong 11.9% CAGR. This tendency is even more noticeable in Dubai, where the proptech industry is expected to expand at a remarkable 20% CAGR between 2022 and 2028. The value proptech adds to real estate, particularly in vibrant markets like Dubai, is evident, which shows more than simply enthusiasm.
        </p>

        <p className="text-gray-800 text-base mb-4">
          The emirate’s property prices are projected to rise by 5–8% this year, and average rental yields are expected to approach 7%. Investors are eyeing the city not only for its returns but also for its tech-savvy infrastructure.
        </p>

        <p className="text-gray-800 text-base mb-4">
          Early adopters in Dubai are already experiencing how proptech is simplifying real estate procedures—from blockchain-powered smart contracts and property tokenization to digital transactions and AI-driven analytics. Recent government initiatives, such as the collaboration between the Dubai Integrated Economic Zones Authority (DIEZ) and the Dubai Land Department (DLD), support the emirate’s ambition to become a leading destination for property innovation, laying the foundations for further innovation and attracting top international talent.
        </p>

        <p className="text-gray-800 text-base mb-4">
          These collaborations are fostering an ecosystem that is conducive to the growth and expansion of proptech solutions by entrepreneurs and SMEs. One of the most exciting developments is the rise of fractional ownership, allowing investors to purchase portions. Blockchain-enabled platforms have made it possible for people to spend as little as AED 500 in luxury real estate. These innovations are making real estate more accessible than ever before, breaking down traditional barriers to entry and democratizing investment opportunities.
        </p>

        <p className="text-gray-800 text-base mb-4">
          Dubai’s laser focus on technological innovation within the property sector—like the Real Estate Sector Strategy 2033 and the REES and RDI Grant Initiatives—is making Dubai a magnet for global talent and innovation. With high-profile conferences and trade shows, policymakers are bringing together experts, industry leaders, and investors from all over the world who are leveraging innovations to reshape the future of real estate.
        </p>

        <p className="text-gray-800 text-base mb-4">
          These high-profile events not only drive visibility and investment but also help to cement strategic relationships, secure new investment opportunities, and further strengthen Dubai’s status as an international hotspot for proptech innovation. The government's future-focused approach, resourcefulness, and innate entrepreneurial spirit have been instrumental in allowing our economy to flourish. The Dubai Economic Agenda (D33) aims to double GDP and grow the FDI pipeline to $177 billion by 2033. This forward-thinking strategy presents proptech and other technology-driven industries with enormous prospects.
        </p>

        <p className="text-gray-800 text-base mb-4">
          With multiple incentives and support initiatives aimed at fostering the development of startups and SMEs—especially within the realms of technology and digital transformation—Dubai-based proptech entrepreneurs are working in a rich and stimulating environment while benefiting from the financial backing required to rewrite the future of real estate.
        </p>

        <p className="text-gray-800 text-base mb-4">
          In addition to helping the local real estate market, Dubai's ambitious proptech ambition serves as a model for the future of the global real estate sector. Dubai is revolutionizing the real estate experience for developers, investors, and purchasers alike with a potent combination of private sector ingenuity, government backing, and technology breakthrough.
        </p>

        <p className="text-gray-800 text-base mb-4">
          The city’s commitment to fostering innovation ensures that Dubai will remain at the forefront of global real estate transformation for decades, if not generations, to come.
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

        {/* Footer Image */}
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
