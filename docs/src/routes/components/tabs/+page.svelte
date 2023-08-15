<script>
  import { Tabs, Tab, Button } from 'svelma'
  import { Select } from 'svelma'
  import DocHeader from '../../../components/DocHeader.svelte'
  import Example from '../../../components/Example.svelte'
  import JSDoc from '../../../components/JSDoc.svelte'

  export let jsdocTabs
  export let jsdocTab

  let active = 0
  let tabs = ["Tab 1", "Tab 2", "Tab 3"]

  const addTab = () => tabs = [...tabs, `Tab ${tabs.length + 1}`]
  const removeTab = (index) => tabs = tabs.filter((t, i) => i !== index);
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

<hr class="is-medium">

<p class="title is-4">Dynamic Tabs</p>

<p class="content">
  Tabs can be be added and removed dynamically. <code>active</code> prop is bindable, bound to the active tab index. 
  In cases where <code>bind:active</code> cannot be used or to execute any code after the active tab is changed, <code>on:change</code> event can be listened to.
  <code>setActive(index)</code> function is also exposed to change the active tab and can be called on the component reference.
</p>

<Example code={`
<script>
  import { Tabs, Tab, Select, Button } from 'svelma'

  let active = 0
  let tabs = ["Tab 1", "Tab 2", "Tab 3"]

  const addTab = () => tabs = [...tabs, "Tab " + (tabs.length + 1)]
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
  <Tabs bind:active style="is-fullwidth">
    {#each tabs as tab, i}
      <Tab label={tab}>
        <Button type="is-danger" on:click={() => removeTab(i)}>Remove {tab}</Button>
      </Tab>
    {/each}
  </Tabs>
</script>
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
    <Tabs bind:active style="is-fullwidth">
      {#each tabs as tab, i}
        <Tab label={tab}>
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
