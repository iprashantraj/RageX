import CTAButtons from "./CTAButtons";
import Reveal from "./Reveal";

export default function JoinSection() {
  return (
    <section
      id="join"
      className="relative py-24 sm:py-40 px-4 sm:px-6 overflow-hidden border-t border-white/5"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ff4655]/10 to-transparent" />
      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[#ff4655] mb-4 sm:mb-6">
            // 03 · Enlist
          </p>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white leading-[0.9] mb-4 sm:mb-6">
            Ready to <span className="text-[#ff4655]">rage</span>?
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-xl mx-auto mb-8 sm:mb-12 px-2">
            Slots are limited. Lock yours in and meet the rest of the roster on
            Discord.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="flex justify-center">
            <CTAButtons />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
