import Image from 'next/image';
import MainImg from '@/app/images/4x.jpg'

export default function AboutExhibitionContent() {
  return (
    <section className="py-40 bg-white text-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">Exhibit at Future PropTech Summit</h1>
        <div className="mb-12 relative w-full h-[300px] md:h-[400px]">
          <Image
            src={MainImg}
            alt="Future PropTech Summit Exhibition"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className=" mx-auto space-y-6 text-lg">
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
  )
}

