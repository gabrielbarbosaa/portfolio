"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";
import { Field, inputClass, textareaClass } from "./FormField";
import { LANGS, type Lang } from "@/lib/i18n/dictionaries";
import { createStudy, deleteStudy, updateStudy } from "@/db/mutations";
import type { Study, StudyContent, StudyInput } from "@/db/schemas";

interface ContentDraft {
  title: string;
  description: string;
  longDescription: string;
  features: string; // uma por linha
  challenges: string; // uma por linha
}

interface Draft {
  slug: string;
  repo: string;
  year: string;
  status: Study["status"];
  technologies: string; // separadas por vírgula
  demo: string;
  content: Record<Lang, ContentDraft>;
}

const emptyContent: ContentDraft = {
  title: "",
  description: "",
  longDescription: "",
  features: "",
  challenges: "",
};

const toDraftContent = (content: StudyContent): ContentDraft => ({
  title: content.title,
  description: content.description,
  longDescription: content.longDescription,
  features: content.features.join("\n"),
  challenges: content.challenges.join("\n"),
});

const toDraft = (study?: Study): Draft => ({
  slug: study?.slug ?? "",
  repo: study?.repo ?? "",
  year: study?.year ?? String(new Date().getFullYear()),
  status: study?.status ?? "building",
  technologies: study?.technologies.join(", ") ?? "",
  demo: study?.demo ?? "",
  content: {
    pt: study ? toDraftContent(study.content.pt) : { ...emptyContent },
    en: study ? toDraftContent(study.content.en) : { ...emptyContent },
    es: study ? toDraftContent(study.content.es) : { ...emptyContent },
  },
});

const splitCsv = (text: string) => text.split(",").map((s) => s.trim()).filter(Boolean);
const splitLines = (text: string) => text.split("\n").map((s) => s.trim()).filter(Boolean);

const toContent = (draft: ContentDraft): StudyContent => ({
  title: draft.title.trim(),
  description: draft.description.trim(),
  longDescription: draft.longDescription.trim(),
  features: splitLines(draft.features),
  challenges: splitLines(draft.challenges),
});

export function StudyForm({ study }: { study?: Study }) {
  const isEditing = Boolean(study);
  const router = useRouter();
  const [draft, setDraft] = useState<Draft>(() => toDraft(study));
  const [lang, setLang] = useState<Lang>("pt");
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const updateContent = (l: Lang, patch: Partial<ContentDraft>) =>
    setDraft((d) => ({ ...d, content: { ...d.content, [l]: { ...d.content[l], ...patch } } }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const input: StudyInput = {
      slug: draft.slug.trim(),
      repo: draft.repo.trim(),
      year: draft.year.trim(),
      status: draft.status,
      technologies: splitCsv(draft.technologies),
      demo: draft.demo.trim() || undefined,
      content: {
        pt: toContent(draft.content.pt),
        en: toContent(draft.content.en),
        es: toContent(draft.content.es),
      },
    };

    startTransition(async () => {
      const result = isEditing ? await updateStudy(study!.slug, input) : await createStudy(input);

      if (!result.ok) {
        setError(result.error);
        return;
      }
      router.push("/admin/studies");
      router.refresh();
    });
  };

  const handleDelete = () => {
    if (!study) return;
    if (!confirm(`Excluir "${study.content.pt.title}"? Essa ação não pode ser desfeita.`)) return;
    startTransition(async () => {
      const result = await deleteStudy(study.slug);
      if (!result.ok) {
        setError(result.error);
        return;
      }
      router.push("/admin/studies");
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
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Slug" hint="Letras minúsculas, números e hífens. Define a URL /studies/<slug>.">
            <input
              required
              disabled={isEditing}
              value={draft.slug}
              onChange={(e) => setDraft((d) => ({ ...d, slug: e.target.value }))}
              placeholder="meu-estudo"
              className={`${inputClass} font-mono disabled:opacity-60`}
            />
          </Field>
          <Field label="Repositório no GitHub" hint="Só o nome do repositório. O link é montado sozinho.">
            <input
              required
              value={draft.repo}
              onChange={(e) => setDraft((d) => ({ ...d, repo: e.target.value }))}
              placeholder="moonlight"
              className={`${inputClass} font-mono`}
            />
          </Field>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          <Field label="Ano">
            <input
              required
              value={draft.year}
              onChange={(e) => setDraft((d) => ({ ...d, year: e.target.value }))}
              placeholder="2026"
              className={inputClass}
            />
          </Field>
          <Field label="Status">
            <select
              value={draft.status}
              onChange={(e) =>
                setDraft((d) => ({ ...d, status: e.target.value as Study["status"] }))
              }
              className={inputClass}
            >
              <option value="building">Em construção</option>
              <option value="done">Concluído</option>
            </select>
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
            placeholder="Next.js, NestJS, PostgreSQL"
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
          <Field label="Descrição curta" hint="Aparece no card do estudo.">
            <textarea
              required
              rows={2}
              value={draft.content[lang].description}
              onChange={(e) => updateContent(lang, { description: e.target.value })}
              className={textareaClass}
            />
          </Field>
          <Field label="Visão geral">
            <textarea
              required
              rows={5}
              value={draft.content[lang].longDescription}
              onChange={(e) => updateContent(lang, { longDescription: e.target.value })}
              className={textareaClass}
            />
          </Field>
          <Field label="Funcionalidades" hint="Uma por linha.">
            <textarea
              required
              rows={5}
              value={draft.content[lang].features}
              onChange={(e) => updateContent(lang, { features: e.target.value })}
              className={textareaClass}
            />
          </Field>
          <Field label="Desafios técnicos" hint="Um por linha.">
            <textarea
              required
              rows={5}
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
            {isPending ? "Salvando…" : isEditing ? "Salvar alterações" : "Criar estudo"}
          </button>
          <button
            type="button"
            onClick={() => router.push("/admin/studies")}
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
            Excluir estudo
          </button>
        )}
      </div>
    </form>
  );
}
