"use client"

import { Check, Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"

interface TicketingPageProps {
  onBookNow: (ticketType: string, quantity?: number) => void
}

export default function TicketingPage({ onBookNow }: TicketingPageProps) {
  const [groupQuantity, setGroupQuantity] = useState(3)

  const formatPrice = (amount: number) => `£${amount.toFixed(2)}`

  const ticketOptions = [
    {
      id: "individual",
      title: "Individual",
      subtitle: "Single Delegate Pass",
      price: 0,
      discountedprice: 0,
      discount: null,
      benefits: [
        "2 day full access to the exhibition area",
        "2 day full access to the conference auditorium",
        "Your company logo displayed on the event marketing collateral",
        "Your company logo displayed on the participant page of the event website",
        "Copy of pre and post-event report",
        "Premium Goodie bag",
      ],
      buttonText: "Book Now",
      cardClass: "bg-white border-2 border-gray-300",
      textClass: "text-gray-800",
      buttonClass: "bg-blue-900 hover:bg-blue-800 text-white",
      showQuantity: false,
    },
    {
      id: "two-delegate",
      title: "Two Delegate Passes",
      subtitle: "",
      price: 990,
      discountedprice: 495,
      discount: { text: "50% Off", subtext: "2 FOR 1 Offer" },
      benefits: [
        "2 day full access to the exhibition area",
        "2 day full access to the conference auditorium",
        "Your company logo displayed on the event marketing collateral",
        "Your company logo displayed on the participant page of the event website",
        "Copy of pre and post-event report",
        "A premium goodie bag",
      ],
      buttonText: "Book Now",
      cardClass: "bg-blue-500",
      textClass: "text-white",
      buttonClass: "bg-white hover:bg-gray-100 text-blue-500",
      showQuantity: false,
    },
    {
      id: "group",
      title: "Group Delegate Pass",
      subtitle: "",
      price: 494,
      discountedprice: 247,
      discount: { text: "50% Off", subtext: "Group Discount" },
      benefits: [
        "2 day full access to the exhibition area",
        "2 day full access to the conference auditorium",
        "Your company logo displayed on the event marketing collateral",
        "Your company logo displayed on the participant page of the event website",
        "Copy of pre and post-event report",
        "A premium goodie bag",
      ],
      buttonText: "Book Now",
      cardClass: "bg-blue-900",
      textClass: "text-white",
      buttonClass: "bg-white hover:bg-gray-100 text-blue-900",
      showQuantity: true,
    },
  ]

  const handleQuantityChange = (change: number) => {
    setGroupQuantity((prev) => Math.max(1, prev + change))
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-600 mb-4">
          Register now to attend Future PropTech Summit
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ticketOptions.map((option) => {
          const quantity = option.id === "group" ? groupQuantity : 1
          const originalTotal = option.price * quantity
          const discountedTotal = option.discountedprice ? option.discountedprice * quantity : null

          return (
            <Card
              key={option.id}
              className={`relative ${option.cardClass} shadow-lg overflow-hidden flex flex-col justify-between`}
            >
              {option.discount && (
                <div className="absolute top-0 right-0 z-10">
                  <div className="flex justify-end bg-gray-100 rounded-bl-2xl p-2">
                    <span className="text-blue-800 font-bold text-sm mr-2">{option.discount.text}</span>
                    <span className="text-gray-700 text-sm">{option.discount.subtext}</span>
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-4 pt-12">
                <CardTitle className={`text-2xl font-bold ${option.textClass}`}>{option.title}</CardTitle>
                {option.subtitle && (
                  <p className={`text-sm ${option.id === "individual" ? "text-gray-600" : "text-blue-100"}`}>
                    {option.subtitle}
                  </p>
                )}

                <div className="flex flex-col items-center justify-center mt-6">
                  {discountedTotal ? (
                    <>
                      <div className="text-xl line-through text-gray-300">
                        {formatPrice(originalTotal)}
                      </div>
                      <div className={`text-4xl md:text-5xl font-bold ${option.textClass}`}>
                        {formatPrice(discountedTotal)}
                      </div>
                    </>
                  ) : (
                    <div className={`text-4xl md:text-5xl font-bold ${option.textClass}`}>
                      {formatPrice(originalTotal)}
                    </div>
                  )}

                  {option.showQuantity && (
                    <div className="flex items-center border border-white rounded mt-2">
                      <button
                        onClick={() => handleQuantityChange(-1)}
                        className="p-2 text-white hover:bg-white hover:text-blue-900 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4 py-2 text-white font-semibold min-w-[3rem] text-center">{groupQuantity}</span>
                      <button
                        onClick={() => handleQuantityChange(1)}
                        className="p-2 text-white hover:bg-white hover:text-blue-900 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent className="flex flex-col justify-between flex-1 px-6 pb-6">
                <div>
                  <h4 className={`font-semibold mb-4 ${option.textClass}`}>Benefits Include :</h4>
                  <ul className="space-y-3">
                    {option.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${option.textClass}`} />
                        <span className={`text-sm leading-relaxed ${option.textClass}`}>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 space-y-4 mt-auto">
                  <button
                    className={`w-full text-center ${option.textClass} underline hover:no-underline transition-all`}
                  >
                    View All Benefits
                  </button>

                  <Button
                    onClick={() => onBookNow(option.id, option.showQuantity ? groupQuantity : undefined)}
                    className={`w-full py-3 font-semibold ${option.buttonClass}`}
                  >
                    {option.buttonText}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
