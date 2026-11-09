import Link from "next/link";
import { ProjectsTable } from "@/components/admin/ProjectsTable";
import { getProjects } from "@/db/queries";

export default async function AdminProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold text-fg">Projetos</h1>
        <Link href="/admin/projects/new" className="btn btn-primary">
          Novo projeto
        </Link>
      </div>
      <ProjectsTable projects={projects} />
    </div>
  );
}
