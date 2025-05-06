"use client"

import type React from "react"
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
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1 text-left">
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

export default function ContactUs2() {
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

    setFormData((prevData) => ({
      ...prevData,
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
      const response = await fetch("/api/mailcontact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
        setSuccessMessage(data.message || "Booking submitted successfully and email sent!")
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
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-left sm:text-center mb-8 sm:mb-12 px-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Enquire Now</h1>
          <p className="mt-2 sm:mt-4 text-base sm:text-lg text-gray-600 max-w-xl mx-auto">
            Fill out the form to contact our team. We're here to help with sponsorships, registration, and event details.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="p-6 sm:p-8 bg-blue-600 text-white flex-1">
              <h2 className="text-2xl font-bold mb-6 text-left">Contact Us</h2>
              <div className="space-y-4 text-sm sm:text-base text-left">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 mr-3 mt-1" />
                  <div className="text-left">
                    <h3 className="font-semibold">Email</h3>
                    <p>info@futureproptechsummit.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 mr-3 mt-1" />
                  <div className="text-left">
                    <h3 className="font-semibold">Phone</h3>
                    <p>+971 509431529</p>
                    <p>+91 9945580628</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 mr-3 mt-1" />
                  <div className="text-left">
                    <h3 className="font-semibold">Address</h3>
                    <p>Le Méridien Dubai Hotel & Conference Centre</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              {isSubmitted ? (
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-green-600 mb-4">Thank You!</h2>
                  <p className="text-gray-600">
                    Thank you for registering! <br /> You are now part of the Future Proptech Summit community. You will receive a confirmation email shortly. Our team will get in touch with you soon.
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

                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 text-left">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="flex items-start space-x-2 text-sm text-gray-700">
                      <input
                        type="checkbox"
                        name="termsAccepted"
                        checked={checkboxes.termsAccepted}
                        onChange={handleCheckboxChange}
                        className="mt-1"
                      />
                      <span className="text-left">
                        I confirm that I have read, understand and accept the{" "}
                        Terms & Conditions and{" "}
                        <Link href="https://www.maxpo.ae/privacy" className="text-blue-600 underline" target="_blank">Privacy Policy</Link>.
                      </span>
                    </label>
                  </div>

                  <div className="mb-4">
                    <label className="flex items-start space-x-2 text-sm text-gray-700">
                      <input
                        type="checkbox"
                        name="consentGiven"
                        checked={checkboxes.consentGiven}
                        onChange={handleCheckboxChange}
                        className="mt-1"
                      />
                      <span className="text-left">
                        I consent to having my data processed for event communication.
                      </span>
                    </label>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="w-full py-3 px-6 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 transition duration-200"
                    >
                      Submit
                    </button>
                  </div>

                  {submitError && <p className="text-red-600 text-center">{submitError}</p>}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
