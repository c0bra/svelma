<script>
  import { createEventDispatcher, onDestroy, onMount } from 'svelte'
  import { fly, fade } from 'svelte/transition'
  import Notice, { notices } from '../Notice.svelte'

  const dispatch = createEventDispatcher()

  /** Text or html message for toast
   * @svelte-prop {String} message
   * */
  export let message

  export let active = true

  /** Duration toast will remain on screen
   * @svelte-prop {Number} [duration=2000]
   * */
  export let duration = 2000

  /** Where the toast will show on the screen
   * @svelte-prop {String} [position=is-top]
   * @values <code>is-top</code>, <code>is-bottom</code>, <code>is-top-left</code>, <code>is-top<-right/code>, <code>is-bottom-left</code>, <code>is-bottom<-right/code>
   * */
  export let position = 'is-top'

  /** Type (color)
   * @svelte-prop {String} [type=is-dark]
   * @values $$colors$$
   * */
  export let type = 'is-dark'

  /** Background type (any of the Bulma <code>has-background-</code> classes will work)
   * @svelte-prop {String} [background]
   * @values <code>has-background-*</code>
   * */
  export let background = ''

  let el
  let parent
  let timer
  const div = () => document.createElement('div')

  $: newBbackground = background || type.replace(/^is-(.*)/, 'has-background-$1')
  $: transitionY = ~position.indexOf('is-top') ? -200 : 200

  function close() {
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

    // el.parentNode.removeChild(el)
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

<style lang="sass">
  @import 'node_modules/bulma/sass/utilities/all';

  .toast {
    display: inline-flex;
    text-align: center;
    padding: 0.75em 1.5em;
    border-radius: 2em;
    margin: 0.5em 0;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04); /* super subtle... */
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

    div {
      text-align: center;
    }
  }
</style>

{#if active}
  <div
    class="toast {type}
    {position}
    {newBbackground}"
    aria-hidden={!active}
    role="alert"
    in:fly={{ y: transitionY }}
    out:fade
    on:outroend={remove}
    bind:this={el}>
    <div>
      {@html message}
    </div>
  </div>
{/if}
