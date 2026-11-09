import { renderOg, ogSize } from "@/lib/og";
import { getProjectBySlug, getProjects } from "@/db/queries";

export const alt = "Projeto — Gabriel Barbosa";
export const size = ogSize;
export const contentType = "image/png";

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return renderOg({ title: "Projetos", subtitle: "Gabriel Barbosa — Software Engineer" });
  }

  const { title, description } = project.content.pt;
  return renderOg({
    eyebrow: `Projeto · ${project.year}`,
    title,
    subtitle: description,
    tags: project.technologies,
  });
}
