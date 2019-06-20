<script context="module">
  export async function preload() {
    const res = await this.fetch(`components/autocomplete.json`);
    const jsdoc = await res.json();

    return { jsdoc };
  }
</script>

<script>
  import { Autocomplete, Field } from 'svelma'
  import Codeview from '../../components/Code.svelte'
  import DocHeader from '../../components/DocHeader.svelte'
  import Example from '../../components/Example.svelte'
  import JSDoc from '../../components/JSDoc.svelte'

  export let jsdoc
  
  let value
  let data = []
  let selected = ''

  const options = [
    'Angular',
    'Angular 2',
    'Aurelia',
    'Backbone',
    'Ember',
    'jQuery',
    'Meteor',
    'Node.js',
    'Polymer',
    'React',
    'RxJS',
    'Vue.js'
  ]

  $: {
    data = options.map(o => o.toLowerCase()).filter(o => value && o.indexOf(value.toLowerCase() >= 0))
    console.log('data', value,data)
  }
</script>

<DocHeader title="Autocomplete" subtitle="autocomplete" />

<br>

<Example code={`<script>
  import { Input } from 'svelma'
</script>

<Input type="text" placeholder="Text input" />
`}>
  <div slot="preview">
    <strong>Selected:</strong> {selected}
    <br>
    <br>
    <Field label="Search for a JS framework">
      <Autocomplete bind:value {data} on:select={option => selected = option} />
    </Field>
  </div>
</Example>

<JSDoc {jsdoc}></JSDoc>