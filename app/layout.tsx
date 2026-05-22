import type { Metadata } from "next";
import { Unbounded, Geist, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { I18nProvider } from "@/lib/i18n/I18nProvider";
import { SoftAura } from "@/components/background/SoftAura";
import "./globals.css";

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gabriel Barbosa — Mission Control / Front-End & Mobile",
  description:
    "Console operativo de Gabriel Barbosa. Desenvolvedor Sênior Front-End & Mobile especializado em React, Next.js, React Native e TypeScript.",
  keywords: [
    "Front-End",
    "React",
    "Next.js",
    "React Native",
    "TypeScript",
    "Porto Alegre",
    "Desenvolvedor",
    "Mobile",
  ],
  authors: [
    { name: "Gabriel Barbosa", url: "https://gabrielbarbosa.vercel.app" },
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://gabrielbarbosa.vercel.app",
    title: "Gabriel Barbosa — Mission Control",
    description: "React · Next.js · TypeScript · React Native",
    siteName: "Gabriel Barbosa Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Barbosa — Mission Control",
    description:
      "Console operativo. Front-End & Mobile especializado em React, Next.js, React Native.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${unbounded.variable} ${geist.variable} ${jetbrainsMono.variable}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <I18nProvider>
            <SoftAura />
            <div className="relative z-10">{children}</div>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
