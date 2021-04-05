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
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>

<DocHeader title="Tooltip" subtitle="Display a brief helper text to your user" />

<Example code={`
<script>
  import { Button, Tooltip} from 'svelma'
</script>

<Tooltip label="Tooltip left" position="is-left">
  <Button>Left</Button>
</Tooltip>

<Tooltip label="Tooltip top">
  <Button>Top (default)</Button>
</Tooltip>

<Tooltip label="Tooltip bottom" position="is-bottom">
  <Button>Bottom</Button>
</Tooltip>

<Tooltip label="Tooltip right" position="is-right">
  <Button>Right</Button>
</Tooltip>`}>

  <div slot="preview">
    <div class="buttons">
      <Tooltip label="Tooltip left" position="is-left">
        <Button>Left</Button>
      </Tooltip>

      <Tooltip label="Tooltip top">
        <Button>Top (default)</Button>
      </Tooltip>

      <Tooltip label="Tooltip bottom" position="is-bottom">
        <Button>Bottom</Button>
      </Tooltip>

      <Tooltip label="Tooltip right" position="is-right">
        <Button>Right</Button>
      </Tooltip>
    </div>
  </div>
</Example>

<hr class="is-medium" />

<p class="title is-4">Sizes</p>

<Example code={`
<Tooltip label="Tooltip left" size="is-small"> <Button>Small</Button> </Tooltip>
<Tooltip label="Tooltip bottom"> <Button>Medium</Button> </Tooltip>
<Tooltip label="Tooltip right" size="is-large"> <Button>Large</Button> </Tooltip>`}>
  <div slot="preview">
    <div class="buttons">
      <Tooltip label="Tooltip small" size="is-small">
        <Button>Small</Button>
      </Tooltip>

      <Tooltip label="Tooltip medium">
        <Button>Medium</Button>
      </Tooltip>

      <Tooltip label="Tooltip large" size="is-large">
        <Button>Large</Button>
      </Tooltip>
    </div>
  </div>
</Example>

<hr class="is-medium" />

<p class="title is-4">Color</p>

<Example code={`
<Tooltip label="Tooltip primary"> <Button>Primary</Button> </Tooltip>
<Tooltip label="Tooltip success" type="is-success"> <Button>Success</Button> </Tooltip>
<Tooltip label="Tooltip danger" type="is-danger"> <Button>Danger</Button> </Tooltip>
<Tooltip label="Tooltip warning" type="is-warning"> <Button>Warning</Button> </Tooltip>
<Tooltip label="Tooltip info" type="is-info"> <Button>Info</Button> </Tooltip>
<Tooltip label="Tooltip link" type="is-link"> <Button>Link</Button> </Tooltip>
<Tooltip label="Tooltip light" type="is-light"> <Button>Light</Button> </Tooltip>
<Tooltip label="Tooltip dark" type="is-dark"> <Button>Dark</Button> </Tooltip>`}>
  <div slot="preview">
    <div class="buttons">
      <Tooltip label="Tooltip primary">
        <Button>Primary</Button>
      </Tooltip>

      <Tooltip label="Tooltip success" type="is-success">
        <Button>Success</Button>
      </Tooltip>

      <Tooltip label="Tooltip danger" type="is-danger">
        <Button>Danger</Button>
      </Tooltip>

      <Tooltip label="Tooltip warning" type="is-warning">
        <Button>Warning</Button>
      </Tooltip>

      <Tooltip label="Tooltip info" type="is-info">
        <Button>Info</Button>
      </Tooltip>

      <Tooltip label="Tooltip link" type="is-link">
        <Button>Link</Button>
      </Tooltip>

      <Tooltip label="Tooltip light" type="is-light">
        <Button>Light</Button>
      </Tooltip>

      <Tooltip label="Tooltip dark" type="is-dark">
        <Button>Dark</Button>
      </Tooltip>
    </div>
  </div>
</Example>

<hr class="is-medium" />

<p class="title is-4">Styles</p>

<Example code={`
<Tooltip label="Tooltip rounded" rounded={true}> <Button>Rounded</Button> </Tooltip>
<Tooltip label="Tooltip square" square={true}> <Button>Square</Button> </Tooltip>
<Tooltip label="Tooltip dashed" dashed={true}> <Button>Dashed</Button> </Tooltip>
<Tooltip label={"Tooltip\\nmultilined"} multilined={true}> <Button>Multilined</Button> </Tooltip>
<Tooltip label="Not animated" animate={false}> <Button>Not Animated</Button> </Tooltip>
<Tooltip label="Not active" active={false}> <Button>Inactive</Button> </Tooltip>
<Tooltip label="Tooltip always" always={true} position="is-bottom"> <Button>Always</Button> </Tooltip>`}>
  <div slot="preview">
    <div class="buttons">
      <Tooltip label="Tooltip rounded" rounded={true}>
        <Button>Rounded</Button>
      </Tooltip>

      <Tooltip label="Tooltip square" square={true}>
        <Button>Square</Button>
      </Tooltip>

      <Tooltip label="Tooltip dashed" dashed={true}>
        <Button>Dashed</Button>
      </Tooltip>

      <Tooltip label={"Tooltip\nmultilined"} multilined={true}>
        <Button>Multilined</Button>
      </Tooltip>

      <Tooltip label="Not animated" animate={false}>
        <Button>Not Animated</Button>
      </Tooltip>

      <Tooltip label="Not active" active={false}>
        <Button>Inactive</Button>
      </Tooltip>

      <Tooltip label="Tooltip always" always={true} position="is-bottom">
        <Button>Always</Button>
      </Tooltip>
    </div>
  </div>
</Example>

<hr class="is-medium" />

<p class="title is-4">Advanced</p>

<Example code={`
<Tooltip label="Tooltip customized" animate={{x: 50, duration: 2000}}> <Button>Customized Animation</Button> </Tooltip>
<Tooltip label="Long Tooltip" style="width: 180px"> <Button>Custom Styles</Button> </Tooltip>  `}>
  <div slot="preview">
    <div class="buttons">
      <Tooltip label="Tooltip customized" animate={{x: 50, duration: 2000}}>
        <Button>Customized Animation</Button>
      </Tooltip>

      <Tooltip label="Long Tooltip" style="width: 180px">
        <Button>Custom Styles</Button>
      </Tooltip>
    </div>
  </div>
</Example>

<JSDoc {jsdoc} />
