import Link from "next/link";
import { PostsTable } from "@/components/admin/PostsTable";
import { getAllPostsAdmin } from "@/db/queries";

export default async function AdminPostsPage() {
  const posts = await getAllPostsAdmin();
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold text-fg">Blog</h1>
        <Link href="/admin/posts/new" className="btn btn-primary">
          Novo post
        </Link>
      </div>
      <PostsTable posts={sorted} />
    </div>
  );
}
