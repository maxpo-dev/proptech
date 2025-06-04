"use client";

import Image from "next/image";

export default function GermanPropTechBlogPage() {
  return (
    <div className="w-full px-4 py-24 text-center flex flex-col items-center">
      {/* Hero Image */}
      <div className="w-full h-[70vh] sm:h-[100vh] relative">
        <Image
          src="/image/blogs/News LUMOVIEW.png"
          alt="Lumoview raises €3M for building analytics"
          fill
          className="object-contain sm:object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Blog Article */}
      <article className="bg-white shadow-2xl rounded-lg p-6 w-full md:w-3/4 lg:w-2/3 text-left relative">
        <h1 className="text-2xl font-extrabold mb-4">
          German PropTech Lumoview Secures €3M to Scale Fast, Automated Building Analytics
        </h1>

        <p className="text-gray-800 text-base mb-4">
          German startup Lumoview Building Analytics GmbH has raised €3 million in Seed funding, with participation from Greencode Ventures, IBB Ventures, and WakeUp Capital, bringing its total available funding to over €5.5 million, including a €2.5M grant from the European Commission’s EIC Accelerator.
        </p>

        <p className="text-gray-800 text-base mb-4">
          Founded in 2019 and spun out of the German Aerospace Center (DLR), Lumoview has developed a breakthrough solution that captures detailed building data in just 2 seconds per room using a unique blend of mobile hardware and intelligent software.
        </p>

        <p className="text-gray-800 text-base mb-4">
          The data is instantly transformed into floor plans, 3D models, and thermal analyses via a central cloud platform, making it dramatically easier and faster to plan energy-efficient building retrofits.
        </p>

        <p className="text-gray-800 text-base mb-4">
          According to Ines Bergmann-Nolting, Managing Partner at Greencode Ventures, “Greencode Ventures is thrilled to lead Lumoview’s Seed round, backing a transformative blend of hardware and software that addresses the urgent need for decarbonisation and digitalisation in the building sector.”
        </p>

        <p className="text-gray-800 text-base mb-4">
          “Lumoview’s founding team brings an exceptional combination of deep technical expertise and profound sector insight, which uniquely positions them to reshape the industry.”
        </p>

        <p className="text-gray-800 text-base mb-4">
          Sabine Wolff, Senior Investment Manager at IBB Ventures, added: “Lumoviewʼs intelligent end-to-end solution – from data capture and processing to delivery – impressed us just as much as their innovative team.”
        </p>

        <p className="text-gray-800 text-base mb-4">
          “We believe Lumoview will play a key role in driving the digital transformation of the construction industry, and weʼre excited to be part of their journey.”
        </p>

        <p className="text-gray-800 text-base mb-4">
          Mark Peters, Co-founder and Managing Partner at WakeUp Capital, emphasized the impact, stating: “At WakeUp Capital, we back founders building scalable solutions for climate resilience and equity.”
        </p>

        <p className="text-gray-800 text-base mb-4">
          “Lumoviewʼs platform unlocks a critical bottleneck in Europeʼs energy transition – enabling faster, data-driven renovations that reduce emissions, lower energy costs, and support more inclusive access to sustainable housing.”
        </p>

        <p className="text-gray-800 text-base mb-4">
          With this new investment, Lumoview plans to scale across Europe, grow its team, and further automate its technology. Their work directly addresses one of the biggest challenges in Europe’s path to decarbonization: enabling fast, scalable, and data-driven building retrofits to reduce CO₂ emissions and improve sustainability in the built environment.
        </p>

        <p className="text-lg font-bold mt-4">PropTech is transforming Europe's future.</p>
        <p className="text-base mt-1">
          Join the conversation at{" "}
          <a
            href="https://www.futureproptechsummit.com"
            className="text-blue-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Future PropTech Summit 2025
          </a>
          .
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
