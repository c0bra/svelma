<script lang="typescript">
  import { onMount } from 'svelte'

  export let name
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<h1>Hello {name}!</h1>
