<script context="module">
  export async function preload() {
    const res = await this.fetch(`components/tabs.json`);
    const jsdoc = await res.json();

    return { jsdoc };
  }
</script>

<script>
  import { Tabs, Tab } from 'svelma'
  import DocHeader from '../../components/DocHeader.svelte'
  import Example from '../../components/Example.svelte'
  import JSDoc from '../../components/JSDoc.svelte'

  export let jsdoc
</script>

<DocHeader title="Tabs" subtitle="Horizontal navigation tabs with animations" />

<Example code={``}>
  <div slot="preview">
    <Tabs>
      <Tab label="Svelte">
        Is cool
      </Tab>
      <Tab label="Vue">
        Is good
      </Tab>
      <Tab label="Angular">
        lol no
      </Tab>
    </Tabs>
  </div>
</Example>

<JSDoc {jsdoc}></JSDoc>