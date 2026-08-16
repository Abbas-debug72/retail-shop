import Image from "next/image";
import Hero from "@/components/hero";
import Marquee from "@/components/marquee";
import SectionHeading from "@/components/section-heading";
import CollectionTile from "@/components/collection-tile";
import ProductCard from "@/components/product-card";
import CtaBand from "@/components/cta-band";
import ButtonLink from "@/components/button";
import { PRODUCTS } from "@/lib/products";
import { pic, blurDataUrl } from "@/lib/images";

const bestsellers = PRODUCTS.filter((p) =>
  ["oversized-wool-coat", "box-tee", "leather-tote", "utility-jacket"].includes(p.slug)
);

export default function HomePage() {
  const lookbook = pic("obsidian-lookbook", 1200, 900, "Monochrome lookbook editorial");
  return (
    <>
      <Hero />
      <Marquee />

      {/* Featured collections */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="The Edit"
              title="Featured collections"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
            />
            <ButtonLink href="/collections" variant="outline" className="shrink-0">
              All Collections
            </ButtonLink>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <CollectionTile
              image={pic("obsidian-collection-1", 900, 1200, "Autumn Line collection look")}
              title="Autumn Line"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <CollectionTile
              image={pic("obsidian-collection-2", 900, 1200, "Monochrome Capsule collection look")}
              title="Monochrome Capsule"
              text="Ut enim ad minim veniam, quis nostrud exercitation."
            />
            <CollectionTile
              image={pic("obsidian-collection-3", 900, 1200, "Tailoring 001 collection look")}
              title="Tailoring 001"
              text="Duis aute irure dolor in reprehenderit in voluptate."
            />
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="border-y border-carbon/10 bg-mist py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Best Sellers"
              title="Most wanted"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <ButtonLink href="/shop" variant="outline" className="shrink-0">
              Shop All
            </ButtonLink>
          </div>
          <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {bestsellers.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Lookbook */}
      <section className="bg-obsidian py-24 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={lookbook.src}
                alt={lookbook.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                placeholder="blur"
                blurDataURL={blurDataUrl("#111111")}
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cobalt">
              Lookbook 2026
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold uppercase leading-tight tracking-tight md:text-6xl">
              Monochrome, <br /> reimagined
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-white/70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco.
            </p>
            <div className="mt-9">
              <ButtonLink href="/collections" variant="light">
                View the Lookbook
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <CtaBand title="Less is more." />
    </>
  );
}
