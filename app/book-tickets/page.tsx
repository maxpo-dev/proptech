"use client"

import { useState } from "react"

const InputField = ({
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
}: {
  label: string
  id: string
  type?: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) => (
  <div className="mb-5">
    <label htmlFor={id} className="mb-2 block text-base font-semibold text-gray-800">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full rounded-lg border border-gray-300 bg-white px-5 py-3 shadow-sm transition duration-300 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
      required
    />
  </div>
)

export default function BookTicketsForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    designation: "",
    phone: "",
    consent: false,
  })

  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.consent) {
      setError("You must agree to the terms and conditions to register.")
      return
    }
    try {
      const res = await fetch("/api/bookticket", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setSuccess(true)
        setError("")
        setFormData({
          name: "",
          email: "",
          company: "",
          designation: "",
          phone: "",
          consent: false,
        })
      } else {
        const data = await res.json()
        setError(data.message || "Submission failed.")
        setSuccess(false)
      }
    } catch (err) {
      console.error("Error submitting form:", err)
      setError("Something went wrong. Please try again.")
      setSuccess(false)
    }
  }

  return (
    <div
      className={`relative min-h-screen bg-cover bg-center px-4 py-20 ${
        success ? "flex items-center justify-center" : ""
      }`}
      style={{ backgroundImage: "url('/image/fpsbookback6.jpg')" }}
    >
      <div className="absolute inset-0 z-0 bg-black bg-opacity-40" />

      {!success ? (
        <div className="relative z-10 mx-auto mt-12 max-w-3xl rounded-2xl border border-gray-300 bg-white bg-opacity-90 p-12 shadow-2xl">
          <h2 className="mb-8  text-center text-4xl font-bold tracking-wide text-gray-900">
            Book Your Tickets
          </h2>
          <p className="mb-8 text-center text-lg text-gray-700">
            Register now for exclusive access to the Future PropTech Summit 2025.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <InputField label="Full Name" id="name" placeholder="Enter your full name" value={formData.name} onChange={handleChange} />
            <InputField label="Email" id="email" type="email" placeholder="Enter your Work email" value={formData.email} onChange={handleChange} />
            <InputField label="Company" id="company" placeholder="Enter your company name" value={formData.company} onChange={handleChange} />
            <InputField label="Designation" id="designation" placeholder="Enter your designation" value={formData.designation} onChange={handleChange} />
            <InputField label="Phone Number" id="phone" type="tel" placeholder="Enter your contact number" value={formData.phone} onChange={handleChange} />

            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="size-5 rounded border-gray-300 text-blue-600 transition duration-300 focus:ring-blue-500"
                required
              />
              <label htmlFor="consent" className="ml-2 text-base text-gray-800">
                I agree to the <a href="/terms" className="text-blue-700 underline">terms and conditions</a>.
              </label>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-blue-800 px-6 py-3 text-lg font-medium text-white shadow transition duration-300 hover:bg-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-500"
            >
              Register Now
            </button>
          </form>

          {error && <p className="mt-6 text-center font-medium text-red-600">{error}</p>}
        </div>
      ) : (
        <div className="relative z-10 w-full max-w-xl rounded-2xl border border-gray-200 bg-white bg-opacity-95 p-10 text-center shadow-2xl">
          <h3 className="mb-4  text-3xl font-bold text-green-700">🎉 Thank you for registering!</h3>
          <p className="text-lg text-gray-800">
            We’ve received your details and will be in touch soon with more information. <br />
            Stay tuned for updates and get ready to experience the future of PropTech!
          </p>
        </div>
      )}
    </div>
  )
}
