import { Network, BookOpen, Lightbulb, Handshake } from 'lucide-react';

const reasons = [
  {
    number: '01',
    title: 'Networking Opportunities',
    description: 'Connect with like-minded professionals, entrepreneurs, investors, and industry experts from around the globe, forging valuable relationships and partnerships that drive innovation and growth.',
    icon: <Network className="size-12 text-blue-500" />,
  },
  {
    number: '02',
    title: 'Educational Insights',
    description: 'Gain valuable insights, industry knowledge, and actionable strategies through keynote presentations, panel discussions, workshops, and case studies led by industry thought leaders and experts.',
    icon: <BookOpen className="size-12 text-blue-500" />,
  },
  {
    number: '03',
    title: 'Discover Innovation',
    description: 'Explore the latest technologies, trends, and solutions shaping the future of real estate, from AI and machine learning to blockchain, sustainability, and more.',
    icon: <Lightbulb className="size-12 text-blue-500" />,
  },
  {
    number: '04',
    title: 'Investment and Partnership Opportunities',
    description: 'Identify investment opportunities, strategic partnerships, and collaboration prospects with promising startups, established companies, and industry stakeholders across the proptech ecosystem.',
    icon: <Handshake className="size-12 text-blue-500" />,
  },
];

export default function WhyAttend() {
  return (
    <section className="bg-gray-50 py-16 text-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-4xl font-bold">Why Attend?</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {reasons.map((reason) => (
            <div key={reason.number} className="rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl">
              <div className="mb-4 flex items-start">
                <div className="mr-4 shrink-0">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">
                    <span className="mr-2 text-blue-500">{reason.number}</span>
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

