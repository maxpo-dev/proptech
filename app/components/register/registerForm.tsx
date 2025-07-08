"use client";

import React, { useEffect, useState } from "react";
import ContactUsBanner from "./contactUsBanner";
import FormSection from "./formSection";
import TicketingPage from "./ticketingPageProps";

type FormTypes =
  | "enquiry"
  | "delegates"
  | "exhibitors"
  | "sponsor"
  | "participants";

export default function RegisterForm({
  type = "enquiry",
  title = "Register",
  description = "Please fill out the form below to register for the event.",
}: {
  type: FormTypes;
  title: string;
  description: string;
}) {
  
 
  if (type == "delegates")
    return <TicketingPage />
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-extrabold capitalize text-gray-900 sm:text-4xl">
            {title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
            {description}
          </p>
        </div>

        <div className="overflow-hidden rounded-lg bg-white shadow-xl">
          <div className="flex flex-col md:flex-row">
            <ContactUsBanner />
            <div className="w-full p-6 sm:p-8 ">
              <FormSection type={type} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
