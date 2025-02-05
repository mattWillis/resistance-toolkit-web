// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), mdx(), partytown({
    config: {
      forward: ['dataLayer.push']
    }
  }), sitemap(), tailwind()]
});