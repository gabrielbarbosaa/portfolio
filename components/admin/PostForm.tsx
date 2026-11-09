"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Trash2 } from "lucide-react";
import { Field, inputClass, textareaClass } from "./FormField";
import { createPost, deletePost, updatePost } from "@/db/mutations";
import type { Post, PostInput } from "@/db/schemas";

interface Draft {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string; // separadas por vírgula
  published: boolean;
  body: string;
}

function toDraft(post?: Post): Draft {
  return {
    slug: post?.slug ?? "",
    title: post?.title ?? "",
    description: post?.description ?? "",
    date: post?.date ?? new Date().toISOString().slice(0, 10),
    tags: post?.tags.join(", ") ?? "",
    published: post?.published ?? false,
    body: post?.body ?? "",
  };
}

const splitCsv = (text: string) => text.split(",").map((s) => s.trim()).filter(Boolean);

export function PostForm({ post }: { post?: Post }) {
  const isEditing = Boolean(post);
  const router = useRouter();
  const [draft, setDraft] = useState<Draft>(() => toDraft(post));
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const input: PostInput = {
      slug: draft.slug.trim(),
      title: draft.title.trim(),
      description: draft.description.trim(),
      date: draft.date,
      tags: splitCsv(draft.tags),
      published: draft.published,
      body: draft.body,
    };

    startTransition(async () => {
      const result = isEditing ? await updatePost(post!.slug, input) : await createPost(input);
      if (!result.ok) {
        setError(result.error);
        return;
      }
      router.push("/admin/posts");
      router.refresh();
    });
  };

  const handleDelete = () => {
    if (!post) return;
    if (!confirm(`Excluir "${post.title}"? Essa ação não pode ser desfeita.`)) return;
    startTransition(async () => {
      const result = await deletePost(post.slug);
      if (!result.ok) {
        setError(result.error);
        return;
      }
      router.push("/admin/posts");
      router.refresh();
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <p className="rounded-lg border border-accent/30 bg-accent/10 px-4 py-2.5 text-sm text-accent">
          {error}
        </p>
      )}

      <div className="card space-y-5 p-6">
        <Field label="Slug" hint="Letras minúsculas, números e hífens. Define a URL /blog/<slug>.">
          <input
            required
            disabled={isEditing}
            value={draft.slug}
            onChange={(e) => setDraft((d) => ({ ...d, slug: e.target.value }))}
            placeholder="titulo-do-post"
            className={`${inputClass} font-mono disabled:opacity-60`}
          />
        </Field>

        <Field label="Título">
          <input
            required
            value={draft.title}
            onChange={(e) => setDraft((d) => ({ ...d, title: e.target.value }))}
            className={inputClass}
          />
        </Field>

        <Field label="Descrição" hint="Aparece na listagem e no compartilhamento (SEO).">
          <textarea
            required
            rows={2}
            value={draft.description}
            onChange={(e) => setDraft((d) => ({ ...d, description: e.target.value }))}
            className={textareaClass}
          />
        </Field>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Data">
            <input
              required
              type="date"
              value={draft.date}
              onChange={(e) => setDraft((d) => ({ ...d, date: e.target.value }))}
              className={inputClass}
            />
          </Field>
          <Field label="Tags" hint="Separadas por vírgula.">
            <input
              value={draft.tags}
              onChange={(e) => setDraft((d) => ({ ...d, tags: e.target.value }))}
              placeholder="Carreira, Back-end"
              className={inputClass}
            />
          </Field>
        </div>

        <label className="flex items-center gap-2.5 text-sm font-medium text-fg">
          <input
            type="checkbox"
            checked={draft.published}
            onChange={(e) => setDraft((d) => ({ ...d, published: e.target.checked }))}
            className="size-4 rounded border-line-strong accent-[var(--primary)]"
          />
          Publicado (visível para todo mundo)
        </label>
      </div>

      <div className="card p-6">
        <span className="mb-3 block text-sm font-medium text-fg">Conteúdo (Markdown)</span>
        <div className="grid gap-4 lg:grid-cols-2">
          <textarea
            required
            rows={24}
            value={draft.body}
            onChange={(e) => setDraft((d) => ({ ...d, body: e.target.value }))}
            placeholder={"## Um título\n\nSeu texto aqui, em **Markdown**."}
            className={`${textareaClass} font-mono text-[13px] leading-6`}
          />
          <div className="post-body max-h-[600px] overflow-y-auto rounded-lg border border-line bg-surface-2 p-5 text-sm">
            {draft.body.trim() ? (
              <Markdown remarkPlugins={[remarkGfm]} skipHtml>
                {draft.body}
              </Markdown>
            ) : (
              <p className="text-muted">A pré-visualização aparece aqui.</p>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="flex gap-3">
          <button type="submit" disabled={isPending} className="btn btn-primary">
            {isPending ? "Salvando…" : isEditing ? "Salvar alterações" : "Criar post"}
          </button>
          <button type="button" onClick={() => router.push("/admin/posts")} className="btn btn-outline">
            Cancelar
          </button>
        </div>
        {isEditing && (
          <button
            type="button"
            onClick={handleDelete}
            disabled={isPending}
            className="flex items-center gap-1.5 text-sm text-muted hover:text-accent disabled:opacity-50"
          >
            <Trash2 className="size-4" />
            Excluir post
          </button>
        )}
      </div>
    </form>
  );
}
