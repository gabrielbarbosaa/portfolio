import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

/**
 * Logins do GitHub autorizados a entrar no /admin (lista separada por vírgula em
 * ADMIN_GITHUB_LOGIN). Sem essa variável configurada, ninguém consegue entrar.
 */
const allowedLogins = (process.env.ADMIN_GITHUB_LOGIN ?? "")
  .split(",")
  .map((login) => login.trim().toLowerCase())
  .filter(Boolean);

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],
  pages: { signIn: "/admin/login" },
  session: { strategy: "jwt" },
  callbacks: {
    // GitHub provider expõe o campo `login` (o @usuário) no profile bruto.
    async signIn({ profile }) {
      const login = (profile as { login?: string } | undefined)?.login?.toLowerCase();
      if (allowedLogins.length === 0) {
        console.error("[auth] ADMIN_GITHUB_LOGIN não configurada: nenhum login é permitido.");
        return false;
      }
      return Boolean(login && allowedLogins.includes(login));
    },
  },
});
