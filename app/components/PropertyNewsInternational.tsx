"use client";

import Image from "next/image";
import propertyNewsLogo from "@/public/image/partners/PN-Black.png"; // Update with actual image path and filename

export default function PropertyNewsInternational() {
  return (
    <div className="bg-white text-black font-serif">
      <main className="container mx-auto py-16 px-4">
        {/* Single Card for Partner Details */}
        <section className="flex justify-center">
          <div className="max-w-4xl bg-gray-100 p-8 rounded-lg shadow-2xl flex flex-col md:flex-row items-center">
            {/* Logo Section */}
            <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
              <Image
                src={propertyNewsLogo}
                alt="Property News International Logo"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
            {/* Details Section */}
            <div className="md:w-2/3 md:pl-10">
              <h2 className="text-4xl font-bold mb-4">
                Property News International
              </h2>
              <p className="text-xl mb-4">
                Website:{" "}
                <a
                  href="https://www.propertynewsint.com"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.propertynewsint.com
                </a>
              </p>
              <p className="text-lg leading-relaxed">
                Property News International is a global media platform that delivers daily news about real estate, construction, and development from around the world. It is a key source for decision-makers, investors, property developers, and real estate companies. We cover upcoming projects, major updates, expert insights, exclusive features, and interviews with global real estate leaders, all focused on the business of building the future.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
