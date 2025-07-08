"use client"

import { Store, HandCoins, Target, Users, HandshakeIcon } from 'lucide-react'
import Link from "next/link"

export default function ShowcaseSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <div className="mb-12 text-center">
        <h2 className="mb-6 text-3xl font-bold text-blue-900 md:text-4xl">
          Showcase Your Innovations at Future PropTech Summit 2025
        </h2>
        <p className="mb-4 text-lg text-gray-700">
          The Future PropTech Summit is the ideal platform for:
        </p>
        <div className="mb-8 flex flex-wrap justify-center gap-4 text-gray-600">
          {['Real Estate Companies', 'PropTech Startups', 'Technology Providers', 'Sustainability Experts', 'Investment Firms', 'Government Agencies'].map((item, index) => (
            <span key={index} className="rounded-full bg-gray-50 px-4 py-2">{item}</span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* First Card - Full Width on MD */}
        <div className="rounded-2xl bg-blue-700 p-8 text-white md:col-span-2 lg:col-span-1">
          <Store className="mb-4 size-12" strokeWidth={1.5} />
          <h3 className="mb-3 text-xl font-semibold">
            Exhibit Innovative Products, Services And Solutions In Front Of Over 5,000 High-Level Professionals.
          </h3>
        </div>

        {/* Second Card */}
        <div className="rounded-2xl bg-blue-50 p-8">
          <HandCoins className="mb-4 size-12 text-blue-700" strokeWidth={1.5} />
          <h3 className="mb-3 text-xl font-semibold text-blue-700">
            Increase Your Visibility Among A Targeted Audience And Establish Yourself As A Leader In The Proptech Space.
          </h3>
        </div>

        {/* Third Card */}
        <div className="rounded-2xl bg-blue-50 p-8">
          <Target className="mb-4 size-12 text-blue-700" strokeWidth={1.5} />
          <h3 className="mb-3 text-xl font-semibold text-blue-700">
            Engage With Your Target Audience, Explore New Opportunities And Generate Qualified Leads.
          </h3>
        </div>

        {/* Fourth Card */}
        <div className="rounded-2xl bg-gray-900 p-8 text-white">
          <Users className="mb-4 size-12" strokeWidth={1.5} />
          <h3 className="mb-3 text-xl font-semibold">
            Network With Industry Bigwigs, Policymakers, And Potential Collaborators To Expand Your Network.
          </h3>
        </div>

        {/* Fifth Card */}
        <div className="rounded-2xl bg-blue-700 p-8 text-white">
          <HandshakeIcon className="mb-4 size-12" strokeWidth={1.5} />
          <h3 className="mb-3 text-xl font-semibold">
            Catapult Your Proptech Venture, Pitch To Investors And Secure Funding.
          </h3>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link 
          href="/register"
          className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-blue-800"
        >
          Apply to Exhibition
        </Link>
      </div>
    </section>
  )
}

