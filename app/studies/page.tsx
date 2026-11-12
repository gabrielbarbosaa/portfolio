import type { Metadata } from "next";
import { Navbar } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StudiesArchive } from "@/components/studies/StudiesArchive";

export const metadata: Metadata = {
  title: "Projetos de estudo",
  description:
    "Projetos pessoais e de estudo de Gabriel Barbosa, com código aberto no GitHub: arquitetura, ferramentas e ideias novas.",
  alternates: { canonical: "/studies" },
};

export default function StudiesPage() {
  return (
    <>
      <Navbar />
      <StudiesArchive />
      <Footer />
    </>
  );
}
