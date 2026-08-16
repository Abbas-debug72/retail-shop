type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
}: Props) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p
        className={`text-xs font-semibold uppercase tracking-[0.26em] ${
          tone === "dark" ? "text-cobalt" : "text-cobalt"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 font-display text-3xl font-semibold uppercase leading-tight tracking-tight md:text-5xl ${
          tone === "dark" ? "text-carbon" : "text-white"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 leading-relaxed ${
            tone === "dark" ? "text-carbon/60" : "text-white/65"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
