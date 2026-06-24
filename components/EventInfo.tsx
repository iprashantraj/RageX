import { SITE } from "@/lib/site";
import Reveal from "./Reveal";

const items = [
  { label: "Date", value: SITE.date },
  { label: "Venue", value: SITE.venue },
  { label: "Prize Pool", value: SITE.prizePool },
];

const MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.5!2d85.333!3d23.354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sHexa+Gaming!5e0!3m2!1sen!2sin!4v1700000000000";

const MAPS_SEARCH_URL =
  "https://www.google.com/maps/search/?api=1&query=Hexa+Gaming+Lalpur+Ranchi";

export default function EventInfo() {
  return (
    <section id="event" className="relative py-20 sm:py-32 px-4 sm:px-6 border-y border-white/5">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[#ff4655] mb-3">
            {"// 02 · The Event"}
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

        <Reveal delay={300}>
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

        {/* Google Maps Venue Preview */}
        <Reveal delay={400}>
          <a
            href={MAPS_SEARCH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block mt-8 border border-white/10 hover:border-[#ff4655]/40 rounded-sm overflow-hidden transition-all duration-500"
          >
            {/* Map embed container */}
            <div className="relative w-full h-[220px] sm:h-[280px] md:h-[320px] overflow-hidden">
              <iframe
                src={MAPS_EMBED_URL}
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{
                  border: 0,
                  filter: "invert(90%) hue-rotate(180deg) saturate(0.3) contrast(1.1) brightness(0.7)",
                }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hexa Gaming — Venue Location"
              />

              {/* Dark overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 group-hover:from-black/60 group-hover:via-black/10 group-hover:to-black/20 transition-all duration-500" />

              {/* Scanline texture on the map */}
              <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.015)_2px,rgba(255,255,255,0.015)_4px)] pointer-events-none" />

              {/* Bottom info bar */}
              <div className="absolute bottom-0 inset-x-0 flex items-end justify-between p-4 sm:p-6">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#ff4655] animate-pulse" />
                    <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#ff4655]">
                      Live Location
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-0.5">
                    {SITE.venue}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/50">
                    Tharpakhna, Lalpur, Ranchi — 834001
                  </p>
                </div>

                <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 group-hover:border-[#ff4655]/50 group-hover:bg-[#ff4655]/10 rounded-sm transition-all duration-300">
                  <svg
                    className="w-4 h-4 text-white/50 group-hover:text-[#ff4655] transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/60 group-hover:text-white transition-colors hidden sm:inline">
                    Open in Maps
                  </span>
                </div>
              </div>
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
