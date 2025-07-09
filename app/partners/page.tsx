"use client";

import React from "react";
import MediaPartners from "../components/partner/MediaPartners";
import AssociatePartners from "../components/partner/AssociatePartner";
// import StrategicPartners from "../components/partners/StrategicPartners";
// import AssociationPartners from "../components/partners/AssociationPartners";
// import GovernmentPartners from "../components/partners/GovernmentPartners";

const PartnersPage: React.FC = () => {
  const navItems: { href: string; label: string }[] = [
    { href: "#media", label: "Media Partners" },
    // { href: "#strategic", label: "Strategic Partners" },
    { href: "#association", label: "Supporting Partners" },
    { href: "#government", label: "Government Partners" },
  ];

  return (
    <div className="scroll-smooth bg-background pb-20 py-20 text-foreground">
      {/* Page Heading and Navigation */}
      <section className="mb-8 px-4 text-center ">
        <h1 className="inline-block border-b-4 border-accent pb-3 text-5xl font-bold text-primary">
          Partners
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Collaborating with industry leaders to drive innovation in PropTech.
        </p>
        {/* Horizontal Navigation */}
        <nav className="mt-8">
          <div className="mx-auto flex max-w-md flex-wrap justify-center gap-3 px-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="whitespace-nowrap rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:bg-accent hover:text-accent-foreground sm:text-base"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </section>

      {/* All Partner Sections */}
      <div className="mx-auto max-w-6xl space-y-24">
        {/* Media Partners */}
        <section id="media" className="px-4">
          <h2 className="mb-8 text-center text-4xl font-bold text-primary">
            Media Partners
          </h2>
          <div className="rounded-lg bg-card shadow-md md:p-6">
            <MediaPartners />
          </div>
        </section>

        {/* Strategic Partners */}
        {/* <section id="strategic" className="px-4">
          <h2 className="text-4xl font-bold text-primary text-center mb-8">
            Strategic Partners
          </h2>
          <div className="bg-card rounded-lg shadow-md p-6 text-center">
            <p className="text-muted-foreground text-lg">Coming soon...</p>
          </div>
        </section> */}

        {/* Supporting Partners */}
        <section id="association" className="px-4">
          <h2 className="mb-8 text-center text-4xl font-bold text-primary">
            Supporting Partners
          </h2>
          <div className="rounded-lg bg-card text-center shadow-md md:p-6">
            <AssociatePartners />
          </div>
        </section>

        {/* Government Partners */}
        <section id="government" className="px-4">
          <h2 className="mb-8 text-center text-4xl font-bold text-primary">
            Government Partners
          </h2>
          <div className="rounded-lg bg-card p-6 text-center shadow-md">
            <p className="text-lg text-muted-foreground">Coming soon...</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PartnersPage;
