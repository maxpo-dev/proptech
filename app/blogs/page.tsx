"use client";

import { useRouter } from "next/navigation";

export default function BlogsPage() {
  const router = useRouter();

  const blogCards = [
    {
      image: "/image/blogs/Future PropTech Summit 2025 Transforming Real Estate with AI and Innovation.jpg",
      title: "Welcome to the Future of Real Estate in Dubai",
      excerpt:
        "PropTech is driving change in real estate through AI, blockchain, IoT, and VR. Dubai is at the forefront of this innovation...",
      route: "/blogs/details",
      author: "Askar Ali",
    },
    {
      image:
        "/image/blogs/Dubai – The PropTech Powerhouse Driving the Future of Real Estate.jpg",
      title: "Dubai – The PropTech Powerhouse",
      excerpt:
        "From AI-powered smart cities to blockchain-secured transactions, Dubai is setting global benchmarks in real estate tech...",
      route: "/blogs/proptech-dubai",
      author: "Nazish Shah",
    },
    {
      image: "/image/blogs/Miami Florida's Proptech Capital Revolutionizing Real Estate.jpg",
      title: "Miami: Florida’s PropTech Capital",
      excerpt:
        "Miami is emerging as Florida’s PropTech Capital with a booming startup scene, robust VC ecosystem, and global reach...",
      route: "/blogs/proptech-miami",
      author: "Nazish Shah",
    },
    {
      image:
        "/image/blogs/How Tech is Disrupting the Real Estate Market in 2025.jpg",
      title: "How Tech is Disrupting Real Estate in 2025",
      excerpt:
        "AI, blockchain, and GenAI are transforming how we invest, manage, and buy property. Learn how PropTech is evolving in 2025...",
      route: "/blogs/real-estate-disruption-2025",
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
            className="bg-white shadow-lg rounded-lg p-4 w-full sm:w-auto text-center flex flex-col items-center cursor-pointer hover:shadow-xl transition"
            onClick={() => router.push(card.route)}
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover rounded-lg shadow-md mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-700 text-sm">{card.excerpt}</p>
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
