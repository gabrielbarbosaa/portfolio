import { notFound } from "next/navigation";
import { StudyForm } from "@/components/admin/StudyForm";
import { getStudyBySlug } from "@/db/queries";

export default async function EditStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = await getStudyBySlug(slug);
  if (!study) notFound();

  return (
    <div className="max-w-3xl space-y-6">
      <h1 className="text-2xl font-semibold text-fg">Editar estudo</h1>
      <StudyForm study={study} />
    </div>
  );
}
