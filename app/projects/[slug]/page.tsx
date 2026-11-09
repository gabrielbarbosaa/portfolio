import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectDetail } from "@/components/projects/ProjectDetail";
import { getProjectBySlug, getProjects } from "@/db/queries";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) return { title: "Projeto não encontrado" };

  const { title, description } = project.content.pt;
  return {
    title,
    description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { title, description, type: "article" },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <>
      <Navbar />
      <ProjectDetail project={project} />
      <Footer />
    </>
  );
}
