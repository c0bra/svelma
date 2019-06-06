<script context="module">
  export async function preload() {
    const res = await this.fetch(`components/dialog.json`);
    const jsdoc = await res.json();

    return { jsdoc };
  }
</script>

<script>
  import { Button, Dialog } from 'svelma'
  import DocHeader from '../../components/DocHeader.svelte'
  import Example from '../../components/Example.svelte'
  import JSDoc from '../../components/JSDoc.svelte'

  export let jsdoc

  function alert() {
    Dialog.alert('Alles ist gut')
  }

  function confirm(type) {
    switch(type) {
      case 'custom':
        return Dialog.confirm({
          message: 'This is a custom confirmation message',
          title: "I'm a title!",
          type: 'is-danger',
          icon: 'times-circle'
        })
      default:
        Dialog.confirm('Shall we dance?')
    }
  }

  function prompt(opts) {
    Dialog.prompt({ message: "What is your quest?", ...opts })
  }
</script>

<DocHeader title="Dialog" subtitle="User alerts, promps, and confirmation dialogs" />

<Example code={`<script>
  import { Button, Dialog } from 'svelma'

  function alert() {
    Dialog.alert('Alles ist gut')
  }
</script>

<Button class="block" on:click={() => alert()}>Toggle</Button>`}>
  <div slot="preview">
    <Button class="block is-primary" on:click={alert}>Dialog</Button>
    <Button class="block is-info" on:click={confirm}>Confirm</Button>
    <Button class="block is-danger" on:click={() => confirm('custom')}>Confirm (custom</Button>
  </div>
</Example>

<hr class="is-medium">

<p class="title is-4">Prompt</p>

<Example code={``}>
  <div slot="preview">
    <Button class="block is-primary" on:click={prompt}>Prompt</Button>
  </div>
</Example>

<JSDoc {jsdoc} />