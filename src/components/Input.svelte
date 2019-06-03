<script>
  import { onMount, getContext, tick } from 'svelte'
  import Icon from './Icon.svelte'

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

  /** Binding value
   * @svelte-prop {String, Number } [value]
   * */
  export let value = null

  /** Show the password reveal toggle button
   * @svelte-prop {boolean} [passwordReveal]
   * */
  export let passwordReveal = false

  /** Show loading indicator
   * @svelte-prop {boolean} [loading]
   * */
  export let loading = false

  let input
  let isPasswordVisible = false
  let newType
  let statusType = ''
  let statusTypeIcon = ''

  const getType = getContext('type')
  if (getType) statusType = getType()

  $: props = {
    ...$$props
  }

  $: hasIconRight = passwordReveal || loading || statusType

  $: passwordVisibleIcon = isPasswordVisible ? 'eye-slash' : 'eye'

  $: console.log('passwordVisibleIcon', passwordVisibleIcon)

  $: {
    switch (statusType) {
      case 'is-success': statusTypeIcon = 'check'; break;
      case 'is-danger': statusTypeIcon = 'exclamation-circle'; break;
      case 'is-info': statusTypeIcon = 'info-circle'; break;
      case 'is-warning': statusTypeIcon = 'exclamation-triangle'; break;
    }
  }

  onMount(() => {
    newType = type
  })

  async function togglePasswordVisibility() {
    console.log('isPasswordVisible', !isPasswordVisible)
    isPasswordVisible = !isPasswordVisible
    newType = isPasswordVisible ? 'text' : 'password'
    await tick()
    input.focus()
  }
</script>

<div class="control"
  class:has-icons-right={hasIconRight}
  class:is-loading={loading}>

  <input {...props} type={newType} {value} class="input {statusType} {size}" bind:this={input} on:input on:focus on:blur>

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
</div>