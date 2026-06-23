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
                {Array.isArray(item.value) ? (
                  <div className="flex flex-col gap-1 sm:gap-2">
                    {item.value.map((v, idx) => (
                      <p key={idx} className="text-sm sm:text-base font-bold text-white leading-tight">
                        {v}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                    {item.value}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <div className="mt-8 border border-[#ff4655]/30 bg-[#ff4655]/5 p-5 sm:p-6 rounded-sm flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#ff4655]/10 shrink-0">
              <svg className="w-5 h-5 text-[#ff4655]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h4 className="text-[#ff4655] font-bold text-base sm:text-lg uppercase tracking-wider mb-1">Physical Attendance Required</h4>
              <p className="text-white/70 text-sm sm:text-base">This is an offline LAN event. All participants must be physically present at the venue to compete.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
