import adapter from '@sveltejs/adapter-static';
import { optimizeCss, optimizeImports } from 'carbon-preprocess-svelte';
import sveltePreprocess from 'svelte-preprocess';

const production = process.env.NODE_ENV === 'production';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [sveltePreprocess(), optimizeImports()],

  kit: {
    adapter: adapter({
      fallback: 'index.html'
    }),

    vite: {
      plugins: [
        production &&
          optimizeCss({
            // https://purgecss.com/safelisting.html
            safelist: {
              standard: ['theme']
            }
          })
      ]
    }
  }
};

export default config;
