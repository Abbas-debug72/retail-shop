import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/products";
import { CATEGORY_LABELS } from "@/lib/site";
import { blurDataUrl, pic } from "@/lib/images";

export default function ProductCard({ product }: { product: Product }) {
  const main = pic(product.seed, 800, 1000, product.name);
  const hover = pic(`${product.seed}-hover`, 800, 1000, "");
  return (
    <Link href={`/shop/${product.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-mist">
        <Image
          src={main.src}
          alt={main.alt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          placeholder="blur"
          blurDataURL={blurDataUrl("#f4f4f4")}
          className="object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* Hover-swap image is aria-hidden so screen readers get one description */}
        <Image
          src={hover.src}
          alt=""
          fill
          aria-hidden="true"
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          placeholder="blur"
          blurDataURL={blurDataUrl("#f4f4f4")}
          className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        <span className="absolute left-4 top-4 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-carbon">
          {CATEGORY_LABELS[product.category]}
        </span>
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-3">
        <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-carbon transition-colors group-hover:text-cobalt">
          {product.name}
        </h3>
        <p className="text-sm font-semibold text-carbon/70">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
}
