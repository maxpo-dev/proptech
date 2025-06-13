import { getBlogPostsByProject } from "@/sanity/lib/blogs";
import BlogGridClient from "../components/blogs";

export default async function NewsBlogGrid() {
  const posts = await getBlogPostsByProject("fps");

  return (
    <section className="bg-white">
      <BlogGridClient posts={posts} />
    </section>
  );
}
