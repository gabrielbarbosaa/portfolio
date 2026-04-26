"use client";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-secondary)]/50">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="font-mono text-lg font-bold text-[var(--text-primary)]">
              GB<span className="text-[var(--accent)]">.</span>
            </span>
            <p className="text-sm text-[var(--text-muted)]">
              © {new Date().getFullYear()} Gabriel Barbosa. Todos os direitos reservados.
            </p>
          </div>
          <p className="text-sm text-[var(--text-muted)]">
            Feito com <span className="text-[var(--accent-warm)]">❤️</span> e muito ☕
          </p>
        </div>
      </div>
    </footer>
  );
}
