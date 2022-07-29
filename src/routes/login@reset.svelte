<script lang="ts">
  import { goto } from '$app/navigation';
  import { login } from '$lib/api';
  import { setItem } from '$lib/common';
  import type { LoginInput } from '$lib/types';
  import {
    Button,
    FluidForm,
    InlineNotification,
    PasswordInput,
    TextInput,
    Theme
  } from 'carbon-components-svelte';
  import { ArrowRight } from 'carbon-icons-svelte';

  let showNotification = false;
  const form: LoginInput = {
    username: '',
    password: ''
  };

  async function submit(e: Event) {
    e.preventDefault();
    try {
      setItem('token', await login(form));
      goto('/');
    } catch (error) {
      showNotification = true;
    }
  }
</script>

<svelte:head>
  <title>Login</title>
</svelte:head>

<Theme theme="g10" />

<div class="flex items-center justify-center h-70vh">
  <div class="bg-white shadow-md w-md">
    <div class="m-4">
      <h1>登录</h1>
      <p class="text-gray-500">店铺数据监控</p>
      {#if showNotification}
        <InlineNotification
          subtitle="帐号或密码错误"
          on:close={() => (showNotification = false)}
        />
      {/if}
    </div>
    <FluidForm on:submit={submit}>
      <TextInput
        required
        labelText="帐号"
        placeholder="请输入帐号"
        bind:value={form.username}
      />
      <PasswordInput
        required
        type="password"
        labelText="密码"
        placeholder="请输入密码"
        bind:value={form.password}
      />
      <Button
        size="lg"
        type="submit"
        kind="secondary"
        icon={ArrowRight}
        class="w-full !max-w-full mt-8"
      >
        登录
      </Button>
    </FluidForm>
  </div>
</div>
