import adapter from '@sveltejs/adapter-static';
import { optimizeImports } from 'carbon-preprocess-svelte';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [sveltePreprocess(), optimizeImports()],

  kit: {
    alias: {
      $components: 'src/components',
      $utils: 'src/utils'
    },
    adapter: adapter({
      fallback: 'index.html'
    })
  }
};

export default config;
