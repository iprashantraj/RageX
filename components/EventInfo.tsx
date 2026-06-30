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

export default function EventInfo() {
  return (
    <section id="event" className="relative py-20 sm:py-32 px-4 sm:px-6 border-y border-white/5 overflow-hidden">
      {/* ambient backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-[#ff4655]/10 blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 -right-32 w-[520px] h-[520px] rounded-full bg-[#ffb547]/10 blur-3xl animate-pulse [animation-delay:1.2s]" />
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

        {/* Date strip */}
        <Reveal>
          <div className="mb-12 sm:mb-16 border border-white/10 bg-black p-6 sm:p-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 group hover:border-white/30 transition-colors">
            <div>
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-white/40 mb-2">
                Date
              </p>
              <p className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
                {SITE.date}
              </p>
            </div>
            <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.3em] text-[#ff4655] opacity-80 group-hover:opacity-100 transition">
              Online · Two days · One champion
            </p>
          </div>
        </Reveal>

        {/* Prize pool headline */}
        <Reveal>
          <div className="mb-8 sm:mb-10 flex items-end justify-between flex-wrap gap-4">
            <div>
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-white/40 mb-2">
                Prize Pool
              </p>
              <h3 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-[#ffb547] via-[#ff4655] to-[#ffb547] bg-clip-text text-transparent bg-[length:200%_100%] animate-[shimmer_4s_linear_infinite]">
                  ₹19,500+
                </span>
              </h3>
              <p className="text-sm sm:text-base text-white/50 mt-2">
                Across all formats. Winner takes glory — runners-up walk away paid.
              </p>
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
                    const s = PLACE_STYLES[pos.place];
                    return (
                      <div
                        key={pos.place}
                        className={`flex items-center justify-between border ${s.ring} ${s.glow} px-3 py-2.5 transition-transform duration-300 group-hover:translate-x-1`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`text-xl font-black ${s.text}`}>
                            {pos.place}
                          </span>
                          <span className={`text-[9px] font-mono tracking-[0.2em] ${s.text} opacity-70`}>
                            {s.label}
                          </span>
                        </div>
                        <span className={`text-base sm:text-lg font-bold ${s.text}`}>
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
