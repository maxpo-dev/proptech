'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Sponsor from './Sponsor'
import Exhibitors from './Exhibitors'
import Delegates from './Delegates'
import Participants from './Participants'

const options = [
  { label: 'Sponsor', key: 'sponsor' },
  { label: 'Exhibitors', key: 'exhibitors' },
  { label: 'Delegates', key: 'delegates' },
  { label: 'Participants', key: 'participants' },
]

export default function ContactUs() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [selected, setSelected] = useState<string | null>(null)

  // Read initial selection from query param
  useEffect(() => {
    const selectedType = searchParams.get('register')
    setSelected(selectedType)
  }, [searchParams])

  // Update query param in URL when a new option is selected
  const handleSelect = (key: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('register', key)
    router.push(`/register?${params.toString()}`)
  }

  const renderComponent = () => {
    switch (selected) {
      case 'sponsor':
        return <Sponsor />
      case 'exhibitors':
        return <Exhibitors />
      case 'delegates':
        return <Delegates />
      case 'participants':
        return <Participants />
      default:
        return (
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Have questions about the International Proptech Investment Expo?
            </h2>
            <p className="text-gray-600">We're here to help.</p>
          </div>
        )
    }
  }

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center gap-4 flex-wrap mb-8">
          {options.map((opt) => (
            <button
              key={opt.key}
              onClick={() => handleSelect(opt.key)}
              className={`px-5 py-2 rounded-full font-semibold transition ${
                selected === opt.key
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-100'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">{renderComponent()}</div>
      </div>
    </div>
  )
}
