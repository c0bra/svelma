<script>
  import { onMount } from 'svelte'
  import { Button } from 'svelma'
  import Code from './Code.svelte'
  import CodepenButton from './CodepenButton.svelte'

  export let lang = 'xml'
  export let code
  export let horizontal = false

  let showCode = false

  function show() {
    showCode = true
  }

  function hide(e) {
    e.stopPropagation()
    showCode = false
  }
</script>

<style lang="scss">
  .snippet {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: stretch;
    border-radius: 6px;
    border-top-left-radius: 0;
    border: 2px solid #f5f5f5;
    flex-direction: row;
    margin-top: 3em;

    &.horizontal {
      flex-direction: column;
    }
  }

  @media screen and (max-width: 1087px) {
    .snippet {
      flex-direction: column;
    }
  }

  .preview {
    min-width: 50%;
    padding: 1.5rem;
  }

  .code {
    min-width: 50%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    border-radius: 0 6px 6px 0;
    border-left: 1px solid #f5f5f5;
    overflow: hidden;
    position: relative;
    /* cursor: pointer;
    pointer-events: auto; */

    /*
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0.8;
      background-color: white;
      content: '<> Show Code';
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;
      font-size: 0.75rem;
    }*/

    /*
    &:hover::before {
      background-color: #ffdd57;
    }

    & :global(pre),
    & :global(pre code) {
      overflow: hidden;
    }

    &.show-code {
      cursor: auto;

      &::before {
        content: inherit;
      }

      & :global(figure) {
        margin-bottom: 3em;
      }

      & :global(pre) {
        overflow: auto;
      }
    }*/
  }

  .snippet::before {
    background: #ffdd57;
    border-radius: 2px 2px 0 0;
    bottom: 100%;
    color: rgba(0, 0, 0, 0.7);
    content: 'Example';
    display: inline-block;
    font-size: 7px;
    font-weight: 700;
    left: -1px;
    letter-spacing: 1px;
    margin-left: -1px;
    padding: 3px 5px;
    position: absolute;
    text-transform: uppercase;
    vertical-align: top;
  }

  .snippet::before {
    content: 'Snippet';
    align-items: stretch;
    display: flex;
  }

  .codepen-button {
    position: absolute;
    display: inline-flex;
    background: #ffdd57;
    border-radius: 4px 4px 0 0;
    bottom: 100%;
    font-size: 7px;
    font-weight: 700;
    right: -1px;
    padding: 0 0 0 8px;
    vertical-align: top;
    letter-spacing: 1px;
    text-transform: uppercase;
    line-height: 17px;
  }

  /*.code {
    :global(.codeview) {
      height: 100%;

      :global(figure) {
        height: 100%;

        :global(pre:not(.hidden)) {
          height: 100%;
        }
      }
    }
  }*/

  :global(.codeview) {
    margin-bottom: 0 !important;
  }

  :global(.btn-show-code) {
    align-self: center;
    margin: 2em 0 0.5em;
    position: absolute;
    bottom: 0;
    background: none;
  }
</style>

<div class="snippet" class:horizontal>
  <CodepenButton {code}>
    <div class="codepen-button">
      Codesandbox
      <i class="icon is-small fas fa-external-link-alt" />
    </div>
  </CodepenButton>
  <div class="preview">
    <slot name="preview" />
  </div>
  <div class="code">
    <!-- class:show-code={showCode} on:click={show} -->
    <Code {lang} {code} />

    <!-- {#if showCode}
      <Button class="btn-show-code is-rounded is-outline has-text-grey-light" on:click|stopPropagation={hide}>
        Hide Code
      </Button>
    {/if} -->
  </div>
</div>
