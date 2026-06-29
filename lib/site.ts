export const SITE = {
  name: "RageX",
  tagline: "For Gamers, By Gamers",
  description:
    "RageX is where gamers compete, connect, and level up in competitive online tournaments.",
  instagramUrl: "https://www.instagram.com/rageee__x/",
  registerUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc4d26ngNuwQJeWyGOfwiM-QeDyPmyry4r-RbDT7bDYI82OKg/viewform?usp=dialog",
  date: "19-20 July 2026",
  prizePool: [
    "5v5: Winner can win upto 5k followed by runner up",
    "2v2: Winner can win upto 3k followed by runner up"
  ],
};

export type GameMode = {
  name: string;
  format: string;
  blurb: string;
  prize?: string;
};

export type Game = {
  id: string;
  title: string;
  subtitle: string;
  accent: string;
  glow: string;
  modes: GameMode[];
  image?: string;
  hideTitle?: boolean;
};

export const GAMES: Game[] = [
  {
    id: "valorant",
    title: "VALORANT",
    subtitle: "Tactical 5v5 / 2v2",
    accent: "from-[#ff4655] to-[#bd3944]",
    glow: "shadow-[0_0_80px_-10px_rgba(255,70,85,0.6)]",
    image: "/valo.jpeg",
    modes: [
      {
        name: "5v5 Standard",
        format: "Best of 3 · Single Elim",
        blurb: "Full team warfare. Plant, defuse, dominate. Swiftplay format — only the final is full length.",
        prize: "Winner can win upto 5k followed by runner up",
      },
      {
        name: "2v2 Showdown",
        format: "Best of 5 · Round Robin",
        blurb: "Two players. One map. Pure aim.",
        prize: "Winner can win upto 3k followed by runner up",
      },
    ],
  },
];
