"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUp, Pencil, Trash2 } from "lucide-react";
import type { Study } from "@/db/schemas";
import { deleteStudy, moveStudy } from "@/db/mutations";

export function StudiesTable({ studies }: { studies: Study[] }) {
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

  const handleDelete = (study: Study) => {
    if (!confirm(`Excluir "${study.content.pt.title}"? Essa ação não pode ser desfeita.`)) return;
    run(study.slug, () => deleteStudy(study.slug));
  };

  return (
    <div className="space-y-3">
      {error && (
        <p className="rounded-lg border border-accent/30 bg-accent/10 px-4 py-2.5 text-sm text-accent">
          {error}
        </p>
      )}

      <div className="card divide-y divide-line">
        {studies.length === 0 && <p className="p-6 text-sm text-muted">Nenhum estudo ainda.</p>}
        {studies.map((study, index) => {
          const busy = isPending && pendingSlug === study.slug;
          return (
            <div key={study.slug} className="flex items-center gap-3 p-4">
              <div className="flex flex-col">
                <button
                  type="button"
                  disabled={index === 0 || busy}
                  onClick={() => run(study.slug, () => moveStudy(study.slug, "up"))}
                  className="grid size-6 place-items-center rounded text-muted hover:bg-surface-2 hover:text-fg disabled:opacity-30"
                  aria-label="Mover para cima"
                >
                  <ArrowUp className="size-3.5" />
                </button>
                <button
                  type="button"
                  disabled={index === studies.length - 1 || busy}
                  onClick={() => run(study.slug, () => moveStudy(study.slug, "down"))}
                  className="grid size-6 place-items-center rounded text-muted hover:bg-surface-2 hover:text-fg disabled:opacity-30"
                  aria-label="Mover para baixo"
                >
                  <ArrowDown className="size-3.5" />
                </button>
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate font-medium text-fg">{study.content.pt.title}</p>
                <p className="truncate text-sm text-muted">
                  {study.year} · {study.repo}
                </p>
              </div>

              <span
                className={`rounded-lg border px-2.5 py-1.5 text-xs font-medium ${
                  study.status === "done"
                    ? "border-primary/30 bg-primary/10 text-primary"
                    : "border-line text-muted"
                }`}
              >
                {study.status === "done" ? "Concluído" : "Em construção"}
              </span>

              <Link
                href={`/admin/studies/${study.slug}`}
                className="grid size-8 place-items-center rounded-lg text-muted hover:bg-surface-2 hover:text-fg"
                aria-label="Editar"
              >
                <Pencil className="size-4" />
              </Link>
              <button
                type="button"
                disabled={busy}
                onClick={() => handleDelete(study)}
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
