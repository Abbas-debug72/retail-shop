import Image from "next/image";
import Link from "next/link";
import { blurDataUrl, type Pic } from "@/lib/images";

type Props = {
  image: Pic;
  title: string;
  text: string;
};

export default function CollectionTile({ image, title, text }: Props) {
  return (
    <Link href="/shop" className="group relative block overflow-hidden bg-obsidian">
      <div className="relative aspect-[3/4]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          placeholder="blur"
          blurDataURL={blurDataUrl("#0a0a0a")}
          className="object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-60"
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-obsidian/85 via-transparent to-transparent p-7">
        <h3 className="font-display text-2xl font-semibold uppercase tracking-tight text-white">
          {title}
        </h3>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/75">{text}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-cobalt transition-colors group-hover:text-white">
          Explore <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}
