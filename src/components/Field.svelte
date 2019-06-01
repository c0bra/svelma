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

  export let message

  export let labelFor = ''

  setContext('type', () => type)
</script>

<div class="field {type}">
  <label for={labelFor} class="label">{label}</label>
  <slot statusType={type} />
  {#if message}
    <p class="help {type}">{message}</p>
  {/if}
</div>
