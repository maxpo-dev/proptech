'use client'

import Image from 'next/image'
import RegistrationForm from "@/app/components/ui/RegistrationForm"
import ExhibitionDetails from "@/app/components/ExhibitionDetails"
import bgImage from "@/public/images/bg.jpg"
import logo from "@/public/images/white logo.png"

export default function Visitor() {
  return (
    <div className="min-h-screen overflow-hidden bg-gray-100">
      {/* Background Image */}
      <div className="fixed inset-0">
        <Image
          src={bgImage}
          alt="Background"
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      <header className="relative flex flex-col items-center p-4 sm:p-6 lg:items-start lg:p-8">
        <Image
          src={logo}
          alt="Logo"
          width={500}
          height={50}
          className="h-auto w-64 sm:w-80 md:w-96 lg:w-[500px]"
        />
        <p className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
          DUBAI
        </p>
        <p className="pb-4 text-xl font-semibold text-yellow-500 sm:text-2xl md:text-3xl">
          7th and 8th of December
        </p>
        
        <p className="text-xl font-semibold text-white sm:text-2xl md:text-3xl">
          CROWNE PLAZA
        </p>
        <p className="text-xl font-semibold text-white sm:text-2xl md:text-3xl">
          Salah AI Din St - Deira
        </p>
      </header>

      {/* Main Content */}
      <main className="relative flex grow flex-col items-start justify-center py-8 sm:px-6 lg:flex-row lg:justify-end lg:px-16 lg:py-12">
        {/* Registration Form */}
        <div className="mt-4 w-full max-w-md lg:mt-0 lg:w-1/2 xl:w-2/5">
          <div className="relative rounded-lg p-6 shadow-2xl sm:p-8">
            <RegistrationForm />
          </div>
        </div>
      </main>

      {/* Exhibition Details */}
      <footer className="relative z-10 mt-8 px-4 pb-8 sm:px-6 lg:px-8">
        <ExhibitionDetails />
      </footer>
    </div>
  )
}