'use client';

import Image from 'next/image';

export default function GermanPropTech() {
  return (
    <div className="w-full px-4 py-24 text-center flex flex-col items-center">
      {/* Full-width image */}
      <div className="w-full h-[70vh] sm:h-[100vh] relative">
        <Image 
          src="/image/blogs/News Scalara.png" 
          alt="German PropTech Ecosystem" 
          fill 
          className="object-contain sm:object-cover"
         priority
          sizes="100vw"
        />
      </div>

      <article className="bg-white shadow-2xl rounded-lg p-6 w-full md:w-3/4 lg:w-2/3 text-center relative">
        <h2 className="text-2xl font-extrabold mb-4">Germany's PropTech Ecosystem: Precision Meets Innovation in Real Estate</h2>

        <p className="text-gray-800 text-base font-semibold mb-4">
          Germany is fast emerging as a powerhouse in the PropTech arena, fusing its renowned precision engineering with cutting-edge digital solutions to reshape the real estate landscape. From Berlin’s vibrant startup ecosystem to Frankfurt’s financial muscle, Germany is nurturing a new generation of PropTech disruptors.
        </p>

        <h3 className="text-xl font-extrabold mt-6 mb-3">Berlin: The Startup Engine of PropTech</h3>
        <p className="text-gray-800 text-base font-semibold mb-4">
          Berlin’s dynamic startup culture has fostered an ideal environment for PropTech innovation. Startups like <strong>Architrave</strong>, which digitizes real estate asset management, and <strong>Doorkel</strong>, focused on smart building access, are leveraging AI and cloud platforms to drive operational efficiency.
        </p>

        <h3 className="text-xl font-extrabold mt-6 mb-3">Munich and Frankfurt: The Investment Backbone</h3>
        <p className="text-gray-800 text-base font-semibold mb-4">
          While Berlin leads with creativity, cities like Munich and Frankfurt provide the investment fuel. With major real estate and financial institutions based in these cities, German PropTech startups benefit from robust backing. Firms like <strong>Realcube</strong> and <strong>BuildingMinds</strong> have attracted substantial VC funding for their data-driven solutions.
        </p>

        <h3 className="text-xl font-extrabold mt-6 mb-3">Sustainability: A Core Focus</h3>
        <p className="text-gray-800 text-base font-semibold mb-4">
          Germany’s strict environmental regulations and green-building initiatives have made sustainability central to PropTech development. Platforms like <strong>CAALA</strong> and <strong>MeteoViva</strong> offer energy simulation and climate intelligence, helping reduce emissions and comply with EU standards.
        </p>

        <h3 className="text-xl font-extrabold mt-6 mb-3">Public-Private Collaboration</h3>
        <p className="text-gray-800 text-base font-semibold mb-4">
          Germany’s PropTech momentum is bolstered by collaboration between government, academia, and industry. Initiatives like <strong>Digital Hub Initiative</strong> and the <strong>PropTech Powerhouse</strong> network foster innovation through grants, incubators, and cross-sector partnerships.
        </p>

        <h3 className="text-xl font-extrabold mt-6 mb-3">Challenges and Future Outlook</h3>
        <p className="text-gray-800 text-base font-semibold mb-4">
          Despite progress, challenges remain — including a fragmented regulatory landscape and slow digital adoption in parts of the industry. However, Germany’s culture of precision, discipline, and long-term planning positions it well to lead Europe’s PropTech charge.
        </p>

        <p className="text-lg font-extrabold mt-4">Germany is building smart — and the world is watching.</p>
        <p className="text-base mt-1">
          Explore more insights at <a href="https://www.futureproptechsummit.com" className="text-blue-500 underline">Future PropTech Summit 2025</a>.
        </p>

        <p className="text-gray-400 text-right mt-4">by Nazish Shah</p>

        <Image 
          src="/image/blogs/futureproptechblogfooter.jpg" 
          alt="German PropTech Footer" 
          width={1600}
          height={900}
          className="w-full h-auto rounded-lg shadow-md mt-6"
        />
      </article>
    </div>
  );
}
