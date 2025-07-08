import { Presentation, Users, Award, TrendingUp } from 'lucide-react';

const benefits = [
  {
    title: "Exposure to Top Investors",
    description: "Present your ideas to a panel of industry-leading investors and potential partners.",
    icon: <Presentation className="size-12 text-blue-500" />,
  },
  {
    title: "Networking Opportunities",
    description: "Connect with fellow entrepreneurs, industry experts, and potential collaborators.",
    icon: <Users className="size-12 text-blue-500" />,
  },
  {
    title: "Expert Feedback",
    description: "Receive valuable insights and advice from experienced judges and mentors.",
    icon: <Award className="size-12 text-blue-500" />,
  },
  {
    title: "Potential Investment",
    description: "Secure funding opportunities that could take your proptech solution to the next level.",
    icon: <TrendingUp className="size-12 text-blue-500" />,
  },
];

export default function PitchBenefits() {
  return (
    <section className="bg-gray-100 pb-40 pt-10 text-black"> {/* Reduced top padding */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold">Benefits of Participating</h2>

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex flex-col items-center text-center">
                {benefit.icon}
                <h3 className="mt-4 text-xl font-semibold">{benefit.title}</h3>
                <p className="mt-2 text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 text-center">
          <a
            href="/register?type=sponsor"
            className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-blue-700"
          >
            Register as Investor
          </a>
        </div>
      </div>
    </section>
  );
}
