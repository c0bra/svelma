<script context="module">
	export async function preload() {
		const res = await this.fetch(`components/collapse.json`);
    const jsdoc = await res.json();

		return { jsdoc };
	}
</script>

<script>
  import { Collapse } from 'svelma'
  import DocHeader from '../../components/DocHeader.svelte'
  import Example from '../../components/Example.svelte'
  import JSDoc from '../../components/JSDoc.svelte'

  export let jsdoc
</script>

<DocHeader title="Collapse" subtitle="Collapsible elements" />

<Example code={`<script>
  import { Collapse } from 'svelma'
</script>

<Collapse>
  <button class="button is-primary" slot="trigger">
    Click Me!
  </button>
  <div class="notification">
    <div class="content">
      <h3>Subtitle</h3>
      <p>Lorem ipsum dolor...</p>
    </div>
  </div>
</Collapse>`}>
  <div slot="preview">
    <Collapse>
      <button class="button is-primary" slot="trigger">Click Me!</button>
      <div class="notification">
        <div class="content">
          <h3>Subtitle</h3>
          <p>Lorem ipsum dolor...</p>
        </div>
      </div>
    </Collapse>
  </div>
</Example>

<JSDoc {jsdoc}></JSDoc>