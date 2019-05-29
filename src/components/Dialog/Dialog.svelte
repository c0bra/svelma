<script>
  import { onDestroy, onMount, tick } from 'svelte'
  import Icon from '../Icon.svelte'
  import { chooseAnimation, isEnterKey, isEscKey } from '../../utils'

  export let title = ''
  export let message
  export let confirmText = 'OK'
  export let cancelText = 'Cancel'
  export let focusOn = 'confirm'
  export let icon = ''
  export let iconPack = ''
  export let hasInput = false
  export let onCancel = () => {}
  export let onConfirm = () => {}
  export let prompt = null
  export let showCancel = true
  export let size = ''
  export let type = 'is-primary'

  export let active = true
  export let animation = 'scale'
  export let animProps = { start: 1.2 }
  export let showClose = true
  export let subComponent = null
  export let onBody = true

  let modal
  let cancelButton
  let confirmButton
  let input

  $: _animation = chooseAnimation(animation)
  $: {
    if (modal && active && onBody) {
      modal.parentNode.removeChild(modal)
      document.body.appendChild(modal)
    }
  }

  onMount(async () => {
    await tick()
    
    if (hasInput) {
      input.focus()
    } else if (focusOn === 'cancel' && showCancel) {
      cancelButton.focus()
    } else {
      confirmButton.focus()
    }
  })


  function cancel() {
    onCancel()
    close()
  }

  function close() {
    active = false
  }

  function confirm() {
    onConfirm()
    close()
  }

  function keydown(e) {
    if (active && isEscKey(e)) {
      close()
    }
  }
</script>

<style lang="sass">
@import 'node_modules/bulma/sass/utilities/all';

 .dialog {
   .modal-card {
     max-width: 460px;
     width: auto;
     .modal-card-head {
       font-size: $size-5;
       font-weight: $weight-semibold;
     }
     .modal-card-body {
       .field {
         margin-top: 16px;
       }
       &.is-titleless {
         border-top-left-radius: $radius-large;
         border-top-right-radius: $radius-large;
       }
     }
     .modal-card-foot {
       justify-content: flex-end;
       .button {
         display: inline; // Fix Safari centering
         min-width: 5em;
         font-weight: $weight-semibold;
       }
     }
     @include tablet {
       min-width: 320px;
     }
   }

   &.is-small {
     .modal-card,
     .input,
     .button {
       @include control-small;
     }
   }

   &.is-medium {
     .modal-card,
     .input,
     .button {
       @include control-medium;
     }
   }

   &.is-large {
     .modal-card,
     .input,
     .button {
       @include control-large;
     }
   }
 }
</style>

<svelte:window on:keydown={keydown}></svelte:window>

{#if active}
  <div class="modal dialog {size} is-active" bind:this={modal}>
    <div class="modal-background" on:click={close}></div>
    <div class="modal-card" transition:_animation|local={animProps}>
      {#if title}
        <header class="modal-card-head">
          <p class="modal-card-title">{title}</p>
          {#if showClose}
            <button class="delete" aria-label="close" on:click={close}></button>
          {/if}
        </header>
      {/if}
      <section class="modal-card-body" class:is-titleless={!title} class:is-flex={icon}>
        <div class="media">
          {#if icon}
            <div class="media-left">
              <Icon pack={iconPack} {icon} {type} size="is-large"></Icon>
            </div>
          {/if}
          <div class="media-content">
            <p>{@html message}</p>

            {#if hasInput}
              <div class="field">
                <div class="control">
                  <input
                      bind:value={prompt}
                      class="input"
                      bind:this={input}
                      v-bind="inputAttrs"
                      on:keyup={e => isEnterKey(e) && confirm}>
                </div>
              </div>
            {/if}
          </div>
        </div>
      </section>

      <footer class="modal-card-foot">
        {#if showCancel}
          <button
              class="button"
              bind:this={cancelButton}
              on:click={cancel}>
              { cancelText }
          </button>
        {/if}
        <button
            class="button {type}"
            bind:this={confirmButton}
            on:click={confirm}>
            { confirmText }
        </button>
      </footer>
    </div>
  </div>
{/if}