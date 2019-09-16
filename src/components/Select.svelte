<script>
  import { onMount, getContext, tick } from 'svelte'
  import { getIconSize, omit } from '../utils'
  import Icon from './Icon.svelte'

  /** Binding value
   * @svelte-prop {Any} [value]
   * */
  export let value = null

  /** Size of input
   * @svelte-prop {String} [size]
   * @values $$sizes$$
   * */
  export let size = ''

  /** Text when nothing is selected
   * @svelte-prop {String} [placeholder]
   * */
  export let placeholder = ''

  /** Put rounded corners on the select
   * @svelte-prop {boolean} rounded=false
   * */
  export let rounded = false

  /** Show loading indicator
   * @svelte-prop {boolean} loading=false
   * */
  export let loading = false

  /** Makes select full-width
   * @svelte-prop {boolean} expanded=false
   * */
  export let expanded = false

  /** Allow selecting multiple options
   * @svelte-prop {String} multiple=true
   * */
  export let multiple = false

  /** Show this icon on left side of input
   * @svelte-prop {String} [icon]
   * */
  export let icon = ''

  /** Fontawesome icon pack to use. By default the <code>Icon</code> component uses <code>fas</code>
   * @svelte-prop {String} [iconPack]
   * @values <code>fas</code>, <code>fab</code>, etc...
   * */
  export let iconPack = ''

  /** Input is disabled
   * @svelte-prop {boolean} [disabled=false]
   * */
  export let disabled = false

  let type = ''
  let isValid = true

  const type$ = getContext('type')
  $: if (type$) type = $type$

  $: props = { ...omit($$props, 'class', 'value', 'size', 'loading', 'disabled', 'placeholder') }
  $: hasIconLeft = !!icon
  $: iconSize = getIconSize(size)

  function onInput(e) {
    value = e.target.value
    $$props.value = value
  }
</script>

<style lang="scss">
@import 'node_modules/bulma/sass/utilities/all';

:global(.select) {
  &.is-empty select {
    color: rgba($grey, 0.7);
  }

  select {
    padding-right: 2.5em;

    :global(option) {
      color: $grey-dark;
      padding: 0.25em 0.5em;
    }

    :global(option:disabled) {
      cursor: not-allowed;
      opacity: 0.5;
    }

    :global(optgroup) {
      color: $grey-light;
      font-weight: $weight-normal;
      font-style: normal;
      padding: 0.25em 0;
    }
  }
}
</style>

<div class="control" class:is-expanded={expanded} class:has-icons-left={hasIconLeft}>
  <div class="select {size} {type}" class:is-multiple={multiple} class:is-loading={loading} class:is-empty={value === null} class:is-rounded={rounded}>
    <select
      {...props}
      class="{$$props.class || ''}"
      {value}
      on:input={onInput}
      {multiple}
      {disabled}>
      {#if placeholder}
        <option
          value={null}
          disabled="disabled"
          hidden="hidden">
          {placeholder}
        </option>
      {/if}

      <slot></slot>
    </select>

    {#if icon}
      <Icon
        pack={iconPack}
        {icon}
        size={iconSize}
        isLeft={true} />
    {/if}
  </div>
</div>
