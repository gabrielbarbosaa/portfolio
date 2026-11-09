"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { PostMeta } from "@/db/schemas";
import type { Lang } from "@/lib/i18n/dictionaries";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const LOCALES: Record<Lang, string> = { pt: "pt-BR", en: "en-US", es: "es-ES" };

function formatDate(date: string, lang: Lang) {
  return new Intl.DateTimeFormat(LOCALES[lang], { dateStyle: "long" }).format(
    new Date(`${date}T12:00:00`)
  );
}

function PostMetaLine({ post }: { post: PostMeta }) {
  const { t, lang } = useI18n();
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
      <time dateTime={post.date}>{formatDate(post.date, lang)}</time>
      <span aria-hidden>·</span>
      <span>
        {post.readingMinutes} {t.blog.minRead}
      </span>
      {!post.published && (
        <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
          {t.blog.draft}
        </span>
      )}
    </div>
  );
}

function PtOnlyNotice() {
  const { t, lang } = useI18n();
  if (lang === "pt") return null;
  return (
    <p className="mt-4 inline-flex rounded-lg border border-line bg-surface-2 px-3 py-1.5 text-sm text-muted">
      {t.blog.ptOnly}
    </p>
  );
}

export function BlogIndex({ posts }: { posts: PostMeta[] }) {
  const { t } = useI18n();

  return (
    <main className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="container-page max-w-3xl">
        <header className="mb-14">
          <p className="eyebrow">{t.blog.label}</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-fg md:text-5xl">
            {t.blog.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-soft">{t.blog.subtitle}</p>
          <PtOnlyNotice />
        </header>

        {posts.length === 0 ? (
          <p className="text-muted">{t.blog.empty}</p>
        ) : (
          <ul className="space-y-5">
            {posts.map((post, i) => (
              <li key={post.slug}>
                <ScrollReveal delay={i * 0.05}>
                  <Link href={`/blog/${post.slug}`} className="group card card-hover block p-6 md:p-7">
                    <PostMetaLine post={post} />
                    <h2 className="mt-3 text-xl font-semibold tracking-tight text-fg transition-colors group-hover:text-primary md:text-2xl">
                      {post.title}
                    </h2>
                    <p className="mt-3 leading-relaxed text-soft">{post.description}</p>
                    <div className="mt-5 flex items-center justify-between gap-4">
                      <ul className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <li key={tag} className="tag">
                            {tag}
                          </li>
                        ))}
                      </ul>
                      <ArrowUpRight className="size-4 shrink-0 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </Link>
                </ScrollReveal>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}

export function BlogPostShell({ post, children }: { post: PostMeta; children: React.ReactNode }) {
  const { t } = useI18n();

  return (
    <main className="pt-32 pb-24 md:pt-40 md:pb-32">
      <article className="container-page max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-fg"
        >
          <ArrowLeft className="size-4" />
          {t.blog.back}
        </Link>

        <header className="mt-10 border-b border-line pb-10">
          <PostMetaLine post={post} />
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-fg md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-soft md:text-xl">{post.description}</p>
          <PtOnlyNotice />
        </header>

        <div className="post-body mt-10" lang="pt-BR">
          {children}
        </div>
      </article>
    </main>
  );
}
