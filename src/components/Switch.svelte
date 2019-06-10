
<script>
  /** Binding value
   * @svelte-prop {Any} [value=false]
   * */
  export let value = false
  export let type = 'is-primary'
  export let disabled = false

  let label
  let input

  $: newBackground = type && type.replace(/^is-(.*)/, 'has-background-$1') || ''

  $: {
    if (input) {
      if (disabled) {
        label.setAttribute('disabled', 'disabled')
        input.setAttribute('disabled', 'disabled')
      } else {
        label.removeAttribute('disabled')
        input.removeAttribute('disabled')
      }
    }
  }
</script>

<style lang="scss">
.switch {
  position: relative;
  cursor: pointer;
  user-select: none;
  display: inline-flex;

  :global(&[disabled]) {
    opacity: .5;
    cursor: not-allowed;
  }

  input {
    position: absolute;
    opacity: 0;
    left: 0;
    z-index: -1;

    & + .check {
      display: flex;
      align-items: center;
      flex-shrink: 0;
      width: 2.75em;
      height: 1.575em;
      padding: .2em;
      border-radius: 1em;
      transition: background .15s ease-out;

      &::before {
        content: "";
        display: block;
        border-radius: 1em;
        width: 1.175em;
        height: 1.175em;
        background: #f5f5f5;
        box-shadow: 0 3px 1px 0 rgba(0,0,0,.05),0 2px 2px 0 rgba(0,0,0,.1),0 3px 3px 0 rgba(0,0,0,.05);
        transition: transform .15s ease-out,width .15s ease-out;
        will-change: transform;
      }
    }
    
    &:not(:checked) {
      & + .check {
        background-color: hsla(0,0%,71%,.9) !important;
      }
    }

    &:checked {
      & + .check {
        background-color: unset;

        &::before {
          transform: translate3d(100%,0,0);
        }
      }
    }
  }

  .control-label {
    padding-left: .5em;
  }
}
</style>

<label ref="label" class="switch" bind:this={label}>
  <input type="checkbox" bind:value bind:this={input}/>

  <div class="check {newBackground}"></div>

  <span class="control-label">
    <slot/>
  </span>
</label>