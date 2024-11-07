// import Header from './components/Header';
import HeroSection from './components/Herosection';
import WhyAttend from './components/WhyAttend';
import JoinUs from './components/join-us';

export default function Home() {
  return (
    <div>
      
      <HeroSection />

      <WhyAttend />

      {/* Key Topics Section */}
      <section className="bg-gray-100 py-20">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center mb-12 text-black">Key Topics</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {['IoT', 'Blockchain', 'AI & ML', 'Fractional Ownership', 'AR / VR', 'Big Data'].map((topic) => (
        <div
          key={topic}
          className="bg-white p-6 rounded-lg shadow-md transition-shadow duration-200 hover:shadow-blue-500"
        >
          <h3 className="text-xl font-semibold mb-2 text-black">{topic}</h3>
          <p className="text-gray-600">Explore the latest advancements and applications in {topic} for real estate.</p>
        </div>
      ))}
    </div>
  </div>
</section>

      
      <div className=''>
        <JoinUs />
      </div>
    </div>
  )
}