<script>
  import { Message } from 'SVELMA'
  import Doc from '../../components/Doc.svelte'
  import Codeview from '../../components/Code.svelte'
</script>

<Doc title="Start" subtitle="How to install and use Svelma">
  <div class="media">
    <div class="media-left">
      <p class="title">1</p>
    </div>
    <div class="media-content">
      <p class="title">NPM</p>
      <p class="subtitle is-spaced">For use with a project using a bundler like Webpack, Rollup, or Parcel</p>
      <p class="title is-4">Installation</p>
      <Codeview>npm install svelma</Codeview>
    </div>
  </div>

  <div class="media">
    <div class="media-left">
      <p class="title">2</p>
    </div>
    <div class="media-content">
      <p class="title is-spaced">CDN</p>
      <Message type="is-info" closable={false} title="Coming soon..">This feature is in progress</Message>
    </div>
  </div>
</Doc>
