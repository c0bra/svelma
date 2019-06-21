<script context="module">
  export async function preload() {
    const tagRes = await this.fetch(`components/tag.json`);
    const taglistRes = await this.fetch(`components/taglist.json`);
    const jsdocTag = await tagRes.json();
    const jsdocTaglist = await taglistRes.json();

    return { jsdocTag, jsdocTaglist };
  }
</script>

<script>
  import {Tag, Taglist} from 'svelma'
  import DocHeader from '../../components/DocHeader.svelte'
  import Example from '../../components/Example.svelte'
  import JSDoc from '../../components/JSDoc.svelte'

  export let jsdocTag
  export let jsdocTaglist

  let isTag1Active = true
  let isTag2Active = true
  let isTag3Active = true
</script>

<style>
.tags {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.closing-tags {
  display: table;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.sub-text {
  margin-bottom: 20px;
}

</style>

<DocHeader title="Tag" subtitle="Tag labels to insert anywhere"/>

<Example code={`
  <script>
    import { Tag } from 'svelma'
  </script>

  <Tag>Tag label</Tag>
  <Tag rounded>Rounded tag label</Tag>`}>
  
  <div slot="preview">
    <div class="tags">
      <Tag>Tag label</Tag>
      <Tag rounded>Rounded tag label</Tag>
    </div>
  </div>

</Example>


<hr class="is-medium">
<p class="sub-text">Closable tags have a button that can be focused, it emits a close event when clicked or when delete key is pressed.</p>
<p class="title is-4">Closable</p>

<Example code={`
  <script>
    import { Tag } from 'svelma'
    
    let isTag1Active = true
    let isTag2Active = true
    let isTag3Active = true
  </script>

  <div class="field">
    {#if isTag1Active}
      <Tag  type="is-primary" 
            closable 
            on:close={e => isTag1Active = false}>
        Colored closable tag label
      </Tag>
    {/if}
  </div>

  <div class="field">
    {#if isTag2Active}
      <Tag  attached closable 
            on:close={e => isTag2Active = false}>
        Attached closable tag label
      </Tag>
    {/if}
  </div>

  <div class="field">
    {#if isTag3Active}
    <Tag  type="is-danger" 
          attached closable 
          on:close={e => isTag3Active = false}>
      Colored attached closable tag label
    </Tag>
    {/if} 
  </div>`}>
  
  <div slot="preview">
    <div class="closing-tags">
      <div class="field">
        {#if isTag1Active}
        <Tag type="is-primary" closable on:close={e => isTag1Active = false}>Colored closable tag label</Tag>
        {/if}
      </div>

      <div class="field">
        {#if isTag2Active}
        <Tag attached closable on:close={e => isTag2Active = false}>Attached closable tag label</Tag>
        {/if}
      </div>

      <div class="field">
        {#if isTag3Active}
        <Tag type="is-danger" attached closable on:close={e => isTag3Active = false}>Colored attached closable tag label</Tag>
        {/if}
      </div>
    </div>
  </div>

</Example>


<hr class="is-medium">
<p class="title is-4">Taglist</p>


<Example code={`
  <script>
    import { Tag, Taglist } from 'svelma'
  </script>

  <Taglist>
    <Tag type='is-info'>First</Tag>
    <Tag type='is-info'>Second</Tag>
    <Tag type='is-info'>Third</Tag>
    <Tag type='is-info'>Fourth</Tag>
    <Tag type='is-info'>Fifth</Tag> 
  </Taglist>`}>
  
  <div slot="preview">
    <Taglist>
      <Tag type='is-info'>First</Tag>
      <Tag type='is-info'>Second</Tag>
      <Tag type='is-info'>Third</Tag>
      <Tag type='is-info'>Fourth</Tag>
      <Tag type='is-info'>Fifth</Tag>
    </Taglist>
  </div>

</Example>

<hr class="is-medium">
<p class="sub-text">Use the <code>attached</code> prop to attach tags together.</p>

<Example code={`
  <script>
    import { Tag, Taglist } from 'svelma'
  </script>

  <Taglist attached>
    <Tag type='is-dark'>npm</Tag>
    <Tag type='is-info'>0.2.1</Tag>
  </Taglist>`}>
  
  <div slot="preview">
    <Taglist attached>
      <Tag type='is-dark'>npm</Tag>
      <Tag type='is-info'>0.2.1</Tag>
    </Taglist>
  </div>

</Example>

<hr class="is-medium" />

<h2 class="title is-4 is-spaced">API</h2>

<h3 class="subtitle">Tag</h3>
<JSDoc jsdoc={jsdocTag} showHeader={false}></JSDoc>

<br>
<br>

<h3 class="subtitle is-spaced">Taglist</h3>
<JSDoc jsdoc={jsdocTaglist} showHeader={false}></JSDoc>