import { Presentation, Users, Award, TrendingUp } from 'lucide-react';

const benefits = [
  {
    title: "Exposure to Top Investors",
    description: "Present your ideas to a panel of industry-leading investors and potential partners.",
    icon: <Presentation className="w-12 h-12 text-blue-500" />,
  },
  {
    title: "Networking Opportunities",
    description: "Connect with fellow entrepreneurs, industry experts, and potential collaborators.",
    icon: <Users className="w-12 h-12 text-blue-500" />,
  },
  {
    title: "Expert Feedback",
    description: "Receive valuable insights and advice from experienced judges and mentors.",
    icon: <Award className="w-12 h-12 text-blue-500" />,
  },
  {
    title: "Potential Investment",
    description: "Secure funding opportunities that could take your proptech solution to the next level.",
    icon: <TrendingUp className="w-12 h-12 text-blue-500" />,
  },
];

export default function PitchBenefits() {
  return (
    <section className="pt-10 pb-40 bg-gray-100 text-black"> {/* Reduced top padding */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Benefits of Participating</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex flex-col items-center text-center">
                {benefit.icon}
                <h3 className="mt-4 text-xl font-semibold">{benefit.title}</h3>
                <p className="mt-2 text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8">
          <a
            href="http://localhost:3000/register?type=exhibitors"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Register as Investor
          </a>
        </div>
      </div>
    </section>
  );
}
