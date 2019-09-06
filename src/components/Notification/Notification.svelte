<script>
  import { createEventDispatcher, onDestroy, onMount } from 'svelte'
  import { fly, fade } from 'svelte/transition'
  import Icon from '../Icon.svelte'
  import Notice, { fitlerProps } from '../Notice.svelte'

  /** Type (color)
   * @svelte-prop {String} [type=is-dark]
   * @values $$colors$$
   * */
  export let type = 'is-primary'

  /** Whether the notification is visible or not
   * @svelte-prop {boolean} active=true
   * */
  export let active = true

  /** Display an X button that closes the notification
   * @svelte-prop {boolean} showClose=true
   * */
  export let showClose = true

  /** Duration notification will remain on screen
   * @svelte-prop {Number} [duration=2000]
   * */
  export let duration = 2000

  /** Show this icon on left-side of the notification
   * @svelte-prop {String} [icon]
   * */
  export let icon = ''

  /** Fontawesome icon pack to use. By default the <code>Icon</code> component uses <code>fas</code>
   * @svelte-prop {String} [iconPack]
   * @values <code>fas</code>, <code>fab</code>, etc...
   * */
  export let iconPack = ''

  /** Label for the close button, to be read by accessibility screenreaders
   * @svelte-prop {String} [ariaCloseLabel]
   * */
  export let ariaCloseLabel = ''

  /** Text for notification
   * @svelte-prop {String} message
   * */

  /** Where the notification will show on the screen
   * @svelte-prop {String} [position=is-bottom-right]
   * @values <code>is-top</code>, <code>is-bottom</code>, <code>is-top-left</code>, <code>is-top-right</code>, <code>is-bottom-left</code>, <code>is-bottom-right</code>
   * */
  export let position = 'is-bottom-right'

  const dispatch = createEventDispatcher()

  function close() {
    active = false
    dispatch('close', active)
  }
</script>

<style lang="scss">
  .message .media {
    padding-top: 0;
    border: 0;
  }
</style>

{#if active}
  <article class="notification {type}" transition:fade|local>
    {#if showClose}
      <button class="delete" aria-label="ariaCloseLabel" on:click={close} />
    {/if}
    <div class="media">
      {#if icon}
        <div class="media-left">
          <Icon pack={iconPack} {icon} size="is-large" aria-hidden />
        </div>
      {/if}
      <div class="media-content">
        <slot />
      </div>
    </div>
  </article>
{/if}
