<script context="module">
  export async function preload({ path }) {
    const url = 'https://c0bra.github.io' + `/svelma/${path}`.replace(/\/\//g, '/').replace(/([^\/]$)/, '$1/')

    return { url };
  }
</script>

<script>
  import 'bulma/css/bulma.css'
  import 'highlight.js/styles/github.css'

  import { afterUpdate } from 'svelte'
  import { stores } from '@sapper/app';
  import Nav from '../components/Nav.svelte'
  import Sidebar from '../components/Sidebar.svelte'

  const { page } = stores()

  export let segment
  let url

  page.subscribe(({ path }) => {
    url = 'https://c0bra.github.io' + `/svelma/${path}`.replace(/\/\//g, '/').replace(/([^\/]$)/, '$1/')
  })

  // afterUpdate(function() {
  //   console.log('I updated!', this)
  // })
</script>

<style lang="scss">
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
    overflow: auto;
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
  <meta property="og:site_name" content="Svelma" />
  <meta property="og:image" content="https://c0bra.github.io/svelma/svelma-logo.png" />
  <meta property="og:image:width" content="200" />
  <meta property="og:image:height" content="200" />
  <meta property="og:url" content={url}>
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
