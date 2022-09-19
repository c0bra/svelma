<script>
  import { setContext, onMount, createEventDispatcher, onDestroy } from 'svelte'
  import { writable } from 'svelte/store'
  import Icon from '../Icon.svelte'

  const dispatch = createEventDispatcher()

  /** Size of tabs
   * @svelte-prop {String} [size]
   * @values $$sizes$$
   * */
  export let size = ''

  /** Position of tabs list, horizontally. By default they're positioned to the left
   * @svelte-prop {String} [position]
   * @values is-centered, is-right
   * */
  export let position = ''

  /** Style of tabs
   * @svelte-prop {String} [style]
   * @values is-boxed, is-toggle, is-toggle-rounded, is-fullwidth
   * */
  export let style = ''

  let tabs = []
  const selectedTab = writable(null)

  const registerTab = (tab) => {
    tabs = [...tabs, tab]
    selectedTab.update(current => current || tab)
    
    onDestroy(() => {
      const i = tabs.indexOf(tab)
      tabs = tabs.filter(t => t !== tab)
      if ($selectedTab === tab) {
        if (i < tabs.length)
          selectTab(tabs[i])
        else selectTab(tabs[tabs.length - 1])
      }
    });
  }

  const selectTab = (tab) => {
    selectedTab.set(tab)
    dispatch('change', {...tab, index: tabs.indexOf(tab)})
  }

  setContext('tabs', {
    registerTab,
    selectedTab,
    selectTab
  })
</script>

<style lang="scss">
  .tabs-wrapper {
    .tab-content {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      overflow-x: hidden;
    }
  }
</style>

<div class="tabs-wrapper">
  <nav class="tabs {size} {position} {style}">
    <ul>
      {#each tabs as tab, index (tab.key)}
        <li class:is-active={$selectedTab === tab}>
          <a href on:click|preventDefault={() => selectTab(tab)}>
            {#if tab.icon}
              <Icon pack={tab.iconPack} icon={tab.icon} />
            {/if}
            <span>{tab.label}</span>
          </a>
        </li>
      {/each}
    </ul>
  </nav>
  <section class="tab-content">
    <slot />
  </section>
</div>
