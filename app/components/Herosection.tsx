// pages/index.tsx
import { CalendarDays, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Herosection() {
  return (
    <div className="pt-20">
      <section className="hero bg-blue-500 text-white py-20 text-center">
        <h1 className="text-5xl font-bold">International Proptech Conference & Investment Expo</h1>
        <p className="text-xl my-4">Shaping the Future of Real Estate Technology</p>
        <div className="flex justify-center space-x-6 mb-6">
          <div className="flex items-center">
            <CalendarDays className="mr-2" />
            <span>February 2025</span>
          </div>
          <div className="flex items-center">
            <MapPin className="mr-2" />
            <span>Dubai, UAE</span>
          </div>
        </div>
        <Link href="/register" className="bg-white text-blue-600 px-6 py-2 rounded hover:bg-gray-200">Register Now</Link>
      </section>
    </div>
  )
}
