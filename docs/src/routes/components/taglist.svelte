<script context="module">
  export async function preload() {
    const res = await this.fetch(`components/taglist.json`);
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
</script>

<style>
.sub-text {
  margin-top: 30px;
}

</style>

<DocHeader title="Taglist" subtitle=""/>

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

<p class="sub-text">Use the <code>attached</code> prop to attach tags together.
</p>


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

<JSDoc {jsdoc} />