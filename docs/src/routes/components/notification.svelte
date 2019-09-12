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
  let autoIsOpen = false

  function open(props) {
    Notification.create({ message: 'I am a notification message', ...props })
  }

  function showNotification(props) {
    Notification.create({
      message: 'You opened this programmatically!',
      ...props
    })
  }
</script>

<style>

</style>

<DocHeader title="Notification" subtitle="Notifications to alert users" />

<Example
  code={`<script>
  import { Button, Notification } from 'svelma';

  let isOpen = true
</script>

<Button class="block" on:click={() => (isOpen = !isOpen)}>Toggle</Button>
<Notification bind:active={isOpen}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id
  hendrerit imperdiet, elit sapien laoreet elit
</Notification>`}>
  <div slot="preview">
    <Button class="block" on:click={() => (isOpen = !isOpen)}>Toggle</Button>
    <Notification bind:active={isOpen}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id
      hendrerit imperdiet, elit sapien laoreet elit
    </Notification>
  </div>
</Example>

<hr class="is-medium" />

<p class="title is-4">Types</p>

<Example
  code={`<script>
  import { Notification } from 'svelma';
</script>

<Notification>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id
  hendrerit imperdiet, elit sapien laoreet elit
</Notification>

<Notification type="is-info">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id
  hendrerit imperdiet, elit sapien laoreet elit
</Notification>

<Notification type="is-success">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id
  hendrerit imperdiet, elit sapien laoreet elit
</Notification>

<Notification type="is-warning">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id
  hendrerit imperdiet, elit sapien laoreet elit
</Notification>

<Notification type="is-danger">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id
  hendrerit imperdiet, elit sapien laoreet elit
</Notification>`}>
  <div slot="preview">
    <Notification>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id
      hendrerit imperdiet, elit sapien laoreet elit
    </Notification>

    <Notification type="is-info">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id
      hendrerit imperdiet, elit sapien laoreet elit
    </Notification>

    <Notification type="is-success">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id
      hendrerit imperdiet, elit sapien laoreet elit
    </Notification>

    <Notification type="is-warning">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id
      hendrerit imperdiet, elit sapien laoreet elit
    </Notification>

    <Notification type="is-danger">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id
      hendrerit imperdiet, elit sapien laoreet elit
    </Notification>
  </div>
</Example>

<hr class="is-medium" />

<p class="title is-4">Icons</p>

<Example
  code={`<script>
  import { Notification } from 'svelma';
</script>

<Notification icon="question-circle">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id
  hendrerit imperdiet, elit sapien laoreet elit
</Notification>

<Notification type="is-info" icon={true}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id
  hendrerit imperdiet, elit sapien laoreet elit
</Notification>

<Notification type="is-success" icon={true}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id
  hendrerit imperdiet, elit sapien laoreet elit
</Notification>

<Notification type="is-warning" icon={true}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id
  hendrerit imperdiet, elit sapien laoreet elit
</Notification>

<Notification type="is-danger" icon={true}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id
  hendrerit imperdiet, elit sapien laoreet elit
</Notification>`}>
  <div slot="preview">
    <Notification icon="question-circle">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id
      hendrerit imperdiet, elit sapien laoreet elit
    </Notification>

    <Notification type="is-info" icon={true}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id
      hendrerit imperdiet, elit sapien laoreet elit
    </Notification>

    <Notification type="is-success" icon={true}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id
      hendrerit imperdiet, elit sapien laoreet elit
    </Notification>

    <Notification type="is-warning" icon={true}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id
      hendrerit imperdiet, elit sapien laoreet elit
    </Notification>

    <Notification type="is-danger" icon={true}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id
      hendrerit imperdiet, elit sapien laoreet elit
    </Notification>
  </div>
</Example>

<hr class="is-medium" />

<p class="title is-4">Auto-close</p>

<p>
  Notification will close automatically after
  <code>duration</code>
  .
</p>

<Example code={`<script>
  import { Button, Notification } from 'svelma';

  let autoIsOpen = false
</script>

<Button class="block" on:click={() => (autoIsOpen = true)}>Show</Button>
<Notification bind:active={autoIsOpen} autoClose={true}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id
  hendrerit imperdiet, elit sapien laoreet elit
</Notification>`}>
  <div slot="preview">
    <Button class="block" on:click={() => (autoIsOpen = true)}>Show</Button>
    <Notification bind:active={autoIsOpen} autoClose={true}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id
      hendrerit imperdiet, elit sapien laoreet elit
    </Notification>
  </div>
</Example>

<hr class="is-medium" />

<p class="title is-4">Opening with code</p>

<Example code={`<script>
  import { Button, Notification } from 'svelma';

  function showNotification(props) {
    Notification.create({
      message: 'You opened this programmatically!',
      ...props
    })
  }
</script>

<Button class="block" on:click={() => showNotification()}>Show Notification</Button>
<Button class="block" type="is-success" on:click={() => showNotification({ type: 'is-success' })}>Show Notification (success)</Button>
<Button class="block" type="is-danger" on:click={() => showNotification({ type: 'is-danger', position: 'is-bottom-right', icon: true })}>Show Notification (danger)</Button>`}>
  <div slot="preview">
    <Button class="block" on:click={() => showNotification()}>Show Notification</Button>
    <Button class="block" type="is-success" on:click={() => showNotification({ type: 'is-success' })}>Show Notification (success)</Button>
    <Button class="block" type="is-danger" on:click={() => showNotification({ type: 'is-danger', position: 'is-bottom-right', icon: true })}>Show Notification (danger)</Button>
  </div>
</Example>

<JSDoc {jsdoc} />
