<script>
  import { createEventDispatcher, onDestroy, onMount } from 'svelte'
  import { fly, fade } from 'svelte/transition'
  import Notice, { fitlerProps } from '../Notice.svelte'
  import Notification from './Notification.svelte'

  export let message

  $: props = { ...fitlerProps($$props) }
</script>

<Notice {...props} transitionOut={true}>
  <Notification>
    {@html message}
  </Notification>
</Notice>
