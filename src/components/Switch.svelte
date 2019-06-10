
<script>
  export let value
  export let type = 'is-primary'

  $: newBackground = type && type.replace(/^is-(.*)/, 'has-background-$1') || ''
</script>

<style lang="sass">
.switch {
  position: relative;

  input {
    position: absolute;
    opacity: 0;
    left: 0;

    & + .check {
      display: flex;
      align-items: center;
      flex-shrink: 0;
      width: 2.75em;
      height: 1.575em;
      padding: .2em;
      background: #b5b5b5;
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

    &:checked + .check {
      transform: translate3d(100%,0,0);
    }
  }

  .control-label {
    padding-left: .5em;
  }
}
</style>

<label ref="label" class="switch">
  <input type="checkbox" bind:value />

  <div class="check {newBackground}"></div>

  <span class="control-label">
    <slot/>
  </span>
</label>