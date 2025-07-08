'use client';

import React, { useState, useRef } from "react";

const ExhibitorForm = () => {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const formData = new FormData(e.currentTarget);

    const data = {
      companyname: formData.get("companyname") as string,
      country: formData.get("country") as string,
      contactperson: formData.get("contactperson") as string,
      designation: formData.get("designation") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
    };

    try {
      const response = await fetch("/api/exhibitor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSuccess("Thank you for registering! We will contact you soon.");
        if (formRef.current) {
          formRef.current.reset();
        }
        setTimeout(() => {
          setSuccess(null);
        }, 5000);
      } else {
        const errorData = await response.json();
        if (errorData.message === "Email is already registered") {
          setError("This email is already registered. Please use a different email.");
        } else {
          throw new Error(errorData.message || 'Registration failed');
        }
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An unknown error occurred');
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  };

  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit} className="w-full max-w-md rounded bg-white p-8 shadow-md">
        <h1 className="mb-6 text-2xl font-bold text-gray-700">Registration</h1>

        {success && (
          <div className="mb-4 flex items-center rounded-lg border border-green-400 bg-green-100 p-4 text-green-700">
            <svg className="mr-2 size-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-medium">{success}</span>
          </div>
        )}

        {error && (
          <div className="mb-4 flex items-center rounded-lg border border-red-400 bg-red-100 p-4 text-red-700">
            <svg className="mr-2 size-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-12.728 12.728M5.636 5.636l12.728 12.728"></path>
            </svg>
            <span className="font-medium">{error}</span>
          </div>
        )}

        <div className="mb-4">
          <label htmlFor="companyname" className="block text-gray-700">Company Name</label>
          <input type="text" id="companyname" name="companyname" className="w-full rounded border p-2 text-gray-700" required placeholder="Enter your company name" />
        </div>

        <div className="mb-4">
          <label htmlFor="country" className="block text-gray-700">City</label>
          <input type="text" id="country" name="country" className="w-full rounded border p-2 text-gray-700" required placeholder="Enter your City" />
        </div>

        <div className="mb-4">
          <label htmlFor="contactperson" className="block text-gray-700">Contact Person</label>
          <input type="text" id="contactperson" name="contactperson" className="w-full rounded border p-2 text-gray-700" required placeholder="Enter contact person's name" />
        </div>

        <div className="mb-4">
          <label htmlFor="designation" className="block text-gray-700">Designation</label>
          <input type="text" id="designation" name="designation" className="w-full rounded border p-2 text-gray-700" required placeholder="Enter your designation" />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input type="email" id="email" name="email" className="w-full rounded border p-2 text-gray-700" required placeholder="Enter your email" />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700">Phone</label>
          <input type="tel" id="phone" name="phone" className="w-full rounded border p-2 text-gray-700" required placeholder="Enter your phone number" />
        </div>

        <button type="submit" className="w-full rounded bg-green-500 p-2 text-white hover:bg-green-700">
          Register As Exhibitor
        </button>
      </form>
    </div>
  );
};

export default ExhibitorForm;