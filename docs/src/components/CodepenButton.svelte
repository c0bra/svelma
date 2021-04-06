<script>
  import { getParameters } from 'codesandbox/lib/api/define'

  //export let title = 'Svelma Example'
  export let code

  let form

  function extractTag(code, tag) {
    let start = code.indexOf(`<${tag}>`)
    if (start === -1) return

    start = start + tag.length + 2
    const end = code.lastIndexOf(`<\/${tag}>`)

    const extracted = code.substring(start, end)

    return extracted
  }

  function extractHTML(code) {
    code = code.replace(/<script>[\s\S]*<\/script>/im, '')
    code = code.replace(/<script>[\s\S]*<\/style>/im, '')

    return code
  }

  $: value = getParameters({
    files: {
      'sandbox.config.json': {
        content: {
          template: 'svelte',
        },
      },
      'index.html': {
        content: `<html>
  <body>
    <link
      id="external-css"
      rel="stylesheet"
      type="text/css"
      href="https://unpkg.com/bulma/css/bulma.min.css"
      media="all"
    />
    <link
      id="external-css2"
      rel="stylesheet"
      type="text/css"
      href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
      media="all"
    />
  </body>
</html>`,
      },
      'index.js': {
        content: `import App from "./App.svelte";

const app = new App({
  target: document.body
});

export default app;`,
      },
      'App.svelte': { content: code },
      'package.json': {
        content: {
          name: 'svelma-example',
          version: '1.0.0',
          devDependencies: {
            'npm-run-all': '^4.1.5',
            rollup: '^1.10.1',
            'rollup-plugin-commonjs': '^9.3.4',
            'rollup-plugin-node-resolve': '^4.2.3',
            'rollup-plugin-svelte': '^5.0.3',
            'rollup-plugin-terser': '^4.0.4',
            'sirv-cli': '^0.3.1',
          },
          dependencies: {
            svelte: '^3.0.0',
            svelma: 'latest',
            '@fortawesome/fontawesome-free': 'latest',
            bulma: 'latest',
          },
          scripts: {
            build: 'rollup -c',
            autobuild: 'rollup -c -w',
            dev: 'run-p start:dev autobuild',
            start: 'sirv public',
            'start:dev': 'sirv public --dev',
          },
        },
      },
    },
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

<form action="https://codesandbox.io/api/v1/sandboxes/define" method="POST" target="_blank" bind:this={form}>
  <input type="hidden" name="parameters" {value} />
  <div class="slot-wrap" on:click={open}>
    <slot />
  </div>
</form>
