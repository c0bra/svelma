<script>
  import 'bulma/css/bulma.css'
  import 'highlight.js/styles/github.css'

  import { afterUpdate } from 'svelte'
  import Nav from '../components/Nav.svelte'
  import Sidebar from '../components/Sidebar.svelte'

  export let segment

  // afterUpdate(function() {
  //   console.log('I updated!', this)
  // })
</script>

<style lang="sass">
  .docs {
    display: flex;
    position: relative;
    flex-direction: row;
  }

  @media screen and (max-width: 1087px) {
    .docs {
      flex-direction: column;
    }
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
  <section class="docs container">
    <Sidebar />

    <div class="docs-main">
      <slot />
    </div>
  </section>
</main>
