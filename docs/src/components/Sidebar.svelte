<script context="module">
  export async function preload({ params, query }) {
    // const res = await this.fetch('')
  }
</script>

<script>
  import { Svelma as Components } from 'svelma'

  const components = Object.keys(Components).sort();
</script>

<style>
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
  }
</style>

<!-- <div class="sidebar-bg"></div> -->
<aside class="sidebar">
  <p class="sidebar-label">Installation</p>
  <ul>
    <li>
      <a href="/install">Start</a>
    </li>
  </ul>
  <p class="sidebar-label">Bulma Components</p>
  <ul>
    <li />
  </ul>
  <p class="sidebar-label">UI Components</p>
  <ul>
    {#each components as c}
      <li>
        <a href="/components/{c.toLowerCase()}">{c}</a>
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
