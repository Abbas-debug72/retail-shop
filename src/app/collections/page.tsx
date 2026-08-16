import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import CollectionTile from "@/components/collection-tile";
import CtaBand from "@/components/cta-band";
import { pic } from "@/lib/images";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Lorem ipsum dolor sit amet — the Obsidian collections: Autumn Line, Monochrome Capsule and Tailoring 001.",
  alternates: { canonical: "/collections" },
};

const collections = [
  {
    title: "Autumn Line",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    seed: "obsidian-collection-1",
  },
  {
    title: "Monochrome Capsule",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    seed: "obsidian-collection-2",
  },
  {
    title: "Tailoring 001",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
    seed: "obsidian-collection-3",
  },
];

export default function CollectionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Collections"
        title="Season by season"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-8 md:grid-cols-3">
          {collections.map((c) => (
            <CollectionTile
              key={c.title}
              image={pic(c.seed, 900, 1200, `${c.title} collection look`)}
              title={c.title}
              text={c.text}
            />
          ))}
        </div>
      </section>
      <CtaBand title="New pieces drop monthly." ctaLabel="Shop the Edit" ctaHref="/shop" />
    </>
  );
}
