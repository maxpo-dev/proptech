"use client"

import type React from "react"

import { useState, useEffect } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useSearchParams } from "next/navigation"
import FormSection from "../components/register/formSection"

interface RegisterFormProps {
  type: string
  title: string
  description: string
  ticketType?: string | null
}

export default function RegisterForm({ type, title, description, ticketType }: RegisterFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  })
  const searchParams = useSearchParams()
  const [selectedQuantity, setSelectedQuantity] = useState<number | null>(null)
  const [selected, setSelected] = useState<string | null>(null)
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null)
  const [showTicketing, setShowTicketing] = useState<boolean>(false)

  useEffect(() => {
    const selectedType = searchParams.get("type")
    const ticketType = searchParams.get("ticket")
    const quantity = searchParams.get("quantity")

    setSelected(selectedType)

    // Show ticketing page for delegates if no ticket is selected
    if (selectedType === "delegates" && !ticketType) {
      setShowTicketing(true)
    } else {
      setShowTicketing(false)
      setSelectedTicket(ticketType)
      setSelectedQuantity(quantity ? Number.parseInt(quantity) : null)
    }
  }, [searchParams])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", { ...formData, type, ticketType })
    // Handle form submission here
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <CardDescription className="text-lg">{description}</CardDescription>
        {ticketType && (
          <div className="mt-2 p-2 bg-blue-50 rounded-md">
            <p className="text-sm text-blue-700">
              Selected ticket: <span className="font-semibold capitalize">{ticketType.replace("-", " ")}</span>
              {selectedQuantity && <span className="ml-2">× {selectedQuantity}</span>}
            </p>
          </div>
        )}
      </CardHeader>
      <CardContent>
       <FormSection type="delegates"/>
      </CardContent>
    </Card>
  )
}
