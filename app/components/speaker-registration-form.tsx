"use client"

import { useState, type FormEvent, type ChangeEvent } from "react"

export function SimpleSpeakerRegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    industry: "",
    jobTitle: "",
    message: "",
    termsAccepted: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/speakerreg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert("Form submitted successfully!")
        setFormData({
          name: "",
          email: "",
          phone: "",
          companyName: "",
          industry: "",
          jobTitle: "",
          message: "",
          termsAccepted: false,
        })
      } else {
        alert("Error submitting form. Please try again.")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto py-10">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-3"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Work Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="Enter your work email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-3"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Phone *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-3"
        />
      </div>

      <div>
        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
          Company Name *
        </label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          required
          placeholder="Enter your company name"
          value={formData.companyName}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-3"
        />
      </div>

      <div>
        <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">
          Job Title *
        </label>
        <input
          type="text"
          id="jobTitle"
          name="jobTitle"
          required
          placeholder="Enter your job title"
          value={formData.jobTitle}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-3"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message (If any)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Enter your message (optional)"
          value={formData.message}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-3"
        ></textarea>
      </div>

      <div className="flex items-start">
        <input
          type="checkbox"
          id="termsAccepted"
          name="termsAccepted"
          required
          checked={formData.termsAccepted}
          onChange={handleChange}
          className="mt-1 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
        />
        <label htmlFor="termsAccepted" className="ml-2 block text-sm text-gray-900">
          I confirm that I have read, understand and accept the Terms and Conditions and <a className="text-blue-400 underline" href="/privacypolicy">Privacy Policy</a>
        </label>
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "Submit Registration"}
        </button>
      </div>
    </form>
  )
}
