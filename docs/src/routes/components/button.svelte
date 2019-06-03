<script context="module">
	export async function preload(page, session) {
		const res = await this.fetch(`components/button.json`);
    const jsdoc = await res.json();

		return { jsdoc };
	}
</script>

<script>
  import { onMount } from 'svelte'
  import { Button } from 'svelma'
  import DocHeader from '../../components/DocHeader.svelte'
  import Example from '../../components/Example.svelte'
  import JSDoc from '../../components/JSDoc.svelte'

  export let jsdoc

  let counter = 0
</script>

<style>
  .buttons {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
</style>

<DocHeader title="Buttons" subtitle="Tasty clickable buttons" />

<Example code={`<script>
  import { Button } from 'svelma'
</script>

<Button type="is-primary" on:click={() => counter++}>
  Click!: {counter}
</Button>`}>
  <div slot="preview">
    <Button type="is-primary" on:click={() => counter++}>
      Click!: {counter}
    </Button>
  </div>
</Example>

<hr class="is-medium">

<p class="title is-4">States and styles</p>

<Example code={`<script>
  import { Button } from 'svelma'
</script>

<div class="buttons">
  <Button type="is-primary">Primary</Button>
  <Button type="is-success">Success</Button>
  <Button type="is-danger">Danger</Button>
  <Button type="is-warning">Warning</Button>
  <Button type="is-info">Info</Button>
  <Button type="is-link">Link</Button>
  <Button type="is-light">Light</Button>
  <Button type="is-dark">Dark</Button>
  <Button type="is-text">Text</Button>
</div>
<div class="buttons">
  <Button disabled>Disabled</Button>
  <Button type="is-primary" loading>Loading</Button>
  <Button type="is-success" rounded>Rounded</Button>
  <Button type="is-info" outline>Outlined</Button>
</div>
<div class="buttons">
  <div class="notification is-primary">
    <Button type="is-primary" inverted>Inverted</Button>
    <Button type="is-primary" inverted outlined>Invert Outlined</Button>
  </div>
</div>`}>
  <div slot="preview">
    <div class="buttons">
      <Button type="is-primary">Primary</Button>
      <Button type="is-success">Success</Button>
      <Button type="is-danger">Danger</Button>
      <Button type="is-warning">Warning</Button>
      <Button type="is-info">Info</Button>
      <Button type="is-link">Link</Button>
      <Button type="is-light">Light</Button>
      <Button type="is-dark">Dark</Button>
      <Button type="is-text">Text</Button>
    </div>
    <div class="buttons">
      <Button disabled>Disabled</Button>
      <Button type="is-primary" loading>Loading</Button>
      <Button type="is-success" rounded>Rounded</Button>
      <Button type="is-info" outline>Outlined</Button>
    </div>
    <div class="buttons">
      <div class="notification is-primary">
        <Button type="is-primary" inverted>Inverted</Button>
        <Button type="is-primary" inverted outlined>Invert Outlined</Button>
      </div>
    </div>
  </div>
</Example>

<JSDoc {jsdoc}></JSDoc>
