<script context="module">
  export async function preload() {
    const res = await this.fetch(`components/snackbar.json`);
    const jsdoc = await res.json();

    return { jsdoc };
  }
</script>

<script>
  import { Button, Snackbar } from 'svelma'
  import DocHeader from '../../components/DocHeader.svelte'
  import Example from '../../components/Example.svelte'
  import JSDoc from '../../components/JSDoc.svelte'

  export let jsdoc

  function open(props) {
    Snackbar.create({ message: 'I am a snackbar message', ...props })
  }
</script>

<style>
.buttons {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
</style>

<DocHeader title="Snackbar" subtitle="Bigger than a toast, smaller than a dialog" />

<Example code={`<script>
  import { Button, Snackbar } from 'svelma'

  function open(props) {
    Snackbar.create({ message: 'I am a snackbar message', ...props })
  }
</script>

<div class="buttons">
  <Button on:click={() => open()}>Default Snackbar</Button>
  <Button type="is-success" on:click={() => open({ type: 'is-success' })}>Success</Button>
  <Button type="is-danger" on:click={() => open({ type: 'is-danger', actionText: 'retry', position: 'is-top-right' })}>Top Right</Button>
  <Button type="is-primary" on:click={() => open({ background: 'has-background-grey-lighter' })}>Custom Background</Button>
</div>`}>
  <div slot="preview">
    <div class="buttons">
      <Button on:click={() => open()}>Default Snackbar</Button>
      <Button type="is-success" on:click={() => open({ type: 'is-success' })}>Success</Button>
      <Button type="is-danger" on:click={() => open({ type: 'is-danger', actionText: 'retry', position: 'is-top-right' })}>Top Right</Button>
      <Button type="is-primary" on:click={() => open({ background: 'has-background-grey-lighter' })}>Custom Background</Button>
    </div>
  </div>
</Example>


<JSDoc {jsdoc} />