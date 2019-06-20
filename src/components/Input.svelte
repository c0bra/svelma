<script>
  import { createEventDispatcher, getContext, onMount, tick } from 'svelte'
  import Icon from './Icon.svelte'
  import { omit } from '../utils'

  /** Binding value
   * @svelte-prop {String|Number} [value]
   * */
  export let value = ''

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

  /** Show the password reveal toggle button
   * @svelte-prop {boolean} [passwordReveal]
   * */
  export let passwordReveal = false

  /** Set input maxlength and show a counter
   * @svelte-prop {Number} [maxlength]
   * */
  export let maxlength = null

  /** Show the character counter when <code>maxlength<code> is set
   * @svelte-prop {boolean} [hasCounter=true]
   * */
  export let hasCounter = true

  /** Show loading indicator
   * @svelte-prop {boolean} [loading=false]
   * */
  export let loading = false

  /** Input is disabled
   * @svelte-prop {boolean} [disabled=false]
   * */
  export let disabled = false

  let input
  let isFocused
  let isPasswordVisible = false
  let newType = 'text'
  let statusType = ''
  let statusTypeIcon = ''
  let valueLength = null

  const getType = getContext('type')
  if (getType) statusType = getType() || ''

  const dispatch = createEventDispatcher()

  $: props = {
    ...omit($$props, 'class', 'value', 'type', 'size', 'passwordReveal', 'hasCounter', 'loading', 'disabled'),
  }
  $: hasIconRight = passwordReveal || loading || statusType
  $: passwordVisibleIcon = isPasswordVisible ? 'eye-slash' : 'eye'
  $: {
    switch (statusType) {
      case 'is-success':
        statusTypeIcon = 'check'
        break
      case 'is-danger':
        statusTypeIcon = 'exclamation-circle'
        break
      case 'is-info':
        statusTypeIcon = 'info-circle'
        break
      case 'is-warning':
        statusTypeIcon = 'exclamation-triangle'
        break
    }
  }
  $: {
    if (typeof value === 'string') {
      valueLength = value.length
    } else if (typeof value === 'number') {
      valueLength = value.toString().length
    } else {
      valueLength = 0
    }
  }

  onMount(() => {
    newType = type
  })

  async function togglePasswordVisibility() {
    isPasswordVisible = !isPasswordVisible
    newType = isPasswordVisible ? 'text' : 'password'
    await tick()
    input.focus()
  }

  function onInput(e) {
    value = e.target.value
    $$props.value = value

    dispatch('input', { value })
  }

  function onFocus() {
    isFocused = true

    dispatch('focus')
  }

   function onBlur() {
     isFocused = false

     dispatch('blur')
   }
</script>

<style>
  .control .help.counter {
    float: right;
    margin-left: 0.5em;
  }
</style>

<div class="control" class:has-icons-right={hasIconRight} class:is-loading={loading}>

  {#if type !== 'textarea'}
    <input
      {...props}
      type={newType}
      {value}
      class="input {statusType}
      {size}
      {$$props.class || ''}"
      bind:this={input}
      on:input={onInput}
      on:focus={onFocus}
      on:blur={onBlur}
      {disabled} />
  {:else}
    <textarea
      {...props}
      {value}
      class="textarea {statusType}
      {size}"
      bind:this={input}
      on:input={onInput}
      on:focus={onFocus}
      on:blur={onBlur}
      {disabled} />
  {/if}

  {#if !loading && (passwordReveal || statusType)}
    <!-- pack={iconPack}
    size={iconSize} -->
    <Icon
      pack="fas"
      isRight={true}
      isClickable={passwordReveal}
      icon={passwordReveal ? passwordVisibleIcon : statusTypeIcon}
      type={!passwordReveal ? statusType : 'is-primary'}
      on:click={togglePasswordVisibility} />
  {/if}

  {#if maxlength && hasCounter && type !== 'number'}
    <small class="help counter" class:is-invisible={!isFocused}>{valueLength} / {maxlength}</small>
  {/if}
</div>
