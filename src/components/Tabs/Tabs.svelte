<script>
  import { setContext, getContext, onMount, onDestroy, createEventDispatcher } from 'svelte'
  import { get, writable } from 'svelte/store'
  import Icon from '../Icon.svelte'

  const dispatch = createEventDispatcher()

  /** Index of the active tab (zero-based)
   * @svelte-prop {Number} [active=0]
   * */
  export let active = 0

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

  let activeFinished = active
  $: changeTab(active)

  const tabs = writable([])

  const tabConfig = {
    activeTab: active,
    tabs
  }

  setContext('tabs', tabConfig)

  // This only runs as tabs are added/removed
  const unsubscribe = tabs.subscribe(ts => {
    if (ts.length > 0 && ts.length > active - 1) {
      ts.forEach(t => t.deactivate())
      if (ts[active]) ts[active].activate()
    }
  })

  export function changeTab(newActive) {
    const ts = get(tabs)
    // NOTE: change this back to using changeTab instead of activate/deactivate once transitions/animations are working
    if (ts[activeFinished]) ts[activeFinished].deactivate()
    if (ts[newActive]) ts[newActive].activate()
    // ts.forEach(t => t.changeTab({ from: activeTab, to: newActive }))
    activeFinished = tabConfig.activeTab = newActive;
    dispatch('activeTabChanged', newActive)
  }

  onMount(() => {
    changeTab(activeFinished)
  })

  onDestroy(() => {
    unsubscribe()
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
      {#each $tabs as tab, index}
        <li class:is-active={index === activeFinished}>
          <a href on:click|preventDefault={() => active = index}>
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
