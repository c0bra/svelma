<script>
  import { Collapse } from 'SVELMA'
  import Doc from '../../components/Doc.svelte'
  import Codeview from '../../components/Code.svelte'
</script>

<Doc title="Collapse" subtitle="Collapsible elements">
  <Collapse>
    <button class="button is-primary" slot="trigger">Click Me!</button>
    <div class="notification">
      <div class="content">
        <h3>Subtitle</h3>
        <p>Lorem ipsum dolor...</p>
      </div>
    </div>
  </Collapse>
</Doc>
