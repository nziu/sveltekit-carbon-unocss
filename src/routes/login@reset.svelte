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
  import { goto } from '$app/navigation';
  import { setItem } from '$lib/common';
  import { Button, Theme } from 'carbon-components-svelte';

  async function submit() {
    setItem('token', 'test');
    goto('/');
  }
</script>

<svelte:head>
  <title>Login</title>
</svelte:head>

<Theme theme="g10" />

<Button on:click={submit}>Login</Button>
