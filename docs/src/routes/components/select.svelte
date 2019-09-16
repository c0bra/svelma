<script context="module">
  export async function preload() {
    const res = await this.fetch(`components/select.json`);
    const jsdoc = await res.json();

    return { jsdoc };
  }
</script>

<script>
  import { Field, Select } from 'svelma'
  import Codeview from '../../components/Code.svelte'
  import DocHeader from '../../components/DocHeader.svelte'
  import Example from '../../components/Example.svelte'
  import JSDoc from '../../components/JSDoc.svelte'

  export let jsdoc
</script>

<DocHeader title="Select">
  <div slot="subtitle">
    Select an item in a dropdown list. Use with <strong>Field</strong> to access all functionalities
  </div>
</DocHeader>

<Example code={`<script>
  import { Field, Select } from 'svelma'
</script>

<Field label="Simple">
  <Select placeholder="Select a name">
    <option>Mike</option>
    <option>John</option>
    <option>Jimmy</option>
    <option>Susan</option>
    <option>Clarence</option>
    <option>Tabitha</option>
  </Select>
</Field>
`}>
  <div slot="preview">
    <Field label="Simple">
      <Select placeholder="Select a name">
        <option>Mike</option>
        <option>John</option>
        <option>Jimmy</option>
        <option>Susan</option>
        <option>Clarence</option>
        <option>Tabitha</option>
      </Select>
    </Field>
    
    <Field label="Grouped">
      <Select placeholder="Select a city" icon="user">
        <optgroup label="Kansas">
          <option>Kansas City</option>
          <option>Wichita</option>
        </optgroup>
        <optgroup label="Missouri">
          <option>Kansas City</option>
          <option>St. Louis</option>
        </optgroup>
      </Select>
    </Field>

    <Field label="Error" type="is-danger" message="Something ain't right with this field">
      <Select placeholder="Select a currency">
        <option>US Dollars</option>
        <option>Canadian Dollars</option>
      </Select>
    </Field>

    <Field label="Rounded">
      <Select placeholder="Select a currency" rounded>
        <option>US Dollars</option>
        <option>Canadian Dollars</option>
      </Select>
    </Field>

    <Field label="Required">
      <Select placeholder="Select a currency" required>
        <option>US Dollars</option>
        <option>Canadian Dollars</option>
      </Select>
    </Field>

    <Field label="Loading">
      <Select placeholder="Select a currency" loading>
        <option>US Dollars</option>
        <option>Canadian Dollars</option>
      </Select>
    </Field>
  </div>
</Example>

<JSDoc {jsdoc}></JSDoc>
