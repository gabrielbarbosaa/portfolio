import { notFound } from "next/navigation";
import { ProjectForm } from "@/components/admin/ProjectForm";
import { getProjectBySlug } from "@/db/queries";

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="max-w-3xl space-y-6">
      <h1 className="text-2xl font-semibold text-fg">Editar projeto</h1>
      <ProjectForm project={project} />
    </div>
  );
}
