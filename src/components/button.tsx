import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "solid" | "outline" | "light";

const base =
  "inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt";

const variants: Record<Variant, string> = {
  solid: "bg-carbon text-white hover:bg-cobalt",
  outline: "border border-carbon text-carbon hover:border-cobalt hover:text-cobalt",
  light: "bg-white text-carbon hover:bg-cobalt hover:text-white",
};

type Props = {
  href: string;
  variant?: Variant;
  children: React.ReactNode;
} & ComponentPropsWithoutRef<typeof Link>;

export default function ButtonLink({ href, variant = "solid", children, className = "", ...rest }: Props) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </Link>
  );
}
