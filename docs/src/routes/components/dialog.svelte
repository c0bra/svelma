<script>
  import { Button, Dialog } from 'svelma'
  import DocHeader from '../../components/DocHeader.svelte'
  import Example from '../../components/Example.svelte'

  function alert() {
    Dialog.alert('Alles ist gut')
  }
</script>

<DocHeader title="Modal" subtitle="Modal popups" />

<Example code={`<script>
  import { Button, Dialog } from 'svelma'

  function alert() {
    Dialog.alert('Alles ist gut')
  }
</script>

<Button class="block" on:click={() => alert()}>Toggle</Button>`}>
  <div slot="preview">
    <Button class="block" on:click={alert}>Toggle</Button>
  </div>
</Example>
