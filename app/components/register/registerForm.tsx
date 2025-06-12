"use client";

import React, { useEffect, useState } from "react";
import ContactUsBanner from "./contactUsBanner";
import FormSection from "./formSection";

type FormTypes =
  | "enquiry"
  | "delegates"
  | "exhibitors"
  | "sponsor"
  | "participants";

export default function RegisterForm({
  type="enquiry",
  title = "Register",
  description = "Please fill out the form below to register for the event.",
}: {
  type: FormTypes;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 capitalize">
            {title}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <ContactUsBanner />
            <div className="p-6 sm:p-8 w-full ">
              <FormSection type={type} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
