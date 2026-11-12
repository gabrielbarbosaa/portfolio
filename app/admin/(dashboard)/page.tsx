import Link from "next/link";
import { ArrowRight, FlaskConical, FolderKanban, Newspaper, Star } from "lucide-react";
import { getAllPostsAdmin, getProjects, getStudies } from "@/db/queries";
import { isDbConfigured } from "@/db/client";

export default async function AdminDashboardPage() {
  const dbReady = isDbConfigured();
  const [projects, posts, studies] = await Promise.all([
    getProjects(),
    getAllPostsAdmin(),
    getStudies(),
  ]);
  const featuredCount = projects.filter((p) => p.featuredOrder !== null).length;
  const publishedCount = posts.filter((p) => p.published).length;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-fg">Painel</h1>
        <p className="mt-1 text-sm text-muted">Gerencie os projetos, os estudos e os posts do site.</p>
      </div>

      {!dbReady && (
        <p className="rounded-lg border border-accent/30 bg-accent/10 px-4 py-3 text-sm text-accent">
          MONGODB_URI não está configurada neste ambiente: as alterações não serão salvas.
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <DashboardCard
          href="/admin/projects"
          icon={FolderKanban}
          title="Projetos"
          stat={`${projects.length} no total · ${featuredCount} em destaque na home`}
        />
        <DashboardCard
          href="/admin/studies"
          icon={FlaskConical}
          title="Estudos"
          stat={`${studies.length} no total · ${studies.filter((s) => s.status === "done").length} concluídos`}
        />
        <DashboardCard
          href="/admin/posts"
          icon={Newspaper}
          title="Blog"
          stat={`${posts.length} no total · ${publishedCount} publicados`}
        />
      </div>

      <div className="flex flex-wrap gap-3">
        <Link href="/admin/projects/new" className="btn btn-primary">
          Novo projeto
        </Link>
        <Link href="/admin/studies/new" className="btn btn-outline">
          Novo estudo
        </Link>
        <Link href="/admin/posts/new" className="btn btn-outline">
          Novo post
        </Link>
        <Link href="/" target="_blank" className="btn btn-outline">
          Ver site
          <ArrowRight className="size-4" />
        </Link>
      </div>

      {featuredCount > 0 && (
        <div className="card p-6">
          <h2 className="flex items-center gap-2 text-sm font-semibold text-fg">
            <Star className="size-4 text-primary" />
            Destaques da home
          </h2>
          <ol className="mt-4 space-y-2 text-sm text-soft">
            {projects
              .filter((p) => p.featuredOrder !== null)
              .sort((a, b) => (a.featuredOrder ?? 0) - (b.featuredOrder ?? 0))
              .map((p) => (
                <li key={p.slug} className="flex items-center gap-2">
                  <span className="font-mono text-xs text-muted">
                    {String((p.featuredOrder ?? 0) + 1).padStart(2, "0")}
                  </span>
                  {p.content.pt.title}
                </li>
              ))}
          </ol>
        </div>
      )}
    </div>
  );
}

function DashboardCard({
  href,
  icon: Icon,
  title,
  stat,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  stat: string;
}) {
  return (
    <Link href={href} className="card card-hover flex items-start gap-4 p-6">
      <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
        <Icon className="size-5" />
      </span>
      <span>
        <span className="block font-semibold text-fg">{title}</span>
        <span className="mt-1 block text-sm text-muted">{stat}</span>
      </span>
    </Link>
  );
}
