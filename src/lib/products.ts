import type { Category } from "@/lib/site";

export type Product = {
  slug: string;
  name: string;
  category: Category;
  price: number;
  seed: string;
  description: string;
  sizes: string[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "oversized-wool-coat",
    name: "Oversized Wool Coat",
    category: "women",
    price: 420,
    seed: "obsidian-coat",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    sizes: ["XS", "S", "M", "L"],
  },
  {
    slug: "tailored-blazer",
    name: "Tailored Blazer",
    category: "women",
    price: 310,
    seed: "obsidian-blazer",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    sizes: ["XS", "S", "M", "L"],
  },
  {
    slug: "silk-slip-dress",
    name: "Silk Slip Dress",
    category: "women",
    price: 260,
    seed: "obsidian-dress",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    sizes: ["XS", "S", "M", "L"],
  },
  {
    slug: "relaxed-trouser",
    name: "Relaxed Trouser",
    category: "women",
    price: 190,
    seed: "obsidian-trouser",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    slug: "box-tee",
    name: "Box Tee",
    category: "men",
    price: 65,
    seed: "obsidian-tee",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    slug: "merino-crewneck",
    name: "Merino Crewneck",
    category: "men",
    price: 140,
    seed: "obsidian-crewneck",
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    slug: "utility-jacket",
    name: "Utility Jacket",
    category: "men",
    price: 280,
    seed: "obsidian-jacket",
    description:
      "Tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    slug: "leather-tote",
    name: "Leather Tote",
    category: "accessories",
    price: 350,
    seed: "obsidian-tote",
    description:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    sizes: ["One size"],
  },
  {
    slug: "brass-chain-necklace",
    name: "Brass Chain Necklace",
    category: "accessories",
    price: 90,
    seed: "obsidian-necklace",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.",
    sizes: ["One size"],
  },
  {
    slug: "structured-cap",
    name: "Structured Cap",
    category: "accessories",
    price: 55,
    seed: "obsidian-cap",
    description:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime.",
    sizes: ["One size"],
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function relatedProducts(product: Product, count = 3): Product[] {
  const sameCategory = PRODUCTS.filter((p) => p.category === product.category && p.slug !== product.slug);
  const others = PRODUCTS.filter((p) => p.category !== product.category && p.slug !== product.slug);
  return [...sameCategory, ...others].slice(0, count);
}

export function formatPrice(price: number): string {
  return `$${price.toLocaleString("en-US")}`;
}
