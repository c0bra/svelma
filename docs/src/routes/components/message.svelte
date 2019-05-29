<script>
  import { Button, Message } from 'svelma'
  import DocHeader from '../../components/DocHeader.svelte'
  import Example from '../../components/Example.svelte'

  let open
</script>

<DocHeader title="Message" subtitle="Message blocks to convey information" />

<Example code={`<script>
  import { Button, Message } from 'svelma'

  let open
</script>

<Button class="block" on:click={() => open = !open}>Toggle</Button>
<Message active={!open} title="Default"
  on:close={active => open = active}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Fusce id fermentum quam. Proin sagittis, nibh id
  hendrerit imperdiet, elit sapien laoreet elit
</Message>`}>
  <div slot="preview">
    <Button class="block" on:click={() => open = !open}>Toggle</Button>
    <Message active={!open} title="Default"
      on:close={active => open = active}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Fusce id fermentum quam. Proin sagittis, nibh id
      hendrerit imperdiet, elit sapien laoreet elit
    </Message>
  </div>
</Example>
