<script>
  import { onMount } from 'svelte'
  import Button from './components/Button.svelte'

  export let name
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<h1>Hello {name}!</h1>
<Button>testing!</Button>
