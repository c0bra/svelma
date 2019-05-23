<script>
  export let title
  export let subtitle
</script>

<!-- Doc for a Svelma Component -->
<div>
  <header class="header">
    <h1 class="title">{title}</h1>
    <h2 class="subtitle">{subtitle}</h2>
  </header>

  <slot />
</div>
