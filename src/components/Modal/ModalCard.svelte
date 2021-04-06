<script>
  import { onDestroy, onMount } from 'svelte'
  import { chooseAnimation, isEscKey } from '../../utils'

  export let active = true
  export let title = "Modal Title"
  export let animation = 'scale'
  export let animProps = { start: 1.2 }
  export let size = ''
  export let showClose = true
  export let onBody = true

  let modal

  $: _animation = chooseAnimation(animation)
  $: {
    if (modal && active && onBody) {
      document.body.appendChild(modal)
    }
  }

  onMount(() => {})

  function close() {
    active = false
  }

  function keydown(e) {
    if (active && isEscKey(e)) {
      close()
    }
  }
</script>

<svelte:window on:keydown={keydown} />

<div class="modal {size}"  class:is-active={active} bind:this={modal}>
  <div class="modal-background" on:click={close}></div>
  <div class="modal-card" transition:_animation|local={animProps}>
    <header class="modal-card-head">
      <p class="modal-card-title">{title}</p>
      <button class="delete" aria-label="close" on:click={close} />
    </header>
    <section class="modal-card-body">
      <slot />
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success">Save changes</button>
      <button class="button">Cancel</button>
    </footer>
  </div>
</div>
