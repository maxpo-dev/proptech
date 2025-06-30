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
    { href: "#association", label: "Association Partners" },
    { href: "#government", label: "Government Partners" },
  ];

  return (
    <div className="bg-background text-foreground font-sans pt-32 pb-20 scroll-smooth">
      {/* Page Heading and Navigation */}
      <section className="text-center mb-8 px-4 mt-12 sm:mt-16">
        <h1 className="text-5xl font-bold text-primary border-b-4 border-accent inline-block pb-3">
          Partners
        </h1>
        <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
          Collaborating with industry leaders to drive innovation in PropTech.
        </p>
        {/* Horizontal Navigation */}
        <nav className="mt-8">
          <div className="flex flex-wrap justify-center gap-3 max-w-md mx-auto px-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm sm:text-base font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </section>

      {/* All Partner Sections */}
      <div className="space-y-24 max-w-6xl mx-auto">
        {/* Media Partners */}
        <section id="media" className="px-4">
          <h2 className="text-4xl font-bold text-primary text-center mb-8">
            Media Partners
          </h2>
          <div className="bg-card rounded-lg shadow-md md:p-6">
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

        {/* Association Partners */}
        <section id="association" className="px-4">
          <h2 className="text-4xl font-bold text-primary text-center mb-8">
            Association Partners
          </h2>
          <div className="bg-card rounded-lg shadow-md md:p-6 text-center">
            <AssociatePartners />
          </div>
        </section>

        {/* Government Partners */}
        <section id="government" className="px-4">
          <h2 className="text-4xl font-bold text-primary text-center mb-8">
            Government Partners
          </h2>
          <div className="bg-card rounded-lg shadow-md p-6 text-center">
            <p className="text-muted-foreground text-lg">Coming soon...</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PartnersPage;
