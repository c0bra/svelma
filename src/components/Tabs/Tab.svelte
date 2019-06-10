<script>
  import { setContext, getContext, onMount } from 'svelte'

  export let label
  let active = false

  let index

  let el

  const tabConfig = getContext('tabs')

  onMount(() => {
    tabConfig.tabs.update(tabs => [{
      index,
      label,
      activate: () => active = true,
      deactivate: () => active = false,
    }, ...tabs])
  })
</script>

<style>
.is-active {

}
</style>

{#if active}
<!-- <div class:is-active={active} bind:this={el}> -->
  <slot {label} />
<!-- </div> -->
{/if}
