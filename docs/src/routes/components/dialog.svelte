<script context="module">
  export async function preload() {
    const res = await this.fetch(`components/dialog.json`);
    const jsdoc = await res.json();

    return { jsdoc };
  }
</script>

<script>
  import { Button, Dialog, Toast } from 'svelma'
  import Codepreview from '../../components/Code.svelte'
  import DocHeader from '../../components/DocHeader.svelte'
  import Example from '../../components/Example.svelte'
  import JSDoc from '../../components/JSDoc.svelte'

  export let jsdoc

  function alert() {
    Dialog.alert('Alles ist gut')
  }

  const thenHandler = result => Toast.create(`You ${result ? 'confirmed' : 'canceled'}`)

  function confirm(type) {
    switch(type) {
      case 'custom':
        return Dialog.confirm({
          message: 'This is a custom confirmation message',
          title: "I'm a title!",
          type: 'is-danger',
          icon: 'times-circle'
        })
        .then(thenHandler)
      default:
        Dialog.confirm('Shall we dance?')
        .then(thenHandler)
    }
  }

  function prompt(opts) {
    Dialog.prompt({
      message: "What is your quest?",
      ...opts
    })
    .then(prompt => Toast.create(`Your answer was: '${prompt}'`))
  }
</script>

<DocHeader title="Dialog" subtitle="User alerts, promps, and confirmation dialogs" />

<p class="title is-4">Alert and Dialog</p>

<p class="content">Use <code>Dialog.alert()</code> and <code>Dialog.confirm()</code> to create these kinds of dialogs.
The methods return a promise that is resolved when the user cancels or confirms the alert. If the use closes/cancels the
value will be <code>false</code>. If the user clicks the confirm button the value will be <code>true</code>.

The first argument can either be an object of options or a string to use as the message.</p>

<Example code={`<script>
  import { Button, Dialog, Toast } from 'svelma'

  function alert() {
    Dialog.alert('Alles ist gut')
  }

  const thenHandler = result => Toast.create(\`You \${result ? 'confirmed' : 'canceled'}\`)

  function confirm(type) {
    switch(type) {
      case 'custom':
        return Dialog.confirm({
          message: 'This is a custom confirmation message',
          title: "I'm a title!",
          type: 'is-danger',
          icon: 'times-circle'
        })
        .then(thenHandler)
      default:
        Dialog.confirm('Shall we dance?')
        .then(thenHandler)
    }
  }
</script>

<Button type="is-primary" on:click={() => alert()}>Dialog</Button>
<Button type="is-info" on:click={() => confirm()}>Confirm</Button>
<Button type="is-danger" on:click={() => confirm('custom')}>Confirm (custom)</Button>
`}>
  <div slot="preview">
    <Button type="is-primary" on:click={() => alert()}>Dialog</Button>
    <Button type="is-info" on:click={() => confirm()}>Confirm</Button>
    <Button type="is-danger" on:click={() => confirm('custom')}>Confirm (custom)</Button>
  </div>
</Example>

<hr class="is-medium">

<p class="title is-4">Prompt</p>

<p class="content">Use <code>Dialog.prompt()</code> to programmatically create prompts for user input. By default the
dialog will be created with a required text input. You can control the props (attributes) on the prompt with the
<code>inputProps</code> prop.

<code>prompt()</code> returns a promise that will be resolved with the prompt input value if the user confirms, or null
if they cancel/close.</p>

<Example code={`<script>
  import { Button, Dialog, Toast } from 'svelma'

  function prompt(opts) {
    Dialog.prompt({
      message: "What is your quest?",
      ...opts
    })
    .then(prompt => Toast.create(\`Your answer was: '\${prompt}'\`))
  }
</script>

<Button type="is-primary" on:click={() => prompt()}>Prompt</Button>
<Button type="is-link" on:click={() => prompt({ message: 'Which date?', inputProps: { type: 'date' }})}>Date Prompt</Button>`
}>
  <div slot="preview">
    <Button type="is-primary" on:click={() => prompt()}>Prompt</Button>
    <Button type="is-link" on:click={() => prompt({ message: 'Which date?', inputProps: { type: 'date' }})}>Date Prompt</Button>
  </div>
</Example>

<JSDoc {jsdoc} />