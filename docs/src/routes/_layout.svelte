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

  .docs-main {
    flex-grow: 1;
    flex-shrink: 1;
    padding: 3rem;
    background-color: white;
    min-height: calc(100vh - 4rem);
  }

  @media screen and (max-width: 1087px) {
    .docs {
      flex-direction: column;
    }

    .docs-main {
      min-height: unset;
    }
  }
</style>

<svelte:head>
  <title>Svelma</title>
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="Svelma" />
  <!-- <meta property="og:title" value="Svelma" />
  <meta property="og:description" value="Bulma components for Svelte" />
  <meta property="og:image" value="https://c0bra.github.io/svelma/svelma-logo.svg" /> -->
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
