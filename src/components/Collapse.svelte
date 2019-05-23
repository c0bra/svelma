<script>
  import * as transitions from 'svelte/transition'

  export let open = true
  export let animation = 'fly'

  $: _animation = transitions[animation]

  function toggle() {
    open = !open
  }
</script>

<div class="collase">
  <div class="collapse-trigger" on:click={toggle}>
    <slot name="trigger" />
  </div>
  {#if open}
    <div class="collapse-content" transition:_animation>
      <slot />
    </div>
  {/if}
</div>
