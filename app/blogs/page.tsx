"use client";

import { useRouter } from "next/navigation";

export default function BlogsPage() {
  const router = useRouter();

  const navigateToDetails = () => {
    router.push("/blogs/details");
  };

  return (
    <div className="container mx-auto px-4 py-24 text-center flex flex-col items-center">
      {/* <h1 className="text-4xl font-bold mb-8 mt-16">Future PropTech Blogs</h1> */}
      
      {/* Combined Image and Content in Centered Card... */}
      <article 
        className="bg-white shadow-lg rounded-lg p-4 w-1/2 md:w-1/3 text-center flex flex-col items-center cursor-pointer"
        onClick={navigateToDetails}
      >
        <img 
          src="/image/blogs/1654x768 (1).jpg" 
          alt="Future of Real Estate in Dubai" 
          className="w-full h-auto rounded-lg shadow-md mb-4"
        />
        <h2 className="text-xl font-semibold mb-3">Welcome to the Future of Real Estate in Dubai</h2>
        <p className="text-gray-700 text-xs">
          The global PropTech market, valued at $33.57 billion in 2023, is projected to soar to $89.93 billion by 2032, 
          with an impressive CAGR of 11.9%. PropTech is driving unprecedented change in the real estate industry 
          through AI, blockchain, IoT, and VR, enhancing transparency, efficiency, and investment opportunities.
        </p>
        <p className="text-gray-700 text-xs mt-3">
          As a global leader in real estate innovation, Dubai is at the forefront of this transformation, championing initiatives 
          like fractional ownership and digital property transactions.
        </p>
        <p className="text-gray-400 text-right mt-2">by Askar Ali</p>
        <button 
          className="mt-4 text-blue-500 hover:underline focus:outline-none" 
          onClick={(e) => {
            e.stopPropagation(); // Prevent triggering the card's onClick
            navigateToDetails();
          }}
        >
          Read More
        </button>
      </article>
    </div>
  );
}
