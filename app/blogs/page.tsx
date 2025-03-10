// import Link from 'next/link';

export default function BlogsPage() {
  const blogs = [
    {
      title: "Welcome to the Future of Real Estate in Dubai",
      subtitle: "The Future of Real Estate & Innovation",
      content: `The global PropTech market, valued at $33.57 billion in 2023, is projected to reach $89.93 billion by 2032, growing at a CAGR of 11.9%. PropTech is revolutionizing the real estate industry with AI, blockchain, IoT, and VR, driving transparency, efficiency, and investment opportunities.\n\nDubai is at the forefront of this transformation, leading innovations in fractional ownership, smart cities, and digital property transactions.\n\nThe Future PropTech Summit 2025 will bring together industry leaders, startups, and investors to explore groundbreaking solutions shaping the future of real estate. This premier event offers unparalleled insights into how technology is redefining property management, investment, and sustainability.`
    },
    {
      title: "The Evolution of Real Estate Technology",
      content: `The real estate sector is experiencing a paradigm shift with the adoption of AI, IoT, and blockchain. These technologies enhance transparency, efficiency, and decision-making, revolutionizing property transactions and management.\n\nAt Future PropTech Summit 2025, experts and tech pioneers will discuss the latest innovations that are reshaping real estate. Attendees will gain insights into AI-driven investment strategies, blockchain-secured property transactions, and digital advancements improving accessibility and efficiency in real estate.`
    },
    {
      title: "Dubai – A Global Hub for PropTech Innovation",
      subtitle: "Why is Dubai Leading the PropTech Revolution?",
      content: `Dubai is revolutionizing the real estate industry with cutting-edge PropTech solutions. From AI-powered smart cities to blockchain-secured transactions, the city is setting new benchmarks in real estate digitalization.\n\nAI and Smart Cities: The Future of Real Estate\nArtificial intelligence is transforming property management, streamlining investments, and enhancing customer experiences. Platforms like Bayut and Property Finder utilize AI to match buyers and sellers more effectively.\n\nDubai’s smart city initiatives integrate AI-driven property management systems, IoT-enabled infrastructure, and blockchain-secured transactions, making real estate operations seamless and efficient.`
    },
    {
      title: "Dubai’s Vision for a Tech-Driven Real Estate Industry",
      subtitle: "Tech Trends Transforming Dubai’s Property Market",
      content: `Dubai’s real estate sector is undergoing a digital transformation, powered by AI, VR/AR, blockchain, and sustainable smart developments. These advancements are enhancing transactions, investment strategies, and customer experiences.\n\nVirtual & Augmented Reality (VR/AR): Enhancing Property Viewing\nVirtual reality (VR) is redefining real estate exploration, allowing investors to tour properties remotely with high detail before making decisions.\n\nSustainable Smart Developments: The Future of Real Estate\nDubai’s 2040 Urban Master Plan is driving eco-friendly developments and smart city initiatives. AI-powered energy management, sustainable building designs, and green real estate projects attract global investors focused on ESG compliance.`
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Future PropTech Blogs</h1>
      {blogs.map((blog, index) => (
        <article key={index} className="prose lg:prose-xl mb-12">
          <h2>{blog.title}</h2>
          {blog.subtitle && <h3>{blog.subtitle}</h3>}
          <p>{blog.content}</p>
        </article>
      ))}
    </div>
  );
}
