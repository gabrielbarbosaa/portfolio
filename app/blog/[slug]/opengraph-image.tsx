import { renderOg, ogSize } from "@/lib/og";
import { getPost, getPosts } from "@/db/queries";

export const alt = "Blog — Gabriel Barbosa";
export const size = ogSize;
export const contentType = "image/png";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) return renderOg({ title: "Blog", subtitle: "Gabriel Barbosa — Software Engineer" });

  return renderOg({
    eyebrow: "Blog",
    title: post.title,
    subtitle: post.description,
    tags: post.tags,
  });
}
