import Image from 'next/image';
import Inimg from '@/public/image/investor/investor.jpeg'
export default function InvestorPitchContent() {
  return (
    <section className="pt-28 pb-10 bg-white text-black"> {/* Reduced bottom padding */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">Investor Pitch at Future PropTech Summit</h1>
        <div className="mb-12 relative w-full h-[300px] md:h-[400px]">
          <Image
            src={Inimg}
            alt="Investor Pitch at Future PropTech Summit"
            className="rounded-lg shadow-lg"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="mx-auto space-y-6 text-lg">
          <p>
            The Investor Pitch session at the Future PropTech Summit is your golden opportunity to showcase your innovative proptech solution to a panel of industry-leading investors and potential partners.
          </p>
          <p>
            Whether you&apos;re a startup with a groundbreaking idea or a scale-up looking for the next round of funding, our carefully curated pitch event provides the perfect platform to catapult your business to new heights.
          </p>
          <p>
            Participants will have the chance to present their ideas in a high-energy, fast-paced environment, followed by a Q&A session with our esteemed panel of judges. This is your moment to shine and potentially secure the funding and partnerships that could transform your proptech vision into reality.
          </p>
          <p>
            Don&apos;t miss this unparalleled opportunity to gain exposure, receive valuable feedback, and potentially walk away with investment offers that could revolutionize your business trajectory in the dynamic world of property technology.
          </p>
        </div>
      </div>
    </section>
  );
}
