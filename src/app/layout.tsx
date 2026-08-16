import type { Metadata, Viewport } from "next";
import { Archivo, Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { CartProvider } from "@/lib/cart-context";
import { SITE } from "@/lib/site";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const work = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Premium Fashion, Monochrome by Design`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  keywords: ["fashion", "clothing", "premium label", "monochrome", "style"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — Premium Fashion, Monochrome by Design`,
    description: SITE.description,
    images: [
      {
        url: "https://picsum.photos/seed/obsidian-og/1200/630",
        width: 1200,
        height: 630,
        alt: `${SITE.name} — premium fashion`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Premium Fashion, Monochrome by Design`,
    description: SITE.description,
    images: ["https://picsum.photos/seed/obsidian-og/1200/630"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${archivo.variable} ${work.variable}`}>
      <body className="bg-white text-carbon antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-cobalt focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <CartProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
