import { renderOg, ogSize } from "@/lib/og";
import { getStudies, getStudyBySlug } from "@/db/queries";

export const alt = "Projeto de estudo — Gabriel Barbosa";
export const size = ogSize;
export const contentType = "image/png";

export async function generateStaticParams() {
  const studies = await getStudies();
  return studies.map((study) => ({ slug: study.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = await getStudyBySlug(slug);

  if (!study) {
    return renderOg({ title: "Estudos", subtitle: "Gabriel Barbosa — Software Engineer" });
  }

  const { title, description } = study.content.pt;
  return renderOg({
    eyebrow: `Estudo · ${study.year}`,
    title,
    subtitle: description,
    tags: study.technologies,
  });
}
