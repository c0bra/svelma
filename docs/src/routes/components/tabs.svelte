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
  import { Tabs, Tab, Button } from 'svelma'
  import { Select, Switch } from 'svelma'
  import DocHeader from '../../components/DocHeader.svelte'
  import Example from '../../components/Example.svelte'
  import JSDoc from '../../components/JSDoc.svelte'

  export let jsdocTabs
  export let jsdocTab

  let active = 0
  let tabs = ["Tab 1", "Tab 2", "Tab 3"]

  let counter = tabs.length
  const addTab = () => tabs = [...tabs, `Tab ${++counter}`]
  const removeTab = (index) => tabs = tabs.filter((t, i) => i !== index);

  let tabChangedTo;
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
      <Tab label="Svelte">Is Cool</Tab>
      <Tab label="Vue">Is Good</Tab>
      <Tab label="Angular">Lol no</Tab>
    </Tabs>
  </div>
</Example>

<hr class="is-medium">

<p class="title is-4">Active and Events</p>

<p class="content">
  Use <code>active</code> on the tab which should be active initially. Use <code>on:change</code> on <code>Tabs</code> to listen to tab changes.
</p>

<Example code={`<script>
  import { Tabs, Tab } from 'svelma'
  let tabChangedTo
</script>

<Tabs on:change={(e) => tabChangedTo = e.detail.label + " (Index " + e.detail.index + ")"}>
  <Tab label="People" icon="users"></Tab>
  <Tab label="Places" icon="map-marker-alt" active></Tab>
  <Tab label="Things" icon="ellipsis-h"></Tab>
</Tabs>

{#if tabChangedTo}
  Tab Changed to: {tabChangedTo}
{:else}
  Change a tab to see the event in action
{/if}`}>
  <div slot="preview">
    <Tabs on:change={(e) => tabChangedTo = e.detail.label + " (Index " + e.detail.index + ")"}>
      <Tab label="People" icon="users"></Tab>
      <Tab label="Places" icon="map-marker-alt" active></Tab>
      <Tab label="Things" icon="ellipsis-h"></Tab>
    </Tabs>
    {#if tabChangedTo}
      Tab Changed to: {tabChangedTo}
    {:else}
      Change a tab to see the event in action
    {/if}

  </div>
</Example>

<hr class="is-medium" />

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

<hr class="is-medium">

<p class="title is-4">Dynamic Tabs</p>

<p class="content">
  Tabs can be be added and removed dynamically. Make sure to specify a <code>key</code> for each tab when using <code>each</code> blocks. If you don't specify a key, by default, elements will be added/remove at the end of the block, and often, <a href="https://svelte.dev/tutorial/keyed-each-blocks">that might not be what you want</a>.
</p>

<Example code={`
<script>
  import { Tabs, Tab, Select, Button } from 'svelma'

  let tabs = ["Tab 1", "Tab 2", "Tab 3"]
  let active = 0
  let counter = tabs.length

  const addTab = () => tabs = [...tabs, "Tab " + ++counter]
  const removeTab = (index) => tabs = tabs.filter((t, i) => i !== index)
</script>

<div class="mb-5">
  <div class="is-flex is-align-items-center p-2"> 
    <div class="mr-3">Total tabs: {tabs.length}</div>
    <Button type="is-success" on:click={addTab}>Add Tab</Button>
  </div>
  <div class="is-flex is-align-items-center p-2">
    <div class="mr-3">Active Tab Index: {active}</div>
    <Select placeholder="Change Tab" bind:selected={active}>
      {#each tabs as tab, i}
        <option value={i}>{tab}</option>
      {/each}
    </Select>
  </div>
</div>
<Tabs style="is-fullwidth" on:change={(e) => active = e.detail.index}>
  {#each tabs as tab, i (tab)}
    <Tab label={tab} active={active === i}>
      <Button type="is-danger" on:click={() => removeTab(i)}>Remove {tab}</Button>
    </Tab>
  {/each}
</Tabs>
`}>
  <div slot="preview">
    <div class="mb-5">
      <div class="is-flex is-align-items-center p-2"> 
        <div class="mr-3">Total tabs: {tabs.length}</div>
        <Button type="is-success" on:click={addTab}>Add Tab</Button>
      </div>
      <div class="is-flex is-align-items-center p-2">
        <div class="mr-3">Active Tab Index: {active}</div>
        <Select placeholder="Change Tab" bind:selected={active}>
          {#each tabs as tab, i}
            <option value={i}>{tab}</option>
          {/each}
        </Select>
      </div>
    </div>
    <Tabs style="is-fullwidth" on:change={(e) => active = e.detail.index}>
      {#each tabs as tab, i (tab)}
        <Tab label={tab} active={active === i}>
          <Button type="is-danger" on:click={() => removeTab(i)}>Remove {tab}</Button>
        </Tab>
      {/each}
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
