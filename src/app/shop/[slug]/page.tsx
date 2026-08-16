import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetails from "@/components/product-details";
import ProductCard from "@/components/product-card";
import SectionHeading from "@/components/section-heading";
import JsonLd from "@/components/json-ld";
import { getProduct, PRODUCTS, relatedProducts } from "@/lib/products";
import { SITE } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) {
    return { title: "Product not found" };
  }
  return {
    title: product.name,
    description: product.description,
    alternates: { canonical: `/shop/${product.slug}` },
    openGraph: {
      type: "website",
      url: `${SITE.url}/shop/${product.slug}`,
      title: `${product.name} — ${SITE.name}`,
      description: product.description,
      images: [
        {
          url: `https://picsum.photos/seed/${product.seed}/1200/630`,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: `https://picsum.photos/seed/${product.seed}/1200/630`,
    description: product.description,
    brand: { "@type": "Brand", name: SITE.name },
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${SITE.url}/shop/${product.slug}`,
    },
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-32 lg:px-10">
        <ProductDetails product={product} />
      </section>

      <section className="border-t border-carbon/10 bg-mist py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Keep Looking"
            title="You may also like"
            description={`Lorem ipsum dolor sit amet — more from ${SITE.name}.`}
          />
          <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProducts(product).map((related) => (
              <ProductCard key={related.slug} product={related} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
