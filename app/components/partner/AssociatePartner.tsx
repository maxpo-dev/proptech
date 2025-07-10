"use client";

import React from "react";
import { supportingPartnersData } from "./partnerData";
import PartnerCard from "./partnerCard";

export default function AssociatePartners() {
  return (
    <section className="md:px-6">
      {supportingPartnersData.map((partner: any, index: number) => (
        <PartnerCard key={index} {...partner} />
      ))}
    </section>
  );
}
