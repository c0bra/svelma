<script>
  // import 'bulma/css/bulma.css'
  import { afterUpdate } from 'svelte'
  import Nav from '../components/Nav.svelte'
  import Sidebar from '../components/Sidebar.svelte'

  export let segment

  // afterUpdate(function() {
  //   console.log('I updated!', this)
  // })
</script>

<style>
  .docs {
    display: flex;
    position: relative;
  }

  .docs-main {
    flex-grow: 1;
    flex-shrink: 1;
    padding: 3rem;
  }
</style>

<svelte:head>
  <title>Svelma</title>
</svelte:head>

<Nav {segment} />

<main>
  <section class="docs">
    <Sidebar />

    <div class="docs-main">
      <slot />
    </div>
  </section>
</main>
