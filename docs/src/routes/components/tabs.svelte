<script context="module">
  export async function preload() {
    const tabsRes = await this.fetch(`components/tabs.json`);
    const tabRes = await this.fetch(`components/tab.json`);
    const jsdocTabs = await tabsRes.json();
    const jsdocTab = await tabRes.json();

    return { jsdocTabs, jsdocTab };
  }
</script>

<script>
  import { Tabs, Tab } from 'svelma'
  import DocHeader from '../../components/DocHeader.svelte'
  import Example from '../../components/Example.svelte'
  import JSDoc from '../../components/JSDoc.svelte'

  export let jsdocTabs
  export let jsdocTab
</script>

<DocHeader title="Tabs" subtitle="Horizontal navigation tabs" />

<Example code={`<script>
  import { Tabs, Tab } from 'svelma'
</script>

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
</Tabs>`}>
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

<hr class="is-medium">

<p class="title is-4">Icons and Sizes</p>

<Example code={`<script>
  import { Tabs, Tab } from 'svelma'
</script>

<Tabs>
  <Tab label="People" icon="users"></Tab>
  <Tab label="Places" icon="map-marker-alt"></Tab>
  <Tab label="Things" icon="ellipsis-h"></Tab>
</Tabs>

<Tabs size="is-medium">
  <Tab label="People" icon="users"></Tab>
  <Tab label="Places" icon="map-marker-alt"></Tab>
  <Tab label="Things" icon="ellipsis-h"></Tab>
</Tabs>

<Tabs size="is-large">
  <Tab label="People" icon="users"></Tab>
  <Tab label="Places" icon="map-marker-alt"></Tab>
  <Tab label="Things" icon="ellipsis-h"></Tab>
</Tabs>`}>
  <div slot="preview">
    <Tabs>
      <Tab label="People" icon="users"></Tab>
      <Tab label="Places" icon="map-marker-alt"></Tab>
      <Tab label="Things" icon="ellipsis-h"></Tab>
    </Tabs>

    <Tabs size="is-medium">
      <Tab label="People" icon="users"></Tab>
      <Tab label="Places" icon="map-marker-alt"></Tab>
      <Tab label="Things" icon="ellipsis-h"></Tab>
    </Tabs>

    <Tabs size="is-large">
      <Tab label="People" icon="users"></Tab>
      <Tab label="Places" icon="map-marker-alt"></Tab>
      <Tab label="Things" icon="ellipsis-h"></Tab>
    </Tabs>
  </div>
</Example>

<hr class="is-medium">

<p class="title is-4">Position</p>

<Example code={`<script>
  import { Tabs, Tab } from 'svelma'
</script>

<Tabs position="is-centered">
  <Tab label="People" icon="users"></Tab>
  <Tab label="Places" icon="map-marker-alt"></Tab>
  <Tab label="Things" icon="ellipsis-h"></Tab>
</Tabs>

<Tabs position="is-right">
  <Tab label="People" icon="users"></Tab>
  <Tab label="Places" icon="map-marker-alt"></Tab>
  <Tab label="Things" icon="ellipsis-h"></Tab>
</Tabs>`}>
  <div slot="preview">
    <Tabs position="is-centered">
      <Tab label="People" icon="users"></Tab>
      <Tab label="Places" icon="map-marker-alt"></Tab>
      <Tab label="Things" icon="ellipsis-h"></Tab>
    </Tabs>

    <Tabs position="is-right">
      <Tab label="People" icon="users"></Tab>
      <Tab label="Places" icon="map-marker-alt"></Tab>
      <Tab label="Things" icon="ellipsis-h"></Tab>
    </Tabs>
  </div>
</Example>

<hr class="is-medium">

<p class="title is-4">Style</p>

<p class="content">
  Use <code>is-boxed</code>, <code>is-toggle</code>, <code>is-toggle</code> and <code>is-toggle-rounded</code>, or
  <code>is-fullwidth</code> to alter to style of your tabs.
</p>

<Example code={`<script>
  import { Tabs, Tab } from 'svelma'
</script>

<Tabs style="is-boxed">
  <Tab label="People" icon="users"></Tab>
  <Tab label="Places" icon="map-marker-alt"></Tab>
  <Tab label="Things" icon="ellipsis-h"></Tab>
</Tabs>

<Tabs style="is-toggle">
  <Tab label="People" icon="users"></Tab>
  <Tab label="Places" icon="map-marker-alt"></Tab>
  <Tab label="Things" icon="ellipsis-h"></Tab>
</Tabs>

<Tabs style="is-toggle is-toggle-rounded">
  <Tab label="People" icon="users"></Tab>
  <Tab label="Places" icon="map-marker-alt"></Tab>
  <Tab label="Things" icon="ellipsis-h"></Tab>
</Tabs>

<Tabs style="is-fullwidth">
  <Tab label="People" icon="users"></Tab>
  <Tab label="Places" icon="map-marker-alt"></Tab>
  <Tab label="Things" icon="ellipsis-h"></Tab>
</Tabs>`}>
  <div slot="preview">
    <Tabs style="is-boxed">
      <Tab label="People" icon="users"></Tab>
      <Tab label="Places" icon="map-marker-alt"></Tab>
      <Tab label="Things" icon="ellipsis-h"></Tab>
    </Tabs>

    <Tabs style="is-toggle">
      <Tab label="People" icon="users"></Tab>
      <Tab label="Places" icon="map-marker-alt"></Tab>
      <Tab label="Things" icon="ellipsis-h"></Tab>
    </Tabs>

    <Tabs style="is-toggle is-toggle-rounded">
      <Tab label="People" icon="users"></Tab>
      <Tab label="Places" icon="map-marker-alt"></Tab>
      <Tab label="Things" icon="ellipsis-h"></Tab>
    </Tabs>

    <Tabs style="is-fullwidth">
      <Tab label="People" icon="users"></Tab>
      <Tab label="Places" icon="map-marker-alt"></Tab>
      <Tab label="Things" icon="ellipsis-h"></Tab>
    </Tabs>
  </div>
</Example>

<hr class="is-medium" />

<h2 class="title is-4 is-spaced">API</h2>

<h3 class="subtitle">Tabs</h3>

<JSDoc jsdoc={jsdocTabs} showHeader={false}></JSDoc>

<br>
<br>

<h3 class="subtitle is-spaced">Tab</h3>

<JSDoc jsdoc={jsdocTab} showHeader={false}></JSDoc>