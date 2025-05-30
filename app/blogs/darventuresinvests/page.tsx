'use client';

import Image from 'next/image';

export default function DarVenturesInvestsBlogPage() {
  return (
    <div className="w-full px-4 py-24 text-center flex flex-col items-center">
      {/* Full-width image */}
      <div className="w-full h-[60vh] sm:h-[100vh] relative">
        <Image 
          src="/image/blogs/Blogs again.png" 
          alt="Dar Ventures Invests in Pi Labs" 
          fill 
          className="object-contain sm:object-cover"
        />
      </div>

      <article className="bg-white shadow-2xl rounded-lg p-6 w-full md:w-3/4 lg:w-2/3 text-center relative">
        <h2 className="text-2xl font-extrabold mb-4">Dar Ventures Invests in Pi Labs’ Latest Built Environment Technology Fund</h2>

        <p className="text-gray-800 text-base font-semibold mb-4">
          Dar Ventures, the venture capital arm of Dar and the founder of the award-winning global design collaborative Sidara, is proud to announce its investment in Pi Labs’ fourth institutional fund, which is focused on driving innovation in the built environment through next-generation technology.
        </p>

        <p className="text-gray-800 text-base font-semibold mb-4">
          Pi Labs, a leading global VC specialising in early-stage proptech, is raising a £100 million fund to back up to 50 start-ups from pre-seed to Series A. The fund targets AI-native companies developing transformative technologies to digitalise and decarbonise real estate, construction, infrastructure, and adjacent sectors. By investing in Pi Labs’ latest fund, Dar Ventures deepens its exposure to cutting-edge innovation across the global built world.
        </p>

        <p className="text-gray-800 text-base font-semibold mb-4">
          This strategic partnership reflects Dar Ventures’ mission to support innovators who are tackling the most urgent challenges of our time, from sustainability and resilience to digital transformation. Through this investment, Dar Ventures will play a key role in enabling solutions that address carbon reduction, energy efficiency, and the reimagining of the real estate value chain through applied AI and large language models (LLMs).
        </p>

        <blockquote className="italic text-gray-600 text-base font-medium mb-4">
          Faysal Shair, Director and Co-Founder of Dar Ventures said: “As leaders within the global AEC industry, Dar and Sidara have always been committed to driving innovation that empowers communities through more sustainable, more resilient, and more welcoming built environments.”
        </blockquote>

        <blockquote className="italic text-gray-600 text-base font-medium mb-4">
          “By investing in Pi Labs’ latest fund, we can leverage our extensive AEC expertise to foster and empower the next wave of AI breakthroughs — particularly the application of LLMs across the real estate value chain.”
        </blockquote>

        <p className="text-gray-800 text-base font-semibold mb-4">
          Since its inception in 2015, Pi Labs has built a $2 billion portfolio, delivering 17 successful exits and backing major industry names such as LandTech and OfficeRnD. Its first fund delivered a 10x gross return and outperformed top decile VC benchmarks between 2015–2023. With a global network of limited partners that includes APG, Aldar, Patrizia, Swire Properties, Embassy Group, and others, Pi Labs is at the forefront of early-stage investment in built environment technology.
        </p>

        <blockquote className="italic text-gray-600 text-base font-medium mb-4">
          Faisal Butt, Founder and Managing Partner at Pi Labs said: “The built environment is the world’s largest asset class and it’s facing immense pressure from labour shortages, climate goals, and operational inefficiencies.”
        </blockquote>

        <blockquote className="italic text-gray-600 text-base font-medium mb-4">
          “With early support from partners like Dar Ventures and Sidara, we are confident that the next generation of property technology unicorns will be discovered and scaled through this fund.”
        </blockquote>

        <p className="text-gray-800 text-base font-semibold mb-4">
          Through this investment, Dar Ventures reaffirms its commitment to shaping a more sustainable, efficient, and digitally enabled built environment and to supporting the visionary founders who are building it.
        </p>

        <p className="text-lg font-extrabold mt-4">Shaping the future of real estate, one innovation at a time.</p>

        <p className="text-gray-400 text-right mt-4">by Nazish Shah</p>

        <Image 
          src="/image/blogs/futureproptechblogfooter.jpg" 
          alt="Footer Banner" 
          width={1600}
          height={900}
          className="w-full h-auto rounded-lg shadow-md mt-6"
        />
      </article>
    </div>
  );
}
