<script>
  import { onDestroy, onMount } from 'svelte'
  import { slide } from 'svelte/transition'
  import Codepreview from '../../components/Code.svelte'
  import DocHeader from '../../components/DocHeader.svelte'
  import Example from '../../components/Example.svelte'

  const types = ['is-primary', 'is-success', 'is-danger', 'is-warning', 'is-info', 'is-link']
  let type = 'is-primary'

  async function update() {
    type = ''

    setTimeout(() => {
      type = types[Math.floor(Math.random() * types.length)];
    }, 1000)
  }
</script>

<DocHeader title="Hero" subtitle="Hero headers" />

<Example horizontal={true} code={`<script>
  import { slide } from 'svelte/transition'

  const types = ['is-primary', 'is-success', 'is-danger', 'is-warning', 'is-info', 'is-link']
  let type = 'is-primary'

  async function update() {
    type = ''

    setTimeout(() => {
      type = types[Math.floor(Math.random() * types.length)];
    }, 1000)
  }
</script>

<button class="button is-primary" on:click={update}>Update Hero</button>

<br />
<br />

{#if type}
  <section class="hero {type}" transition:slide>
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Title
        </h1>
        <h2 class="subtitle">
          Subtitle
        </h2>
      </div>
    </div>
  </section>
{/if}`}>
  <div slot="preview">
    <button class="button is-primary" on:click={update}>Update Hero</button>

    <br />
    <br />

    {#if type}
      <section class="hero {type}" transition:slide>
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Title
            </h1>
            <h2 class="subtitle">
              Subtitle
            </h2>
          </div>
        </div>
      </section>
    {/if}
  </div>
</Example>
