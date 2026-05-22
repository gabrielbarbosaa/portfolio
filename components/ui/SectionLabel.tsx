"use client";

interface SectionLabelProps {
  index: string;
  total: string;
  label: string;
  title: string;
  subtitle?: string;
}

export function SectionLabel({
  index,
  total,
  label,
  title,
  subtitle,
}: SectionLabelProps) {
  return (
    <div className="mb-16 max-w-3xl">
      <div className="flex items-center gap-4 mb-6">
        <span className="font-mono text-xs tracking-[0.22em] text-[var(--accent)] uppercase">
          {index} / {total}
        </span>
        <span className="h-px flex-1 max-w-[80px] bg-[var(--border-strong)]" />
        <span className="font-mono text-xs tracking-[0.22em] text-[var(--text-muted)] uppercase">
          {label}
        </span>
      </div>
      <h2 className="font-display text-4xl md:text-6xl font-bold text-[var(--text)] leading-[0.95]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base md:text-lg text-[var(--text-soft)] leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
