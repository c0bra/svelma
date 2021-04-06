<script>
  import { Button, Modal } from 'svelma'
  import DocHeader from '../../components/DocHeader.svelte'
  import Example from '../../components/Example.svelte'

  let active = false
</script>

<DocHeader title="Modal" subtitle="Modal popups" />

<Example code={`<script>
  import { Button, Modal } from 'svelma'
  
  let active = false
</script>

<Button class="block" on:click={() => active = !active}>Toggle</Button>
<Modal bind:active={active}>
  <p class="image is-4by3">
    <img alt="Test image" src="https://via.placeholder.com/1280x920"/>
  </p>
</Modal>`}>
  <div slot="preview">
    <Button class="block" on:click={() => active = !active}>Toggle</Button>
    <Modal bind:active={active}>
      <p class="image is-4by3">
        <img alt="Test" src="https://via.placeholder.com/1280x920"/>
      </p>
    </Modal>
  </div>
</Example>
