"use client";

import AutomatedBuildings from "@/app/components/AutomatedBuildings";
import ZexPrWire from "@/app/components/ZexPrWire";
import AIPressRoom from "@/app/components/AIPressRoom";
import PropertyNewsInternational from "@/app/components/PropertyNewsInternational";
import RemTimes from "@/app/components/RemTimes";

export default function MediaPartnersPage() {
  return (
    <div className="bg-white text-black font-serif pt-32"> {/* Add top padding here */}
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="mt-8 text-5xl font-bold mb-4">
          Media Partners
        </h1>
      </section>

      <AutomatedBuildings />
      <ZexPrWire />
      <AIPressRoom />
      <PropertyNewsInternational />
      <RemTimes />

    </div>
  );
}
