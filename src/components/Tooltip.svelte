<script>
  import { fly } from 'svelte/transition'

  /** Type (color) of the tooltip
   * @svelte-prop {String} [type=is-primary]
   * @values <code>is-white</code>, <code>is-black</code>, <code>is-light</code>, <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>, <code>is-warning</code>, <code>is-danger</code>, and any other colors you've set in the <code>$colors</code> list on Sass
   * */
  export let type = 'is-primary'

  /** Whether tooltip is active or not
   * @svelte-prop {Boolean} [active=true]
   * */
  export let active = true

  /** Tooltip text
   * @svelte-prop {String} label
   * */
  export let label = ''

  /** Tooltip position in relation to the element
   * @svelte-prop {String} [position=is-top]
   * @values <code>is-top</code>, <code>is-bottom</code>, <code>is-top-left</code>, <code>is-top-right</code>, <code>is-bottom-left</code>, <code>is-bottom-right</code>
   * */
  export let position = 'is-top'

  /** Tooltip will be always active
   * @svelte-prop {Boolean} [always=false]
   * */
  export let always = false

  /** Tooltip will have fly animation, customizable
   * @svelte-prop {Boolean|Object} [animate=true]
   * */
  export let animate = true

  /** Tooltip will be square (not rounded corners)
   * @svelte-prop {Boolean} [square=false]
   * */
  export let square = false

  /** Tooltip slot will have a dashed underline
   * @svelte-prop {Boolean} [dashed=false]
   * */
  export let dashed = false

  /** Tooltip will be multilined
   * @svelte-prop {Boolean} [multilined=false]
   * */
  export let multilined = false

  /** Tooltip multiline size (only works for multilined tooltips)
   * @svelte-prop {String} [size=is-medium]
   * @values <code>is-small</code>, <code>is-medium</code>, <code>is-large</code>
   * */
  export let size = 'is-medium'

  /** Tooltip will be fully rounded on left and right edges
   * @svelte-prop {Boolean} [rounded=false]
   * */
  export let rounded = false

  /** Tooltip style override
   * @svelte-prop {String} [style=undefined]
   * */
  export let style = undefined

  let hovering = false

  let animationProps
  $: {
    if (animate === false || animate === 'false') animationProps = { duration: 0 }
    else if (animate != null && typeof animate === "object") animationProps = animate
    else {
      // default animation props
      switch (position) {
        case 'is-top':
          animationProps = { x: 0, y: -10 }
          break
        case 'is-right':
          animationProps = { x: 10, y: 0 }
          break
        case 'is-bottom':
          animationProps = { x: 0, y: 10 }
          break
        case 'is-left':
          animationProps = { x: -10, y: 0 }
          break
      }
      animationProps = { ...animationProps, duration: 200 }
    }
  }
</script>

<style lang="scss">
  $tooltip-arrow-size: 8px;
  $tooltip-arrow-margin: 2px;

  @mixin tooltip($direction) {
    &.#{$direction} {
      // for tooltip
      @if ($direction == 'is-top') {
        top: auto;
        right: auto;
        bottom: calc(100% + #{$tooltip-arrow-size} + #{$tooltip-arrow-margin});
        left: 50%;
        transform: translateX(-50%);
      } @else if ($direction == 'is-bottom') {
        top: calc(100% + #{$tooltip-arrow-size} + #{$tooltip-arrow-margin});
        right: auto;
        bottom: auto;
        left: 50%;
        transform: translateX(-50%);
      } @else if ($direction == 'is-right') {
        top: 50%;
        right: auto;
        bottom: auto;
        left: calc(100% + #{$tooltip-arrow-size} + #{$tooltip-arrow-margin});
        transform: translateY(-50%);
      } @else if ($direction == 'is-left') {
        top: 50%;
        right: calc(100% + #{$tooltip-arrow-size} + #{$tooltip-arrow-margin});
        bottom: auto;
        left: auto;
        transform: translateY(-50%);
      }

      // for tooltip arrow
      &:after {
        @if ($direction == 'is-top') {
          top: auto;
          left: auto;
          right: auto;
          bottom: calc(-1 * #{$tooltip-arrow-size});
          transform: translateY(-50%) rotate(45deg);
        } @else if ($direction == 'is-bottom') {
          top: calc(-1 * #{$tooltip-arrow-size});
          left: auto;
          right: auto;
          bottom: auto;
          transform: translateY(50%) rotate(45deg);
        } @else if ($direction == 'is-right') {
          top: auto;
          left: calc(-1 * #{$tooltip-arrow-size});
          right: auto;
          bottom: auto;
          transform: translateX(50%) rotate(45deg);
        } @else if ($direction == 'is-left') {
          top: auto;
          left: auto;
          right: calc(-1 * #{$tooltip-arrow-size});
          bottom: auto;
          transform: translateX(-50%) rotate(45deg);
        }
      }
    }
  }

  .tooltip-wrapper {
    position: relative;
    display: inline-flex;
  }

  .tooltip {
    @include tooltip('is-top');
    @include tooltip('is-right');
    @include tooltip('is-bottom');
    @include tooltip('is-left');
    position: absolute;
    box-shadow: 0px 1px 2px 1px rgba(0, 1, 0, 0.2);
    z-index: 888;

    &.is-square {
      border-radius: 0;
    }

    &.is-dashed {
      text-decoration-style: dashed;
      text-decoration-line: underline;
    }

    &.is-multiline {
      height: revert;
      padding: 5px 10px;
      text-align: center;
      white-space: normal;
    }

    // tooltip arrow
    &:after {
      content: '';
      position: absolute;
      width: $tooltip-arrow-size;
      height: $tooltip-arrow-size;
      background-color: inherit;
      overflow: hidden;
    }
  }
</style>

<div class="tooltip-wrapper">
  <div class="tooltip-trigger" on:mouseenter={() => (hovering = true)} on:mouseleave={() => (hovering = false)}>
    <slot />
  </div>
  {#if always || (active && hovering)}
    <div
      transition:fly={animationProps}
      class="tooltip tag {type}
      {size}
      {position}"
      class:is-rounded={rounded}
      class:is-dashed={dashed}
      class:is-square={square}
      class:is-multiline={multilined}
      {style}>
       {label}
    </div>
  {/if}
</div>
