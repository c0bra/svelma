<script>
  import Clipboard from 'clipboard'
  import hljs from 'highlight.js/lib/highlight';
  import { beforeUpdate, tick, onMount, onDestroy } from 'svelte'

  export let lang = 'js'
  export let code = ''
  let _code = ''
  let button
  let codeElm
  let clip
  let show = false
  let compiled

  $: {
    _code = code || (codeElm && codeElm.innerHTML) || _code
    updateCode(code)
  }

  function updateCode(newCode) {
    if (!newCode) return
    code = newCode.trim()
    compiled = hljs.highlightAuto(code, [lang]).value
  }

  onMount(async () => {
    if (codeElm.innerHTML) code = codeElm.innerHTML

    clip = new Clipboard(button, {
      text: trigger => code
    })

    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
    var observer = new MutationObserver(() => {
      if (codeElm.innerHTML) updateCode(codeElm.innerHTML)
    });
    observer.observe(codeElm, {
      subtree: true,
      childList: true,
      characterData: true,
    })

    onDestroy(() => {
      observer.disconnect()
    })

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

  pre.hidden {
    visibility: hidden;
    height: 0px;
    padding: 0px;
  }

  pre.show {
    /* display: block; */
    visibility: visible;
  }
</style>

<div class="codeview">
  <figure class="highlight is-expanded">
    <div class="button-container">
      <button class="button is-text is-small copy-code" bind:this={button}>Copy</button>
    </div>
    <pre class="hidden">
      <code class="{lang}" bind:this={codeElm}><slot /></code>
    </pre>
    <pre class:hidden={!show} class:show>
      <code>
        {@html compiled}
      </code>
    </pre>
  </figure>
</div>
