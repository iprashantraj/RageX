import { GAMES } from "@/lib/site";
import GameCard from "./GameCard";
import Reveal from "./Reveal";

export default function GamesSection() {
  return (
    <section id="games" className="relative py-20 sm:py-32 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[#ff4655] mb-3">
            // 02 · The Games
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-3 sm:mb-4">
            Two titles. One arena.
          </h2>
          <p className="text-sm sm:text-base text-white/50 max-w-xl mb-12 sm:mb-20">
            Pick your weapon. Compete across multiple formats designed to test
            every aspect of your game.
          </p>
        </Reveal>

        <div className="space-y-20 sm:space-y-32">
          {GAMES.map((game, i) => (
            <Reveal key={game.id} delay={i * 100}>
              <GameCard game={game} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
