import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/page-hero";
import SectionHeading from "@/components/section-heading";
import CtaBand from "@/components/cta-band";
import { blurDataUrl, pic } from "@/lib/images";

export const metadata: Metadata = {
  title: "About",
  description:
    "Lorem ipsum dolor sit amet — the story and values behind Obsidian.",
  alternates: { canonical: "/about" },
};

const values = [
  { title: "Cut", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore." },
  { title: "Fabric", text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea." },
  { title: "Fewer, better", text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat." },
];

export default function AboutPage() {
  const studio = pic("obsidian-studio", 1200, 900, "The Obsidian atelier");
  return (
    <>
      <PageHero
        eyebrow="About"
        title="The label"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={studio.src}
                alt={studio.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                placeholder="blur"
                blurDataURL={blurDataUrl("#f4f4f4")}
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Since 2019"
              title="Built in monochrome"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
            <p className="mt-6 max-w-xl leading-relaxed text-carbon/60">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-carbon/10 bg-mist py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            align="center"
            eyebrow="Values"
            title="What we stand for"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="border-t-2 border-carbon pt-6">
                <h3 className="font-display text-2xl font-semibold uppercase tracking-tight text-carbon">
                  {value.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-carbon/60">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.28em] text-carbon/40">
          As seen in
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-14 gap-y-6">
          {["Lorem Style", "The Ipsom Journal", "Dolor Vogue", "Amet Review"].map((name) => (
            <span key={name} className="font-display text-xl font-semibold uppercase tracking-tight text-carbon/50">
              {name}
            </span>
          ))}
        </div>
      </section>

      <CtaBand title="Wear less, better." />
    </>
  );
}
