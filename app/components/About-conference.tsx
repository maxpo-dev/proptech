import Image from 'next/image';
import MainImg from '@/app/images/3x.jpg';

export default function AboutConferenceContent() {
  return (
    <section className="py-16 pt-40 bg-white text-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">About the Future PropTech Summit</h1>
        <div className="mb-12 relative w-full h-[300px] md:h-[400px]">
           <Image
            src={MainImg}
             alt="Future PropTech Summit"
              fill
               className="rounded-lg shadow-lg object-cover"
           />

          {/* <Image
            src={MainImg}
            alt="Future PropTech Summit"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          /> */}
          
        </div>
        <div className=" mx-auto space-y-6 text-lg">
          <p>
            Get ready for an electrifying experience at the Future PropTech Summit! This year&apos;s event promises a world-class speaker lineup and an unparalleled gathering of industry titans, policymakers, investors, startups, and property developers.
          </p>
          <p>
            Brace yourself for thought-provoking discussions that encompass the real estate world&apos;s most pressing challenges while exploring the latest trends and game-changing advancements in proptech.
          </p>
          <p>
            Building on the overwhelming success of previous editions, action-packed conference program. Participants will gain invaluable insights into policy and regulatory frameworks, as well as the technological disruptions creating lucrative investment opportunities in the real estate industry.
          </p>
          <p>
            With two days of power-packed presentations, panel discussions, Q&A sessions, and one-on-one meetings, the event offers unparalleled networking and business matchmaking opportunities. Prepare to forge indelible connections with like-minded visionaries spearheading the proptech revolution.
          </p>
        </div>
      </div>
    </section>
  );
}
