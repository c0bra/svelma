<script context="module">
  export function fitlerProps(props) {
    const { active, type, position, duration } = props
    return { active, type, position, duration }
  }
</script>

<script>
  import { createEventDispatcher, onDestroy, onMount } from 'svelte'
  import { fly, fade } from 'svelte/transition'
  import Notices, { notices } from './Notices.svelte'

  const dispatch = createEventDispatcher()

  export let active = true
  export let type = 'is-dark'
  export let position = 'is-top'
  export let duration = 2000
  export let transitionOut = true

  let el
  let parent
  let timer
  const div = () => document.createElement('div')

  $: transitionY = ~position.indexOf('is-top') ? -200 : 200

  export function close() {
    active = false
  }

  function remove() {
    clearTimeout(timer)

    // Just making sure
    active = false

    dispatch('destroyed')
  }

  function setupContainers() {
    if (!notices.top) {
      notices.top = div()
      notices.top.className = 'notices is-top'
      document.body.appendChild(notices.top)
    }
    if (!notices.bottom) {
      notices.bottom = div()
      notices.bottom.className = 'notices is-bottom'
      document.body.appendChild(notices.bottom)
    }
  }

  function chooseParent() {
    parent = notices.top
    if (position && position.indexOf('is-bottom') === 0) parent = notices.bottom

    parent.insertAdjacentElement('afterbegin', el)
  }

  onMount(() => {
    setupContainers()
    chooseParent()

    timer = setTimeout(() => {
      close()
    }, duration)
  })
</script>

<style lang="scss">
  .notice {
    display: inline-flex;
    pointer-events: auto;

    &.is-top,
    &.is-bottom {
      align-self: center;
    }

    &.is-top-left,
    &.is-bottom-left {
      align-self: flex-start;
    }

    &.is-top-right,
    &.is-bottom-right {
      align-self: flex-end;
    }
  }
</style>

{#if active}
  <div
    class="notice {position}"
    aria-hidden={!active}
    in:fly={{ y: transitionY }}
    out:fade={{ duration: transitionOut ? 400 : 0 }}
    on:outroend={remove}
    bind:this={el}>

    <slot />
  </div>
{/if}
