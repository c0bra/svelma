<script context="module">
  // import { writable } from 'svelte/store'

  // export let noticesTop
  // export let noticesBottom
  export const notices = {}
</script>

<script>
  // import { onMount } from 'svelte'

  // const div = () => document.createElement('div')

  // onMount(() => {
  //   if (!noticesTop) {
  //     noticesTop = div()
  //     noticesTop.className = 'notices is-top'
  //     document.body.appendChild(noticesTop)
  //   }
  //   if (!noticesBottom) {
  //     noticesBottom = div()
  //     noticesBottom.className = 'notices is-bottom'
  //     document.body.appendChild(noticesBottom)
  //   }
  // })
</script>

<style lang="sass">
  :global(.notices) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    padding: 3em;
    z-index: 1000;
    pointer-events: none;
    display: flex;

    &.is-top {
      flex-direction: column;
    }

    &.is-bottom {
      flex-direction: column-reverse;
    }

    [class*='has-background-'] * {
      color: transparent !important;
      filter: invert(1) brightness(2.5) grayscale(1) contrast(9);
      background: inherit;
      background-clip: text !important;
      -webkit-background-clip: text !important;
    }
  }
</style>

<div class="notice">
  <slot />
</div>
