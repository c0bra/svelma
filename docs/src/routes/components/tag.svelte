<script context="module">
  export async function preload() {
    const res = await this.fetch(`components/tag.json`);
    const jsdoc = await res.json();

    return { jsdoc };
  }
</script>

<script>
  import {Tag, Taglist} from 'svelma'
  import DocHeader from '../../components/DocHeader.svelte'
  import Example from '../../components/Example.svelte'
  import JSDoc from '../../components/JSDoc.svelte'

  export let jsdoc

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
  margin-top: 30px;
}

.sub-header {
  margin-top: 30px;
  font-size: 24px;
  font-weight: bold;;
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

<p class="sub-text">Closable tags have a button that can be focused, it emits a close event when clicked or when delete key is pressed.</p>

<div class="sub-header">Closable</div>

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

<JSDoc {jsdoc} />