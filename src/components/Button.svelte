<script>
  import { onMount } from 'svelte'
  export let tag = 'button'

  // onMount(() => {
  //   if (!['button', 'a'].includes(tag)) throw new Error(`'${tag}' cannot be used as a tag for a Bulma button`)
  // })
  let props
  $: props = {
    ...$$props,
    class: `button ${$$props.class}`,
  }
</script>

{#if tag === 'button'}
  <button {...props} on:click>
    <slot>Button Test #2</slot>
  </button>
{/if}
