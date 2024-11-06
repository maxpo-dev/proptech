import Link from 'next/link';
import HeroSection from './components/Herosection';
const { CalendarDays, MapPin, Users, Zap, ChartBar, ArrowRight } = require('lucide-react');

function Home() {
  return (
    <div>
      <HeroSection />

      {/* Features Section */}
      <section className="bg-white py-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Why Attend?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: 'Latest Innovations', description: 'Discover cutting-edge proptech solutions shaping the future of real estate.' },
              { icon: Users, title: 'Networking Opportunities', description: 'Connect with industry leaders, innovators, and potential partners.' },
              { icon: ChartBar, title: 'Investment Insights', description: 'Gain valuable insights into proptech investment opportunities and trends.' }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <feature.icon className="mx-auto h-12 w-12 text-orange-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-black">{feature.title}</h3>
                <p className="text-gray-900">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Topics Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Key Topics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {['IoT', 'Blockchain', 'AI & ML', 'Fractional Ownership', 'AR / VR', 'Big Data'].map((topic) => (
              <div key={topic} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                <h3 className="text-xl font-semibold mb-2 text-black">{topic}</h3>
                <p className="text-gray-600">Explore the latest advancements and applications in {topic} for real estate.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r  from-blue-950 to-blue-800 py-40 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Join Us at the Event</h2>
          <p className="text-xl mb-8">Don&apos;t miss this opportunity to be part of the proptech revolution!</p>
          <Link href="/register" className="inline-flex items-center bg-white text-blue-600 font-semibold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors duration-200">
            Register Now
            <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}

module.exports = Home;