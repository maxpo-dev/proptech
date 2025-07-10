"use client";

import React from "react";
import { mediaPartnersData } from "./partnerData";
import PartnerCard from "./partnerCard";

export default function MediaPartners() {
  return (
    <section className="md:px-6">
      {
        mediaPartnersData.map((partner, index) => (
            <PartnerCard key={index} {...partner} />
        ))
      }
    </section>
  );
}
