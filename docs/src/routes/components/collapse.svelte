<script>
  import { Collapse } from 'svelma'
  import Doc from '../../components/Doc.svelte'
  import Example from '../../components/Example.svelte'
</script>

<template>
  <Collapse>
    <button class="button is-primary" slot="trigger">
      Click Me!
    </button>
    <div class="notification">
      <div class="content">
        <h3>Subtitle</h3>
        <p>Lorem ipsum dolor...</p>
      </div>
    </div>
  </Collapse>
</template>

<Doc title="Collapse" subtitle="Collapsible elements">
  <Example code={`<Collapse>
  <button class="button is-primary" slot="trigger">
    Click Me!
  </button>
  <div class="notification">
    <div class="content">
      <h3>Subtitle</h3>
      <p>Lorem ipsum dolor...</p>
    </div>
  </div>
</Collapse>`}>
    <div slot="preview">
      <Collapse>
        <button class="button is-primary" slot="trigger">Click Me!</button>
        <div class="notification">
          <div class="content">
            <h3>Subtitle</h3>
            <p>Lorem ipsum dolor...</p>
          </div>
        </div>
      </Collapse>
    </div>
  </Example>
</Doc>
