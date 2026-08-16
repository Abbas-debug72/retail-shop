import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import ProductExplorer from "@/components/product-explorer";
import CtaBand from "@/components/cta-band";
import { PRODUCTS } from "@/lib/products";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Lorem ipsum dolor sit amet — shop the Obsidian collection: women, men and accessories.",
  alternates: { canonical: "/shop" },
};

export default function ShopPage() {
  return (
    <>
      <PageHero
        eyebrow="Shop"
        title="The collection"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <ProductExplorer products={PRODUCTS} />
      </section>
      <CtaBand title="Find your uniform." ctaLabel="Contact Us" ctaHref="/contact" />
    </>
  );
}
