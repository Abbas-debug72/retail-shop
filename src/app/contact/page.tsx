import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import ContactForm from "./contact-form";
import CtaBand from "@/components/cta-band";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Lorem ipsum dolor sit amet — reach Obsidian by email, phone or in store.",
  alternates: { canonical: "/contact" },
};

const stores = [
  { city: "Example City", address: "88 Atelier Row, Gallery District", hours: "Mon – Sat · 10 AM – 7 PM" },
  { city: "Ipsom", address: "14 Monochrome Lane, Old Town", hours: "Mon – Sat · 11 AM – 6 PM" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-3">
          {stores.map((store) => (
            <div key={store.city} className="border border-carbon/10 bg-mist p-8">
              <h2 className="font-display text-xl font-semibold uppercase tracking-tight text-carbon">
                {store.city}
              </h2>
              <address className="mt-4 text-sm not-italic leading-relaxed text-carbon/60">
                {store.address}
              </address>
              <p className="mt-2 text-sm text-carbon/60">{store.hours}</p>
            </div>
          ))}
          <div className="border border-carbon/10 bg-mist p-8">
            <h2 className="font-display text-xl font-semibold uppercase tracking-tight text-carbon">
              Direct
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-carbon/60">
              <a href={SITE.emailHref} className="font-semibold text-cobalt underline-offset-4 hover:underline">
                {SITE.email}
              </a>
              <br />
              <a href={SITE.phoneHref} className="mt-1 inline-block font-semibold text-cobalt underline-offset-4 hover:underline">
                {SITE.phone}
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-carbon/10 bg-mist py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-14 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cobalt">
              Press &amp; wholesale
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold uppercase tracking-tight text-carbon md:text-5xl">
              Send an inquiry
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-carbon/60">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="border border-carbon/10 bg-white p-6 sm:p-10">
            <ContactForm />
          </div>
        </div>
      </section>

      <CtaBand title="See it in person." ctaLabel="Find a Store" ctaHref="/contact" />
    </>
  );
}
