<script>
  import { onMount } from 'svelte'
  import { omit } from '../utils'

  /** HTML tag to use for button (either 'a' or 'button')
   * @svelte-prop {String} tag=button
   * */
  export let tag = 'button'

  /** Type (color of control)
   * @svelte-prop {String} [type] - Type (color of control)
   * @values $$colors$$
   * */
  export let type = ''

  /** Href to use when <code>tag</code> is 'a'
   * @svelte-prop {String} [href]
   * */
  export let href = ''

  export let loading = false
  export let inverted = false
  export let outlined = false
  export let rounded = false

  let klazz
  export { klazz as class }

  onMount(() => {
    if (!['button', 'a'].includes(tag)) throw new Error(`'${tag}' cannot be used as a tag for a Bulma button`)
  })

  // let props = {}
  $: props = {
    ...omit($$props, 'loading', 'inverted', 'outlined', 'rounded'),
    class: `button ${type} ${$$props.class || ''}`,
  }
</script>

{#if tag === 'button'}
  <button
    {...props}
    class:is-inverted={inverted}
    class:is-loading={loading}
    class:is-outlined={outlined}
    class:is-rounded={rounded}
    on:click>
    <slot />
  </button>
{:else if tag === 'a'}
  <a {href} {...props} on:click>
    <slot />
  </a>
{/if}
