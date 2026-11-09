import type { Metadata } from "next";
import { Navbar } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectsArchive } from "@/components/projects/ProjectsArchive";
import { getProjects } from "@/db/queries";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Projetos de Gabriel Barbosa: aplicações web, mobile e serviços com React, Next.js, React Native, TypeScript, Java e Python.",
  alternates: { canonical: "/projects" },
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <>
      <Navbar />
      <ProjectsArchive projects={projects} />
      <Footer />
    </>
  );
}
