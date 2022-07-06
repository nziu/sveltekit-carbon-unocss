import { sveltekit } from '@sveltejs/kit/vite';
import { optimizeCss } from 'carbon-preprocess-svelte';
import UnoCss from 'unocss/vite';

const production = process.env.NODE_ENV === 'production';

/** @type {import('vite').UserConfig} */
const config = {
  server: {
    strictPort: false
  },
  plugins: [
    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    UnoCss(),

    // https://github.com/sveltejs/kit
    sveltekit(),

    // https://purgecss.com/safelisting.html
    production &&
      optimizeCss({
        safelist: {
          standard: ['theme', '--unocss--']
        }
      })
  ]
};

export default config;
