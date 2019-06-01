<script context="module">
	export async function preload(page, session) {
		const res = await this.fetch(`components/field.json`);
    const jsdoc = await res.json();

		return { jsdoc };
	}
</script>

<script>
  import { Field, Input } from 'svelma'
  import DocHeader from '../../components/DocHeader.svelte'
  import Example from '../../components/Example.svelte'
  import JSDoc from '../../components/JSDoc.svelte'

  let name = 'Moby Dick'

  export let jsdoc
</script>

<DocHeader title="Field" subtitle="Add functionality and styling to form elements/inputs by grouping components together" />

<Example code={`<script>
  import { Field, Input } from 'svelma'
</script>

<Field label="Name">
  <Input value="Rich Harris" />
</Field>

<Field label="Name" type="is-danger" message="Pick a better name">
  <Input type="text" value="Moby Dick" />
</Field>`}>
  <div slot="preview">
    <Field label="Name">
      <Input value="Rich Harris" />
    </Field>

    <Field label="Name" type="is-danger" message="Pick a better name than {name}">
      <Input bind:value={name} />
    </Field>
  </div>
</Example>

<JSDoc {jsdoc}></JSDoc>