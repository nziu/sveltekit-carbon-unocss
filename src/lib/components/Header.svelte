<script lang="ts">
  import {
    Header,
    HeaderAction,
    HeaderGlobalAction,
    HeaderNav,
    HeaderNavItem,
    HeaderPanelDivider,
    HeaderPanelLink,
    HeaderPanelLinks,
    HeaderUtilities,
    Modal,
    SkipToContent,
    Theme
  } from 'carbon-components-svelte';
  import { Asleep, Awake, UserAvatar } from 'carbon-icons-svelte';

  const links = [
    { url: 'https://m.jianlingguo.cn/', desc: '企业邮箱' },
    { url: 'https://im.jinritemai.com/', desc: '飞鸽下载' },
    { url: 'https://fxg.jinritemai.com/', desc: '抖店后台' }
  ];

  const themes = { white: Awake, g90: Asleep };
  let theme: 'white' | 'g90' = 'white';
  const toggle = () => {
    theme !== 'white' ? (theme = 'white') : (theme = 'g90');
  };

  let open = false;
</script>

<Theme persist bind:theme />

<Header href="/" platformName="Monitor">
  <svelte:fragment slot="skip-to-content">
    <SkipToContent />
  </svelte:fragment>
  <HeaderNav>
    <HeaderNavItem href="/monitor" text="监控" />
    <HeaderNavItem href="/settings" text="管理" />
  </HeaderNav>
  <HeaderUtilities>
    <HeaderGlobalAction icon={themes[theme]} on:click={toggle} />
    <HeaderGlobalAction icon={UserAvatar} on:click={() => (open = true)} />
    <HeaderAction>
      <HeaderPanelLinks>
        <HeaderPanelDivider>相关链接</HeaderPanelDivider>
        {#each links as { url, desc }}
          <HeaderPanelLink href={url} target="_blank">{desc}</HeaderPanelLink>
        {/each}
      </HeaderPanelLinks>
    </HeaderAction>
  </HeaderUtilities>
</Header>

<Modal
  size="xs"
  bind:open
  modalHeading="登出"
  primaryButtonText="确定"
  secondaryButtonText="取消"
  on:click:button--secondary={() => (open = false)}
  on:open
  on:close
  on:submit
>
  <p>退出当前帐号</p>
</Modal>
