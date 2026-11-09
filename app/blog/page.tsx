import type { Metadata } from "next";
import { Navbar } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogIndex } from "@/components/blog/BlogViews";
import { getPosts } from "@/db/queries";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notas técnicas de Gabriel Barbosa sobre engenharia de software, front-end e back-end.",
  alternates: { canonical: "/blog" },
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <Navbar />
      <BlogIndex posts={posts} />
      <Footer />
    </>
  );
}
