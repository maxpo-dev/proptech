"use client";

import Image from "next/image";

export default function BeeahBlogPage() {
  return (
    <div className="w-full px-4 py-24 text-center flex flex-col items-center">
      {/* Hero Image */}
      <div className="w-full h-[70vh] sm:h-[100vh] relative">
        <Image
          src="/image/blogs/Blogs (6).png" // Replace with your actual image path
          alt="BEEAH Expands into Real Estate"
          fill
          className="object-contain sm:object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Blog Article */}
      <article className="bg-white shadow-2xl rounded-lg p-6 w-full md:w-3/4 lg:w-2/3 text-left relative">
        <h1 className="text-2xl font-extrabold mb-4">
          BEEAH Expands into Real Estate with Focus on Sustainable Urban Living
        </h1>

        <p className="text-gray-800 text-base mb-4">
          UAE-based sustainability and waste management leader BEEAH has officially entered the real estate sector, announcing plans for a landmark development that aims to redefine sustainable urban living.
        </p>

        <p className="text-gray-800 text-base mb-4">
          According to Group CEO and Vice Chairman Khaled Al Huraimel, the company’s real estate projects will prioritize sustainability, innovation, and enhanced quality of life from the very beginning. While specific details such as location, budget, and timeline remain undisclosed, BEEAH’s vision is to set new standards for future-ready, eco-conscious communities.
        </p>

        <p className="text-gray-800 text-base mb-4">
          The company’s existing real estate portfolio already includes its iconic Zaha Hadid-designed headquarters and the upcoming Jawaher Boston Medical District (JBMD), created in partnership with the Renzo Piano Building Workshop. BEEAH is also leading the Sharjah Creative Quarter project alongside Taller de Arquitectura Mauricio Rocha and Daniel Rosselló.
        </p>

        <p className="text-gray-800 text-base mb-4">
          This expansion aligns seamlessly with BEEAH’s broader mission of creating sustainable solutions across sectors. With a track record that includes achieving over 90% landfill diversion in Sharjah, launching clean energy initiatives such as the Sharjah Waste-to-Energy plant, and advancing digital platforms like re.life and EVOTEQ, BEEAH continues to drive impactful change.
        </p>

        <p className="text-gray-800 text-base mb-4">
          Its real estate ventures will also benefit from its work in electric mobility through ION, a joint venture with Crescent Enterprises, and healthcare innovation via initiatives like Wekaya and traqpharma.
        </p>

        <p className="text-gray-800 text-base mb-4">
          By entering real estate, BEEAH is not just building structures, it’s shaping the future of livable, intelligent, and sustainable cities across the region.
        </p>

        <p className="text-gray-400 text-right mt-4">by Nazish Shah</p>

        {/* Footer Image */}
        <div className="w-full mt-6 relative">
          <Image
            src="/image/blogs/futureproptechblogfooter.jpg" // Replace with your actual image path
            alt="BEEAH Sustainable Cities"
            width={800}
            height={400}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </article>
    </div>
  );
}
