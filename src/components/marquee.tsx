const items = ["New Season", "Obsidian", "Free Shipping", "Monochrome", "Shop Now", "Limited Drop"];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div aria-hidden="true" className="overflow-hidden border-y border-white/10 bg-obsidian py-5 text-white">
      <div className="marquee-track flex w-max whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-8 pr-8 font-display text-sm font-semibold uppercase tracking-[0.3em]"
          >
            {item}
            <span className="text-cobalt">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
