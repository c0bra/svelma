<script>
  import { Button } from 'svelma'
  import DocHeader from '../../components/DocHeader.svelte'
  import Example from '../../components/Example.svelte'

  let counter = 0
</script>

<DocHeader title="Buttons" subtitle="Tasty clickable buttons" />

<Example code={`<script>
  import { Button } from 'svelma'
</script>

<Button type="is-primary" on:click={() => counter++}>
  Click!: {counter}
</Button>`}>
  <div slot="preview">
    <Button type="is-primary" on:click={() => counter++}>
      Click!: {counter}
    </Button>
  </div>
</Example>
