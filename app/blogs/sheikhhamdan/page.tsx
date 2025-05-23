"use client";

import Image from "next/image";

export default function SheikhHamdanBlogPage() {
  return (
    <div className="w-full px-4 py-24 text-center flex flex-col items-center">
      {/* Header image */}
      <div className="w-full h-[70vh] sm:h-[100vh] relative">
        <Image
          src="/image/blogs/Blogs (5).png" // Update path accordingly
          alt="Sheikh Hamdan launches Dubai PropTech Hub"
          fill
          className="object-contain sm:object-cover"
          priority
        />
      </div>

      <article className="bg-white shadow-2xl rounded-lg p-6 w-full md:w-3/4 lg:w-2/3 text-left relative">
        <h1 className="text-2xl font-extrabold mb-4">
          Sheikh Hamdan Launches ‘Dubai PropTech Hub’ to Position Dubai as a Global Real Estate Technology Leader
        </h1>

        <p className="text-gray-800 text-base mb-4">
          In a major move to fast-track innovation and attract global investment, His Highness Sheikh Hamdan Bin Mohammed Bin Rashid Al Maktoum, Crown Prince of Dubai and Chairman of The Executive Council, has announced the launch of the Dubai PropTech Hub.
        </p>

        <p className="text-gray-800 text-base mb-4">
          The initiative was unveiled during a meeting of the Higher Committee for Future Technology and Digital Economy, which Sheikh Hamdan also chairs. This strategic launch marks a significant milestone in Dubai’s journey toward becoming a global leader in digital real estate innovation, in alignment with the Dubai Economic Agenda D33 and the Dubai Real Estate Sector Strategy 2033.
        </p>

        <p className="text-gray-800 text-base mb-4">
          The PropTech market in Dubai, currently valued at Dhs 2.2 billion, is set to more than double to exceed Dhs 4.5 billion within five years. The initiative also aims to attract over Dhs 1 billion in investments by 2030, support the growth of 200+ PropTech startups and engage 20 dedicated investment funds.
        </p>

        <p className="text-gray-800 text-base mb-4">
          The Hub will serve as a catalyst for innovation by providing advanced incubators and smart collaborative spaces, infrastructure for AI-based real estate models and a platform for global partnerships, investors, and entrepreneurs.
        </p>

        <p className="text-gray-800 text-base mb-4">
          Sheikh Hamdan stated: “Dubai has laid a strong foundation for a fully integrated digital economy. The Dubai PropTech Hub is a strategic step to further accelerate digital transformation across one of our most vital sectors — real estate,”. “This initiative will create an environment that empowers entrepreneurs and innovators, strengthens investor confidence, and enhances Dubai’s global competitiveness.”
        </p>

        <p className="text-gray-800 text-base mb-4">
          The launch of the Dubai PropTech Hub coincides with significant progress on several other flagship initiatives aimed at strengthening Dubai’s digital economy. Among them is the “5,000 Digital Talents” program, which seeks to equip and place Emirati tech professionals in leading global technology companies, enhancing local talent competitiveness on the world stage.
        </p>

        <p className="text-gray-800 text-base mb-4">
          Additionally, the city celebrated the success of Expand North Star, now recognized as the world’s largest event for startups and investors, solidifying Dubai’s role as a global startup and innovation hub.
        </p>

        <p className="text-gray-800 text-base mb-4">
          Another key development is the rollout of the IGNITE platform, which connects entrepreneurs with a worldwide network of investors, mentors, corporations, and government entities, creating a robust and integrated ecosystem to accelerate business growth and innovation.
        </p>

        <p className="text-gray-800 text-base mb-4">
          As cities worldwide embrace digital transformation, Dubai continues to lead by example, placing real estate at the center of its smart, tech-driven future.
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
