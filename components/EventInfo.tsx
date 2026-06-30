"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";
import Reveal from "./Reveal";

const PLACE_STYLES: Record<string, { label: string; ring: string; text: string; glow: string }> = {
  "1st": {
    label: "CHAMPION",
    ring: "border-[#ffb547]/60 bg-gradient-to-br from-[#ffb547]/15 to-transparent",
    text: "text-[#ffb547]",
    glow: "shadow-[0_0_40px_-10px_rgba(255,181,71,0.55)]",
  },
  "2nd": {
    label: "RUNNER-UP",
    ring: "border-white/30 bg-gradient-to-br from-white/10 to-transparent",
    text: "text-white",
    glow: "shadow-[0_0_28px_-12px_rgba(255,255,255,0.35)]",
  },
  "3rd": {
    label: "THIRD",
    ring: "border-[#cd7f32]/50 bg-gradient-to-br from-[#cd7f32]/10 to-transparent",
    text: "text-[#e8a063]",
    glow: "shadow-[0_0_24px_-12px_rgba(205,127,50,0.5)]",
  },
};

function useCountdown(target: Date) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target.getTime() - now);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  return { d, h, m, s };
}

function DayCard({
  day,
  label,
  mission,
  status,
  hp,
}: {
  day: string;
  label: string;
  mission: string;
  status: string;
  hp: number;
}) {
  return (
    <div className="relative border border-white/15 bg-black/70 p-4 sm:p-5 group hover:border-[#ff4655]/60 transition-all overflow-hidden">
      {/* scanline */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ff4655] to-transparent opacity-60 group-hover:animate-[sweep_1.5s_linear_infinite]" />
      {/* crosshair */}
      <div className="absolute top-2 right-2 w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity">
        <div className="absolute inset-x-0 top-1/2 h-px bg-[#ff4655]" />
        <div className="absolute inset-y-0 left-1/2 w-px bg-[#ff4655]" />
        <div className="absolute inset-0 border border-[#ff4655] rounded-full" />
      </div>

      <p className="text-[9px] font-mono uppercase tracking-[0.3em] text-[#ff4655] mb-1">{label}</p>
      <div className="flex items-baseline gap-2">
        <span className="text-6xl sm:text-7xl font-black text-white leading-none tracking-tighter group-hover:text-[#ff4655] transition-colors">
          {day}
        </span>
        <span className="text-sm font-mono uppercase tracking-widest text-white/40">JUL</span>
      </div>

      <p className="mt-3 text-xs font-mono uppercase tracking-[0.2em] text-white/50">
        <span className="text-[#ff4655]">MISSION:</span> {mission}
      </p>

      {/* HP bar */}
      <div className="mt-4">
        <div className="flex items-center justify-between text-[9px] font-mono uppercase tracking-[0.25em] text-white/40 mb-1">
          <span>{status}</span>
          <span className="text-[#ff4655]">{hp}%</span>
        </div>
        <div className="h-1.5 w-full bg-white/10 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#ff4655] to-[#ffb547] transition-all duration-1000"
            style={{ width: `${hp}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default function EventInfo() {
  const { d, h, m, s } = useCountdown(new Date("2026-07-18T10:00:00+05:30"));

  return (
    <section
      id="event"
      className="relative py-20 sm:py-32 px-4 sm:px-6 border-y border-white/5 overflow-hidden"
    >
      {/* ambient backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-[#ff4655]/10 blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 -right-32 w-[520px] h-[520px] rounded-full bg-[#ffb547]/10 blur-3xl animate-pulse [animation-delay:1.2s]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[#ff4655] mb-3">
            {"// 02 · The Event"}
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-10 sm:mb-16">
            Mark your calendar.
          </h2>
        </Reveal>

        {/* Tactical Date HUD */}
        <Reveal>
          <div className="relative border border-white/10 bg-gradient-to-br from-black via-zinc-950 to-black overflow-hidden mb-20 sm:mb-32">
            {/* HUD frame */}
            <span className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#ff4655]" />
            <span className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-[#ff4655]" />
            <span className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-[#ff4655]" />
            <span className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#ff4655]" />

            {/* sweep beam */}
            <div className="absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-[#ff4655]/8 to-transparent animate-[sweep_4s_linear_infinite] pointer-events-none" />

            {/* HUD topbar */}
            <div className="relative flex items-center justify-between px-4 sm:px-6 py-2 border-b border-white/10 bg-black/40 font-mono text-[10px] uppercase tracking-[0.3em]">
              <div className="flex items-center gap-3 text-[#ff4655]">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ff4655] animate-pulse" />
                LIVE OPS · TOURNAMENT INTEL
              </div>
              <div className="hidden sm:flex items-center gap-4 text-white/40">
                <span>LAT 28.6° N</span>
                <span>LONG 77.2° E</span>
                <span className="text-[#00ff88]">SYS · OK</span>
              </div>
            </div>

            <div className="relative p-5 sm:p-8 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-start">
              {/* Day cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <DayCard
                  day="18"
                  label="Day 01 / Saturday"
                  mission="Group Stage · Skirmish · 2v2"
                  status="Bracket Lock"
                  hp={75}
                />
                <DayCard
                  day="19"
                  label="Day 02 / Sunday"
                  mission="Playoffs · 1v1 · Grand Final"
                  status="Bracket Lock"
                  hp={100}
                />
              </div>

              {/* Countdown HUD */}
              <div className="relative w-full lg:w-[320px] border border-[#ff4655]/30 bg-black/60 p-4 sm:p-5">
                <p className="text-[9px] font-mono uppercase tracking-[0.3em] text-[#ff4655] mb-3 flex items-center gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ff4655] animate-ping" />
                  Drop In · T-Minus
                </p>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { v: d, l: "DAY" },
                    { v: h, l: "HRS" },
                    { v: m, l: "MIN" },
                    { v: s, l: "SEC" },
                  ].map((u) => (
                    <div
                      key={u.l}
                      className="border border-white/10 bg-black/80 px-2 py-2 text-center"
                    >
                      <div className="text-2xl sm:text-3xl font-black text-white leading-none tabular-nums">
                        {String(u.v).padStart(2, "0")}
                      </div>
                      <div className="mt-1 text-[8px] font-mono tracking-[0.25em] text-white/40">
                        {u.l}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.25em]">
                  <span className="text-white/40">REGISTRATION</span>
                  <span className="text-[#00ff88] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-pulse" />
                    OPEN
                  </span>
                </div>
                <div className="mt-2 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.25em]">
                  <span className="text-white/40">VENUE</span>
                  <span className="text-white">ONLINE</span>
                </div>
              </div>
            </div>

            {/* HUD bottom strip */}
            <div className="relative border-t border-white/10 bg-black/40 px-4 sm:px-6 py-2 font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 flex items-center justify-between">
              <span>// PUSH · DEFUSE · DOMINATE</span>
              <span className="text-[#ff4655] hidden sm:inline">GLHF · GG WP</span>
            </div>
          </div>
        </Reveal>

        {/* Prize Pool — big section heading */}
        <Reveal>
          <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[#ff4655] mb-3">
            {"// 03 · The Prize Pool"}
          </p>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white mb-3">
            Cash on the line.
          </h2>
          <div className="mb-10 sm:mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <p className="text-sm sm:text-base text-white/50 max-w-lg">
              Across all formats. Winner takes glory — runners-up walk away paid.
            </p>
            <div className="text-5xl sm:text-7xl md:text-8xl font-black leading-none">
              <span className="bg-gradient-to-r from-[#ffb547] via-[#ff4655] to-[#ffb547] bg-clip-text text-transparent bg-[length:200%_100%] animate-[shimmer_4s_linear_infinite]">
                ₹19,500+
              </span>
            </div>
          </div>
        </Reveal>

        {/* Prize cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {SITE.prizeBreakdown.map((bracket, i) => (
            <Reveal key={bracket.mode} delay={i * 140}>
              <div className="relative h-full border border-white/10 bg-black/60 backdrop-blur-sm p-5 sm:p-6 hover:border-[#ff4655]/50 hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff4655]/0 via-transparent to-[#ffb547]/0 group-hover:from-[#ff4655]/10 group-hover:to-[#ffb547]/10 transition-all duration-500 pointer-events-none" />

                <div className="relative flex items-start justify-between mb-5">
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/40 mb-1">
                      0{i + 1} · Bracket
                    </p>
                    <h4 className="text-lg sm:text-xl font-bold text-white">
                      {bracket.mode}
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-[#ff4655] border border-[#ff4655]/40 px-2 py-1 tracking-wider">
                    {bracket.total}
                  </span>
                </div>

                <div className="relative space-y-2">
                  {bracket.positions.map((pos) => {
                    const stl = PLACE_STYLES[pos.place];
                    return (
                      <div
                        key={pos.place}
                        className={`flex items-center justify-between border ${stl.ring} ${stl.glow} px-3 py-2.5 transition-transform duration-300 group-hover:translate-x-1`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`text-xl font-black ${stl.text}`}>
                            {pos.place}
                          </span>
                          <span className={`text-[9px] font-mono tracking-[0.2em] ${stl.text} opacity-70`}>
                            {stl.label}
                          </span>
                        </div>
                        <span className={`text-base sm:text-lg font-bold ${stl.text}`}>
                          {pos.amount}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
