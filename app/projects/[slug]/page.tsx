import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HudCorners } from "@/components/ui/HudCorners";
import { ProjectDetail } from "@/components/projects/ProjectDetail";
import { getProjectBySlug, projects } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Mission not found — Gabriel Barbosa" };
  }

  return {
    title: `${project.title} — Mission Control / Gabriel Barbosa`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const missionIndex = projects.findIndex((p) => p.slug === project.slug);
  const code = String(missionIndex + 1).padStart(3, "0");

  return (
    <div className="min-h-screen relative">
      <HudCorners />
      <Navbar />
      <ProjectDetail project={project} code={code} />
      <Footer />
    </div>
  );
}
