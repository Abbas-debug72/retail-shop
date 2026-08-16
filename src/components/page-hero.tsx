type Props = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function PageHero({ eyebrow, title, description }: Props) {
  return (
    <section className="border-b border-carbon/10 bg-mist pt-32">
      <div className="mx-auto max-w-4xl px-6 pb-14 text-center lg:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cobalt">{eyebrow}</p>
        <h1 className="mt-4 font-display text-4xl font-semibold uppercase leading-tight tracking-tight text-carbon md:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-carbon/60">{description}</p>
        ) : null}
      </div>
    </section>
  );
}
