<script context="module">
  export async function preload({ params, query }) {
    // const res = await this.fetch('')
  }
</script>

<script>
  import difference from 'lodash/difference'
  import { Svelma as Components } from 'svelma'

  const formComponents = ['Input', 'Field', 'Switch'].sort()
  const omittedComponents = ['Tab', 'Taglist']
  let components = ['Form', ...Object.keys(Components)].sort()
  components = difference(components, [...formComponents, ...omittedComponents])

  const bulmaElements = ['Media', 'Table', 'Hero', 'Tiles'].sort()
</script>

<style lang="scss">
  .sidebar {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    width: 16rem;
    padding: 3rem 1rem;
    background: #f5f5f5;
  }

  .sidebar > ul {
    margin-bottom: 1.5em;
    margin-top: 0;

    ul {
      margin-left: 1.5em;
    }
  }

  .sidebar li {
    font-weight: 600;
  }

  .sidebar-label {
    margin-bottom: 0.5em;
    color: #7a7a7a;
    font-size: 0.9em;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .sidebar-bg {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 50%;
    background: #f5f5f5;
    min-height: calc(100vh - 4rem);
    z-index: -1;
  }

  @media screen and (max-width: 1087px) {
    .sidebar {
      order: 2;
      width: 100%;
    }
  }
</style>

<div class="sidebar-bg" />
<aside class="sidebar">
  <p class="sidebar-label">Installation</p>
  <ul>
    <li>
      <a href="install">Start</a>
    </li>
  </ul>
  <p class="sidebar-label">Bulma Elements</p>
  <ul>
    <li><a href="bulma/intro">Intro</a></li>
    {#each bulmaElements as c}
      <li>
        <a href="bulma/{c.toLowerCase()}">{c}</a>
      </li>
    {/each}
  </ul>
  <p class="sidebar-label">Svelma Components</p>
  <ul>
    {#each components as c}
      <li>
        {#if c === 'Form'}
          <p>{c}</p>
          <ul>
            {#each formComponents as fc}
              <li>
                <a href="components/{fc.toLowerCase()}">{fc}</a>
              </li>
            {/each}
          </ul>
        {:else}
          <a href="components/{c.toLowerCase()}">{c}</a>
        {/if}
      </li>
    {/each}
    <!-- <li>
      <a href="/components/collapse">Collapse</a>
    </li>
    <li>
      <a href="/components/icon">Icon</a>
    </li> -->
  </ul>
</aside>
