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
      const response = await fetch("/api/exhibitorreg", {
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
    <form onSubmit={handleSubmit} className="mx-auto max-w-lg space-y-6 rounded-lg bg-white p-6 shadow-lg">
      {/* <h2 className="text-xl font-semibold text-center text-gray-800">Exhibitor Registration</h2> */}

      <div>
        <input
          type="text"
          name="companyName"
          required
          value={formData.companyName}
          onChange={handleChange}
          placeholder="Company Name *"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200"
        />
      </div>

      <div>
        <input
          type="text"
          name="contactName"
          required
          value={formData.contactName}
          onChange={handleChange}
          placeholder="Contact Name *"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200"
        />
      </div>

      <div>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="Email *"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200"
        />
      </div>

      <div>
        <input
          type="tel"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone *"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200"
        />
      </div>

      <div>
        <input
          type="url"
          name="website"
          value={formData.website}
          onChange={handleChange}
          placeholder="Company Website"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200"
        />
      </div>

      <div>
        <input
          type="text"
          name="boothSize"
          required
          value={formData.boothSize}
          onChange={handleChange}
          placeholder="Preferred Booth Size * (e.g., 3m x 3m)"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200"
        />
      </div>

      <div>
        <input
          type="text"
          name="productCategory"
          required
          value={formData.productCategory}
          onChange={handleChange}
          placeholder="Product Category *"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200"
        />
      </div>

      <div>
        <textarea
          name="specialRequirements"
          rows={3}
          value={formData.specialRequirements}
          onChange={handleChange}
          placeholder="Special Requirements or Comments"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200"
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
          className="mt-1 size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
        />
        <label htmlFor="termsAccepted" className="ml-2 block text-sm text-gray-900">
          I confirm that I have read, understand, and accept the{" "}
          <a className="text-blue-400 underline" href="/privacypolicy">
            Privacy Policy
          </a>
        </label>
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full justify-center rounded-lg border border-transparent bg-indigo-600 px-4 py-3 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "Submit Registration"}
        </button>
      </div>
    </form>
  )
}
