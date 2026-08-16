"use client";

import { useState } from "react";
import type { Product } from "@/lib/products";
import { CATEGORY_LABELS, type Category } from "@/lib/site";
import ProductCard from "@/components/product-card";

type Filter = "all" | Category;

const FILTERS: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "women", label: CATEGORY_LABELS.women },
  { value: "men", label: CATEGORY_LABELS.men },
  { value: "accessories", label: CATEGORY_LABELS.accessories },
];

export default function ProductExplorer({ products }: { products: Product[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = filter === "all" ? products : products.filter((p) => p.category === filter);

  return (
    <div>
      <div
        role="group"
        aria-label="Filter products by category"
        className="flex flex-wrap items-center gap-3"
      >
        {FILTERS.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => setFilter(f.value)}
            aria-pressed={filter === f.value}
            className={`border px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] transition-colors ${
              filter === f.value
                ? "border-cobalt bg-cobalt text-white"
                : "border-carbon/20 text-carbon/70 hover:border-cobalt hover:text-cobalt"
            }`}
          >
            {f.label}
          </button>
        ))}
        <p className="ml-auto text-xs uppercase tracking-[0.16em] text-carbon/45">
          {visible.length} item{visible.length === 1 ? "" : "s"}
        </p>
      </div>
      <div className="mt-10 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
        {visible.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
