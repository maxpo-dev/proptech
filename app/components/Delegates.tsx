"use client"

import { useEffect, useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

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
  <div className="mb-4">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
      required
    />
  </div>
)

export default function Delegates() {
  const searchParams = useSearchParams()

  const [formData, setFormData] = useState({
    name: "",
    jobTitle: "",
    companyName: "",
    email: "",
    phone: "",
    country: "",
    message: "",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
  })

  const [checkboxes, setCheckboxes] = useState({
    termsAccepted: true,
    consentGiven: true,
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [submitError, setSubmitError] = useState("")

  useEffect(() => {
    const utm_source = searchParams.get("utm_source") || ""
    const utm_medium = searchParams.get("utm_medium") || ""
    const utm_campaign = searchParams.get("utm_campaign") || ""

    setFormData((prev) => ({
      ...prev,
      utm_source,
      utm_medium,
      utm_campaign,
    }))
  }, [searchParams])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setCheckboxes((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!checkboxes.termsAccepted || !checkboxes.consentGiven) {
      setSubmitError("Please accept the terms and give your consent to proceed.")
      return
    }

    try {
      const response = await fetch("/api/delegate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
        setSuccessMessage(data.message || "Delegate form submitted successfully!")
        setSubmitError("")
        setFormData({
          name: "",
          jobTitle: "",
          companyName: "",
          email: "",
          phone: "",
          country: "",
          message: "",
          utm_source: "",
          utm_medium: "",
          utm_campaign: "",
        })
        setCheckboxes({
          termsAccepted: true,
          consentGiven: true,
        })
      } else {
        setSubmitError(data.message || "Form submission failed. Please try again.")
        setSuccessMessage("")
      }
    } catch (err) {
      console.error("Error submitting form:", err)
      setSubmitError("An error occurred. Please try again.")
      setSuccessMessage("")
    }
  }

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Delegate Registration</h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Register now to attend Future PropTech Summit as a delegate and gain full access to sessions, networking, and insights.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Contact Info */}
            <div className="p-6 sm:p-8 bg-blue-600 text-white">
              <h2 className="text-xl sm:text-2xl font-bold mb-6">Contact Us</h2>
              <div className="space-y-4 text-sm sm:text-base">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p>info@futureproptechsummit.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p>+971 509431529</p>
                    <p>+91 7780985893</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p>Le Méridien Dubai Hotel & Conference Centre</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="p-6 sm:p-8">
              {isSubmitted ? (
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-green-600 mb-4">Thank You!</h2>
                  <p className="text-gray-600">
                    Your delegate registration was successful! <br /> We'll be in touch shortly with more information.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-black">
                  <InputField label="Name" id="name" placeholder="Your full name" value={formData.name} onChange={handleChange} />
                  <InputField label="Job Title" id="jobTitle" placeholder="Your job title" value={formData.jobTitle} onChange={handleChange} />
                  <InputField label="Company Name" id="companyName" placeholder="Your company name" value={formData.companyName} onChange={handleChange} />
                  <InputField label="Email" id="email" type="email" placeholder="Your email address" value={formData.email} onChange={handleChange} />
                  <InputField label="Phone" id="phone" type="tel" placeholder="Your phone number" value={formData.phone} onChange={handleChange} />
                  <InputField label="Country" id="country" placeholder="Your country" value={formData.country} onChange={handleChange} />

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Share any questions or interests"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-start space-x-2 text-sm text-gray-700">
                      <input
                        type="checkbox"
                        name="termsAccepted"
                        checked={checkboxes.termsAccepted}
                        onChange={handleCheckboxChange}
                        className="mt-1"
                      />
                      <span>
                        I confirm I have read and accept the{" "}
                        <Link href="https://www.maxpo.ae/privacy" className="text-blue-600 underline" target="_blank">Privacy Policy</Link> and Terms & Conditions.
                      </span>
                    </label>

                    <label className="flex items-start space-x-2 text-sm text-gray-700">
                      <input
                        type="checkbox"
                        name="consentGiven"
                        checked={checkboxes.consentGiven}
                        onChange={handleCheckboxChange}
                        className="mt-1"
                      />
                      <span>
                        I agree to receive communication about the Future PropTech Summit and related updates.
                      </span>
                    </label>
                  </div>

                  <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200">
                    Submit
                  </button>
                </form>
              )}
              {successMessage && <p className="mt-4 text-green-600">{successMessage}</p>}
              {submitError && <p className="mt-4 text-red-600">{submitError}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
