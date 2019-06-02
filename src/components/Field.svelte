<script>
  import { onMount, setContext } from 'svelte'

  /** Label for input
   * @svelte-prop {String} label
   * */
  export let label

  /** Type (color of control)
   * @svelte-prop {String} [type]
   * @values $$colors$$
   * */
  export let type = ''

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
</script>

<div class="field {type}"
  has-icons-right={hasIcons}>

  {#if label}
    <label for={labelFor} class="label">{label}</label>
  {/if}
  <slot statusType={type} />
  {#if message}
    <p class="help {type}">{message}</p>
  {/if}
</div>
