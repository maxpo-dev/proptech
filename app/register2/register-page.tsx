"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import RegisterForm from "./registerForm"
import TicketingPage from "./ticketing-page"

type FormTypes = "enquiry" | "delegates" | "exhibitors" | "sponsor" | "participants"

const options = [
  { label: "Sponsor", key: "sponsor" },
  { label: "Exhibitors", key: "exhibitors" },
  { label: "Delegates", key: "delegates" },
  { label: "Participants", key: "participants" },
]

const formDetails: Record<string, { title: string; description: string }> = {
  sponsor: {
    title: "Sponsor Registration",
    description: "Join Future PropTech Summit as a sponsor and connect with top real estate tech leaders.",
  },
  exhibitors: {
    title: "Exhibitor Registration",
    description: "Showcase your solutions at Future PropTech Summit and connect with industry innovators.",
  },
  delegates: {
    title: "Delegate Registration",
    description:
      "Register now to attend Future PropTech Summit as a delegate and gain full access to sessions, networking, and insights.",
  },
  participants: {
    title: "Participant Registration",
    description:
      "Sign up to be a participant at the Future PropTech Summit and experience the latest in real estate innovation.",
  },
}

export default function RegisterPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [selected, setSelected] = useState<string | null>(null)
  const [showTicketing, setShowTicketing] = useState(false)
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null)

  useEffect(() => {
    const selectedType = searchParams.get("type")
    const ticketType = searchParams.get("ticket")

    setSelected(selectedType)

    // Show ticketing page for delegates if no ticket is selected
    if (selectedType === "delegates" && !ticketType) {
      setShowTicketing(true)
    } else {
      setShowTicketing(false)
      setSelectedTicket(ticketType)
    }
  }, [searchParams])

  const handleSelect = (key: string) => {
    const params = new URLSearchParams()
    params.set("type", key)

    // For delegates, show ticketing first
    if (key === "delegates") {
      setShowTicketing(true)
    } else {
      setShowTicketing(false)
    }

    router.push(`/register2?${params.toString()}`)
  }

  const handleBookNow = (ticketType: string, quantity?: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("ticket", ticketType)
    if (quantity) {
      params.set("quantity", quantity.toString())
    }
    router.push(`/register2?${params.toString()}`)
    setShowTicketing(false)
    setSelectedTicket(ticketType)
  }

  const selectedForm = formDetails[selected || ""] ?? {
    title: "Enquire Now",
    description:
      "Fill out the form to contact our team. We're here to help with sponsorships, registration, and event details.",
  }

  // Show ticketing page for delegates
  if (selected === "delegates" && showTicketing) {
    return (
      <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto mt-5">
          <div className="flex justify-center gap-4 flex-wrap mb-8">
            {options.map((opt) => (
              <button
                key={opt.key}
                onClick={() => handleSelect(opt.key)}
                className={`px-5 py-2 rounded-full font-semibold transition ${
                  selected === opt.key
                    ? "bg-blue-600 text-white"
                    : "bg-white text-blue-600 border border-blue-600 hover:bg-blue-100"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          <div className="bg-white p-3 md:p-6 rounded-lg shadow-md">
            <TicketingPage onBookNow={handleBookNow} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto mt-5">
        <div className="flex justify-center gap-4 flex-wrap mb-8">
          {options.map((opt) => (
            <button
              key={opt.key}
              onClick={() => handleSelect(opt.key)}
              className={`px-5 py-2 rounded-full font-semibold transition ${
                selected === opt.key
                  ? "bg-blue-600 text-white"
                  : "bg-white text-blue-600 border border-blue-600 hover:bg-blue-100"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <div className="bg-white p-3 md:p-6 rounded-lg shadow-md">
          <RegisterForm type={(selected as FormTypes) || "enquiry"} ticketType={selectedTicket} {...selectedForm} />
        </div>
      </div>
    </div>
  )
}
