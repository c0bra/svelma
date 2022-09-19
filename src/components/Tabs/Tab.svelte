<script>
  import { beforeUpdate, getContext, tick, onMount, onDestroy } from 'svelte'

  /** Label for tab
   * @svelte-prop {String} label
   * */
  export let label

  /** Icon to be shown on the left-side of the tab
   * @svelte-prop {String} [icon]
   * */
  export let icon = ''

  /** Fontawesome icon pack to use. By default the <code>Icon</code> component uses <code>fas</code>
   * @svelte-prop {String} [iconPack]
   * @values <code>fas</code>, <code>fab</code>, etc...
   * */
  export let iconPack = ''

  /** Set this tab as active
   * @svelte-prop {Boolean} active=false
   * @values true, false
  */
  export let active = false

  let el
  let index
  let starting = false
  let direction = ''
  let isIn = false

  const key = {}
  const { registerTab, selectTab, selectedTab } = getContext('tabs')
  const tabObject = {
    key,
    label,
    icon,
    iconPack
  }
  registerTab(tabObject)

  $: if (active) selectTab(tabObject)
  $: isSelected = $selectedTab === tabObject
</script>

<style lang="scss">
  .tab {
    display: none;
    flex: 1 0 100%;

    &.is-active {
      display: inline-block;
    }
  }
</style>

<div
  class="tab {direction}"
  class:is-active={isSelected}
  bind:this={el}
  aria-hidden={!isSelected}
  >
  <slot {label} {iconPack} {icon} />
</div>
