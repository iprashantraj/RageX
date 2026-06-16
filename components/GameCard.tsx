import type { Game } from "@/lib/site";
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
        <div
          className={`absolute inset-0 bg-gradient-to-br ${game.accent} opacity-80`}
        />
        <div className="absolute inset-0 bg-[url('/grid.svg')] mix-blend-overlay opacity-30" />
        <div
          className={`absolute inset-0 ${game.glow} group-hover:scale-105 transition-transform duration-700`}
        />
        <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-10 opacity-50 group-hover:opacity-80 transition-opacity duration-700">
          <div className="w-2/3 h-2/3">
            <GameArt game={game.id as "valorant" | "tekken"} />
          </div>
        </div>
        <div className="absolute inset-0 flex items-end p-6 sm:p-10">
          <h3 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white drop-shadow-2xl">
            {game.title}
          </h3>
        </div>
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-white/80">
          0{index + 1} / GAME
        </div>
      </div>

      <div>
        <p className="text-sm font-mono uppercase tracking-[0.3em] text-white/40 mb-4">
          {game.subtitle}
        </p>
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
