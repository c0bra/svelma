<script>
  import Clipboard from 'clipboard'
  import hljs from 'highlight.js/lib/highlight';
  import { beforeUpdate, tick, onMount, onDestroy } from 'svelte'

  export let lang = 'js'
  export let code = ''
  let button
  let codeElm
  let clip
  let show = false
  let compiled

  onMount(async () => {
    code = code || codeElm.innerHTML
    code = code.trim()
    clip = new Clipboard(button, {
      text: trigger => code
    })

    compiled = hljs.highlightAuto(code, [lang]).value

    await tick()

    show = true
  })

  onDestroy(() => {
    if (clip) clip.destroy()
  })
</script>

<style>
  .codeview {
    padding: 0;
  }

  .codeview:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  figure.highlight {
    position: relative;
  }

  .button-container {
    position: absolute;
    right: 0;
  }

  /* code {
    padding: 1.25rem 1.5rem;
  } */

  pre {
    display: none;
  }

  .show {
    display: block;
  }
</style>

<div class="codeview">
  <figure class="highlight is-expanded">
    <div class="button-container">
      <button class="button is-text is-small copy-code" bind:this={button}>Copy</button>
    </div>
    <pre>
      <code class="{lang}" bind:this={codeElm}><slot /></code>
    </pre>
    <pre class:show>
      <code>
        {@html compiled}
      </code>
    </pre>
  </figure>
</div>
