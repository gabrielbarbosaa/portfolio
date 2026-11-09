"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { Pencil, Trash2 } from "lucide-react";
import type { Post } from "@/db/schemas";
import { deletePost, setPostPublished } from "@/db/mutations";

export function PostsTable({ posts }: { posts: Post[] }) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [pendingSlug, setPendingSlug] = useState<string | null>(null);

  const run = (slug: string, action: () => Promise<{ ok: boolean; error?: string }>) => {
    setError(null);
    setPendingSlug(slug);
    startTransition(async () => {
      const result = await action();
      if (!result.ok) setError(result.error ?? "Algo deu errado.");
      setPendingSlug(null);
    });
  };

  const handleDelete = (post: Post) => {
    if (!confirm(`Excluir "${post.title}"? Essa ação não pode ser desfeita.`)) return;
    run(post.slug, () => deletePost(post.slug));
  };

  return (
    <div className="space-y-3">
      {error && (
        <p className="rounded-lg border border-accent/30 bg-accent/10 px-4 py-2.5 text-sm text-accent">
          {error}
        </p>
      )}

      <div className="card divide-y divide-line">
        {posts.length === 0 && <p className="p-6 text-sm text-muted">Nenhum post ainda.</p>}
        {posts.map((post) => {
          const busy = isPending && pendingSlug === post.slug;
          return (
            <div key={post.slug} className="flex items-center gap-3 p-4">
              <div className="min-w-0 flex-1">
                <p className="truncate font-medium text-fg">{post.title}</p>
                <p className="truncate text-sm text-muted">
                  {post.date} · {post.readingMinutes} min
                </p>
              </div>

              <button
                type="button"
                disabled={busy}
                onClick={() => run(post.slug, () => setPostPublished(post.slug, !post.published))}
                className={`rounded-lg border px-2.5 py-1.5 text-xs font-medium transition-colors disabled:opacity-50 ${
                  post.published
                    ? "border-primary/30 bg-primary/10 text-primary"
                    : "border-line text-muted hover:text-fg"
                }`}
              >
                {post.published ? "Publicado" : "Rascunho"}
              </button>

              <Link
                href={`/admin/posts/${post.slug}`}
                className="grid size-8 place-items-center rounded-lg text-muted hover:bg-surface-2 hover:text-fg"
                aria-label="Editar"
              >
                <Pencil className="size-4" />
              </Link>
              <button
                type="button"
                disabled={busy}
                onClick={() => handleDelete(post)}
                className="grid size-8 place-items-center rounded-lg text-muted hover:bg-accent/10 hover:text-accent disabled:opacity-50"
                aria-label="Excluir"
              >
                <Trash2 className="size-4" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
