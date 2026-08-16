"use client";

import { useState } from "react";
import Image from "next/image";
import * as Accordion from "@radix-ui/react-accordion";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/products";
import { blurDataUrl, pic } from "@/lib/images";
import { useCart } from "@/lib/cart-context";

function Chevron() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="transition-transform duration-300 group-data-[state=open]:rotate-180"
    >
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const accordionSections = [
  {
    title: "Details",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    title: "Shipping & Returns",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
  },
  {
    title: "Care",
    text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  },
];

export default function ProductDetails({ product }: { product: Product }) {
  const { addItem } = useCart();
  const images = [
    pic(product.seed, 1000, 1250, product.name),
    pic(`${product.seed}-2`, 1000, 1250, `${product.name} — alternate view`),
    pic(`${product.seed}-3`, 1000, 1250, `${product.name} — detail view`),
  ];
  const [active, setActive] = useState(0);
  const [size, setSize] = useState<string | null>(product.sizes.length === 1 ? product.sizes[0] : null);
  const [qty, setQty] = useState(1);
  const [sizeError, setSizeError] = useState(false);

  const handleAdd = () => {
    if (!size) {
      setSizeError(true);
      return;
    }
    setSizeError(false);
    addItem({
      slug: product.slug,
      name: product.name,
      price: product.price,
      size,
      seed: product.seed,
    });
    setQty(1);
  };

  return (
    <div className="grid gap-14 lg:grid-cols-2">
      {/* Gallery */}
      <div>
        <div className="relative aspect-[4/5] overflow-hidden bg-mist">
          <Image
            src={images[active].src}
            alt={images[active].alt}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            placeholder="blur"
            blurDataURL={blurDataUrl("#f4f4f4")}
            className="object-cover"
          />
        </div>
        <div className="mt-4 grid grid-cols-3 gap-4">
          {images.map((image, i) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1} of ${images.length}`}
              aria-pressed={active === i}
              className={`relative aspect-square overflow-hidden bg-mist transition-opacity ${
                active === i ? "ring-2 ring-cobalt" : "opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={image.src}
                alt=""
                aria-hidden="true"
                fill
                sizes="(min-width: 1024px) 16vw, 30vw"
                placeholder="blur"
                blurDataURL={blurDataUrl("#f4f4f4")}
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Info */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cobalt">
          {product.category}
        </p>
        <h1 className="mt-3 font-display text-3xl font-semibold uppercase leading-tight tracking-tight text-carbon md:text-5xl">
          {product.name}
        </h1>
        <p className="mt-4 font-display text-2xl font-semibold text-carbon">
          {formatPrice(product.price)}
        </p>
        <p className="mt-6 max-w-lg leading-relaxed text-carbon/65">{product.description}</p>

        <div className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-carbon/60">
            Size {size ? `— ${size}` : ""}
          </p>
          {sizeError ? (
            <p role="alert" className="mt-2 text-sm font-medium text-red-600">
              Please select a size.
            </p>
          ) : null}
          <div className="mt-3 flex flex-wrap gap-2">
            {product.sizes.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => {
                  setSize(s);
                  setSizeError(false);
                }}
                aria-pressed={size === s}
                className={`min-w-12 border px-4 py-2.5 text-sm font-semibold transition-colors ${
                  size === s
                    ? "border-cobalt bg-cobalt text-white"
                    : "border-carbon/20 text-carbon hover:border-cobalt hover:text-cobalt"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <div className="flex items-center border border-carbon/20">
            <button
              type="button"
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="px-4 py-3 text-lg text-carbon transition-colors hover:bg-mist"
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span className="w-10 text-center text-sm font-semibold" aria-live="polite">
              {qty}
            </span>
            <button
              type="button"
              onClick={() => setQty((q) => q + 1)}
              className="px-4 py-3 text-lg text-carbon transition-colors hover:bg-mist"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
          <button
            type="button"
            onClick={handleAdd}
            className="flex-1 bg-carbon px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-cobalt"
          >
            Add to Cart — {formatPrice(product.price * qty)}
          </button>
        </div>

        <Accordion.Root
          type="single"
          collapsible
          className="mt-10 divide-y divide-carbon/10 border-y border-carbon/10"
        >
          {accordionSections.map((section) => (
            <Accordion.Item key={section.title} value={section.title}>
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full items-center justify-between py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-carbon">
                    {section.title}
                  </span>
                  <span className="text-carbon/40">
                    <Chevron />
                  </span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden data-[state=closed]:animate-[accordion-up_200ms_ease-out] data-[state=open]:animate-[accordion-down_200ms_ease-out]">
                <p className="pb-5 text-sm leading-relaxed text-carbon/60">{section.text}</p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </div>
  );
}
