import { renderOg, ogSize } from "@/lib/og";

export const alt = "Gabriel Barbosa — Software Engineer";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOg({
    eyebrow: "Porto Alegre, Brasil",
    title: "Software Engineer",
    subtitle:
      "Aplicações web, mobile e serviços back-end com React, Next.js, React Native, TypeScript, Java e Python.",
    tags: ["React", "Next.js", "TypeScript", "Java"],
  });
}
