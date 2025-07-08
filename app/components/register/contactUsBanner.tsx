import React from 'react'
import { Mail, Phone, MapPin } from "lucide-react"

const ContactUsBanner = () => {
  return (
  <div className="w-full rounded-sm bg-blue-600 p-6 text-white sm:p-8 md:w-1/3">
              <h2 className="mb-6 text-xl font-bold sm:text-2xl">Contact Details</h2>
              <div className="space-y-4 text-sm sm:text-base">
                <div className="flex items-start">
                  <Mail className="mr-3 mt-1 size-5" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p>info@futureproptechsummit.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="mr-3 mt-1 size-5" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p>+971 509431529</p>
                    <p>+91 7780985893</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="mr-3 mt-1 size-5" />
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