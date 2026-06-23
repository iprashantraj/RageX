import { SITE, type Game } from "@/lib/site";
import GameArt from "./GameArt";

type Props = {
  game: Game;
  index: number;
};

export default function GameCard({ game, index }: Props) {
  const reverse = index % 2 === 1;
  return (
    <div
      className={`group relative grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="relative aspect-[4/5] sm:aspect-[4/5] max-h-[70vh] overflow-hidden border border-white/10">
        {game.image ? (
          <img
            src={game.image}
            alt={game.title}
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
        ) : (
          <div
            className={`absolute inset-0 bg-gradient-to-br ${game.accent} opacity-80`}
          />
        )}
        <div className="absolute inset-0 bg-[url('/grid.svg')] mix-blend-overlay opacity-30" />
        <div
          className={`absolute inset-0 ${game.glow} group-hover:scale-105 transition-transform duration-700`}
        />
        {!game.image && (
          <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-10 opacity-50 group-hover:opacity-80 transition-opacity duration-700">
            <div className="w-2/3 h-2/3">
              <GameArt game={game.id as "valorant" | "tekken"} />
            </div>
          </div>
        )}
        {!game.hideTitle && (
          <div className="absolute inset-0 flex items-end p-6 sm:p-10">
            <h3 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white drop-shadow-2xl">
              {game.title}
            </h3>
          </div>
        )}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-white/80">
          0{index + 1} / GAME
        </div>
      </div>

      <div>
        <p className="text-sm font-mono uppercase tracking-[0.3em] text-white/40 mb-4">
          {game.subtitle}
        </p>

        <div className="mb-6 flex items-start gap-2 text-[#ff4655]">
          <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-sm sm:text-base font-bold uppercase tracking-widest">{SITE.prizePool}</p>
        </div>

        {game.id === "valorant" && (
          <div className="mb-6 border border-[#ff4655]/30 bg-[#ff4655]/5 p-4 rounded-sm flex items-start gap-3">
            <svg className="w-5 h-5 text-[#ff4655] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div>
              <h4 className="text-[#ff4655] font-bold text-sm uppercase tracking-wider mb-1">Bring Your Own Team</h4>
              <p className="text-white/70 text-xs sm:text-sm">Valorant registrations are team-based. Players must register with a complete pre-formed team.</p>
            </div>
          </div>
        )}

        <div className="space-y-4">
          {game.modes.map((mode) => (
            <div
              key={mode.name}
              className="border border-white/10 p-5 sm:p-6 hover:border-white/40 hover:bg-white/[0.02] transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4 mb-2">
                <h4 className="text-xl sm:text-2xl font-bold text-white">{mode.name}</h4>
                <span className="text-[10px] sm:text-xs font-mono text-white/40 uppercase tracking-wider">
                  {mode.format}
                </span>
              </div>
              <p className="text-sm sm:text-base text-white/60">{mode.blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
