<script>
  import { onMount } from 'svelte'
  export let tag = 'button'
  export let type = ''
  export let href = ''

  onMount(() => {
    if (!['button', 'a'].includes(tag)) throw new Error(`'${tag}' cannot be used as a tag for a Bulma button`)
  })
  
  let props
  $: props = {
    ...$$props,
    class: `button ${type} ${$$props.class || ''}`,
  }
</script>

{#if tag === 'button'}
  <button {...props} on:click>
    <slot>Button Test #2</slot>
  </button>
{:else if tag === 'a'}
  <a {href} {...props} on:click>
    <slot>Button Test #2</slot>
  </a>
{/if}
