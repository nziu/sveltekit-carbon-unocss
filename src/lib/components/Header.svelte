<script lang="ts">
  import { logout } from '$lib/common';
  import {
    Button,
    Header,
    HeaderAction,
    HeaderGlobalAction,
    HeaderNav,
    HeaderNavItem,
    HeaderPanelDivider,
    HeaderPanelLink,
    HeaderPanelLinks,
    HeaderUtilities,
    Popover,
    SideNav,
    SideNavItems,
    SideNavLink,
    SkipToContent,
    Theme
  } from 'carbon-components-svelte';
  import { Asleep, Awake, Logout, UserAvatar } from 'carbon-icons-svelte';

  const PanelLinks = [
    { href: 'https://m.jianlingguo.cn/', text: '企业邮箱' },
    { href: 'https://im.jinritemai.com/', text: '飞鸽下载' },
    { href: 'https://fxg.jinritemai.com/', text: '抖店后台' }
  ];
  const NavLinks = [
    { href: '/monitor', text: '监控' },
    { href: '/manage', text: '管理' }
  ];

  let isPopoverOpen = false;
  let isSideNavOpen = false;

  const themes = { white: Awake, g90: Asleep };
  let theme: 'white' | 'g90' = 'white';
  const toggle = () => {
    theme !== 'white' ? (theme = 'white') : (theme = 'g90');
  };
</script>

<Theme persist bind:theme />

<Header
  href="/"
  platformName="Monitor"
  bind:isSideNavOpen
  expandedByDefault={false}
>
  <svelte:fragment slot="skip-to-content">
    <SkipToContent />
  </svelte:fragment>
  <HeaderNav>
    {#each NavLinks as { href, text }}
      <HeaderNavItem {href} {text} />
    {/each}
  </HeaderNav>
  <HeaderUtilities>
    <HeaderGlobalAction icon={themes[theme]} on:click={toggle} />
    <HeaderGlobalAction
      icon={UserAvatar}
      on:click={() => (isPopoverOpen = !isPopoverOpen)}
    />
    <HeaderAction>
      <HeaderPanelLinks>
        <HeaderPanelDivider>相关链接</HeaderPanelDivider>
        {#each PanelLinks as { href, text }}
          <HeaderPanelLink {href} target="_blank">{text}</HeaderPanelLink>
        {/each}
      </HeaderPanelLinks>
    </HeaderAction>
  </HeaderUtilities>
  <Popover
    bind:open={isPopoverOpen}
    closeOnOutsideClick
    align="bottom-right"
    class="pt-1px"
  >
    <Button icon={Logout} kind="secondary" on:click={logout}>登出</Button>
  </Popover>
</Header>

<SideNav bind:isOpen={isSideNavOpen}>
  <SideNavItems>
    {#each NavLinks as { href, text }}
      <SideNavLink {href} {text} />
    {/each}
  </SideNavItems>
</SideNav>
