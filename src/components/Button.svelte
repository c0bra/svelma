{#if tag === 'button'}
  <button></button>
{/if}

<script>
  import { onMount } from 'svelte';
  export let tag = 'button';

  onMount(() => {
    if (!['button', 'a'].includes(tag)) throw new Error(`'${tag}' cannot be used as a tag for a Bulma button`);

    tag = false;
  });
</script>