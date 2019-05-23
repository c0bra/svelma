<script>
  import Clipboard from 'clipboard'
  import { beforeUpdate, onMount, onDestroy } from 'svelte'

  let button
  let code
  let clip

  onMount(() => {
    code.innerHTML = code.innerHTML.trim()

    clip = new Clipboard(button, {
      text: trigger => code.innerHTML,
    })
  })

  // onDestroy(() => {
  //   if (clip) clip.destroy()
  // })
</script>

<style>
  .codeview {
    padding: 0;
  }

  .codeview:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  figure {
    position: relative;
  }

  .button-container {
    position: absolute;
    right: 0;
  }

  code {
    padding: 1.25rem 1.5rem;
  }
</style>

<div class="codeview">
  <figure class="highlight is-expanded">
    <div class="button-container">
      <button class="button is-text is-small copy-code" bind:this={button}>Copy</button>
    </div>
    <pre>
      <code class="bash hljs" bind:this={code}>
        <slot />
      </code>
    </pre>
  </figure>
</div>
