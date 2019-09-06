<script context="module">
  export async function preload() {
    const res = await this.fetch(`components/notification.json`)
    const jsdoc = await res.json()

    return { jsdoc }
  }
</script>

<script>
  import { Button, Notification } from 'svelma'
  import DocHeader from '../../components/DocHeader.svelte'
  import Example from '../../components/Example.svelte'
  import JSDoc from '../../components/JSDoc.svelte'

  export let jsdoc
  let isOpen = true

  function open(props) {
    Notification.create({ message: 'I am a notification message', ...props })
  }
</script>

<style>

</style>

<DocHeader title="Notification" subtitle="Notifications to alert users" />

<Example
  code={`<Button class="block" on:click={() => (isOpen = !isOpen)}>Toggle</Button>
    <Notification active={isOpen} on:close={event => (isOpen = event.detail)}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id
      hendrerit imperdiet, elit sapien laoreet elit
    </Notification>`}>
  <div slot="preview">
    <Button class="block" on:click={() => (isOpen = !isOpen)}>Toggle</Button>
    <Notification active={isOpen} on:close={event => (isOpen = event.detail)}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id
      hendrerit imperdiet, elit sapien laoreet elit
    </Notification>
  </div>
</Example>

<JSDoc {jsdoc} />
