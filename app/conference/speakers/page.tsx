import Register from "@/app/register/page";
import SpeakerCard from "./SpeakerCard";
import speakers, { Speaker } from "./speakersData";
import Link from "next/link";

const SpeakersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-black pt-24 relative z-10">
          Meet Our Speakers
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
  {speakers.map((speaker: Speaker, index: number) => (
    <SpeakerCard key={index} {...speaker} />
  ))}
</div>
<div className="mt-12 text-center">
          <Link href="/register">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-blue-700">
              Learn More
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default SpeakersPage;
