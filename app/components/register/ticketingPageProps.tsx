"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface TicketingPageProps {
  setOnSubmit: (value: boolean) => void;
}

export default function TicketingPage({ setOnSubmit }: TicketingPageProps) {
  const vipPass = {
    id: "vip",
    title: "VIP Delegate Pass",
    originalPrice: 496,
    discountedPrice: 248,
    discount: { text: "50% Off", subtext: "Limited time offer" },
    benefits: [
      "Full access to exhibition area",
      "Full access to all conference sessions",
      "Access to networking lounge",
      "Access to meeting rooms",
      "Dedicated meeting facilitation",
      "PR assistance",
      "Logo promotion in the digital post event report & pre event magazine",
      "Logo on the participant page of the event website",
      "Logo promotion across all marketing collateral including socials & email",
      "Food & refreshments",
    ],
    buttonText: "Get Now",
  };

  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
          Secure Your <span className="text-blue-700">VIP Delegate Pass</span>
        </h1>
        <p className="text-gray-600 text-lg mt-3">for Future PropTech Summit</p>
      </div>

      {/* Pricing Card */}
      <Card className="bg-[#173A81] text-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row items-stretch justify-between p-10 gap-10">
          {/* Left Section */}
          <div className="bg-white text-[#0B1E3F] rounded-2xl p-8 w-full md:max-w-xs shadow-md flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold mb-4">{vipPass.title}</h2>

              <div className="flex items-end flex-col md:flex-row  gap-3 mb-4">
                <span className="text-6xl font-extrabold">
                  ${vipPass.discountedPrice}
                </span>
                <span className="text-3xl line-through text-gray-400">
                  ${vipPass.originalPrice}
                </span>
              </div>

              {/* Offer Strip */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-900 text-white rounded-md flex justify-between items-center px-3 py-2 mb-6 text-sm font-semibold shadow">
                <span>Limited Time Offer</span>
                <span>50% Off</span>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              onClick={() => setOnSubmit(true)}
              className="w-full bg-[#173A81] hover:bg-to-blue-700 text-white font-semibold py-2.5 text-sm rounded-xl shadow transition-all duration-300"
            >
              {vipPass.buttonText}
            </Button>
          </div>

          {/* Right Section */}
          <div className="flex-1 mt-6 md:mt-0">
            <h4 className="text-xl font-semibold mb-4">Benefits Include:</h4>
            <ul className="space-y-3">
              {vipPass.benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-white text-sm leading-relaxed"
                >
                  <Check className="w-5 h-5 mt-1 flex-shrink-0 text-green-400" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    </section>
  );
}
