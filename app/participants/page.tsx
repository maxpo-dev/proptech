"use client"
import Image from "next/image"

import Participants from "../components/Participants";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function ParticipantsPage() {
  const router = useRouter();

  const [showParticipants, setShowParticipants] = useState(false);
  return (
    <div className="bg-[#f0f4ff] min-h-screen py-12 px-4 sm:px-6 lg:px-8 mt-[70px]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Participants</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
         Participants at the Future Proptech Summit 2025.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Logo 1 */}
                              <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-64 transition-all duration-300 hover:shadow-lg hover:scale-105">
            <Image
              src="/image/speakersCompanyLogo/download.jpg"
              alt="Impact"
              width={300}
              height={300}
              className="w-auto max-h-48 object-contain"
            />
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-64 transition-all duration-300 hover:shadow-lg hover:scale-105">
            <Image
              src="/image/speakersCompanyLogo/Logo.jpg"
              alt="Haier Biomedical"
              width={300}
              height={300}
              className="w-auto max-h-48 object-contain"
            />
          </div>

          {/* Logo 2 */}
          <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-64 transition-all duration-300 hover:shadow-lg hover:scale-105">
            <Image
              src="/image/speakersCompanyLogo/BnW Developments - Stack Logo.png"
              alt="LAUDA"
              width={300}
              height={300}
              className="w-auto max-h-48 object-contain"
            />
          </div>

          {/* Logo 3 */}
          <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-64 transition-all duration-300 hover:shadow-lg hover:scale-105">
            <Image
              src="/image/speakersCompanyLogo/cbre.jpg"
              alt="SEPPIC"
              width={300}
              height={300}
              className="w-auto max-h-48 object-contain"
            />
          </div>

          {/* Logo 4 */}
          <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-64 transition-all duration-300 hover:shadow-lg hover:scale-105">
            <Image
              src="/image/speakersCompanyLogo/CIPS_Logo_Blue_RGB.jpg"
              alt="DHACA"
              width={300}
              height={300}
              className="w-auto max-h-48 object-contain"
            />
          </div>

          {/* Logo 5 */}
          <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-64 transition-all duration-300 hover:shadow-lg hover:scale-105">
            <Image
              src="/image/speakersCompanyLogo/DTEC Logo.jpg"
              alt="Pharmaceutical Technology"
              width={300}
              height={300}
              className="w-auto max-h-48 object-contain"
            />
          </div>

          {/* Logo 6 */}
          <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-64 transition-all duration-300 hover:shadow-lg hover:scale-105">
            <Image
              src="/image/speakersCompanyLogo/GIA-Gold-Sponsor-Al-Bawani.png"
              alt="DISCOVERY PARK"
              width={300}
              height={300}
              className="w-auto max-h-48 object-contain"
            />
          </div>

          {/* Logo 7 */}
          <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-64 transition-all duration-300 hover:shadow-lg hover:scale-105">
            <Image
              src="/image/speakersCompanyLogo/Honeywell_Logo_RGB_Red.jpg"
              alt="STRATAGEM IPM"
              width={300}
              height={300}
              className="w-auto max-h-48 object-contain"
            />
          </div>

          {/* Logo 8 */}

          <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-64 transition-all duration-300 hover:shadow-lg hover:scale-105">
            <Image
              src="/image/speakersCompanyLogo/knightfranklogo.svg"
              alt="Impact"
              width={300}
              height={300}
              className="w-auto max-h-48 object-contain"
            />
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-64 transition-all duration-300 hover:shadow-lg hover:scale-105">
            <Image
              src="/image/speakersCompanyLogo/RSG_EN_RGB_HORIZONTAL.png"
              alt="Impact"
              width={300}
              height={300}
              className="w-auto max-h-48 object-contain"
            />
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-64 transition-all duration-300 hover:shadow-lg hover:scale-105">
            <Image
              src="/image/speakersCompanyLogo/U of L College of Business Logo.png"
              alt="Impact"
              width={300}
              height={300}
              className="w-auto max-h-48 object-contain"
            />
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-64 transition-all duration-300 hover:shadow-lg hover:scale-105">
            <Image
              src="/image/speakersCompanyLogo/Untitled-4-01.jpg"
              alt="Impact"
              width={300}
              height={300}
              className="w-auto max-h-48 object-contain"
            />
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-64 transition-all duration-300 hover:shadow-lg hover:scale-105">
            <Image
              src="/image/speakersCompanyLogo/ivankalogo.jpg"
              alt="Impact"
              width={300}
              height={300}
              className="w-auto max-h-48 object-contain"
            />
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-64 transition-all duration-300 hover:shadow-lg hover:scale-105">
            <Image
              src="/image/exhibitor/Moderlab LOGO (1).jpg"
              alt="Impact"
              width={300}
              height={300}
              className="w-auto max-h-48 object-contain"
            />
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-64 transition-all duration-300 hover:shadow-lg hover:scale-105">
            <Image
              src="/image/exhibitor/VR logo (1).jpg"
              alt="Impact"
              width={300}
              height={300}
              className="w-auto max-h-48 object-contain"
            />
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-64 transition-all duration-300 hover:shadow-lg hover:scale-105">
            <Image
              src="/image/partners/ab.jpg"
              alt="Impact"
              width={300}
              height={300}
              className="w-auto max-h-48 object-contain"
            />
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-64 transition-all duration-300 hover:shadow-lg hover:scale-105">
            <Image
              src="/image/partners/AIPressRoom_1500_1500_transparent-1.png"
              alt="Impact"
              width={300}
              height={300}
              className="w-auto max-h-48 object-contain"
            />
          </div >
          <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-64 transition-all duration-300 hover:shadow-lg hover:scale-105">
            <Image
              src="/image/partners/ZEX PR Wire Icon - Colored.png"
              alt="Impact"
              width={300}
              height={300}
              className="w-auto max-h-48 object-contain"
            />
          </div>
                    <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-64 transition-all duration-300 hover:shadow-lg hover:scale-105">
            <Image
              src="/image/speakersCompanyLogo/Stake Logo.png"
              alt="Impact"
              width={300}
              height={300}
              className="w-auto max-h-48 object-contain"
            />
          </div>
                              <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-64 transition-all duration-300 hover:shadow-lg hover:scale-105">
            <Image
              src="/image/speakersCompanyLogo/rics.jpg"
              alt="Impact"
              width={300}
              height={300}
              className="w-auto max-h-48 object-contain"
            />
          </div>

                                        <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-64 transition-all duration-300 hover:shadow-lg hover:scale-105">
            <Image
              src="/image/speakersCompanyLogo/heriot_watt_university_logo.jpg"
              alt="Impact"
              width={300}
              height={300}
              className="w-auto max-h-48 object-contain"
            />
          </div>


                                                  <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-64 transition-all duration-300 hover:shadow-lg hover:scale-105">
            <Image
              src="/image/exhibitor/Original Logo.png"
              alt="Impact"
              width={300}
              height={300}
              className="w-auto max-h-48 object-contain"
            />
          </div>

                                                            <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-64 transition-all duration-300 hover:shadow-lg hover:scale-105">
            <Image
              src="/image/partners/PN-Black.png"
              alt="Impact"
              width={300}
              height={300}
              className="w-auto max-h-48 object-contain"
            />
          </div>

                                                                      <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-64 transition-all duration-300 hover:shadow-lg hover:scale-105">
            <Image
              src="/image/partners/REM Times logo_2023.png"
              alt="Impact"
              width={300}
              height={300}
              className="w-auto max-h-48 object-contain"
            />
          </div>

                                                                                <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-64 transition-all duration-300 hover:shadow-lg hover:scale-105">
            <Image
              src="/image/partners/MEFMA Bilingual Logo-01trans.png"
              alt="Impact"
              width={300}
              height={300}
              className="w-auto max-h-48 object-contain"
            />
          </div>

       <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-64 transition-all duration-300 hover:shadow-lg hover:scale-105">
            <Image
              src="/image/partners/Build logo HR.jpg"
              alt="Impact"
              width={300}
              height={300}
              className="w-auto max-h-48 object-contain"
            />
          </div>

           <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-64 transition-all duration-300 hover:shadow-lg hover:scale-105">
            <Image
              src="/image/partners/BFM 1000x600.png"
              alt="Impact"
              width={300}
              height={300}
              className="w-auto max-h-48 object-contain"
            />
          </div>

                     <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-64 transition-all duration-300 hover:shadow-lg hover:scale-105">
            <Image
              src="/image/partners/entrepreneurme.jpg"
              alt="Impact"
              width={300}
              height={300}
              className="w-auto max-h-48 object-contain"
            />
          </div>

                     <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-64 transition-all duration-300 hover:shadow-lg hover:scale-105">
            <Image
              src="/image/partners/Pegasus Logo .jpg"
              alt="Impact"
              width={300}
              height={300}
              className="w-auto max-h-48 object-contain"
            />
          </div>

                               <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-64 transition-all duration-300 hover:shadow-lg hover:scale-105">
            <Image
              src="/image/partners/timesofai 01.png"
              alt="Impact"
              width={300}
              height={300}
              className="w-auto max-h-48 object-contain"
            />
          </div>

        </div>
        <div className="mt-12 flex justify-center">
  <button
    onClick={() => router.push("/register?type=participants")}
    className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-blue-700"
  >
    Enquiry Now
  </button>
</div>


      </div>
    </div>
  )
}
