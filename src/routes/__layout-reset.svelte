<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit';
  import { getItem } from '$lib/common';

  export const load: Load = ({ url }) => {
    if (getItem('token') && url.pathname === '/login') {
      return {
        status: 302,
        redirect: '/'
      };
    }
  };
</script>

<script lang="ts">
  import { Content } from 'carbon-components-svelte';
</script>

<Content>
  <slot />
</Content>
