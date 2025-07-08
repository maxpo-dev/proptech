import Image from 'next/image';
import MainImg from '@/public/images/4x.jpg';

export default function AboutExhibitionContent() {
  return (
    <section className="bg-white pb-0 pt-40 text-black"> {/* changed py-40 to pt-40 pb-0 */}
      <div className="container mx-auto p-4 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-center text-4xl font-bold">Exhibit at Future PropTech Summit</h1>
        <div className="relative mb-12 h-[300px] w-full md:h-[400px]">
          <Image
            src={MainImg}
            alt="Future PropTech Summit Exhibition"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="mx-auto space-y-6 text-lg">
          <p>
            The Future PropTech Summit has established itself as Dubai&apos;s premier real estate tech event. The two-day expo promises a cutting-edge showcase of innovative solutions and next-gen tech from startups and industry leaders worldwide.
          </p>
          <p>
            With over 5,000 high-level professionals expected, including industry big-wigs, policymakers, tech enthusiasts, and more, the exhibition floor will be filled with opportunities to amplify brand visibility, forge connections, and seal exclusive business deals.
          </p>
          <p>
            The dedicated startup zone allows budding entrepreneurs to pitch game-changing ideas to prospects and investors in a highly engaging environment. It&apos;s the ultimate launchpad for making your mark in the competitive real estate market.
          </p>
          <p>
            Get ready to experience the future of proptech at this must-attend event!
          </p>
        </div>
      </div>
    </section>
  );
}
