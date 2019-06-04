<script>
  export let title = 'Svelma Example'
  export let code

  let form

  const externalStyles = [
    'https://unpkg.com/buefy/dist/buefy.min.css',
    'https://use.fontawesome.com/releases/v5.3.1/css/all.css',
  ]

  const externalScripts = ['https://bundle.run/svelma']

  function extractTag(code, tag) {
    const start = code.indexOf(`<${tag}>`)
    const end = code.lastIndexOf(`<\/${tag}>`)

    const extracted = code.substring(start, end)

    console.log({ extracted })
  }

  // $: html = code.

  $: value = JSON.stringify({
    title,
    tags: ['svelma', 'svelte', 'bulma'],
    // html,
    js_pre_processor: 'babel',
    css_pre_processor: 'scss',
    html_classes: 'section',
    head: "<meta name='viewport' content='width=device-width, initial-scale=1'>",
    css_external: externalStyles.join(';'),
    js_external: externalScripts.join(';'),
  })

  function open() {
    form.submit()
  }
</script>

<style>
  .slot-wrap {
    cursor: pointer;
    pointer-events: auto;
  }
</style>

<form action="https://codepen.io/pen/define" method="POST" target="_blank" bind:this={form}>
  <input type="hidden" name="data" {value} />
  <div class="slot-wrap" on:click={open}>
    <slot />
  </div>
</form>
