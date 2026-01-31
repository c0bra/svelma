<script>
  import { Message } from 'svelma'
</script>

<style>
  h1,
  /* figure, */
  p {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  /* figure {
    margin: 0 0 1em 0;
  }

  img {
    width: 100%;
    max-width: 400px;
    margin: 0 0 1em 0;
  } */

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }

  pre {
    display: inline-flex;
  }
</style>

<svelte:head>
  <title>Svelma</title>
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Svelma" />
  <meta property="og:description" content="Bulma components for Svelte" />
</svelte:head>

<div class="hero is-full-height">
  <div class="hero-body">
    <div class="container has-text-centered">
      <h1 class="title">Svelma</h1>
      <h2 class="subtitle">Bulma components for Svelte</h2>

      <pre>
        <code>$ npm install svelma</code>
      </pre>

      <br />
      <br />

      <p>
        <Message title="Note!" type="is-primary" showClose={false}>
          This library is a very early work-in-progress. Please forgive all broken and missing features and
          documentation.
        </Message>
      </p>
    </div>
  </div>
</div>
