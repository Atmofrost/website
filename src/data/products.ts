export type Product = {
  numeral: string;
  name: string;
  blurb: string;
  meta: string;
  href?: string;
};

export const products: Product[] = [
  {
    numeral: 'i.',
    name: 'OneConfig',
    blurb:
      "The next-generation configuration library for Forge and Fabric. The studio's flagship mod.",
    meta: 'GPL-3.0',
    href: 'https://polyfrost.org/projects/oneconfig',
  },
  {
    numeral: 'ii.',
    name: 'OneClient',
    blurb:
      'The anti-client. A client experience for people tired of being sold ads and other things by their own software.',
    meta: 'GPL-3.0',
    href: 'https://polyfrost.org/projects/oneclient',
  },
  {
    numeral: 'iii.',
    name: 'The mods',
    blurb:
      'Twenty-two mods spanning hud overlays, QoL tools, and more.',
    meta: 'Browse at',
    href: 'https://polyfrost.org/mods',
  },
];
