import type { Metadata, Viewport } from "next";
import { Rubik, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { I18nProvider } from "@/lib/i18n/I18nProvider";
import { SITE_URL } from "@/lib/site";
import { profile } from "@/data/profile";
import { getPosts, getProjects } from "@/db/queries";
import { SiteDataProvider, type SiteData } from "@/components/SiteDataProvider";
import { PageviewTracker } from "@/components/PageviewTracker";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
  display: "swap",
});

const DESCRIPTION =
  "Gabriel Barbosa, Software Engineer em Porto Alegre com mais de 5 anos construindo aplicações web, mobile e serviços back-end com React, Next.js, React Native, TypeScript, Java e Python.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Gabriel Barbosa — Software Engineer",
    template: "%s — Gabriel Barbosa",
  },
  description: DESCRIPTION,
  keywords: [
    "Software Engineer",
    "Front-end",
    "Back-end",
    "React",
    "Next.js",
    "React Native",
    "TypeScript",
    "Java",
    "Python",
    "Node.js",
    "Nest.js",
    "PostgreSQL",
    "MongoDB",
    "Porto Alegre",
  ],
  authors: [{ name: "Gabriel Barbosa", url: SITE_URL }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    title: "Gabriel Barbosa — Software Engineer",
    description: DESCRIPTION,
    siteName: "Gabriel Barbosa",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Barbosa — Software Engineer",
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b12" },
  ],
};

/** Dados estruturados: ajudam o Google a associar o site ao seu nome e perfis. */
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Gabriel Barbosa Azevedo",
  alternateName: "Gabriel Barbosa",
  url: SITE_URL,
  jobTitle: "Software Engineer",
  worksFor: { "@type": "Organization", name: "ATF Credit" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Porto Alegre",
    addressRegion: "RS",
    addressCountry: "BR",
  },
  sameAs: [profile.linkedin, profile.github],
  knowsAbout: [
    "Software Engineering",
    "React",
    "Next.js",
    "React Native",
    "TypeScript",
    "Java",
    "Python",
    "Node.js",
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [projects, posts] = await Promise.all([getProjects(), getPosts()]);
  const siteData: SiteData = {
    projects: projects.map((p) => ({
      slug: p.slug,
      client: p.client,
      technologies: p.technologies,
      titles: { pt: p.content.pt.title, en: p.content.en.title, es: p.content.es.title },
    })),
    hasPosts: posts.length > 0,
  };

  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${rubik.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <I18nProvider>
            <SiteDataProvider value={siteData}>
              <PageviewTracker />
              {children}
            </SiteDataProvider>
          </I18nProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
