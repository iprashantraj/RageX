type Props = { label: string };

export default function SectionDivider({ label }: Props) {
  return (
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-5 sm:py-6">
      <div className="flex items-center gap-3 sm:gap-4">
        <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] sm:tracking-[0.4em] text-white/40 whitespace-nowrap">
          {label}
        </span>
        <div className="h-px flex-1 bg-white/10 animate-sweep" />
        <span className="w-2 h-2 bg-[#ff4655] animate-pulse-glow" />
      </div>
    </div>
  );
}
