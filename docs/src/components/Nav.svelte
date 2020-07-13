<script>
  export let segment

  const rootUrl = process.env.NODE_ENV === 'development' ? '/' : '/svelma'
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

{#if false}
  <nav>
    <ul>
      <li>
        <a class={segment === undefined ? 'selected' : ''} href=".">home</a>
      </li>
      <li>
        <a class={segment === 'about' ? 'selected' : ''} href="about">about</a>
      </li>

      <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
      <li>
        <a rel="prefetch" class={segment === 'blog' ? 'selected' : ''} href="blog">blog</a>
      </li>
    </ul>
  </nav>
{/if}

<nav id="navbar" class="navbar has-shadow is-spaced">
  <div class="container">
    <div class="navbar-brand">
      <a href={rootUrl} class="navbar-item brand">
        <img src="svelma-logo.svg" class="logo" alt="Svelma: Bulma components for Svelte" />
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
