import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogPostShell } from "@/components/blog/BlogViews";
import { PostBody } from "@/components/blog/PostBody";
import { getPost, getPosts } from "@/db/queries";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Post não encontrado" };

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      tags: post.tags,
    },
    robots: post.published ? undefined : { index: false, follow: false },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const { body, ...meta } = post;

  return (
    <>
      <Navbar />
      <BlogPostShell post={meta}>
        <PostBody body={body} />
      </BlogPostShell>
      <Footer />
    </>
  );
}
