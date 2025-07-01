"use client";

import React from "react";
import AutomatedBuildings from "@/app/components/AutomatedBuildings";
import ZexPrWire from "@/app/components/ZexPrWire";
import AIPressRoom from "@/app/components/AIPressRoom";
import PropertyNewsInternational from "@/app/components/PropertyNewsInternational";
import RemTimes from "@/app/components/RemTimes";

import BuildAustralia from "../BuildAustralia";
import BusinessFocusMagazine from "../BusinessFocusMagazine";
import EntrepreneurME from "../EntrepreneurME";
import TimesofAI from "../TimesofAI";
import { mediaPartnersData } from "./partnerData";
import PartnerCard from "./partnerCard";

export default function MediaPartners() {
  return (
    <section className="md:px-6">
      {/* <h2 className="text-4xl font-bold text-center mb-10 text-blue-600">
        Media Partners
      </h2> */}
      
      <AutomatedBuildings />
      <ZexPrWire />
      <AIPressRoom />
      <PropertyNewsInternational />
      <RemTimes />
     
      <BuildAustralia />
      <BusinessFocusMagazine />
      <EntrepreneurME />
      <TimesofAI />
      {
        mediaPartnersData.map((partner, index) => (
            <PartnerCard key={index} {...partner} />
        ))
      }

    </section>
  );
}
