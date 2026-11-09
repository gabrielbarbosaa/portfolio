import { notFound } from "next/navigation";
import { PostForm } from "@/components/admin/PostForm";
import { getPostAdmin } from "@/db/queries";

export default async function EditPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostAdmin(slug);
  if (!post) notFound();

  return (
    <div className="max-w-4xl space-y-6">
      <h1 className="text-2xl font-semibold text-fg">Editar post</h1>
      <PostForm post={post} />
    </div>
  );
}
