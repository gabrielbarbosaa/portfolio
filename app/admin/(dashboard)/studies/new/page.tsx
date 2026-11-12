import { StudyForm } from "@/components/admin/StudyForm";

export default function NewStudyPage() {
  return (
    <div className="max-w-3xl space-y-6">
      <h1 className="text-2xl font-semibold text-fg">Novo estudo</h1>
      <StudyForm />
    </div>
  );
}
