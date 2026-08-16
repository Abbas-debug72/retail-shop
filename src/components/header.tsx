"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { NAV_LINKS } from "@/lib/site";
import { useCart } from "@/lib/cart-context";
import CartDrawer from "@/components/cart-drawer";

function BagIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 8h12l-1 12H7L6 8zM9 8V6a3 3 0 016 0v2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { count, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-carbon/10 bg-white/90 backdrop-blur"
          : "border-b border-transparent bg-white"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link
          href="/"
          className="font-display text-xl font-semibold uppercase tracking-[0.22em] text-carbon transition-colors hover:text-cobalt"
        >
          Obsidian
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`text-xs font-semibold uppercase tracking-[0.16em] transition-colors ${
                isActive(link.href) ? "text-cobalt" : "text-carbon/70 hover:text-cobalt"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={openCart}
            aria-label={`Open cart, ${count} item${count === 1 ? "" : "s"}`}
            className="relative flex h-11 w-11 items-center justify-center text-carbon transition-colors hover:text-cobalt"
          >
            <BagIcon />
            {count > 0 ? (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-cobalt px-1 text-[10px] font-bold text-white">
                {count}
              </span>
            ) : null}
          </button>

          <Dialog.Root open={menuOpen} onOpenChange={setMenuOpen}>
            <Dialog.Trigger asChild>
              <button
                type="button"
                aria-label="Open menu"
                className="flex h-11 w-11 items-center justify-center text-carbon transition-colors hover:text-cobalt md:hidden"
              >
                <MenuIcon />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-carbon/50 backdrop-blur-sm" />
              <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-[85%] max-w-sm flex-col bg-white px-8 py-8 shadow-2xl focus:outline-none">
                <div className="flex items-center justify-between">
                  <Dialog.Title className="font-display text-lg font-semibold uppercase tracking-[0.2em] text-carbon">
                    Obsidian
                  </Dialog.Title>
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      aria-label="Close menu"
                      className="flex h-10 w-10 items-center justify-center text-carbon transition-colors hover:text-cobalt"
                    >
                      <CloseIcon />
                    </button>
                  </Dialog.Close>
                </div>
                <nav aria-label="Mobile" className="mt-8 flex flex-col">
                  {NAV_LINKS.map((link) => (
                    <Dialog.Close key={link.href} asChild>
                      <Link
                        href={link.href}
                        aria-current={isActive(link.href) ? "page" : undefined}
                        className={`border-b border-carbon/10 py-4 font-display text-2xl font-semibold uppercase tracking-wide transition-colors ${
                          isActive(link.href) ? "text-cobalt" : "text-carbon hover:text-cobalt"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </Dialog.Close>
                  ))}
                </nav>
                <div className="mt-auto">
                  <Dialog.Close asChild>
                    <Link
                      href="/shop"
                      className="block bg-carbon px-5 py-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-cobalt"
                    >
                      Shop the Collection
                    </Link>
                  </Dialog.Close>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
      <CartDrawer />
    </header>
  );
}
