export type PageKey =
  | 'home'
  | 'about'
  | 'products'
  | 'news'
  | 'team'
  | 'careers'
  | 'contact';

export type NavItem = {
  key: PageKey;
  label: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { key: 'about', label: 'About', href: '/about/' },
  { key: 'products', label: 'Products', href: '/products/' },
  { key: 'news', label: 'News', href: '/news/' },
  { key: 'team', label: 'Team', href: '/team/' },
  { key: 'careers', label: 'Careers', href: '/careers/' },
  { key: 'contact', label: 'Contact', href: '/contact/' },
];

export const footerLinks = [
  { label: 'Polyfrost', href: 'https://polyfrost.org', external: true },
  { label: 'Contact', href: '/contact/', external: false },
  { label: 'Terms', href: '/terms/', external: false },
  { label: 'Privacy', href: '/privacy/', external: false },
] as const;
