import { ImageResponse } from "next/og";

/** Tamanho padrão de Open Graph (LinkedIn, WhatsApp, X, Slack...). */
export const ogSize = { width: 1200, height: 630 };

interface OgOptions {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  tags?: string[];
}

/** Corta no último espaço antes do limite, sem quebrar palavras. */
const truncate = (text: string, max: number) => {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return `${(lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut).replace(/[\s,.;:]+$/, "")}…`;
};

/** Gera a imagem de compartilhamento com a identidade visual do site (tema escuro). */
export function renderOg({ eyebrow, title, subtitle, tags = [] }: OgOptions) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0b0b12",
          backgroundImage:
            "radial-gradient(circle at 92% 0%, rgba(167, 139, 250, 0.30), transparent 55%)",
          color: "#ededf3",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#a78bfa",
              color: "#0b0b12",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            GB
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#c3c3cf" }}>
            Gabriel Barbosa
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {eyebrow && (
            <div
              style={{
                display: "flex",
                fontSize: 24,
                color: "#a78bfa",
                textTransform: "uppercase",
                letterSpacing: 3,
              }}
            >
              {eyebrow}
            </div>
          )}
          <div
            style={{
              display: "flex",
              fontSize: title.length > 40 ? 48 : title.length > 22 ? 58 : 78,
              fontWeight: 700,
              lineHeight: 1.1,
              marginTop: 16,
              letterSpacing: -1,
            }}
          >
            {truncate(title, 70)}
          </div>
          {subtitle && (
            <div
              style={{
                display: "flex",
                fontSize: 28,
                color: "#c3c3cf",
                marginTop: 20,
                lineHeight: 1.4,
                maxWidth: 1000,
              }}
            >
              {truncate(subtitle, 115)}
            </div>
          )}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", gap: 12 }}>
            {tags.slice(0, 4).map((tag) => (
              <div
                key={tag}
                style={{
                  display: "flex",
                  padding: "8px 18px",
                  borderRadius: 999,
                  border: "1px solid #31313f",
                  background: "#13131c",
                  fontSize: 22,
                  color: "#c3c3cf",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", fontSize: 22, color: "#8e8e9f" }}>
            gabrielbarbosa.vercel.app
          </div>
        </div>
      </div>
    ),
    ogSize
  );
}
