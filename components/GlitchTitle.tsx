type Props = { children: React.ReactNode; className?: string };

export default function GlitchTitle({ children, className = "" }: Props) {
  return (
    <div className={`relative inline-block ${className}`}>
      <span
        aria-hidden
        className="absolute inset-0 text-[#ff4655] mix-blend-screen glitch-layer-1"
      >
        {children}
      </span>
      <span
        aria-hidden
        className="absolute inset-0 text-cyan-400 mix-blend-screen glitch-layer-2"
      >
        {children}
      </span>
      <span className="relative">{children}</span>
    </div>
  );
}
