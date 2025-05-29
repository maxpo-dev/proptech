"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function BlogsPage() {
  const router = useRouter();

  const blogCards = [
    {
  image: "/image/blogs/Moataz Mosallam-1.png",
  title: "Q&A Session With Moataz A. Mosallam: PropTech, Smart Cities, and AI-Driven Real Estate",
  excerpt: "In this insightful session, Moataz A. Mosallam of Knight Frank shares how smart buildings, AI, and PropTech are transforming real estate—from investment strategies to the development of future-ready smart cities.",
  route: "/blogs/moatazq&a",
  author: "Nazish Shah",
},
    {
      image: "/image/blogs/patrick.jpeg",
      title: "Q&A Session With Patrick Nessenthaler",
      excerpt: "Can you tell us about your role at the University of Louisville and your research focus in proptech...",
      route: "/blogs/patricknessenthaler",
      author: "Nazish Shah",
    },
    {
      image: "/image/blogs/Future PropTech Summit 2025 Transforming Real Estate with AI and Innovation.jpg",
      title: "Welcome to the Future of Real Estate in Dubai",
      excerpt: "PropTech is driving change in real estate through AI, blockchain, IoT, and VR. Dubai is at the forefront of this innovation...",
      route: "/blogs/details",
      author: "Askar Ali",
    },
    {
      image: "/image/blogs/Dubai – The PropTech Powerhouse Driving the Future of Real Estate.jpg",
      title: "Dubai – The PropTech Powerhouse",
      excerpt: "From AI-powered smart cities to blockchain-secured transactions, Dubai is setting global benchmarks in real estate tech...",
      route: "/blogs/proptech-dubai",
      author: "Nazish Shah",
    },
    {
      image: "/image/blogs/Miami Florida's Proptech Capital Revolutionizing Real Estate.jpg",
      title: "Miami: Florida’s PropTech Capital",
      excerpt: "Miami is emerging as Florida’s PropTech Capital with a booming startup scene, robust VC ecosystem, and global reach...",
      route: "/blogs/proptech-miami",
      author: "Nazish Shah",
    },
    {
      image: "/image/blogs/How Tech is Disrupting the Real Estate Market in 2025.jpg",
      title: "How Tech is Disrupting Real Estate in 2025",
      excerpt: "AI, blockchain, and GenAI are transforming how we invest, manage, and buy property. Learn how PropTech is evolving in 2025...",
      route: "/blogs/real-estate-disruption-2025",
      author: "Nazish Shah",
    },
    //gamechanger
   {
  image: "/image/blogs/Blogs (2).png", // Use a new image if available
  title: "Why Dubai is a Game-changer in PropTech",
  excerpt: "Dubai is revolutionizing real estate with blockchain, AI, and forward-thinking strategies. Discover how it's shaping the future of PropTech...",
  route: "/blogs/gamechanger",
  author: "Nazish Shah",
},

// german-proptech
{
  image: "/image/blogs/News Scalara.png", // Use the correct image path
  title: "Germany's PropTech Ecosystem: Precision Meets Innovation in Real Estate",
  excerpt: "Germany is emerging as a European PropTech leader by fusing engineering precision with digital innovation. Discover Berlin's startup rise, Munich's investments, and more...",
  route: "/blogs/german-proptech",
  author: "Nazish Shah",
},
// Sheikh Hamdan
{
  image: "/image/blogs/Blogs (5).png", // Use the correct image path
  title: "Sheikh Hamdan Launches ‘Dubai PropTech Hub’ to Position Dubai as a Global Real Estate Technology Leader",
  excerpt: "His Highness Sheikh Hamdan has unveiled the Dubai PropTech Hub to accelerate digital innovation, support over 200 startups, and attract Dhs 1 billion in investments by 2030—positioning Dubai as a global real estate technology leader.",
  route: "/blogs/sheikhhamdan",
  author: "Nazish Shah",
},





  ];

  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <h1 className="text-3xl font-bold mb-12">Latest PropTech Blogs</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
        {blogCards.map((card, idx) => (
          <article
            key={idx}
            className="bg-white shadow-lg rounded-lg p-4 w-full sm:w-auto text-center flex flex-col h-full justify-between items-center cursor-pointer hover:shadow-xl transition"
            onClick={() => router.push(card.route)}
          >
            <div className="w-full h-48 relative mb-4">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className=" rounded-lg shadow-md"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            {/* <h2 className="text-lg font-semibold text-black mb-2">{card.title}</h2> */}
            <h2 className="text-lg font-semibold !text-black mb-2">{card.title}</h2>


            <p className="text-gray-700 text-sm min-h-[70px]">{card.excerpt}</p>
            <p className="text-gray-400 text-xs mt-2">by {card.author}</p>
            <button
              className="mt-3 text-blue-500 hover:underline focus:outline-none"
              onClick={(e) => {
                e.stopPropagation();
                router.push(card.route);
              }}
            >
              Read More
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
