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
  Mostly just wraps <code>{`<input>`}</code>, <code>{`<select>`}</code>  and <code>{`<textarea>`}</code> so additional Bulma features can be bound easily.
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
<p class="content">Wrap with <strong>Field</strong> for additional features</p>

<p class="title is-4">Types and colors</p>

<Example code={`<script>
  import { Field, Input } from 'svelma'
</script>

<Input type="text" placeholder="Text input" />
`}>
  <div slot="preview">
    <Codeview lang="js">
// Bound values
{JSON.stringify(bound, null, 2)}
    </Codeview>

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
  </div>
</Example>

<JSDoc {jsdoc}></JSDoc>