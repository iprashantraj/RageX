type Props = { items: string[] };

export default function Marquee({ items }: Props) {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-black py-5">
      <div className="flex animate-marquee whitespace-nowrap">
        {row.map((item, i) => (
          <span
            key={i}
            className="mx-4 sm:mx-8 inline-flex items-center gap-4 sm:gap-8 text-lg sm:text-2xl md:text-3xl font-black uppercase tracking-tighter text-white/80"
          >
            {item}
            <span className="text-[#ff4655]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
