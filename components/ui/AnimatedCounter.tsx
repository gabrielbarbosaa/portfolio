"use client";

import { useEffect, useState } from "react";
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
  const [scrambled, setScrambled] = useState("0");

  useEffect(() => {
    if (count < end) {
      const noise = Math.floor(Math.random() * 9);
      setScrambled(`${count + noise}`);
    } else {
      setScrambled(`${end}`);
    }
  }, [count, end]);

  return (
    <div ref={ref} className="relative">
      <div className="flex items-baseline gap-1">
        <span className="font-display text-5xl md:text-6xl font-bold tabular-nums text-[var(--text)] leading-none">
          {scrambled}
        </span>
        <span className="font-display text-2xl md:text-3xl text-[var(--accent)] font-bold leading-none">
          {suffix}
        </span>
      </div>
      <p className="mt-3 font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--text-muted)]">
        {label}
      </p>
    </div>
  );
}
