<script context="module">
  export async function preload() {
    const res = await this.fetch(`components/select.json`);
    const jsdoc = await res.json();

    return { jsdoc };
  }
</script>

<script>
  import { Select, Field } from 'svelma'

  import DocHeader from '../../components/DocHeader.svelte'
  import Example from '../../components/Example.svelte'
  import JSDoc from '../../components/JSDoc.svelte'

  export let jsdoc

  let users = ["John", "Conner", "Randy"]

  let selectedOptions = [];

</script>

<style>
.select-group {
  display: table;
  justify-content: flex-start;
  flex-wrap: wrap;
}
</style>

<DocHeader title="Select" subtitle="Select an item in a dropdown list. Use with Field to access all functionalities" />

<Example code={`<script>
  import {Select, Field} from 'svelma'
  let users = ["John", "Conner", "Randy"]
  
</script>

<Field label="Simple">
  <Select placeholder="Select a name">
    {#each users as user}
      <option value={user}>{user}</option>
    {/each}
  </Select>
</Field>

<Field label="Error" type='is-danger' message="Something went wrong with this field">
  <Select placeholder="Select a name">
    {#each users as user}
      <option value={user}>{user}</option>
    {/each}
  </Select>
</Field>


<Field label="Rounded">
  <Select placeholder="Select a name" rounded>
    {#each users as user}
      <option value={user}>{user}</option>
    {/each}
  </Select>
</Field>

<Field label="Required">
  <Select placeholder="Select a name" required>
    {#each users as user}
      <option value={user}>{user}</option>
    {/each}
  </Select>
</Field>


<Field label="Loading">
  <Select placeholder="Select a name" loading>
    {#each users as user}
      <option value={user}>{user}</option>
    {/each}
  </Select>
</Field>

<Field label="Disabled">
  <Select placeholder="Select a name" disabled>
    {#each users as user}
      <option value={user}>{user}</option>
    {/each}
  </Select>
</Field>


<Field label="Expanded">
  <Select placeholder="Select a name" expanded>
    {#each users as user}
      <option value={user}>{user}</option>
    {/each}
  </Select>
</Field>


`}>
  
  <div slot="preview">
    <div class="select-group">
        <Field label="Simple">
          <Select placeholder="Select a name">
            {#each users as user}
              <option value={user}>{user}</option>
            {/each}
          </Select>
        </Field>

        <Field label="Error" type='is-danger' message="Something went wrong with this field">
          <Select placeholder="Select a name">
            {#each users as user}
              <option value={user}>{user}</option>
            {/each}
          </Select>
        </Field>

        <Field label="Rounded">
          <Select placeholder="Select a name" rounded>
            {#each users as user}
              <option value={user}>{user}</option>
            {/each}
          </Select>
        </Field>

        <Field label="Required">
          <Select placeholder="Select a name" required>
            {#each users as user}
              <option value={user}>{user}</option>
            {/each}
          </Select>
        </Field>


        <Field label="Loading">
          <Select placeholder="Select a name" loading>
            {#each users as user}
              <option value={user}>{user}</option>
            {/each}
          </Select>
        </Field>

        <Field label="Disabled">
          <Select placeholder="Select a name" disabled>
            {#each users as user}
              <option value={user}>{user}</option>
            {/each}
          </Select>
        </Field>

        <Field label="Expanded">
          <Select placeholder="Select a name" expanded>
            {#each users as user}
              <option value={user}>{user}</option>
            {/each}
          </Select>
        </Field>

    </div>
  </div>

</Example>

<hr class="is-medium">

<p class="title is-4">Multiple</p>

<Example code={`<script>
  import {Select, Field} from 'svelma'

  let selectedOptions = [];
</script>

<p class="content"><b>selected</b>: [{selectedOptions}]</p>
<Field>
  <Select multiple nativeSize = "8" bind:selected={selectedOptions}>
    <option value="flint">Flint</option>
    <option value="silver">Silver</option>
    <option value="vane">Vane</option>
    <option value="billy">Billy</option>
    <option value="jack">Jack</option>
    <option value="heisenberg">Heisenberg</option>
    <option value="jesse">Jesse</option>
    <option value="saul">Saul</option>
    <option value="mike">Mike</option>
  </Select>
</Field>

`}>
  
  <div slot="preview">
    <div class="select-group">
      <p class="content"><b>selected</b>: [{selectedOptions}]</p>
      <Field>
        <Select multiple nativeSize="8" bind:selected={selectedOptions}>
          <option value="flint">Flint</option>
          <option value="silver">Silver</option>
          <option value="vane">Vane</option>
          <option value="billy">Billy</option>
          <option value="jack">Jack</option>
          <option value="heisenberg">Heisenberg</option>
          <option value="jesse">Jesse</option>
          <option value="saul">Saul</option>
          <option value="mike">Mike</option>
        </Select>
      </Field>
    </div>
  </div>

</Example>

<hr class="is-medium">

<p class="title is-4">Icons</p>

<Example code={`<script>
  import {Select, Field} from 'svelma'
  
</script>

<Field>
  <Select placeholder="Country" icon="globe" iconPack='fas'>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
  </Select>
</Field>

<Field>
  <Select placeholder="Client" icon="user" iconPack='fas'>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
  </Select>
</Field>

`}>
  
  <div slot="preview">
    <div class="select-group">
      <Field>
        <Select placeholder="Country" icon="globe" iconPack='fas'>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </Select>
      </Field>

      <Field>
        <Select placeholder="Client" icon="user" iconPack='fas'>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </Select>
      </Field>
    </div>
  </div>

</Example>


<hr class="is-medium">

<p class="title is-4">Sizes</p>

<Example code={`<script>
  import {Select, Field} from 'svelma'
  
</script>

<Field>
  <Select placeholder="Small" size="is-small" expanded>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
  </Select>
</Field>

<Field>
  <Select placeholder="Default" expanded>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
  </Select>
</Field>

<Field>
  <Select placeholder="Medium" size="is-medium" expanded>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
  </Select>
</Field>

<Field>
  <Select placeholder="Large" size="is-large" expanded>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
  </Select>
</Field>

`}>
  
  <div slot="preview">
    <div class="select-group">
      <Field>
        <Select placeholder="Small" size="is-small" expanded>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </Select>
      </Field>

      <Field>
        <Select placeholder="Default" expanded>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </Select>
      </Field>

      <Field>
        <Select placeholder="Medium" size="is-medium" expanded>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </Select>
      </Field>

      <Field>
        <Select placeholder="Large" size="is-large" expanded>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </Select>
      </Field>
    </div>
  </div>

</Example>


<JSDoc {jsdoc} />