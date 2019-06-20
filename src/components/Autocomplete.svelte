<script>
  import { createEventDispatcher, afterUpdate, tick } from 'svelte'
  import { slide } from 'svelte/transition'
  import Input from './Input.svelte'
  import { omit } from '../utils'

  /** Binding value
   * @svelte-prop {String|Number} value
   * */
  export let value = ''

  /** Options to show in dropdown
   * @svelte-prop {Array} data
   * */
  export let data = []

  let active = false
  let hasFocus = false

  const dispatch = createEventDispatcher()

  $: props = {
    ...omit($$props, 'class', 'value', 'type', 'size'),
  }

  $: active = hasFocus && !!value
  $: console.log('active', active)

  function onFocus(e) {
    console.log('onFocus', e)
    hasFocus = true
  }

  function onBlur(e) {
    console.log('onBlur', e)
    hasFocus = false
  }

  function onInput(e) {
    $$props.value = e.detail.value
  }

  async function setSelected(option, closeDropdown = true) {
    if (option === undefined) return

    dispatch('select', option)

    if (closeDropdown) {
      await tick()
      active = false
    }
  }

  $: {
    // console.log('data', data)
    // console.log('value', value)
  }
</script>

<Input {...props} bind:value class="{$$props.class || ''}" on:input={onInput} on:focus={onFocus} on:blur={onBlur} />

<!-- {#if active && data && data.length > 0} -->
{#if true}
  <div class="dropdown-menu" ref="dropdown" role="menu" transition:slide>
    <div class="dropdown-content">
      {#each data as option, index}
        <a href class="dropdown-item" on:click|preventDefault={() => setSelected(option)}>
          <slot {option} {index}>
            <span>{option}</span>
          </slot>
        </a>
      {/each}
      {#if data.length === 0}
        <div class="dropdown-item is-disabled">
          <slot name="empty"/>
        </div>
      {/if}
    </div>
  </div>
{/if}