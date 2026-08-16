export const SITE = {
  name: "Obsidian",
  url: "https://obsidian.example.com",
  tagline: "Premium fashion, monochrome by design",
  description:
    "Lorem ipsum dolor sit amet — Obsidian is a premium fashion label with a curated, product-led collection.",
  address: "88 Atelier Row, Gallery District, Example City",
  phone: "+1 (555) 017-2244",
  phoneHref: "tel:+15550172244",
  email: "hello@obsidian.example.com",
  emailHref: "mailto:hello@obsidian.example.com",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/collections", label: "Collections" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const CATEGORY_LABELS = {
  women: "Women",
  men: "Men",
  accessories: "Accessories",
} as const;

export type Category = keyof typeof CATEGORY_LABELS;
