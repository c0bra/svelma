<script>
  import { createEventDispatcher, tick } from 'svelte'
  import { slide } from 'svelte/transition'
  import Input from './Input.svelte'
  import { omit } from '../utils'

  /** Binding value
   * @svelte-prop {String|Number} [value]
   * */
  export let value = ''

  /** Options to show in dropdown
   * @svelte-prop {Array} data
   * */
  export let data = []

  let active = false

  const dispatch = createEventDispatcher()

  $: props = {
    ...omit($$props, 'class', 'value', 'type', 'size'),
  }

  function onFocus(e) {

  }

  function onInput(e) {
    value = e.target.value
    $$props.value = value
  }

  async function setSelected(option, closeDropdown = true) {
    if (option === undefined) return

    dispatch('select', option)

    if (closeDropdown) {
      await tick()
      active = false
    }
  }
</script>

<Input {...props} class="" on:input={onInput} on:focus={onFocus} aria-haspopup="true" />

{#if active && data && data.length > 0}
  <div class="dropdown-menu" ref="dropdown" role="menu" transition:slide>
    <div class="dropdown-content">
      {#each data as option, i}
        <a href class="dropdown-item" on:click|preventDefault={() => setSelected(option)}>
          <slot></slot>
        </a>
      {/each}
    </div>
  </div>
{/if}