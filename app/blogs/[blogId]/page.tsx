import PortableTextRenderer from "@/app/components/blogs/portableTextRender";
import { getBlogPostBySlug } from "@/sanity/lib/blogs"; // Update this to your actual fetch function
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function BlogPostPage({ params }: { params: { blogId: string } }) {
  const blog = await getBlogPostBySlug(params.blogId); // or by ID

  if (!blog) {
    return notFound();
  }

  return (
    <section className="container mx-auto max-w-5xl px-4 py-32 md:px-16 md:py-36 lg:px-28">
      {/* Title */}
      <h1 className="mb-6 text-3xl font-bold md:text-5xl">{blog.title}</h1>

      {/* Author & Date */}
      <p className="mb-8 text-sm text-gray-500">
        By {blog.author?.name || "Unknown Author"} • {new Date(blog.publishedAt).toDateString()}
      </p>

      {/* Main Image */}
      {blog.mainImage && (
        <Image
          src={blog.mainImage}
          alt={blog.title}
          className="mb-10 h-auto w-full rounded-md object-cover"
        />
      )}

      {/* Body Content */}
      <PortableTextRenderer value={blog.body} />
    </section>
  );
}
