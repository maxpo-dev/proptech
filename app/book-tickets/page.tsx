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
    <label htmlFor={id} className="block text-base font-semibold text-gray-800 mb-2">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition duration-300"
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
      className={`relative min-h-screen bg-cover bg-center py-20 px-4 ${
        success ? "flex items-center justify-center" : ""
      }`}
      style={{ backgroundImage: "url('/image/fpsbookback6.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />

      {!success ? (
        <div className="relative z-10 bg-white bg-opacity-90 shadow-2xl rounded-2xl p-12 max-w-3xl mx-auto border border-gray-300 mt-12">
          <h2 className="text-4xl font-serif font-bold text-center text-gray-900 mb-8 tracking-wide">
            Book Your Tickets
          </h2>
          <p className="text-lg text-center text-gray-700 mb-8">
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
                className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 transition duration-300"
                required
              />
              <label htmlFor="consent" className="ml-2 text-gray-800 text-base">
                I agree to the <a href="/privacypolicy" className="text-blue-700 underline">terms and conditions</a>.
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 bg-blue-800 text-white text-lg font-medium rounded-xl shadow hover:bg-blue-900 transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500"
            >
              Register Now
            </button>
          </form>

          {error && <p className="text-red-600 mt-6 text-center font-medium">{error}</p>}
        </div>
      ) : (
        <div className="relative z-10 max-w-xl w-full p-10 bg-white bg-opacity-95 rounded-2xl shadow-2xl text-center border border-gray-200">
          <h3 className="text-3xl font-serif font-bold text-green-700 mb-4">🎉 Thank you for registering!</h3>
          <p className="text-lg text-gray-800">
            We’ve received your details and will be in touch soon with more information. <br />
            Stay tuned for updates and get ready to experience the future of PropTech!
          </p>
        </div>
      )}
    </div>
  )
}
