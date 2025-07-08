"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import DelgatesModal from "./delegatesModal";
import { useState } from "react";

interface TicketingPageProps {
  setOnSubmit: (value: boolean) => void;
}

export default function TicketingPage() {
  const [modalOpen, setModalOpen] = useState(false);
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
    <>
         <DelgatesModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    <section className="mx-auto max-w-5xl px-4 py-16">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl">
          Secure Your <span className="text-blue-700">VIP Delegate Pass</span>
        </h1>
        <p className="mt-3 text-lg text-gray-600">for Future PropTech Summit</p>
      </div>

      {/* Pricing Card */}
      <Card className="overflow-hidden rounded-3xl bg-[#173A81] text-white shadow-2xl">
        <div className="flex flex-col items-stretch justify-between gap-10 p-10 md:flex-row">
          {/* Left Section */}
          <div className="flex w-full flex-col justify-between rounded-2xl bg-white p-8 text-[#0B1E3F] shadow-md md:max-w-xs">
            <div>
              <h2 className="mb-4 text-xl font-bold">{vipPass.title}</h2>

              <div className="mb-4 flex flex-col items-end  gap-3 md:flex-row">
                <span className="text-6xl font-extrabold">
                  ${vipPass.discountedPrice}
                </span>
                <span className="text-3xl text-gray-400 line-through">
                  ${vipPass.originalPrice}
                </span>
              </div>

              {/* Offer Strip */}
              <div className="mb-6 flex items-center justify-between rounded-md bg-gradient-to-r from-blue-600 to-blue-900 px-3 py-2 text-sm font-semibold text-white shadow">
                <span>Limited Time Offer</span>
                <span>50% Off</span>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              onClick={() => setModalOpen(true)}
              className="hover:bg-to-blue-700 w-full rounded-xl bg-[#173A81] py-2.5 text-sm font-semibold text-white shadow transition-all duration-300"
            >
              {vipPass.buttonText}
            </Button>
          </div>

          {/* Right Section */}
          <div className="mt-6 flex-1 md:mt-0">
            <h4 className="mb-4 text-xl font-semibold">Benefits Include:</h4>
            <ul className="space-y-3">
              {vipPass.benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm leading-relaxed text-white"
                >
                  <Check className="mt-1 size-5 shrink-0 text-green-400" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    </section>
    </>
  );
}
