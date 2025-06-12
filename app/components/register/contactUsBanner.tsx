import React from 'react'
import { Mail, Phone, MapPin } from "lucide-react"

const ContactUsBanner = () => {
  return (
  <div className="p-6 sm:p-8 bg-blue-600 text-white w-full md:w-1/3 rounded-sm">
              <h2 className="text-xl sm:text-2xl font-bold mb-6">Contact Details</h2>
              <div className="space-y-4 text-sm sm:text-base">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p>info@futureproptechsummit.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-5 h-5 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p>+971 509431529</p>
                    <p>+91 7780985893</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p>Le Méridien Dubai Hotel & Conference Centre</p>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default ContactUsBanner