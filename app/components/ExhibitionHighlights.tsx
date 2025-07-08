import { Users, Lightbulb, TrendingUp, Rocket } from 'lucide-react';

const highlights = [
  {
    title: "5,000+ Attendees",
    description: "Connect with high-level professionals, industry leaders, and decision-makers.",
    icon: <Users className="size-12 text-blue-500" />,
  },
  {
    title: "Cutting-Edge Solutions",
    description: "Showcase your innovative proptech solutions to a global audience.",
    icon: <Lightbulb className="size-12 text-blue-500" />,
  },
  {
    title: "Business Opportunities",
    description: "Forge connections and seal exclusive business deals on the exhibition floor.",
    icon: <TrendingUp className="size-12 text-blue-500" />,
  },
  {
    title: "Startup Zone",
    description: "Perfect launchpad for startups to pitch ideas to prospects and investors.",
    icon: <Rocket className="size-12 text-blue-500" />,
  },
];

export default function ExhibitionHighlights() {
  return (
    <section className="bg-gray-100 pb-16 pt-5 text-black "> {/* changed py-16 to pt-0 pb-16 */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold">Exhibition Highlights</h2>

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl"
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
        <div className="mt-4 text-center">
          <a
            href="/register?type=exhibitors"
            className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-blue-700"
          >
            Register as Exhibitor
          </a>
        </div>
      </div>
    </section>
  );
}
