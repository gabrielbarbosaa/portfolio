import { NextResponse } from "next/server";
import { auth } from "@/auth";

/** Protege tudo sob /admin: sem sessão válida, redireciona para o login. */
export default auth((req) => {
  const { pathname } = req.nextUrl;
  const isLoginPage = pathname === "/admin/login";
  const isLoggedIn = Boolean(req.auth);

  if (!isLoggedIn && !isLoginPage) {
    const url = new URL("/admin/login", req.nextUrl.origin);
    url.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(url);
  }

  if (isLoggedIn && isLoginPage) {
    return NextResponse.redirect(new URL("/admin", req.nextUrl.origin));
  }
});

export const config = { matcher: ["/admin/:path*"] };
