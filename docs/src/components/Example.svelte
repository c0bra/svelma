<script>
  import { onMount } from 'svelte'
  import Code from './Code.svelte'

  export let lang = 'xml'
  export let code
</script>

<style>
.snippet {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: stretch;
  border-radius: 6px;
  border-top-left-radius: 0;
  border: 2px solid #f5f5f5;
  flex-direction: row;
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
  align-items: stretch;
  border-radius: 0 6px 6px 0;
  flex-direction: column;
}

.snippet::before {
  background: #ffdd57;
  border-radius: 2px 2px 0 0;
  bottom: 100%;
  color: rgba(0,0,0,.7);
  content: "Example";
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
  content: "Snippet";
  align-items: stretch;
  display: flex;
}
</style>

<div class="snippet">
  <div class="preview">
    <slot name="preview"></slot>
  </div>
  <div class="code">
    <Code {lang} {code}></Code>
  </div>
</div>
