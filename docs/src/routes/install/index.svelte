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
    <Codeview lang="bash">npm install --save bulma svelma rollup-plugin-postcss</Codeview>

    <div class="content">Add <code>rollup-plugin-postcss</code> to your <code>rollup.config.js</code>.</div>

    <Codeview lang="js" code={`import postcss from 'rollup-plugin-postcss'

// ...

export default {
  // ... 
  plugins: [
    svelte({
      // ...
    }),

    postcss(),
  }
}`} />

    <p class="title is-4">Usage</p>
    <div class="content">Import Bulma's CSS in your main app's component</div>
    <Codeview lang="html" code={`
<!-- App.svelte -->
<script>
  import 'bulma/css/bulma.css'
</script>
    `}>
    </Codeview>

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

    <div class="content">
      Or import the full Svelma package.
    </div>
    <Codeview lang="html" code={`
<script>
  import { Svelma } from 'svelma'
</script>

<Svelma.Button>I am a Button</Svelma.Button>
    `}>
    </Codeview>
    
  </div>
</div>

<hr class="is-medium">

<div class="media">
  <div class="media-left">
    <p class="title">2</p>
  </div>
  <div class="media-content">
    <p class="title is-spaced">CDN</p>
    <Message type="is-info" showClose={false} title="Coming soon..">This feature is in progress</Message>
  </div>
</div>
