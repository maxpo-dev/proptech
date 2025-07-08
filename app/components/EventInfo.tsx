import Image from 'next/image';
import { MapPin, Calendar, Users } from 'lucide-react';
import img from "@/app/images/c(1).jpg";

export default function EventContent() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Interested in Taking Part?
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Join us for the Future Proptech Summit.
            A unique opportunity to showcase your innovations and network with key industry players.
          </p>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative">
            <Image
              src={img}
              alt="Event"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 rounded-lg bg-white p-4 shadow-lg">
              <p className="text-2xl font-bold text-blue-600">2025</p>
              <p className="text-gray-600">October 14-15</p>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Why Exhibit?</h2>
            <ul className="space-y-4">
              {[
                { icon: Users, text: "Network with 5000+ industry professionals" },
                { icon: MapPin, text: "Showcase your solutions to a global audience" },
                { icon: Calendar, text: "Participate in 3 days of cutting-edge discussions" },
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <item.icon className="mr-2 size-6 shrink-0 text-blue-600" />
                  <span className="text-gray-700">{item.text}</span>
                </li>
              ))}
            </ul>

            <div className="rounded-lg border border-blue-200 bg-blue-50 p-6">
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Stand Options</h3>
              <p className="mb-4 text-gray-600">
                Choose from various stand sizes to suit your needs. Early bird discounts available!
              </p>
              <p>Register now</p>
              {/* <button className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-200 flex items-center">
                Book a Stand
                <ArrowRight className="ml-2 h-5 w-5" />
              </button> */}
            </div>
          </div>
        </div>

        {/* <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">What Our Past Exhibitors Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                company: "TechProp Solutions",
                quote: "The expo provided an unparalleled platform to showcase our latest innovations. The connections we made were invaluable.",
              },
              {
                name: "Michael Chen",
                company: "AI Real Estate",
                quote: "We secured three major contracts as a direct result of exhibiting. The ROI was beyond our expectations.",
              },
              {
                name: "Emma Rodriguez",
                company: "GreenBuild Tech",
                quote: "The quality of attendees was exceptional. We're already planning our booth for next year's event.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.company}</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}