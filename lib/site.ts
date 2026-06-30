export const SITE = {
  name: "RageX",
  tagline: "For Gamers, By Gamers",
  description:
    "RageX is where gamers compete, connect, and level up in competitive online tournaments.",
  instagramUrl: "https://www.instagram.com/rageee__x/",
  registerUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc4d26ngNuwQJeWyGOfwiM-QeDyPmyry4r-RbDT7bDYI82OKg/viewform?usp=dialog",
  date: "19-20 July 2026",
  prizePool: [
    "Valorant 5v5 (Swiftplay) — 1st: ₹5000 · 2nd: ₹2500 · 3rd: ₹1500",
    "Valorant 2v2 (Skirmish) — 1st: ₹4000 · 2nd: ₹2000 · 3rd: ₹1000",
    "Valorant 1v1 (Skirmish) — 1st: ₹2000 · 2nd: ₹1000 · 3rd: ₹500",
  ],
  prizeBreakdown: [
    {
      mode: "5v5 Swiftplay",
      total: "₹9,000",
      positions: [
        { place: "1st", amount: "₹5,000" },
        { place: "2nd", amount: "₹2,500" },
        { place: "3rd", amount: "₹1,500" },
      ],
    },
    {
      mode: "2v2 Skirmish",
      total: "₹7,000",
      positions: [
        { place: "1st", amount: "₹4,000" },
        { place: "2nd", amount: "₹2,000" },
        { place: "3rd", amount: "₹1,000" },
      ],
    },
    {
      mode: "1v1 Skirmish",
      total: "₹3,500",
      positions: [
        { place: "1st", amount: "₹2,000" },
        { place: "2nd", amount: "₹1,000" },
        { place: "3rd", amount: "₹500" },
      ],
    },
  ],
};

export type GameMode = {
  name: string;
  format: string;
  blurb: string;
  entry?: string;
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
    subtitle: "Tactical 5v5 / 2v2 / 1v1",
    accent: "from-[#ff4655] to-[#bd3944]",
    glow: "shadow-[0_0_80px_-10px_rgba(255,70,85,0.6)]",
    image: "/valo.jpeg",
    modes: [
      {
        name: "5v5 Swiftplay",
        format: "Best of 3 · Single Elim",
        blurb: "Full team warfare. Plant, defuse, dominate. Swiftplay format — final is a full-length competitive match.",
        entry: "₹495 / team",
      },
      {
        name: "2v2 Skirmish",
        format: "Best of 5 · Round Robin",
        blurb: "Two players. One map. Pure aim.",
        entry: "₹248 / team",
      },
      {
        name: "1v1 Skirmish",
        format: "Best of 3 · Single Elim",
        blurb: "Solo duel. No teammates, no excuses.",
        entry: "₹144 / player",
      },
    ],
  },
];
