"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function MoatazMosallamBlogPage() {
  const router = useRouter();

  return (
    <div className="w-full px-4 py-24 text-center flex flex-col items-center">
      {/* Hero Image */}
      <div className="w-full h-[70vh] sm:h-[100vh] relative">
        <Image
          src="/image/blogs/Moataz Mosallam-1.png"
          alt="Q&A with Moataz A. Mosallam"
          fill
          priority
          sizes="100vw"
          className="object-contain sm:object-cover"
        />
      </div>

      <article className="bg-white shadow-2xl rounded-lg p-6 w-full md:w-3/4 lg:w-2/3 text-center relative">
        <h2 className="text-2xl font-extrabold mb-4">
          Q&A Session With Moataz A. Mosallam
        </h2>

        <div className="text-gray-800 text-base font-semibold text-left space-y-6">
          {[
            {
              q: "1. How are smart buildings and AI impacting real estate investment decisions today?",
              a: `Smart buildings and AI are redefining real estate development. Investors are increasingly attracted to assets that offer energy efficiency, predictive maintenance, and real-time data analytics. These technologies enhance building performance, reduce operational costs, and elevate tenant satisfaction. At Knight Frank, we’re advising and helping clients to prioritize such features not just for ESG compliance, but as a value driver in asset development objectives.`,
            },
            {
              q: "2. How do you see Proptech reshaping the real estate landscape in the UAE & globally?",
              a: `Proptech is accelerating the transition from traditional development models to data-driven real estate development. In the UAE, smart permitting, BIM, and IoT integration in facilities management are maturing rapidly. Globally, platforms for digital transactions, automated valuations, and blockchain-backed leasing are changing how assets are financed, sold, and managed. We see Proptech as a critical enabler of transparency, efficiency, and investor confidence.`,
            },
            {
              q: "3. What are the biggest Proptech trends to watch for in the next 3–5 years?",
              a: `1. Digital twins and predictive analytics in project management and operations.\n2. AI-driven asset optimization, including lifecycle costing and maintenance forecasting.\nWe’re aligning our service offerings at Knight Frank to incorporate these advancements into our services offerings.`,
            },
            {
              q: "4. What role does Knight Frank play in driving digital transformation within the real estate sector?",
              a: `As advisors and project managers, we champion digital transformation by embedding tech into every stage—from feasibility to operation. In the UAE, our project and cost management teams deploy digital tools for budgeting, scheduling, and risk monitoring, while our development advisory team integrates data platforms for scenario modeling and market analytics. Our global knowledge network enables us to cross-pollinate best practices across regions.`,
            },
            {
              q: "5. How is Knight Frank leveraging Proptech to enhance its advisory and investment services?",
              a: `We’re using Proptech to enhance decision-making at every touchpoint. Tools for automated cost benchmarking, live project dashboards, and carbon modeling inform our recommendations.`,
            },
            {
              q: "6. What are some of the key challenges Knight Frank faces in adopting new Proptech solutions?",
              a: `In project delivery, standardizing platforms across multiple stakeholders and aligning digital maturity levels can be complex. There’s also a cultural shift required in some client organizations to embrace data-led decision making. Our approach is to pilot scalable solutions and provide change management support alongside implementation.`,
            },
            {
              q: "7. What role does PropTech play in building smart cities, and how do you envision the future of urban living in digitally connected environments?",
              a: `PropTech is the backbone of smart city infrastructure. From digital permitting to AI-optimized mobility and energy systems, it orchestrates the complex layers of urban development. In the future, cities will be shaped by real-time feedback loops between residents, buildings, and infrastructure. We envision cities that are not just smart, but resilient, sustainable, and deeply user-centric. At Knight Frank, we guide stakeholders to embed these systems from day zero.`,
            },
            {
              q: "8. If you had to predict the single most disruptive technology in real estate for the next decade, what would it be and why?",
              a: `AI will be the most disruptive force. Its ability to process vast datasets, simulate development outcomes, and automate complex tasks will shift the real estate value chain. From AI-driven design to autonomous construction and dynamic pricing models, the entire lifecycle—from planning to asset disposition—will be transformed. As Knight Frank, our focus is to integrate AI responsibly, enhancing rather than replacing human insight.`,
            },
          ].map((item, i) => (
            <p key={i}>
              <strong>{item.q}</strong>
              <br />
              {item.a.split("\n").map((line, idx) => (
                <span key={idx}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          ))}
        </div>

        <p className="text-gray-400 text-right mt-8">by Nazish Shah</p>

        <div className="flex justify-center mt-8">
          <button
            onClick={() => router.push("/register")}
            className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
          >
            Enquire Now
          </button>
        </div>
      </article>
    </div>
  );
}
