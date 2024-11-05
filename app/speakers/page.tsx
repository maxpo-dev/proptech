const speakers = [
    { id: 1, name: 'John Doe', role: 'CEO, TechProp Solutions', bio: 'John is a visionary leader in the proptech industry with over 20 years of experience.' },
    { id: 2, name: 'Jane Smith', role: 'Blockchain Expert', bio: 'Jane is a renowned blockchain specialist, focusing on its applications in real estate.' },
    { id: 3, name: 'Mike Johnson', role: 'AI in Real Estate Specialist', bio: 'Mike is pioneering the use of artificial intelligence in property valuation and management.' },
    { id: 4, name: 'Sarah Lee', role: 'Smart Home Technology Expert', bio: 'Sarah is at the forefront of integrating IoT solutions into modern living spaces.' },
    { id: 5, name: 'David Brown', role: 'Proptech Investor', bio: 'David has a keen eye for identifying and nurturing promising proptech startups.' },
    { id: 6, name: 'Emily Chen', role: 'VR/AR in Real Estate Innovator', bio: 'Emily is revolutionizing property viewings and architectural visualization through VR and AR.' },
  ]
  
  export default function Speakers() {
    return (
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-12">Our Esteemed Speakers</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker) => (
              <div key={speaker.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="w-full h-64 bg-gray-200 flex items-center justify-center mb-4">
                    <span className="text-gray-500 text-lg">
                      {speaker.name}&apos;s Photo
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold mb-2">{speaker.name}</h2>
                  <p className="text-blue-600 mb-4">{speaker.role}</p>
                  <p className="text-gray-600">{speaker.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }