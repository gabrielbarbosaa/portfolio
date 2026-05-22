"use client";

interface AuroraFieldProps {
  withGrid?: boolean;
  withScanlines?: boolean;
  withNoise?: boolean;
}

export function AuroraField({
  withGrid = true,
  withScanlines = true,
  withNoise = true,
}: AuroraFieldProps) {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden
    >
      {withGrid && <div className="absolute inset-0 hud-grid opacity-50" />}
      {withScanlines && <div className="absolute inset-0 scanlines" />}
      {withNoise && <div className="noise-overlay" />}
    </div>
  );
}
