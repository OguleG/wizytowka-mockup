import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://OguleG.github.io',
  base: '/wizytowka-mockup',
  vite: {
    plugins: [tailwindcss()],
  },
});