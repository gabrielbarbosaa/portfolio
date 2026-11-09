"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUp, Pencil, Star, Trash2 } from "lucide-react";
import type { Project } from "@/db/schemas";
import { deleteProject, moveProject, setProjectFeatured } from "@/db/mutations";

export function ProjectsTable({ projects }: { projects: Project[] }) {
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

  const handleDelete = (project: Project) => {
    if (!confirm(`Excluir "${project.content.pt.title}"? Essa ação não pode ser desfeita.`)) return;
    run(project.slug, () => deleteProject(project.slug));
  };

  return (
    <div className="space-y-3">
      {error && (
        <p className="rounded-lg border border-accent/30 bg-accent/10 px-4 py-2.5 text-sm text-accent">
          {error}
        </p>
      )}

      <div className="card divide-y divide-line">
        {projects.length === 0 && (
          <p className="p-6 text-sm text-muted">Nenhum projeto ainda.</p>
        )}
        {projects.map((project, index) => {
          const busy = isPending && pendingSlug === project.slug;
          return (
            <div key={project.slug} className="flex items-center gap-3 p-4">
              <div className="flex flex-col">
                <button
                  type="button"
                  disabled={index === 0 || busy}
                  onClick={() => run(project.slug, () => moveProject(project.slug, "up"))}
                  className="grid size-6 place-items-center rounded text-muted hover:bg-surface-2 hover:text-fg disabled:opacity-30"
                  aria-label="Mover para cima"
                >
                  <ArrowUp className="size-3.5" />
                </button>
                <button
                  type="button"
                  disabled={index === projects.length - 1 || busy}
                  onClick={() => run(project.slug, () => moveProject(project.slug, "down"))}
                  className="grid size-6 place-items-center rounded text-muted hover:bg-surface-2 hover:text-fg disabled:opacity-30"
                  aria-label="Mover para baixo"
                >
                  <ArrowDown className="size-3.5" />
                </button>
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate font-medium text-fg">{project.content.pt.title}</p>
                <p className="truncate text-sm text-muted">
                  {project.year}
                  {project.client && ` · ${project.client}`}
                </p>
              </div>

              <button
                type="button"
                disabled={busy}
                onClick={() =>
                  run(project.slug, () =>
                    setProjectFeatured(project.slug, project.featuredOrder === null)
                  )
                }
                className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-medium transition-colors disabled:opacity-50 ${
                  project.featuredOrder !== null
                    ? "border-primary/30 bg-primary/10 text-primary"
                    : "border-line text-muted hover:text-fg"
                }`}
                title="Exibir na página inicial"
              >
                <Star className="size-3.5" fill={project.featuredOrder !== null ? "currentColor" : "none"} />
                Destaque
              </button>

              <Link
                href={`/admin/projects/${project.slug}`}
                className="grid size-8 place-items-center rounded-lg text-muted hover:bg-surface-2 hover:text-fg"
                aria-label="Editar"
              >
                <Pencil className="size-4" />
              </Link>
              <button
                type="button"
                disabled={busy}
                onClick={() => handleDelete(project)}
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
