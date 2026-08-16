import Image from "next/image";
import ButtonLink from "@/components/button";
import { blurDataUrl, pic } from "@/lib/images";
import { SITE } from "@/lib/site";

export default function Hero() {
  const hero = pic("obsidian-hero", 1920, 1080, "Monochrome editorial fashion look");
  return (
    <section className="relative flex min-h-[88svh] items-center justify-center overflow-hidden bg-obsidian">
      <Image
        src={hero.src}
        alt={hero.alt}
        fill
        priority
        sizes="100vw"
        placeholder="blur"
        blurDataURL={blurDataUrl("#0a0a0a")}
        className="object-cover opacity-70"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-obsidian/60" />
      <div className="relative mx-auto max-w-5xl px-6 pb-24 pt-40 text-center lg:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-white/70">
          {SITE.tagline}
        </p>
        <h1 className="mt-6 font-display text-5xl font-semibold uppercase leading-[1.02] tracking-tight text-white md:text-8xl">
          Shape the <span className="text-cobalt">silence</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl leading-relaxed text-white/75">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <ButtonLink href="/shop">Shop Now</ButtonLink>
          <ButtonLink href="/collections" variant="outline" className="border-white/60 text-white hover:border-cobalt hover:text-white">
            The Collections
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
