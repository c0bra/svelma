<script>
  import { onMount, setContext } from 'svelte'
  import { omit } from '../utils'

  /** Type (color) of the field and help message. Also adds a matching icon.
   * @svelte-prop {String} [type]
   * @values $$colors$$
   * */
  export let type = ''

  /** Label for input
   * @svelte-prop {String} [label]
   * */
  export let label = null

  /** Same as native <code>for</code> on label
   * @svelte-prop {String} [labelFor]
   * */
  export let labelFor = ''

  /** Message to show beneath input
   * @svelte-prop {String} [message]
   * */
  export let message = ''

  /** Direct child components/elements of Field will be grouped horizontally
   * @svelte-prop {Boolean} grouped=false
   * */
  export let grouped = false

  /** Alter the alignment of the field
   * @svelte-prop {String} [position]
   * @values is-centered, is-right
   * */
  export let position = ''

  /** Automatically attach child controls together
   * @svelte-prop {Boolean} addons=true
   * */
  export let addons = true

  setContext('type', () => type)

  let el
  let labelEl
  let messageEl
  let fieldType = ''
  let hasIcons = false
  let iconType = ''
  let mounted = false
  let newPosition = ''

  // Determine the icon type
  $: {
    if (['is-danger', 'is-success'].includes(type)) {
      iconType = type
    }
  }

  $: {
    if (grouped) fieldType = 'is-grouped'
    else if (mounted) {
      const childNodes = Array.prototype.filter.call(el.children, c => !([labelEl, messageEl].includes(c)))
      if (childNodes.length > 1 && addons) {
        fieldType = 'has-addons'
      }
    }
  }

  // Update has-addons-* or is-grouped-* classes based on position prop
  $: {
    if (position) {
      const pos = position.split('-')
      if (pos.length >= 1) {
        const prefix = grouped ? 'is-grouped-' : 'has-addons-'
        newPosition = prefix + position[1]
      }
    }
  }

  $: props = { ...omit($$props, 'class') }

  onMount(() => {
    mounted = true
  })
</script>

<div {...props} class="field {type} {fieldType} {newPosition} {$$props.class || ''}" bind:this={el}>
  {#if label}
    <label for={labelFor} class="label" bind:this={labelEl}>{label}</label>
  {/if}
  <slot statusType={type} />
  {#if message}
    <p class="help {type}" bind:this={messageEl}>{message}</p>
  {/if}
</div>
