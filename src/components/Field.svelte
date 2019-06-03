<script>
  import { onMount, setContext } from 'svelte'
  import { omit } from '../utils'

  /** Label for input
   * @svelte-prop {String} [label]
   * */
  export let label = null

  /** Type (color of control)
   * @svelte-prop {String} [type]
   * @values $$colors$$
   * */
  export let type = ''

  /** Message to show beneath input
   * @svelte-prop {String} [message]
   * */
  export let message = ''

  export let labelFor = ''

  setContext('type', () => type)

  let hasIcons = false
  let iconType = ''

  $: {
    if (['is-danger', 'is-success'].includes(type)) {
      hasIcons = true
      iconType = type
    }
  }

  $: props = { ...omit($$props, 'class') }
</script>

<div {...props} class="field {type} {$$props.class || ''}" has-icons-right={hasIcons}>
  {#if label}
    <label for={labelFor} class="label">{label}</label>
  {/if}
  <slot statusType={type} />
  {#if message}
    <p class="help {type}">{message}</p>
  {/if}
</div>
