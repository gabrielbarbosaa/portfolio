import { PostForm } from "@/components/admin/PostForm";

export default function NewPostPage() {
  return (
    <div className="max-w-4xl space-y-6">
      <h1 className="text-2xl font-semibold text-fg">Novo post</h1>
      <PostForm />
    </div>
  );
}
