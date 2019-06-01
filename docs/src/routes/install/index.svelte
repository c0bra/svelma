<script>
  import { Message } from 'svelma'
  import DocHeader from '../../components/DocHeader.svelte'
  import Codeview from '../../components/Code.svelte'
</script>

<DocHeader title="Start" subtitle="How to install and use Svelma" />
<div class="media">
  <div class="media-left">
    <p class="title">1</p>
  </div>
  <div class="media-content">
    <p class="title">NPM</p>
    <p class="subtitle is-spaced">For use with a project using a bundler like Webpack, Rollup, or Parcel</p>
    <p class="title is-4">Installation</p>
    <Codeview lang="bash">npm install -S bulma svelma</Codeview>

    <p class="title is-4">Usage</p>
    <div class="content">
      Svelma components can be imported one at a time like so:
    </div>
    <Codeview lang="html" code={`
<script>
  import { Button } from 'svelma'
</script>

<Button>I am a Button</Button>
    `}>
    </Codeview>

    
  </div>
</div>

<!-- <div class="media">
  <div class="media-left">
    <p class="title">2</p>
  </div>
  <div class="media-content">
    <p class="title is-spaced">CDN</p>
    <Message type="is-info" showClose={false} title="Coming soon..">This feature is in progress</Message>
  </div>
</div> -->
