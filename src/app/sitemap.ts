import type { MetadataRoute } from "next";
import { PRODUCTS } from "@/lib/products";
import { SITE } from "@/lib/site";

const staticRoutes: { route: string; changeFrequency: "weekly" | "monthly"; priority: number }[] = [
  { route: "", changeFrequency: "weekly", priority: 1 },
  { route: "/shop", changeFrequency: "monthly", priority: 0.8 },
  { route: "/collections", changeFrequency: "monthly", priority: 0.8 },
  { route: "/about", changeFrequency: "monthly", priority: 0.8 },
  { route: "/contact", changeFrequency: "monthly", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = staticRoutes.map(({ route, changeFrequency, priority }) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
  const productPages = PRODUCTS.map((product) => ({
    url: `${SITE.url}/shop/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));
  return [...staticPages, ...productPages];
}
