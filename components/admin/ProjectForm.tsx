"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";
import { Field, inputClass, textareaClass } from "./FormField";
import { LANGS, type Lang } from "@/lib/i18n/dictionaries";
import { createProject, deleteProject, updateProject } from "@/db/mutations";
import type { Project, ProjectContent, ProjectInput } from "@/db/schemas";

interface ContentDraft {
  title: string;
  description: string;
  role: string;
  longDescription: string;
  features: string; // uma por linha
  challenges: string; // uma por linha
}

interface Draft {
  slug: string;
  year: string;
  client: string;
  technologies: string; // separadas por vírgula
  demo: string;
  content: Record<Lang, ContentDraft>;
}

const emptyContent: ContentDraft = {
  title: "",
  description: "",
  role: "",
  longDescription: "",
  features: "",
  challenges: "",
};

function toDraftContent(content: ProjectContent): ContentDraft {
  return {
    title: content.title,
    description: content.description,
    role: content.role,
    longDescription: content.longDescription,
    features: content.features.join("\n"),
    challenges: content.challenges.join("\n"),
  };
}

function toDraft(project?: Project): Draft {
  return {
    slug: project?.slug ?? "",
    year: project?.year ?? "",
    client: project?.client ?? "",
    technologies: project?.technologies.join(", ") ?? "",
    demo: project?.demo ?? "",
    content: {
      pt: project ? toDraftContent(project.content.pt) : { ...emptyContent },
      en: project ? toDraftContent(project.content.en) : { ...emptyContent },
      es: project ? toDraftContent(project.content.es) : { ...emptyContent },
    },
  };
}

const splitCsv = (text: string) => text.split(",").map((s) => s.trim()).filter(Boolean);
const splitLines = (text: string) => text.split("\n").map((s) => s.trim()).filter(Boolean);

export function ProjectForm({ project }: { project?: Project }) {
  const isEditing = Boolean(project);
  const router = useRouter();
  const [draft, setDraft] = useState<Draft>(() => toDraft(project));
  const [lang, setLang] = useState<Lang>("pt");
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const updateContent = (l: Lang, patch: Partial<ContentDraft>) =>
    setDraft((d) => ({ ...d, content: { ...d.content, [l]: { ...d.content[l], ...patch } } }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const input: ProjectInput = {
      slug: draft.slug.trim(),
      year: draft.year.trim(),
      client: draft.client.trim() || undefined,
      technologies: splitCsv(draft.technologies),
      demo: draft.demo.trim() || undefined,
      content: {
        pt: {
          title: draft.content.pt.title.trim(),
          description: draft.content.pt.description.trim(),
          role: draft.content.pt.role.trim(),
          longDescription: draft.content.pt.longDescription.trim(),
          features: splitLines(draft.content.pt.features),
          challenges: splitLines(draft.content.pt.challenges),
        },
        en: {
          title: draft.content.en.title.trim(),
          description: draft.content.en.description.trim(),
          role: draft.content.en.role.trim(),
          longDescription: draft.content.en.longDescription.trim(),
          features: splitLines(draft.content.en.features),
          challenges: splitLines(draft.content.en.challenges),
        },
        es: {
          title: draft.content.es.title.trim(),
          description: draft.content.es.description.trim(),
          role: draft.content.es.role.trim(),
          longDescription: draft.content.es.longDescription.trim(),
          features: splitLines(draft.content.es.features),
          challenges: splitLines(draft.content.es.challenges),
        },
      },
    };

    startTransition(async () => {
      const result = isEditing
        ? await updateProject(project!.slug, input)
        : await createProject(input);

      if (!result.ok) {
        setError(result.error);
        return;
      }
      router.push("/admin/projects");
      router.refresh();
    });
  };

  const handleDelete = () => {
    if (!project) return;
    if (!confirm(`Excluir "${project.content.pt.title}"? Essa ação não pode ser desfeita.`)) return;
    startTransition(async () => {
      const result = await deleteProject(project.slug);
      if (!result.ok) {
        setError(result.error);
        return;
      }
      router.push("/admin/projects");
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
        <Field label="Slug" hint="Letras minúsculas, números e hífens. Define a URL /projects/<slug>.">
          <input
            required
            disabled={isEditing}
            value={draft.slug}
            onChange={(e) => setDraft((d) => ({ ...d, slug: e.target.value }))}
            placeholder="meu-projeto"
            className={`${inputClass} font-mono disabled:opacity-60`}
          />
        </Field>

        <div className="grid gap-5 sm:grid-cols-3">
          <Field label="Ano">
            <input
              required
              value={draft.year}
              onChange={(e) => setDraft((d) => ({ ...d, year: e.target.value }))}
              placeholder="2026 ou 2024 – 2025"
              className={inputClass}
            />
          </Field>
          <Field label="Cliente (opcional)">
            <input
              value={draft.client}
              onChange={(e) => setDraft((d) => ({ ...d, client: e.target.value }))}
              className={inputClass}
            />
          </Field>
          <Field label="Link do projeto (opcional)">
            <input
              type="url"
              value={draft.demo}
              onChange={(e) => setDraft((d) => ({ ...d, demo: e.target.value }))}
              placeholder="https://..."
              className={inputClass}
            />
          </Field>
        </div>

        <Field label="Tecnologias" hint="Separadas por vírgula.">
          <input
            required
            value={draft.technologies}
            onChange={(e) => setDraft((d) => ({ ...d, technologies: e.target.value }))}
            placeholder="React, TypeScript, Next.js"
            className={inputClass}
          />
        </Field>
      </div>

      <div className="card p-6">
        <div className="mb-5 inline-flex rounded-lg border border-line bg-surface-2 p-0.5">
          {LANGS.map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => setLang(l.code)}
              className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                lang === l.code ? "bg-surface text-fg shadow-[var(--shadow-sm)]" : "text-muted hover:text-fg"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="space-y-5">
          <Field label="Título">
            <input
              required
              value={draft.content[lang].title}
              onChange={(e) => updateContent(lang, { title: e.target.value })}
              className={inputClass}
            />
          </Field>
          <Field label="Descrição curta" hint="Aparece no card do projeto.">
            <textarea
              required
              rows={2}
              value={draft.content[lang].description}
              onChange={(e) => updateContent(lang, { description: e.target.value })}
              className={textareaClass}
            />
          </Field>
          <Field label="Papel / cargo">
            <input
              required
              value={draft.content[lang].role}
              onChange={(e) => updateContent(lang, { role: e.target.value })}
              className={inputClass}
            />
          </Field>
          <Field label="Visão geral">
            <textarea
              required
              rows={4}
              value={draft.content[lang].longDescription}
              onChange={(e) => updateContent(lang, { longDescription: e.target.value })}
              className={textareaClass}
            />
          </Field>
          <Field label="Principais entregas" hint="Uma por linha.">
            <textarea
              required
              rows={4}
              value={draft.content[lang].features}
              onChange={(e) => updateContent(lang, { features: e.target.value })}
              className={textareaClass}
            />
          </Field>
          <Field label="Desafios técnicos" hint="Um por linha.">
            <textarea
              required
              rows={4}
              value={draft.content[lang].challenges}
              onChange={(e) => updateContent(lang, { challenges: e.target.value })}
              className={textareaClass}
            />
          </Field>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="flex gap-3">
          <button type="submit" disabled={isPending} className="btn btn-primary">
            {isPending ? "Salvando…" : isEditing ? "Salvar alterações" : "Criar projeto"}
          </button>
          <button
            type="button"
            onClick={() => router.push("/admin/projects")}
            className="btn btn-outline"
          >
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
            Excluir projeto
          </button>
        )}
      </div>
    </form>
  );
}
