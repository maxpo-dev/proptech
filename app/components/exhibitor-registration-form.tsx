"use client"

import { useState, type FormEvent, type ChangeEvent } from "react"

export function ExhibitorRegistrationForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    website: "",
    boothSize: "",
    productCategory: "",
    specialRequirements: "",
    termsAccepted: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
      const response = await fetch("/api/submit-exhibitor-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert("Exhibitor registration submitted successfully!")
        setFormData({
          companyName: "",
          contactName: "",
          email: "",
          phone: "",
          website: "",
          boothSize: "",
          productCategory: "",
          specialRequirements: "",
          termsAccepted: false,
        })
      } else {
        alert("Error submitting registration. Please try again.")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
      <div>
        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
          Company Name *
        </label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          required
          value={formData.companyName}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-3"
        />
      </div>

      <div>
        <label htmlFor="contactName" className="block text-sm font-medium text-gray-700">
          Contact Name *
        </label>
        <input
          type="text"
          id="contactName"
          name="contactName"
          required
          value={formData.contactName}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-3"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-3"
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
          value={formData.phone}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-3"
        />
      </div>

      <div>
        <label htmlFor="website" className="block text-sm font-medium text-gray-700">
          Company Website
        </label>
        <input
          type="url"
          id="website"
          name="website"
          value={formData.website}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-3"
        />
      </div>

      <div>
        <label htmlFor="boothSize" className="block text-sm font-medium text-gray-700">
          Preferred Booth Size *
        </label>
        <select
          id="boothSize"
          name="boothSize"
          required
          value={formData.boothSize}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-3"
        >
          <option value="">Select Booth Size</option>
          <option value="small">Small (3m x 3m)</option>
          <option value="medium">Medium (6m x 3m)</option>
          <option value="large">Large (6m x 6m)</option>
          <option value="custom">Custom Size</option>
        </select>
      </div>

      <div>
        <label htmlFor="productCategory" className="block text-sm font-medium text-gray-700">
          Product Category *
        </label>
        <input
          type="text"
          id="productCategory"
          name="productCategory"
          required
          value={formData.productCategory}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-3"
        />
      </div>

      <div>
        <label htmlFor="specialRequirements" className="block text-sm font-medium text-gray-700">
          Special Requirements or Comments
        </label>
        <textarea
          id="specialRequirements"
          name="specialRequirements"
          rows={3}
          value={formData.specialRequirements}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-3"
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
          I confirm that I have read, understand and accept the Terms and Conditions and Privacy Policy
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

