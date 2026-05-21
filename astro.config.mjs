import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://atmofrost.org',
  output: 'static',
  integrations: [sitemap()],
});
