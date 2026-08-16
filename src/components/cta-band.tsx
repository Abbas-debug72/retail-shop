import ButtonLink from "@/components/button";

type Props = {
  title: string;
  text?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export default function CtaBand({
  title,
  text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  ctaLabel = "Shop Now",
  ctaHref = "/shop",
}: Props) {
  return (
    <section className="bg-obsidian">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:px-10">
        <h2 className="font-display text-3xl font-semibold uppercase leading-tight tracking-tight text-white md:text-6xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-white/65">{text}</p>
        <div className="mt-10">
          <ButtonLink href={ctaHref} variant="light">
            {ctaLabel}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
