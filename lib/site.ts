export const SITE = {
  name: "RageX",
  tagline: "For Gamers, By Gamers",
  description:
    "A community-driven gaming platform hosting LAN events, online tournaments, and competitive battles. Join the current LAN showdown and gear up for what's next.",
  discordUrl: "https://discord.gg/your-invite",
  registerUrl: "https://forms.gle/your-form",
  date: "TBA",
  venue: "TBA",
  prizePool: "TBA",
};

export type GameMode = {
  name: string;
  format: string;
  blurb: string;
};

export type Game = {
  id: string;
  title: string;
  subtitle: string;
  accent: string;
  glow: string;
  modes: GameMode[];
};

export const GAMES: Game[] = [
  {
    id: "valorant",
    title: "VALORANT",
    subtitle: "Tactical 5v5 / 2v2",
    accent: "from-[#ff4655] to-[#bd3944]",
    glow: "shadow-[0_0_80px_-10px_rgba(255,70,85,0.6)]",
    modes: [
      {
        name: "5v5 Standard",
        format: "Best of 3 · Single Elim",
        blurb: "Full team warfare. Plant, defuse, dominate.",
      },
      {
        name: "2v2 Showdown",
        format: "Best of 5 · Round Robin",
        blurb: "Two players. One map. Pure aim.",
      },
    ],
  },
  {
    id: "tekken",
    title: "TEKKEN",
    subtitle: "1v1 King of Iron Fist",
    accent: "from-[#7c3aed] to-[#facc15]",
    glow: "shadow-[0_0_80px_-10px_rgba(124,58,237,0.6)]",
    modes: [
      {
        name: "1v1 Duel",
        format: "Best of 5 · Double Elim",
        blurb: "Frame by frame. No mercy. No excuses.",
      },
    ],
  },
];
