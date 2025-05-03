"use client";

import Image from "next/image";
// Ensure the logo image is placed at the correct path.
import automatedBuildingsLogo from "@/public/image/partners/Asset-22-1024x264.png";
import AutomatedBuildings from "@/app/components/AutomatedBuildings";
import ZexPrWire from "@/app/components/ZexPrWire";

export default function MediaPartnersPage() {
  return (
    <div className="bg-white text-black font-serif">

      <AutomatedBuildings />

      <ZexPrWire />
      
    </div>
  );
}
