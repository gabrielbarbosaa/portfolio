import type { Metadata } from "next";
import { Navbar } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HudCorners } from "@/components/ui/HudCorners";
import { ProjectsArchive } from "@/components/projects/ProjectsArchive";

export const metadata: Metadata = {
  title: "Archive — Gabriel Barbosa / Mission Control",
  description:
    "Archive completo das missões deployadas por Gabriel Barbosa: aplicações web e mobile com React, Next.js, React Native e TypeScript.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen relative">
      <HudCorners />
      <Navbar />
      <ProjectsArchive />
      <Footer />
    </div>
  );
}
