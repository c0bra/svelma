<script>
  import { HighlightAuto } from "svelte-highlight";


  export let code = ''
  export let showCopy = true

</script>

<style>
</style>
{#if showCopy}
  <div class="copy">
    <button class="button is-small is-white" on:click={() => {
      navigator.clipboard.write(
        [new ClipboardItem({ ["text/plain"]: new Blob([code], { type: "text/plain" }) })]
      )
    }}>
      <span class="icon">
        <i class="fa fa-clipboard"></i> 
      </span>
      <span style="padding:0 .5em">Copy</span>
    </button>
  </div>
{/if}
<div style='padding:0 0 .7em 0'>
<HighlightAuto {code} />
</div>