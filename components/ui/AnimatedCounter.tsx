"use client";

import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  label: string;
  duration?: number;
}

export function AnimatedCounter({
  end,
  suffix = "",
  label,
  duration = 2000,
}: AnimatedCounterProps) {
  const { count, ref } = useAnimatedCounter({ end, duration });

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl md:text-5xl font-bold text-[var(--accent)] mb-2">
        {count}
        {suffix}
      </div>
      <p className="text-sm text-[var(--text-secondary)] font-body">{label}</p>
    </div>
  );
}
