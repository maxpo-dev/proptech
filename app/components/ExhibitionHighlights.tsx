import { Users, Lightbulb, TrendingUp, Rocket } from 'lucide-react';

const highlights = [
  {
    title: "5,000+ Attendees",
    description: "Connect with high-level professionals, industry leaders, and decision-makers.",
    icon: <Users className="w-12 h-12 text-blue-500" />,
  },
  {
    title: "Cutting-Edge Solutions",
    description: "Showcase your innovative proptech solutions to a global audience.",
    icon: <Lightbulb className="w-12 h-12 text-blue-500" />,
  },
  {
    title: "Business Opportunities",
    description: "Forge connections and seal exclusive business deals on the exhibition floor.",
    icon: <TrendingUp className="w-12 h-12 text-blue-500" />,
  },
  {
    title: "Startup Zone",
    description: "Perfect launchpad for startups to pitch ideas to prospects and investors.",
    icon: <Rocket className="w-12 h-12 text-blue-500" />,
  },
];

export default function ExhibitionHighlights() {
  return (
    <section className="pt-5 pb-16 bg-gray-100 text-black "> {/* changed py-16 to pt-0 pb-16 */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Exhibition Highlights</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex flex-col items-center text-center">
                {highlight.icon}
                <h3 className="mt-4 text-xl font-semibold">{highlight.title}</h3>
                <p className="mt-2 text-gray-600">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-4">
          <a
            href="http://localhost:3000/register?type=exhibitors"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Register as Exhibitor
          </a>
        </div>
      </div>
    </section>
  );
}
