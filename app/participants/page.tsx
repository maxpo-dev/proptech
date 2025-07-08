"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ParticipantsPage() {
  const router = useRouter();

  const logos = [
    { src: "/image/speakersCompanyLogo/download.jpg", alt: "Impact" },
    { src: "/image/speakersCompanyLogo/Logo.jpg", alt: "Haier Biomedical" },
    {
      src: "/image/speakersCompanyLogo/BnW Developments - Stack Logo.png",
      alt: "LAUDA",
    },
    { src: "/image/speakersCompanyLogo/cbre.jpg", alt: "SEPPIC" },
    { src: "/image/speakersCompanyLogo/CIPS_Logo_Blue_RGB.jpg", alt: "DHACA" },
    {
      src: "/image/speakersCompanyLogo/DTEC Logo.jpg",
      alt: "Pharmaceutical Technology",
    },
    {
      src: "/image/speakersCompanyLogo/GIA-Gold-Sponsor-Al-Bawani.png",
      alt: "DISCOVERY PARK",
    },
    {
      src: "/image/speakersCompanyLogo/Honeywell_Logo_RGB_Red.jpg",
      alt: "STRATAGEM IPM",
    },
    {
      src: "/image/speakersCompanyLogo/knightfranklogo.svg",
      alt: "Knight Frank",
    },
    { src: "/image/speakersCompanyLogo/RSG_EN_RGB_HORIZONTAL.png", alt: "RSG" },
    {
      src: "/image/speakersCompanyLogo/U of L College of Business Logo.png",
      alt: "University of Louisville",
    },
    {
      src: "/image/speakersCompanyLogo/Untitled-4-01.jpg",
      alt: "Untitled Logo",
    },
    { src: "/image/speakersCompanyLogo/ivankalogo.jpg", alt: "Ivanka" },
    { src: "/image/exhibitor/Moderlab LOGO (1).jpg", alt: "Moderlab" },
    { src: "/image/exhibitor/VR logo (1).jpg", alt: "VR" },
    { src: "/image/partners/ab.jpg", alt: "AB Partner" },
    {
      src: "/image/partners/AIPressRoom_1500_1500_transparent-1.png",
      alt: "AI Press Room",
    },
    {
      src: "/image/partners/ZEX PR Wire Icon - Colored.png",
      alt: "ZEX PR Wire",
    },
    { src: "/image/speakersCompanyLogo/Stake Logo.png", alt: "Stake" },
    { src: "/image/speakersCompanyLogo/rics.jpg", alt: "RICS" },
    {
      src: "/image/speakersCompanyLogo/heriot_watt_university_logo.jpg",
      alt: "Heriot-Watt University",
    },
    { src: "/image/exhibitor/Original Logo.png", alt: "Original" },
    { src: "/image/partners/PN-Black.png", alt: "PN Black" },
    { src: "/image/partners/REM Times logo_2023.png", alt: "REM Times" },
    { src: "/image/partners/MEFMA Bilingual Logo-01trans.png", alt: "MEFMA" },
    { src: "/image/partners/Build logo HR.jpg", alt: "Build HR" },
    { src: "/image/partners/BFM 1000x600.png", alt: "BFM" },
    { src: "/image/partners/entrepreneurme.jpg", alt: "Entrepreneur ME" },
    { src: "/image/partners/Pegasus Logo .jpg", alt: "Pegasus" },
    { src: "/image/partners/timesofai 01.png", alt: "Times of AI" },
    { src: "/image/partners/NED by Al Ghurair Orange.png", alt: "NED" },
    { src: "/image/speakersCompanyLogo/norh-logo.jpg", alt: "NORH" },
    {
      src: "/image/speakersCompanyLogo/Windmills Group Logo.png",
      alt: "Windmills Group",
    },
    {
      src:
        "/image/speakersCompanyLogo/jones-lang-lasalle-logo-png_seeklogo-260987.png",
      alt: "JLL",
    },
    { src: "/image/partners/eyeofRiyadhLogo.jpg", alt: "EyeOfRiyadh" },
  ];

  return (
    <div className="min-h-screen bg-[#f0f4ff] px-4 py-12 pt-40 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Participants
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Participants at the Future Proptech Summit 2025.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex h-64 items-center justify-center rounded-lg bg-white p-6 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={300}
                height={300}
                className="max-h-48 w-auto object-contain"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button
            onClick={() => router.push("/register?type=participants")}
            className="rounded-lg bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition-all duration-300 hover:bg-blue-700"
          >
            Enquiry Now
          </button>
        </div>
      </div>
    </div>
  );
}
