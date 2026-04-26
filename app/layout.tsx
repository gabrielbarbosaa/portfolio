import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gabriel Barbosa — Desenvolvedor Front-End & Mobile",
  description:
    "Desenvolvedor Front-End e Mobile especializado em React, Next.js e React Native. 5+ anos de experiência criando aplicações web e mobile de alta performance.",
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
    title: "Gabriel Barbosa — Desenvolvedor Front-End & Mobile",
    description: "React · Next.js · TypeScript · React Native",
    siteName: "Gabriel Barbosa Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Barbosa — Dev Front-End & Mobile",
    description:
      "Desenvolvedor Front-End e Mobile especializado em React, Next.js e React Native.",
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
        className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
