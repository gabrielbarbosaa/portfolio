import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StudyDetail } from "@/components/studies/StudyDetail";
import { getStudy, studies } from "@/data/studies";

interface StudyPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return studies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: StudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getStudy(slug);

  if (!study) return { title: "Estudo não encontrado" };

  const { title, description } = study.content.pt;
  return {
    title,
    description,
    alternates: { canonical: `/studies/${study.slug}` },
    openGraph: { title, description, type: "article" },
  };
}

export default async function StudyPage({ params }: StudyPageProps) {
  const { slug } = await params;
  const study = getStudy(slug);

  if (!study) notFound();

  return (
    <>
      <Navbar />
      <StudyDetail study={study} />
      <Footer />
    </>
  );
}
