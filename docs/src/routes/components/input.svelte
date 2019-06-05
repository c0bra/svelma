<script context="module">
  export async function preload() {
    const res = await this.fetch(`components/input.json`);
    const jsdoc = await res.json();

    return { jsdoc };
  }
</script>

<script>
  import { Field, Input } from 'svelma'
  import Codeview from '../../components/Code.svelte'
  import DocHeader from '../../components/DocHeader.svelte'
  import Example from '../../components/Example.svelte'
  import JSDoc from '../../components/JSDoc.svelte'

  export let jsdoc

  let bound = {
    name: 'Rich Harris',
    email: 'rich@',
    username: 'richie55',
    password: 'secret123',
  }
</script>

<DocHeader title="Input" subtitle="User input controls" />

<p class="content">
  Mostly just wraps <code>{`<input>`}</code>  and <code>{`<textarea>`}</code> so additional Bulma features can be bound easily.
</p>

<br>

<Example code={`<script>
  import { Input } from 'svelma'
</script>

<Input type="text" placeholder="Text input" />
`}>
  <div slot="preview">
    <Input type="text" placeholder="Text input" />
  </div>
</Example>

<br>

<p class="title is-4">Types and colors</p>

<p class="content">Wrap with <a href="components/field"><strong>Field</strong></a> for additional features</p>

<Example code={`<script>
  import { Field, Input } from 'svelma'

  let bound = {
    name: 'Rich Harris',
    email: 'rich@',
    username: 'richie55',
    password: 'secret123',
  }
</script>

<Field label="Name">
  <Input type="text" bind:value={bound.name} placeholder="Text input" />
</Field>

<Field label="Email" type="is-danger" message="Invalid email"> 
  <Input type="email" bind:value={bound.email} maxlength="30" />
</Field>

<Field label="Username" type="is-success" message="Username available"> 
  <Input type="email" bind:value={bound.username} />
</Field>

<Field label="Password"> 
  <Input type="password" bind:value={bound.password} passwordReveal={true} />
</Field>

<Field label="Textarea"> 
  <Input type="textarea" maxlength="200" />
</Field>
`}>
  <div slot="preview">
    <Codeview lang="js" showCopy={false}>
// Bound values
{JSON.stringify(bound, null, 2)}
    </Codeview>

    <br>

    <Field label="Name">
      <Input type="text" bind:value={bound.name} placeholder="Text input" />
    </Field>

    <Field label="Email" type="is-danger" message="Invalid email"> 
      <Input type="email" bind:value={bound.email} maxlength="30" />
    </Field>

    <Field label="Username" type="is-success" message="Username available"> 
      <Input type="email" bind:value={bound.username} />
    </Field>

    <Field label="Password"> 
      <Input type="password" bind:value={bound.password} passwordReveal={true} />
    </Field>

    <Field label="Textarea"> 
      <Input type="textarea" maxlength="200" />
    </Field>
  </div>
</Example>

<hr class="is-medium">

<p class="title is-4">States, plus more styles</p>

<Example code={`<script>
  import { Field, Input } from 'svelma'
</script>

<Field>
  <Input placeholder="No label" />
</Field>

<Field label="Rounded">
  <Input class="is-rounded" placeholder="Rounded" />
</Field>

<Field label="Info" type="is-info"> 
  <Input placeholder="Info" />
</Field>

<Field label="Warning" type="is-warning"> 
  <Input placeholder="Warning" />
</Field>

<Field label="Disabled"> 
  <Input placeholder="Disabled" disabled />
</Field>

<Field label="Loading">
  <Input placeholder="Loading" loading />
</Field>`}>
  <div slot="preview">
    <Field>
      <Input placeholder="No label" />
    </Field>

    <Field label="Rounded">
      <Input class="is-rounded" placeholder="Rounded" />
    </Field>

    <Field label="Info" type="is-info"> 
      <Input placeholder="Info" />
    </Field>

    <Field label="Warning" type="is-warning"> 
      <Input placeholder="Warning" />
    </Field>

    <Field label="Disabled"> 
      <Input placeholder="Disabled" disabled />
    </Field>

    <Field label="Loading">
      <Input placeholder="Loading" loading />
    </Field>
  </div>
</Example>

<hr class="is-medium">

<p class="title is-4">Sizes</p>

<Example code={`<script>
  import { Field, Input } from 'svelma'
</script>

<Field>
  <Input placeholder="Small" size="is-small" />
</Field>

<Field>
  <Input placeholder="Default" />
</Field>

<Field>
  <Input placeholder="Medium" size="is-medium" />
</Field>

<Field>
  <Input placeholder="Large" size="is-large" />
</Field>`}>
  <div slot="preview">
    <Field>
      <Input placeholder="Small" size="is-small" />
    </Field>

    <Field>
      <Input placeholder="Default" />
    </Field>

    <Field>
      <Input placeholder="Medium" size="is-medium" />
    </Field>

    <Field>
      <Input placeholder="Large" size="is-large" />
    </Field>
  </div>
</Example>

<JSDoc {jsdoc}></JSDoc>