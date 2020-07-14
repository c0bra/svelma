<script context="module">
  export async function preload() {
    const res = await this.fetch(`components/tooltip.json`);
    const jsdoc = await res.json();

    return { jsdoc };
  }
</script>

<script>
  import { Button, Tooltip} from 'svelma'
  import DocHeader from '../../components/DocHeader.svelte'
  import Example from '../../components/Example.svelte'
  import JSDoc from '../../components/JSDoc.svelte'

  export let jsdoc
  
</script>

<style>
.buttons {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
</style>

<DocHeader title="Tooltip" subtitle="Display a brief helper text to your user" />

<Example code={`
  <script>
    import { Button, Tooltip} from 'svelma'
  </script>

  <Tooltip label="Tooltip right" position="is-right">
    <Button>Right</Button>
  </Tooltip>

  <Tooltip label="Tooltip top">
    <Button>Top (default)</Button>
  </Tooltip>

  <Tooltip label="Tooltip bottom" position="is-bottom">
    <Button>Bottom</Button>
  </Tooltip>

  <Tooltip label="Tooltip left" position="is-left">
    <Button>Left</Button>
  </Tooltip>`}>

  <div slot="preview">
    <div class="buttons">
      <Tooltip label="Tooltip right" position="is-right">
        <Button>Right</Button>
      </Tooltip>

      <Tooltip label="Tooltip top">
        <Button>Top (default)</Button>
      </Tooltip>

      <Tooltip label="Tooltip bottom" position="is-bottom">
        <Button>Bottom</Button>
      </Tooltip>

      <Tooltip label="Tooltip left" position="is-left">
        <Button>Left</Button>
      </Tooltip>
    </div>
  </div>
</Example>

<JSDoc {jsdoc} />