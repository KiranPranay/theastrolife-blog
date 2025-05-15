// astro.config.mjs
// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // where your site will live:
  site: 'https://kiranpranay.github.io/theastrolife-blog',

  // 🛑 critical for GH Pages hosting under a sub-path
  base: '/theastrolife-blog/',

  integrations: [mdx(), sitemap()],
});
