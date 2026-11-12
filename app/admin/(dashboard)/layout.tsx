import Link from "next/link";
import { redirect } from "next/navigation";
import { BarChart3, FlaskConical, FolderKanban, LayoutDashboard, LogOut, Newspaper } from "lucide-react";
import { auth } from "@/auth";
import { signOutAction } from "@/db/mutations";

export const metadata = { robots: { index: false, follow: false } };

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  // O middleware já protege /admin/*, mas uma segunda checagem aqui não custa nada
  // e cobre o layout mesmo se o matcher do middleware um dia mudar.
  if (!session?.user) redirect("/admin/login");

  return (
    <div className="min-h-screen bg-subtle">
      <header className="border-b border-line bg-surface">
        <div className="container-page flex h-14 items-center justify-between">
          <nav className="flex items-center gap-1">
            <AdminNavLink href="/admin" icon={LayoutDashboard}>
              Painel
            </AdminNavLink>
            <AdminNavLink href="/admin/projects" icon={FolderKanban}>
              Projetos
            </AdminNavLink>
            <AdminNavLink href="/admin/studies" icon={FlaskConical}>
              Estudos
            </AdminNavLink>
            <AdminNavLink href="/admin/posts" icon={Newspaper}>
              Blog
            </AdminNavLink>
            <AdminNavLink href="/admin/analytics" icon={BarChart3}>
              Analytics
            </AdminNavLink>
          </nav>

          <div className="flex items-center gap-3">
            <span className="hidden text-sm text-muted sm:inline">{session.user.email ?? session.user.name}</span>
            <form action={signOutAction}>
              <button type="submit" className="btn btn-outline h-8 px-3 text-sm">
                <LogOut className="size-3.5" />
                Sair
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className="container-page py-10">{children}</main>
    </div>
  );
}

function AdminNavLink({
  href,
  icon: Icon,
  children,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-soft transition-colors hover:bg-surface-2 hover:text-fg"
    >
      <Icon className="size-4" />
      {children}
    </Link>
  );
}
