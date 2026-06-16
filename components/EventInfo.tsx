import { SITE } from "@/lib/site";
import Reveal from "./Reveal";

const items = [
  { label: "Date", value: SITE.date },
  { label: "Venue", value: SITE.venue },
  { label: "Prize Pool", value: SITE.prizePool },
];

export default function EventInfo() {
  return (
    <section id="event" className="relative py-20 sm:py-32 px-4 sm:px-6 border-y border-white/5">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[#ff4655] mb-3">
            // 01 · The Event
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-10 sm:mb-16">
            Mark your calendar.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          {items.map((item, i) => (
            <Reveal key={item.label} delay={i * 120}>
              <div className="bg-black p-6 sm:p-10 h-full">
                <p className="text-[10px] sm:text-xs uppercase tracking-widest text-white/40 mb-2 sm:mb-4">
                  {item.label}
                </p>
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  {item.value}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
