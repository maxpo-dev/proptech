"use client";

import Image from "next/image";
import { FaLinkedin } from "react-icons/fa"; // ✅ Import LinkedIn icon
import zexPrWireLogo from "@/public/image/partners/ZEX PR Wire Icon - Colored.png";

export default function ZexPrWire() {
  return (
    <div className="bg-white text-black font-serif">
      <main className="container mx-auto py-16 px-4">
        {/* Hero Section */}
        {/* <section className="text-center mb-12">
          <h1 className="mt-8 text-5xl font-bold mb-4">Media Partner</h1>
        </section> */}

        {/* Partner Card */}
        <section className="flex justify-center">
          <div className="max-w-4xl bg-gray-100 p-8 rounded-lg shadow-2xl flex flex-col md:flex-row items-center">
            {/* Logo Section */}
            <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
              <a
                href="https://www.zexprwire.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={zexPrWireLogo}
                  alt="ZEX PR WIRE Logo"
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </a>
            </div>

            {/* Details Section */}
            <div className="md:w-2/3 md:pl-10">
              <h2 className="text-4xl font-bold mb-4">ZEX PR WIRE</h2>
              <p className="text-lg mb-4">
                Website:{" "}
                <a
                  href="https://www.zexprwire.com"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.zexprwire.com
                </a>
              </p>

              <p className="text-lg leading-relaxed mb-4">
                ZEX PR WIRE® is a Press Release Distribution SAAS platform,
                which syndicates press release content to Tier 1, 2 & 3 media
                outlets globally. ZEX PR WIRE® has partnered with more than
                500+ media outlets. It is a 99% automated platform usable by any
                marketing or PR team in a firm or even by individual PR agencies
                and marketing firms to conduct and manage PR campaigns for their
                clients.
              </p>

              <div className="text-lg">
                <p className="font-semibold mb-2">Social Media:</p>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/company/zexprwire/"
                    className="text-blue-600 hover:text-blue-800 text-2xl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
