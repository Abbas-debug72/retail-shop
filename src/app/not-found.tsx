import ButtonLink from "@/components/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center bg-obsidian text-white">
      <div className="mx-auto max-w-2xl px-6 py-24 text-center lg:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cobalt">
          Error 404
        </p>
        <h1 className="mt-6 font-display text-4xl font-semibold uppercase leading-tight tracking-tight md:text-6xl">
          Off the rack.
        </h1>
        <p className="mx-auto mt-6 max-w-md leading-relaxed text-white/65">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <ButtonLink href="/" variant="light">
            Back Home
          </ButtonLink>
          <ButtonLink href="/shop" variant="outline" className="border-white/60 text-white hover:border-cobalt hover:text-white">
            Shop the Collection
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
