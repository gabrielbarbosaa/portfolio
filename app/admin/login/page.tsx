import { Github, ShieldAlert } from "lucide-react";
import { signIn } from "@/auth";

const ERROR_MESSAGES: Record<string, string> = {
  AccessDenied: "Essa conta do GitHub não tem acesso ao admin.",
  Default: "Não foi possível entrar. Tente novamente.",
};

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; callbackUrl?: string }>;
}) {
  const { error, callbackUrl } = await searchParams;
  const message = error ? ERROR_MESSAGES[error] ?? ERROR_MESSAGES.Default : null;

  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="card w-full max-w-sm p-8 text-center">
        <h1 className="text-xl font-semibold text-fg">Admin</h1>
        <p className="mt-2 text-sm text-muted">
          Área restrita. Entre com a conta do GitHub autorizada.
        </p>

        {message && (
          <p className="mt-4 flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/10 px-3 py-2 text-left text-sm text-accent">
            <ShieldAlert className="size-4 shrink-0" />
            {message}
          </p>
        )}

        <form
          className="mt-6"
          action={async () => {
            "use server";
            await signIn("github", { redirectTo: callbackUrl || "/admin" });
          }}
        >
          <button type="submit" className="btn btn-primary w-full">
            <Github className="size-4" />
            Entrar com GitHub
          </button>
        </form>
      </div>
    </main>
  );
}
