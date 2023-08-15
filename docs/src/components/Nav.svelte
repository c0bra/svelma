<script>
  const rootUrl = process.env.NODE_ENV === 'development' ? '/' : 'https://c0bra.github.io/svelma'
  const github = 'https://github.com/c0bra/svelma'
</script>

<style>
  img.logo {
    padding: 0 10px;
    vertical-align: top;
  }

  .brand {
    text-transform: uppercase;
    font-weight: bold;
  }
</style>

<nav id="navbar" class="navbar has-shadow is-spaced">
  <div class="container">
    <div class="navbar-brand">
      <a href="{rootUrl}" class="navbar-item brand">
        <img src="/svelma-logo.svg" class="logo" alt="Svelma: Bulma components for Svelte" />
        Svelma
      </a>
      <a class="navbar-item is-hidden-desktop" href={github} target="_blank">
        <span class="icon" style="color: #333;">
          <i class="fab fa-github-alt" />
        </span>
      </a>
    </div>
    <div class="navbar-menu">
      <div class="navbar-end">
        <a class="navbar-item is-hidden-touch" href={github} target="_blank">
          <span class="icon" style="color: #333;">
            <i class="fab fa-lg fa-github-alt" />
          </span>
        </a>
      </div>
    </div>
  </div>
</nav>
