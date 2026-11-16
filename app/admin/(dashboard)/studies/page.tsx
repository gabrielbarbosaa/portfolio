import Link from "next/link";
import { StudiesTable } from "@/components/admin/StudiesTable";
import { getStudiesAdmin } from "@/db/queries";

export default async function AdminStudiesPage() {
  const studies = await getStudiesAdmin();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold text-fg">Estudos</h1>
        <Link href="/admin/studies/new" className="btn btn-primary">
          Novo estudo
        </Link>
      </div>
      <StudiesTable studies={studies} />
    </div>
  );
}
