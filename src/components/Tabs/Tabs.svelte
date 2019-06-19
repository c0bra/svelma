<script>
  import { setContext, getContext, onMount } from 'svelte'
  import { get, writable } from 'svelte/store'

  /** Index of the active tab (zero-based)
   * @svelte-prop {Number} [value=0]
   * */
  export let value = 0

  /** Size of tabs
   * @svelte-prop {String} [size]
   * @values $$sizes$$
   * */
  export let size = ''

  export let expanded = false

  let activeTab = 0
  $: activeTab = value || 0

  const tabs = writable([])

  const tabConfig = {
    activeTab,
    tabs,
  }

  setContext('tabs', tabConfig)

  // This only runs as tabs are added/removed
  tabs.subscribe(ts => {
    if (ts.length > 0 && ts.length > activeTab - 1) {
      ts.forEach(t => t.deactivate())
      if (ts[activeTab]) ts[activeTab].activate()
    }
  })

  function changeTab(tabNumber) {
    const ts = get(tabs)
    // if (ts[activeTab]) ts[activeTab].deactivate()
    // if (ts[tabNumber]) ts[tabNumber].activate()
    ts.forEach(t => t.changeTab({ from: activeTab, to: tabNumber }))
    activeTab = tabConfig.activeTab = tabNumber
  }

  onMount(() => {
    changeTab(activeTab)
  })
</script>

<style lang="scss">
  .tabs-wrapper {
    &.is-fullwidth {
      /* TODO */
    }

    .tab-content {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      overflow-x: hidden;
    }
  }
</style>

<div class="tabs-wrapper {size}" class:is-fullwidth={expanded}>
  <nav class="tabs">
    <ul>
      {#each $tabs as tab, index}
        <li class:is-active={index === activeTab}>
          <a href on:click|preventDefault={() => changeTab(index)}>
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
