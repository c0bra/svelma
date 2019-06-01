<script>
  import { onMount, getContext } from 'svelte'

  /** Input type, or <code>textarea</code>
   * @svelte-prop {String} [type=text]
   * @values Any native type, <code>textarea</code>
   * */
  export let type = 'text'

  /** Size of input
   * @svelte-prop {String} [size]
   * @values $$sizes$$
   * */
  export let size = ''

  export let value

  let statusType = getContext('type')()

  let input
</script>

<div class="control">
  <input {type} {value} class="input {statusType} {size}" bind:this={input} on:input on:focus on:blur>
</div>