import Image from "next/image";

export default function PatrickNessenthalerBlogPage() {
  return (
    <div className="w-full px-4 py-24 text-center flex flex-col items-center">
      <div className="w-full h-[88vh] relative">
        <Image
          src="/image/blogs/Frame 1.jpg"
          alt="Patrick Nessenthaler Q&A"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      <article className="bg-white shadow-2xl rounded-lg p-6 w-full md:w-3/4 lg:w-2/3 text-center relative">
        <h2 className="text-2xl font-extrabold mb-4">Q&A Session With Patrick Nessenthaler</h2>

        <p className="text-gray-800 text-base font-semibold mb-4 text-left">
          <strong>1. Can you tell us about your role at the University of Louisville and your research focus in proptech?</strong><br />
          At the University of Louisville, I serve as a professor of Real Estate Finance, and I’m leading the charge to launch the State of Kentucky’s first-ever Center for Real Estate. My focus is on building bridges – between the classroom and the real world, and between traditional real estate and the rapidly evolving world of Prop-Tech. Most of my research and teaching explores how we can use data, machine learning, and technology to make smarter, more forward-looking real estate decisions. It’s a lot of fun, and there’s a huge appetite from students and industry alike for this kind of thinking.
        </p>

        <p className="text-gray-800 text-base font-semibold mb-4 text-left">
          <strong>2. How do you see the intersection of academia and real estate technology evolving in the next five years?</strong><br />
          I think we’re just scratching the surface. In five years, I anticipate universities not just teaching about real estate technology but co-developing it – partnering with startups, piloting tools with public sector agencies, and embedding real estate data into research that spans economics, urban planning, and even environmental science.
        </p>

        <p className="text-gray-800 text-base font-semibold mb-4 text-left">
          <strong>3. What are the key trends in proptech that will shape the future of smart cities and real estate investments?</strong><br />
          AI is the game-changer. Add in the rise of digital twins, IoT-connected infrastructure, and geospatial analysis — and suddenly, we can model entire cities before a shovel hits the ground.
        </p>

        <p className="text-gray-800 text-base font-semibold mb-4 text-left">
          <strong>4. How do you see digital twin technology influencing property management and development?</strong><br />
          It’s a paradigm shift. From construction phasing to predictive maintenance and tenant experience, this tech gives you foresight. I think we’ll see it become standard across Class A and institutional-grade assets soon.
        </p>

        <p className="text-gray-800 text-base font-semibold mb-4 text-left">
          <strong>5. Are there any recent innovations in proptech that have particularly impressed you?</strong><br />
          I’m impressed by platforms that translate space user behavior into real-time pricing signals. At CREnetics, we’re doing just that — shifting the mindset from static places to dynamic “space-time” products.
        </p>

        <p className="text-gray-800 text-base font-semibold mb-4 text-left">
          <strong>6. How does Dubai compare to other global markets in terms of proptech adoption?</strong><br />
          Dubai’s ahead of the curve. They’ve integrated smart city tech, blockchain land registries, and advanced AI. Plus, building from the ground up means they can design tech into the foundation — that’s a massive advantage.
        </p>

        <p className="text-gray-800 text-base font-semibold mb-4 text-left">
          <strong>7. How important is sustainability in the proptech conversation?</strong><br />
          It’s not optional. Developers must integrate smart systems, renewable energy, and sustainable materials. It’s crucial for long-term asset performance and risk mitigation.
        </p>

        <p className="text-gray-800 text-base font-semibold mb-4 text-left">
          <strong>8. How can academia and industry collaborate to drive real estate innovation?</strong><br />
          It starts with dialogue and shared goals. Let students work on real-world problems and bring entrepreneurs into the classroom. Amazing breakthroughs happen when we mix those worlds.
        </p>

        <p className="text-gray-800 text-base font-semibold mb-4 text-left">
          <strong>9. What advice would you give startups in proptech?</strong><br />
          Solve a real problem. Focus on pain points like transparency or efficiency, and be ready to iterate. Real estate is still relationship-driven — combine credibility with great tools.
        </p>

        <p className="text-gray-800 text-base font-semibold mb-4 text-left">
          <strong>10. If you could predict one major breakthrough in proptech in the next decade, what would it be?</strong><br />
          Live, forward-looking pricing indexes based on demand, not just past transactions. We’re building this at CREnetics. It could reshape how we invest, regulate, and underwrite real estate.
        </p>

        <p className="text-gray-800 text-base font-semibold mb-4 text-left">
          <strong>11. Final message to summit attendees?</strong><br />
          Stay curious and collaborative. The best ideas will come from the intersection of tech, finance, and real-world insights. Lean in, ask tough questions, and experiment boldly.
        </p>

        <p className="text-gray-400 text-right mt-4">by Patrick Nessenthaler</p>

        <div className="relative w-full h-64 mt-6">
          <Image
            src="/image/blogs/futureproptechblogfooter.jpg"
            alt="PropTech Summit Footer"
            width={1600}
            height={900}
            className="w-full h-auto rounded-lg shadow-md mt-6"
          />
        </div>
      </article>
    </div>
  );
}
