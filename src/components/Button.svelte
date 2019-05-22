<script>
  import { onMount } from 'svelte'
  export let tag = 'button'

  onMount(() => {
    if (!['button', 'a'].includes(tag)) throw new Error(`'${tag}' cannot be used as a tag for a Bulma button`)
  })
</script>

{#if tag === 'button'}
  <button>
    <slot />
  </button>
{/if}
