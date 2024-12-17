import { Network, BookOpen, Lightbulb, Handshake } from 'lucide-react';

const reasons = [
  {
    number: '01',
    title: 'Networking Opportunities',
    description: 'Connect with like-minded professionals, entrepreneurs, investors, and industry experts from around the globe, forging valuable relationships and partnerships that drive innovation and growth.',
    icon: <Network className="w-12 h-12 text-blue-500" />,
  },
  {
    number: '02',
    title: 'Educational Insights',
    description: 'Gain valuable insights, industry knowledge, and actionable strategies through keynote presentations, panel discussions, workshops, and case studies led by industry thought leaders and experts.',
    icon: <BookOpen className="w-12 h-12 text-blue-500" />,
  },
  {
    number: '03',
    title: 'Discover Innovation',
    description: 'Explore the latest technologies, trends, and solutions shaping the future of real estate, from AI and machine learning to blockchain, sustainability, and more.',
    icon: <Lightbulb className="w-12 h-12 text-blue-500" />,
  },
  {
    number: '04',
    title: 'Investment and Partnership Opportunities',
    description: 'Identify investment opportunities, strategic partnerships, and collaboration prospects with promising startups, established companies, and industry stakeholders across the proptech ecosystem.',
    icon: <Handshake className="w-12 h-12 text-blue-500" />,
  },
];

export default function WhyAttend() {
  return (
    <section className="py-16 bg-gray-50 text-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Why Attend?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason) => (
            <div key={reason.number} className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 mr-4">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    <span className="text-blue-500 mr-2">{reason.number}</span>
                    {reason.title}
                  </h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

