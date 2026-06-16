import { SITE } from "@/lib/site";
import CTAButtons from "./CTAButtons";
import GlitchTitle from "./GlitchTitle";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,70,85,0.25),transparent_50%),radial-gradient(circle_at_70%_70%,rgba(124,58,237,0.25),transparent_50%)]" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.04]" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[28vw] font-black tracking-tighter text-white/[0.03] select-none pointer-events-none leading-none">
        RAGE
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center pt-20 pb-24">
        <p className="mb-4 sm:mb-6 text-[10px] sm:text-sm font-mono uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[#ff4655] animate-pulse">
          // Offline LAN Event
        </p>
        <h1 className="text-5xl sm:text-8xl md:text-9xl font-black tracking-tighter text-white leading-[0.85]">
          <GlitchTitle>
            RAGE<span className="text-[#ff4655]">X</span>
          </GlitchTitle>
        </h1>
        <p className="mt-5 sm:mt-6 text-base sm:text-2xl text-white/70 font-light tracking-wide">
          {SITE.tagline}
        </p>
        <p className="mt-3 sm:mt-4 max-w-xl mx-auto text-sm sm:text-base text-white/50 px-2">
          {SITE.description}
        </p>

        <div className="mt-8 sm:mt-12 flex justify-center">
          <CTAButtons />
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-[10px] sm:text-xs uppercase tracking-widest">
        Scroll ↓
      </div>
    </section>
  );
}
