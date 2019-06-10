<script context="module">
  export async function preload() {
    const res = await this.fetch(`components/switch.json`);
    const jsdoc = await res.json();

    return { jsdoc };
  }
</script>

<script>
  import { Field, Switch } from 'svelma'
  import DocHeader from '../../components/DocHeader.svelte'
  import Example from '../../components/Example.svelte'
  import JSDoc from '../../components/JSDoc.svelte'

  export let jsdoc
</script>

<style>
.switches {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-direction: column;
}
</style>

<DocHeader title="Switch" subtitle="Switchy toggly thing" />

<Example code={`<script>
  import { Switch } from 'svelma'

  let val
</script>

<Switch value={val}>Foo</Switch>
`}>
  <div slot="preview">
    <div class="">
      <div class="field">
        <Switch>Foo</Switch>
      </div>
      <div class="field">
        <Switch disabled>Disabled</Switch>
      </div>
    </div>
  </div>
</Example>

<JSDoc {jsdoc}></JSDoc>