"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { blurDataUrl, pic } from "@/lib/images";
import { formatPrice } from "@/lib/products";

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export default function CartDrawer() {
  const { items, subtotal, count, isOpen, closeCart, removeItem, updateQty } = useCart();

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => {
      if (!open) closeCart();
    }}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-carbon/50 backdrop-blur-sm" />
        <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-white shadow-2xl focus:outline-none">
          <div className="flex items-center justify-between border-b border-carbon/10 px-6 py-5">
            <Dialog.Title className="font-display text-lg font-semibold uppercase tracking-[0.14em]">
              Cart ({count})
            </Dialog.Title>
            <Dialog.Close asChild>
              <button
                type="button"
                aria-label="Close cart"
                className="flex h-10 w-10 items-center justify-center text-carbon transition-colors hover:text-cobalt"
              >
                <CloseIcon />
              </button>
            </Dialog.Close>
          </div>

          {items.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
              <p className="font-display text-xl uppercase tracking-[0.12em] text-carbon/70">
                Your cart is empty
              </p>
              <p className="max-w-xs text-sm leading-relaxed text-carbon/50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <Dialog.Close asChild>
                <Link
                  href="/shop"
                  className="mt-2 bg-carbon px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-cobalt"
                >
                  Shop the Collection
                </Link>
              </Dialog.Close>
            </div>
          ) : (
            <>
              <ul className="flex-1 divide-y divide-carbon/10 overflow-y-auto px-6">
                {items.map((item) => {
                  const image = pic(item.seed, 160, 200, item.name);
                  return (
                    <li key={`${item.slug}-${item.size}`} className="flex gap-4 py-5">
                      <div className="relative h-24 w-20 shrink-0 overflow-hidden bg-mist">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="80px"
                          placeholder="blur"
                          blurDataURL={blurDataUrl("#f4f4f4")}
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <Link
                              href={`/shop/${item.slug}`}
                              onClick={closeCart}
                              className="font-display text-sm font-semibold uppercase tracking-wide text-carbon hover:text-cobalt"
                            >
                              {item.name}
                            </Link>
                            <p className="mt-0.5 text-xs text-carbon/50">Size {item.size}</p>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeItem(item.slug, item.size)}
                            className="text-xs uppercase tracking-wide text-carbon/40 transition-colors hover:text-red-600"
                          >
                            Remove
                          </button>
                        </div>
                        <div className="mt-auto flex items-center justify-between pt-3">
                          <div className="flex items-center border border-carbon/15">
                            <button
                              type="button"
                              onClick={() => updateQty(item.slug, item.size, item.qty - 1)}
                              className="px-3 py-1.5 text-sm text-carbon transition-colors hover:bg-mist"
                              aria-label={`Decrease quantity of ${item.name}`}
                            >
                              −
                            </button>
                            <span className="w-8 text-center text-sm font-semibold" aria-live="polite">
                              {item.qty}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQty(item.slug, item.size, item.qty + 1)}
                              className="px-3 py-1.5 text-sm text-carbon transition-colors hover:bg-mist"
                              aria-label={`Increase quantity of ${item.name}`}
                            >
                              +
                            </button>
                          </div>
                          <span className="text-sm font-semibold text-carbon">
                            {formatPrice(item.price * item.qty)}
                          </span>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="border-t border-carbon/10 px-6 py-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-carbon/60">
                    Subtotal
                  </span>
                  <span className="font-display text-lg font-semibold">{formatPrice(subtotal)}</span>
                </div>
                <button
                  type="button"
                  disabled
                  className="mt-4 w-full cursor-not-allowed bg-carbon py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/70"
                >
                  Checkout — Coming Soon
                </button>
                <p className="mt-3 text-center text-xs text-carbon/45">
                  Demo store — no checkout. Lorem ipsum dolor sit amet.
                </p>
              </div>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
