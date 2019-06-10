<script context="module">
  export async function preload() {
    const res = await this.fetch(`components/switch.json`);
    const jsdoc = await res.json();

    return { jsdoc };
  }
</script>

<script>
  import { Switch } from 'svelma'
  import DocHeader from '../../components/DocHeader.svelte'
  import Example from '../../components/Example.svelte'
  import JSDoc from '../../components/JSDoc.svelte'

  export let jsdoc
  let val
</script>

<DocHeader title="Switch" subtitle="Switchy toggly thing" />

<Example code={`<script>
  import { Switch } from 'svelma'
  
  let val
</script>

<div class="field">
  <Switch bind:checked={val}>Foo</Switch>
  <br>
  <code>value = {JSON.stringify(val)}</code>
</div>
<div class="field">
  <Switch disabled>Disabled</Switch>
</div>
`}>
  <div slot="preview">
    <div class="field">
      <Switch bind:checked={val}>Foo</Switch>
      <br>
      <code>value = {JSON.stringify(val)}</code>
    </div>
    <div class="field">
      <Switch disabled>Disabled</Switch>
    </div>
  </div>
</Example>

<hr class="is-medium">
<p class="title is-4">Types</p>

<Example code={`<script>
  import { Switch } from 'svelma'
</script>

<div class="field">
  <Switch checked="true" type="is-primary">Primary</Switch>
</div>
<div class="field">
  <Switch checked="true" type="is-danger">Danger</Switch>
</div>
<div class="field">
  <Switch checked="true" type="is-warning">Warning</Switch>
</div>
<div class="field">
  <Switch checked="true" type="is-info">Info</Switch>
</div>
<div class="field">
  <Switch checked="true" type="is-link">Link</Switch>
</div>
<div class="field">
  <Switch checked="true" type="is-dark">Dark</Switch>
</div>
`}>
  <div slot="preview">
    <div class="field">
      <Switch checked="true" type="is-primary">Primary</Switch>
    </div>
    <div class="field">
      <Switch checked="true" type="is-danger">Danger</Switch>
    </div>
    <div class="field">
      <Switch checked="true" type="is-warning">Warning</Switch>
    </div>
    <div class="field">
      <Switch checked="true" type="is-info">Info</Switch>
    </div>
    <div class="field">
      <Switch checked="true" type="is-link">Link</Switch>
    </div>
    <div class="field">
      <Switch checked="true" type="is-dark">Dark</Switch>
    </div>
  </div>
</Example>

<hr class="is-medium">
<p class="title is-4">Sizes</p>

<Example code={`<script>
  import { Switch } from 'svelma'
</script>

<div class="field">
  <Switch size="is-small">Small</Switch>
</div>
<div class="field">
  <Switch>Default</Switch>
</div>
<div class="field">
  <Switch size="is-medium">Medium</Switch>
</div>
<div class="field">
  <Switch size="is-large">Large</Switch>
</div>
</div>
`}>
  <div slot="preview">
    <div class="field">
      <Switch size="is-small">Small</Switch>
    </div>
    <div class="field">
      <Switch>Default</Switch>
    </div>
    <div class="field">
      <Switch size="is-medium">Medium</Switch>
    </div>
    <div class="field">
      <Switch size="is-large">Large</Switch>
    </div>
  </div>
</Example>

<JSDoc {jsdoc}></JSDoc>