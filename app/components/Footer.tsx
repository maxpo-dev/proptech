'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribeStatus, setSubscribeStatus] = useState('')

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubscribeStatus('Subscribing...')
    try {
      const response = await fetch('/api/submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })
      const data: { success: boolean } = await response.json()
      if (data.success) {
        setSubscribeStatus('Subscribed successfully!')
        setEmail('')
      } else {
        setSubscribeStatus('Subscription failed. Please try again.')
      }
    } catch (error) {
      console.error('Subscription error:', error)
      setSubscribeStatus('An error occurred. Please try again.')
    }
  }

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Future Proptech Summit</h2>
            <p className="text-gray-400">Shaping the Future of Real Estate Technology</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/futureproptechsummit" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://www.linkedin.com/showcase/future-proptech-summit" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors duration-200">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-200">About</Link></li>
              <li><Link href="/speakers" className="text-gray-400 hover:text-white transition-colors duration-200">Speakers</Link></li>
              <li><Link href="/exhibitors" className="text-gray-400 hover:text-white transition-colors duration-200">Exhibitors</Link></li>
              <li><Link href="/privacypolicy" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</Link></li>
              <li><Link href="/register" className="text-gray-400 hover:text-white transition-colors duration-200">Contact Us</Link></li>
              {/* <li><Link href="/privacypolicy" className="text-gray-400 hover:text-white transition-colors duration-200">PrivacyPolicy</Link></li> */}
              
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-gray-400" />
                <a href="mailto:proptechdubai@maxpo.ae" className="text-gray-400 hover:text-white transition-colors duration-200">proptechsales@maxpo.ae</a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-gray-400" />
                <a href="tel:+971509431529" className="text-gray-400 hover:text-white transition-colors duration-200">+971 509431529</a>
              </li>
              <li className="flex items-center">
                <a href="tel:+919945580628" className="text-gray-400 hover:text-white transition-colors duration-200 pl-6">+91 9945580628</a>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 text-gray-400" />
                <span className="text-gray-400">Dubai, UAE</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay updated with the latest in proptech</p>
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
            {subscribeStatus && <p className="mt-2 text-sm text-gray-400">{subscribeStatus}</p>}
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 International Proptech Conference & Investment Expo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}