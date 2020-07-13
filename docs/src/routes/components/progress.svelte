<script>
  import { onDestroy, onMount } from 'svelte'
  import Codepreview from '../../components/Code.svelte'
  import DocHeader from '../../components/DocHeader.svelte'
  import Example from '../../components/Example.svelte'
  import { Progress } from 'svelma'

  const types = ['is-primary', 'is-success', 'is-danger', 'is-warning', 'is-info', 'is-link']
  const progresses = Array(6).fill(0)

  function update() {
    types.forEach((type, i) => {
      progresses[i] = Math.floor(Math.random() * 100)
    })
  }
  
  onMount(() => {
    update()
  })
</script>

<DocHeader title="Hero" subtitle="Hero headers" />

<Example code={`<script>
  import { onDestroy, onMount } from 'svelte'
  import { Progress } from 'svelma'
  
  const types = ['is-primary', 'is-success', 'is-danger', 'is-warning', 'is-info', 'is-link']
  const progresses = Array(6).fill(0)
  
  function update() {
    types.forEach((type, i) => {
      progresses[i] = Math.floor(Math.random() * 100)
    })
  }
  
  onMount(() => {
    update()
  })
</script>

<button class="button is-primary" on:click={update}>Update</button>

<br />
<br />

{#each types as type, i}
  <Progress {type} value={progresses[i]} duration={i * 200} max="100"></Progress>
{/each}

<br>
<br>

<p class="title is-5">Indeterminate (no value)</p>
<Progress max="100"></Progress>`}>
  <div slot="preview">
    <button class="button is-primary" on:click={update}>Update</button>

    <br />
    <br />

    {#each types as type, i}
      <Progress {type} value={progresses[i]} duration={i * 200} max="100"></Progress>
    {/each}

    <br>
    <br>
    
    <p class="title is-5">Indeterminate (no value)</p>
    <Progress max="100"></Progress>
  </div>
</Example>
