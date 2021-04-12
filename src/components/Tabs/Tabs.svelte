<script>
  import { setContext, onMount, createEventDispatcher } from 'svelte'
  import { writable } from 'svelte/store'
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

  /** Sets active tab index, can be used when bind:active cannot be used
   * @svelte-prop {Function} [setActive]
   * */
  export const setActive = index => active = index;

  // deferred assignment of active variable, to avoid triggering infinite reactive loop
  // during changeActiveTab, holds previous active value
  let activeFinished = active

  $: changeActiveTab(active)

  const tabs = writable([])

  const tabConfig = {
    active,
    tabs
  }

  // As tabs get deleted, keep active within bounds
  $: if (active < 0 || active >= $tabs.length) 
    active = $tabs.length - 1

  setContext('tabs', tabConfig)

  const changeActiveTab = newActive => {
    // NOTE: change this back to using changeTab instead of activate/deactivate once transitions/animations are working
    if ($tabs[activeFinished]) $tabs[activeFinished].deactivate()
    if ($tabs[newActive]) $tabs[newActive].activate()
    // $tabs.forEach(t => t.changeTab({ from: activeTab, to: newActive }))

    // deferred assignment of active variable
    activeFinished = tabConfig.activeTab = newActive

    // allows using on:change on Tabs
    // can be used when bind:active cannot be used
    dispatch('change', activeFinished)
  }

  onMount(() => changeActiveTab(active))
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
