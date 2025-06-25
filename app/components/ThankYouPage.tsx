'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

const ThankYouPage = () => {
  const [showCheckmark, setShowCheckmark] = useState(false)
  const searchParams = useSearchParams()
  const type = (searchParams.get('type') ?? '').toLowerCase()

  const validTypes = ['sponsor', 'exhibitors', 'delegates', 'participants', 'enquiry']
  const titleMap: Record<string, string> = {
    sponsor: 'Sponsor',
    exhibitors: 'Exhibitor',
    delegates: 'Delegate',
    participants: 'Participant',
    enquiry: 'Enquiry',
  }

  const heading = titleMap[type] || 'Registration'

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag && type === 'exhibitors') {
      window.gtag('event', 'conversion_event_submit_lead_form_1')
    }

    const timer = setTimeout(() => {
      setShowCheckmark(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [type])

  if (!type || !validTypes.includes(type)) {
    return (
      <div className="min-h-[60vh] flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-3xl font-bold text-red-600 mb-2">Invalid Registration Type</h1>
        <p className="text-gray-700 mb-4">The registration type provided in the URL is not recognized.</p>
        <Link href="/register" className="text-blue-600 underline hover:text-blue-800">
          Go back to registration
        </Link>
      </div>
    )
  }

  const messages: Record<string, { title: string; bold: string; description: string; date: string }> = {
    sponsor: {
      title: 'Thank You For Your Sponsor Registration!',
      bold: 'You are now part of the Future PropTech Summit community',
      description: 'Our team will get in touch with you soon.',
      date: '14 October – 15 October 2025 · Le Méridien Dubai Hotel & Conference Centre',
    },
    exhibitors: {
      title: 'Thank You For Your Exhibitors Registration!',
      bold: 'You are now part of the Future PropTech Summit community',
      description: 'Our team will get in touch with you soon.',
      date: '14 October – 15 October 2025 · Le Méridien Dubai Hotel & Conference Centre',
    },
    delegates: {
      title: 'Thank You For Your Delegate Registration!',
      bold: 'You are now part of the Future PropTech Summit community',
      description: 'Our team will get in touch with you soon.',
      date: '14 October – 15 October 2025 · Le Méridien Dubai Hotel & Conference Centre',
    },
    participants: {
      title: 'Thank You For Your Participants Registration!',
      bold: 'You are now part of the Future PropTech Summit community',
      description: 'Our team will get in touch with you soon.',
      date: '14 October – 15 October 2025 · Le Méridien Dubai Hotel & Conference Centre',
    },
    enquiry: {
      title: 'Thank You For Your Enquiry!',
      bold: 'You are now part of the Revolution EV community',
      description: 'Our team will get in touch with you soon.',
      date: '23 October – 24 October 2025 · World Trade Centre Kuala Lumpur',
    },
  }

  const { title, bold, description, date } = messages[type]

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-start text-center px-4 py-12 bg-white mt-8">
      {/* Header Card */}
      <div className="w-full max-w-2xl rounded-t-lg py-4 text-white font-bold text-2xl bg-[#172554] mt-8">
        {heading}
      </div>

      {/* Checkmark */}
      {/* <div
        className={`bg-[#172554] rounded-full w-24 h-24 flex items-center justify-center mt-6 mb-6 transition-opacity duration-500 ${
          showCheckmark ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-14 w-14 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M5 13l4 4L19 7"
            strokeDasharray="22"
            strokeDashoffset={showCheckmark ? '0' : '22'}
            style={{ transition: 'stroke-dashoffset 0.5s ease' }}
          />
        </svg>
      </div> */}

      {/* Messages */}
      <h3 className="text-2xl font-bold mb-2 text-gray-900 pt-10">{title}</h3>
      <p className="text-lg font-semibold text-gray-800 mb-1">{bold}</p>
      <p className="text-gray-600">{description}</p>
      <p className="text-sm text-gray-500 mt-2">{date}</p>

      {/* Action Buttons */}
      <div className="flex gap-6 mt-10 flex-wrap justify-center">
        <Link href="/participants" className="flex items-center gap-2 text-[#172554] font-medium">
          <div className="bg-cyan-100 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-800" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
          </div>
          See Who's Participating
        </Link>

        <Link href="/conference/speakers" className="flex items-center gap-2 text-[#172554] font-medium">
          <div className="bg-cyan-100 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-800" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          </div>
          View All Speakers
        </Link>
      </div>
    </div>
  )
}

export default ThankYouPage
