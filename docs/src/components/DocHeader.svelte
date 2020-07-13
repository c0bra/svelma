<script>
  export let title
  export let subtitle

  $: newTitle = `${title} | Svelma`
</script>

<svelte:head>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={newTitle} />
  <meta property="og:description" content={subtitle} />
</svelte:head>

<!-- Doc for a Svelma Component -->
<header class="header">
  <h1 class="title">{title}</h1>
  <h2 class="subtitle">{subtitle}</h2>
</header>
