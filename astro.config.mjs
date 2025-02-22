// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://resistance-toolkit.com',
  integrations: [icon({
    iconDir: 'src/icons',
  }), mdx(), sitemap(), tailwind()],
  image: {
    remotePatterns: [{protocol: 'https:'}]
  }
});