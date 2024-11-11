// import Link from 'next/link'
import ExhibitorsHeroSection from '../components/ExhibitorsHs'

// const exhibitors = [
//   { id: 1, name: 'TechProp Solutions', description: 'Leading provider of AI-powered property management software.', website: 'https://techpropsolutions.com' },
//   { id: 2, name: 'SmartHome Systems', description: 'Innovative IoT solutions for modern living spaces.', website: 'https://smarthomesystems.com' },
//   { id: 3, name: 'BlockChain RE', description: 'Revolutionizing property transactions with blockchain technology.', website: 'https://blockchainre.com' },
//   { id: 4, name: 'VR Property Tours', description: 'Immersive virtual reality experiences for real estate.', website: 'https://vrpropertytours.com' },
//   { id: 5, name: 'EcoBuilt Analytics', description: 'Sustainable building solutions with advanced analytics.', website: 'https://ecobuiltanalytics.com' },
//   { id: 6, name: 'FractionalOwn', description: 'Democratizing property investment through fractional ownership.', website: 'https://fractionalown.com' },
// ]

export default function Exhibitors() {
  return (
    <div>
      <ExhibitorsHeroSection />
    {/* <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-black">Our Exhibitors</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exhibitors.map((exhibitor) => (
            <div key={exhibitor.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="w-32 h-32 bg-gray-200 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">
                    {exhibitor.name} Logo
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-center mb-2 text-slate-900">{exhibitor.name}</h2>
                <p className="text-gray-600 text-center mb-4">{exhibitor.description}</p>
                <div className="text-center">
                  <Link 
                    href={exhibitor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Visit Website
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div> */}
    </div>
  )
}