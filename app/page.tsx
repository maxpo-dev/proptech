import Link from 'next/link'
import { CalendarDays, MapPin, Users, Zap,  ChartBar } from 'lucide-react'

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">International Proptech Investment Expo</h1>
            <p className="text-xl mb-8">Shaping the Future of Real Estate Technology</p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="flex items-center">
                <CalendarDays className="mr-2" />
                <span>February 2025</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2" />
                <span>Dubai, UAE</span>
              </div>
            </div>
            <Link href="/register" className="mt-8 inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-md hover:bg-blue-50 transition-colors duration-200">
              Register Now
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Attend?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Zap className="mx-auto h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Latest Innovations</h3>
              <p className="text-gray-600">Discover cutting-edge proptech solutions shaping the future of real estate.</p>
            </div>
            <div className="text-center">
              <Users className="mx-auto h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Networking Opportunities</h3>
              <p className="text-gray-600">Connect with industry leaders, innovators, and potential partners.</p>
            </div>
            <div className="text-center">
              <ChartBar className="mx-auto h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Investment Insights</h3>
              <p className="text-gray-600">Gain valuable insights into proptech investment opportunities and trends.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Key Topics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {['IoT', 'Blockchain', 'AI & ML', 'Fractional Ownership', 'AR / VR', 'Big Data'].map((topic) => (
              <div key={topic} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{topic}</h3>
                <p className="text-gray-600">Explore the latest advancements and applications in {topic} for real estate.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Join Us at the Event</h2>
          <p className="text-xl text-gray-600 mb-8">Don&apos;t miss this opportunity to be part of the proptech revolution!</p>
          <Link href="/register" className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200">
            Register Now
          </Link>
        </div>
      </section>
    </div>
  )
}
