<script>
  export let title
  export let subtitle

  $: newTitle = `${title} | Svelma`
</script>

<svelte:head>
  <meta property="og:title" content={newTitle} />
  <meta property="og:description" content={subtitle} />
  <meta property="og:image" content="https://c0bra.github.io/svelma/svelma-logo.svg" />
</svelte:head>

<!-- Doc for a Svelma Component -->
<header class="header">
  <h1 class="title">{title}</h1>
  <h2 class="subtitle">{subtitle}</h2>
</header>
