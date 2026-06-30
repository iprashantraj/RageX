"use client";

import { useEffect, useState } from "react";

const TARGET = new Date("2026-07-18T10:00:00+05:30");

export default function CountdownBadge() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  if (now === null) return null;

  const diff = Math.max(0, TARGET.getTime() - now);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);

  const units = [
    { v: d, l: "D" },
    { v: h, l: "H" },
    { v: m, l: "M" },
    { v: s, l: "S" },
  ];

  return (
    <a
      href="#event"
      aria-label="Jump to event details"
      className="fixed z-40 bottom-4 right-4 sm:bottom-6 sm:right-6 group"
    >
      <div className="relative border border-[#ff4655]/40 bg-black/80 backdrop-blur-md px-3 py-2 sm:px-4 sm:py-2.5 hover:border-[#ff4655] transition-all hover:-translate-y-0.5 shadow-[0_0_30px_-10px_rgba(255,70,85,0.55)]">
        {/* corner ticks */}
        <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#ff4655]" />
        <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#ff4655]" />
        <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#ff4655]" />
        <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#ff4655]" />

        <p className="text-[8px] sm:text-[9px] font-mono uppercase tracking-[0.3em] text-[#ff4655] mb-1 flex items-center gap-1.5">
          <span className="inline-block w-1 h-1 rounded-full bg-[#ff4655] animate-pulse" />
          Drop-in T-Minus
        </p>
        <div className="flex items-baseline gap-1 sm:gap-1.5 font-mono tabular-nums">
          {units.map((u, i) => (
            <div key={u.l} className="flex items-baseline">
              <span className="text-base sm:text-lg font-black text-white leading-none">
                {String(u.v).padStart(2, "0")}
              </span>
              <span className="text-[8px] sm:text-[9px] text-white/40 ml-0.5">{u.l}</span>
              {i < units.length - 1 && (
                <span className="text-white/20 mx-1 sm:mx-1.5">:</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </a>
  );
}
