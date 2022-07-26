<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit';
  import { getItem } from '$lib/common';

  export const load: Load = ({ url }) => {
    if (!getItem('token') && url.pathname !== '/login') {
      return {
        status: 302,
        redirect: '/login'
      };
    }
  };
</script>

<script lang="ts">
  import 'carbon-components-svelte/css/all.css';
  import 'uno.css';

  import { Header } from '$lib/components';
  import { Content } from 'carbon-components-svelte';
</script>

<Header />

<Content>
  <slot />
</Content>
