<script context="module">
  export async function preload() {
    const res = await this.fetch(`components/toast.json`);
    const jsdoc = await res.json();

    return { jsdoc };
  }
</script>

<script>
  import { Button, Toast } from 'svelma'
  import DocHeader from '../../components/DocHeader.svelte'
  import Example from '../../components/Example.svelte'
  import JSDoc from '../../components/JSDoc.svelte'

  export let jsdoc

  function open(type, position, background) {
    Toast.create({ message: 'I am a toast', type, position, background })
  }
</script>

<style>
.buttons {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
</style>

<DocHeader title="Toast" subtitle="Toasty notifications" />

<Example code={`<script>
  import { Button, Toast } from 'svelma'

  function open(type, position) {
    Toast.create({ message: 'I am a toast', type, position })
  }
</script>

<Button on:click={() => open()}>Toast</Button>
<Button type="is-success" on:click={() => open('is-success')}>Success</Button>
<Button type="is-danger" on:click={() => open('is-danger', 'is-bottom-right')}>Bottom Right</Button>
<Button type="is-primary" on:click={() => open('is-primary', 'is-top', 'has-background-grey-lighter')}>Custom Background</Button>`}>
  <div slot="preview">
    <div class="buttons">
      <Button on:click={() => open()}>Toast</Button>
      <Button type="is-success" on:click={() => open('is-success')}>Success</Button>
      <Button type="is-danger" on:click={() => open('is-danger', 'is-bottom-right')}>Bottom Right</Button>
      <Button type="is-primary" on:click={() => open('is-primary', 'is-top', 'has-background-grey-lighter')}>Custom Background</Button>
    </div>
  </div>
</Example>

<JSDoc {jsdoc} />