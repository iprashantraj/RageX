type Props = { game: "valorant" | "tekken" };

export default function GameArt({ game }: Props) {
  if (game === "valorant") {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden>
        <defs>
          <radialGradient id="vGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="100" cy="100" r="80" fill="url(#vGlow)" />
        <g stroke="#fff" strokeWidth="2" fill="none">
          <circle cx="100" cy="100" r="60" />
          <circle cx="100" cy="100" r="40" strokeDasharray="4 4" />
          <line x1="100" y1="10" x2="100" y2="50" />
          <line x1="100" y1="150" x2="100" y2="190" />
          <line x1="10" y1="100" x2="50" y2="100" />
          <line x1="150" y1="100" x2="190" y2="100" />
          <circle cx="100" cy="100" r="4" fill="#fff" />
        </g>
        <g stroke="#fff" strokeWidth="1" opacity="0.4">
          <line x1="100" y1="100" x2="100" y2="100" />
          <polygon points="100,75 110,100 100,125 90,100" fill="#fff" opacity="0.8" />
        </g>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden>
      <defs>
        <radialGradient id="tGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="80" fill="url(#tGlow)" />
      <g fill="none" stroke="#fff" strokeWidth="2">
        <path d="M60 110 L60 80 Q60 70 70 70 L80 70 Q90 70 90 80 L90 100" />
        <path d="M85 95 L85 70 Q85 60 95 60 L100 60 Q110 60 110 70 L110 100" />
        <path d="M105 100 L105 75 Q105 65 115 65 L120 65 Q130 65 130 75 L130 105" />
        <path d="M125 105 L125 85 Q125 75 135 75 L140 75 Q148 75 148 85 L148 115 Q148 145 118 145 L75 145 Q55 145 55 125 L55 110 Q55 100 65 100 L80 100" />
      </g>
      <g stroke="#fff" strokeWidth="1" opacity="0.5">
        <path d="M30 30 L50 50" />
        <path d="M170 30 L150 50" />
        <path d="M30 170 L50 150" />
        <path d="M170 170 L150 150" />
      </g>
    </svg>
  );
}
