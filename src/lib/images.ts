export type Pic = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

/**
 * Deterministic placeholder photo from picsum.photos. The same seed always
 * returns the same image, so every build is visually stable.
 */
export function pic(seed: string, width: number, height: number, alt: string): Pic {
  return { src: `https://picsum.photos/seed/${seed}/${width}/${height}`, width, height, alt };
}

/**
 * Tiny solid-color SVG placeholder used as the blurDataURL while the real
 * image loads. Works in both server and client components (no Buffer).
 */
export function blurDataUrl(hex: string): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"><rect width="40" height="40" fill="${hex}"/></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}
