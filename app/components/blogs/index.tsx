"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface BlogGridClientProps {
  posts: any[];
}

export default function BlogGridClient({ posts }: BlogGridClientProps) {
  const router = useRouter();

  const renderCard = (post: any, index: number) => {
    const isFeatured = index === 0;

    const cardClasses =   `relative cursor-pointer overflow-hidden rounded-lg h-auto md:h-full group border-2 border-sky-500 `

    const imageClasses = `w-full object-contain transition duration-500 ease-in-out transform group-hover:scale-102`;

    const onClick = () => router.push(`/blogs/${post.slug}`);

    return (
      
      <div key={post._id} className={cardClasses} onClick={onClick}>
        <Image
          src={post.mainImage || "/images/blogs/default.jpg"}
          alt={post.title}
          width={isFeatured ? 1200 : 600}
          height={isFeatured ? 600 : 300}
          className={imageClasses}
        />
        <div className="align-center flex flex-col bg-white p-4 md:p-6 ">
          <p className="text-sm text-sky-500">
            Posted on {new Date(post.publishedAt).toLocaleString("en-IN")}
          </p>
          <h2 className={`mt-2 font-semibold text-black ${isFeatured ? "text-xl" : "text-base"}`}>
            {post.title}
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            by {post.author?.name || post.author || "Unknown"}
          </p>
        </div>
      </div>
    );
  };

  return (
     <div className="container mx-auto px-4 py-20">
      {/* Header */}
     
      {/* Grid Layout */}
      <div className="container mx-auto px-3  " style={{scrollBehavior: "smooth"}}>
       <h1 className="mb-12 text-center text-3xl font-bold">Latest PropTech Blogs</h1>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 ">
          {/* Featured Post */}
          <div className="col-span-1 lg:col-span-3 ">{posts[0] && renderCard(posts[0], 0)}</div>

          {/* Top Right 2 Posts */}
          <div className="flex flex-col  gap-6 ">
            {posts.slice(1, 3).map((post, idx) => renderCard(post, idx + 1))}
          </div>
        </div>

        {/* Remaining Posts */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(3).map((post, idx) => renderCard(post, idx + 3))}
        </div>
      </div>
    </div>
  );
}
