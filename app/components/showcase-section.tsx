"use client"

import { Store, HandCoins, Target, Users, HandshakeIcon } from 'lucide-react'
import Link from "next/link"

export default function ShowcaseSection() {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
          Showcase Your Innovations at Future PropTech Summit 2025
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          The Future PropTech Summit is the ideal platform for:
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-gray-600 mb-8">
          {['Real Estate Companies', 'PropTech Startups', 'Technology Providers', 'Sustainability Experts', 'Investment Firms', 'Government Agencies'].map((item, index) => (
            <span key={index} className="px-4 py-2 bg-gray-50 rounded-full">{item}</span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* First Card - Full Width on MD */}
        <div className="md:col-span-2 lg:col-span-1 bg-blue-700 rounded-2xl p-8 text-white">
          <Store className="w-12 h-12 mb-4" strokeWidth={1.5} />
          <h3 className="text-xl font-semibold mb-3">
            Exhibit Innovative Products, Services And Solutions In Front Of Over 5,000 High-Level Professionals.
          </h3>
        </div>

        {/* Second Card */}
        <div className="bg-blue-50 rounded-2xl p-8">
          <HandCoins className="w-12 h-12 mb-4 text-blue-700" strokeWidth={1.5} />
          <h3 className="text-xl font-semibold text-blue-700 mb-3">
            Increase Your Visibility Among A Targeted Audience And Establish Yourself As A Leader In The Proptech Space.
          </h3>
        </div>

        {/* Third Card */}
        <div className="bg-blue-50 rounded-2xl p-8">
          <Target className="w-12 h-12 mb-4 text-blue-700" strokeWidth={1.5} />
          <h3 className="text-xl font-semibold text-blue-700 mb-3">
            Engage With Your Target Audience, Explore New Opportunities And Generate Qualified Leads.
          </h3>
        </div>

        {/* Fourth Card */}
        <div className="bg-gray-900 rounded-2xl p-8 text-white">
          <Users className="w-12 h-12 mb-4" strokeWidth={1.5} />
          <h3 className="text-xl font-semibold mb-3">
            Network With Industry Bigwigs, Policymakers, And Potential Collaborators To Expand Your Network.
          </h3>
        </div>

        {/* Fifth Card */}
        <div className="bg-blue-700 rounded-2xl p-8 text-white">
          <HandshakeIcon className="w-12 h-12 mb-4" strokeWidth={1.5} />
          <h3 className="text-xl font-semibold mb-3">
            Catapult Your Proptech Venture, Pitch To Investors And Secure Funding.
          </h3>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link 
          href="/apply-exhibit"
          className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition-colors"
        >
          Apply to Exhibit
        </Link>
      </div>
    </section>
  )
}

