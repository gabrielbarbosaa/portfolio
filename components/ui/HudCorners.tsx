"use client";

import { useEffect, useState } from "react";

export function HudCorners() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState("");

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const update = () => {
      const d = new Date();
      const hh = d.getUTCHours().toString().padStart(2, "0");
      const mm = d.getUTCMinutes().toString().padStart(2, "0");
      const ss = d.getUTCSeconds().toString().padStart(2, "0");
      setTime(`${hh}:${mm}:${ss} UTC`);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-30 hidden md:block">
      <CornerMark position="tl">
        SESSION {time}
      </CornerMark>
      <CornerMark position="tr">
        SCROLL-LOCK OFF · INPUT: HUMAN
      </CornerMark>
      <CornerMark position="bl">
        CURSOR{" "}
        <span className="text-[var(--text-soft)]">
          x:{String(coords.x).padStart(4, "0")} y:{String(coords.y).padStart(4, "0")}
        </span>
      </CornerMark>
      <CornerMark position="br">
        LAT -30.0277 · LON -51.2287
      </CornerMark>
    </div>
  );
}

function CornerMark({
  position,
  children,
}: {
  position: "tl" | "tr" | "bl" | "br";
  children: React.ReactNode;
}) {
  const positionClasses = {
    tl: "top-3 left-3",
    tr: "top-3 right-3",
    bl: "bottom-3 left-3",
    br: "bottom-3 right-3",
  } as const;

  const borderClasses = {
    tl: "border-t border-l",
    tr: "border-t border-r",
    bl: "border-b border-l",
    br: "border-b border-r",
  } as const;

  return (
    <div
      className={`absolute ${positionClasses[position]} flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--text-muted)]`}
    >
      <span
        className={`block w-3 h-3 ${borderClasses[position]} border-[var(--accent)]`}
      />
      <span className="hidden lg:inline">{children}</span>
    </div>
  );
}
