"use client";

import { useEffect, useRef } from "react";

export function SoftAura() {
  const rootRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const parallax = parallaxRef.current;
    if (!root || !parallax) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let running = true;
    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let cx = tx;
    let cy = ty;
    let tpx = 0;
    let tpy = 0;
    let px = 0;
    let py = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      const cw = window.innerWidth / 2;
      const ch = window.innerHeight / 2;
      tpx = ((e.clientX - cw) / cw) * 36;
      tpy = ((e.clientY - ch) / ch) * 36;
    };

    const onTouch = (e: TouchEvent) => {
      if (e.touches[0]) {
        tx = e.touches[0].clientX;
        ty = e.touches[0].clientY;
      }
    };

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!running) {
        running = true;
        raf = requestAnimationFrame(tick);
      }
    };

    const tick = () => {
      if (!running) return;
      cx += (tx - cx) * 0.09;
      cy += (ty - cy) * 0.09;
      px += (tpx - px) * 0.04;
      py += (tpy - py) * 0.04;
      root.style.setProperty("--mx", `${cx}px`);
      root.style.setProperty("--my", `${cy}px`);
      parallax.style.transform = `translate3d(${px}px, ${py}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onTouch, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      running = false;
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="soft-aura fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden
    >
      <div ref={parallaxRef} className="soft-aura-parallax">
        <div className="soft-aura-blob soft-aura-blob-1" />
        <div className="soft-aura-blob soft-aura-blob-2" />
        <div className="soft-aura-blob soft-aura-blob-3" />
      </div>
      <div className="soft-aura-spot" />
    </div>
  );
}
