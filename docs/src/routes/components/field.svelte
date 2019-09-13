<script context="module">
	export async function preload(page, session) {
		const res = await this.fetch(`components/field.json`);
    const jsdoc = await res.json();

		return { jsdoc };
	}
</script>

<script>
  import { Button, Field, Input } from 'svelma'
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

<Field label="Email" type="is-danger" message="Email is invalid">
  <Input value="john@" />
</Field>

<Field label="Username" type="is-success" message="Username is available">
  <Input value="joey55" />
</Field>`}>
  <div slot="preview">
    <Field label="Name">
      <Input value="Rich Harris" />
    </Field>

    <Field label="Email" type="is-danger" message="Email is invalid">
      <Input value="john@" />
    </Field>

    <Field label="Username" type="is-success" message="Username is available">
      <Input value="joey55" />
    </Field>
  </div>
</Example>

<hr class="is-medium">

<p class="title is-4">Addons</p>

Attach controls together.  Use <code>expanded</code> property on the control to fill up space on the line.

<Example code={`<script>
  import { Button, Field, Input } from 'svelma'
</script>

`}>
  <div slot="preview">
    <Field>
      <Input type="search" placeholder="Search" icon="search" />
      <p class="control">
        <Button type="is-primary">Search</Button>
      </p>
    </Field>
  </div>
</Example>


<JSDoc {jsdoc}></JSDoc>