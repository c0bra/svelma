<script>
  import { setContext, onMount, createEventDispatcher } from 'svelte'
  import { writable } from 'svelte/store'
  import Icon from '../Icon.svelte'

  const dispatch = createEventDispatcher()

  /** Index of the active tab (zero-based), bindable
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

  // keep track of whether the component is mounted or not
  let mounted = false
  onMount(() => {
    mounted = true
  })

  // create tabs store and update context
  const tabs = writable([])
  const tabConfig = {
    active,
    tabs
  }
  setContext('tabs', tabConfig)

  // Changing active or mounted should call updateActiveTab
  $: mounted, active, updateActiveTab()

  // As tabs get deleted, keep active within bounds
  $: if (mounted)
    if ($tabs.length === 0) // there are no tabs, set active to -1
      active = -1
    else if (active < 0) // there are tabs, but active is -1
      active = 0
    else if (active >= $tabs.length) // there are tabs, but active is out of bounds
      active = $tabs.length - 1

  const updateActiveTab = () => {

    // no-op if component not mounted
    if (!mounted) return;

    // NOTE: change this back to using changeTab instead of activate/deactivate once transitions/animations are working
    if ($tabs[activeFinished]) $tabs[activeFinished].deactivate()
    if ($tabs[active]) $tabs[active].activate()
    // $tabs.forEach(t => t.changeTab({ from: activeTab, to: newActive }))

    // deferred assignment of active variable
    activeFinished = tabConfig.activeTab = active

    // allows using on:change on Tabs
    // can be used when bind:active cannot be used
    dispatch('change', activeFinished)
  }
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
