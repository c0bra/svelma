<script context="module">
	export async function preload(page, session) {
		const res = await this.fetch(`components/button.json`);
    const jsdoc = await res.json();

		return { jsdoc };
	}
</script>

<script>
  import { onMount } from 'svelte'
  import { Button } from 'svelma'
  import DocHeader from '../../components/DocHeader.svelte'
  import Example from '../../components/Example.svelte'
  import JSDoc from '../../components/JSDoc.svelte'

  export let jsdoc
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

<JSDoc {jsdoc}></JSDoc>
