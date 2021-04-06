<script>
    import { Button, ModalCard } from 'svelma'
    import DocHeader from '../../components/DocHeader.svelte'
    import Example from '../../components/Example.svelte'
  
    let active = false
  </script>
  
  <DocHeader title="Modal Cards" subtitle="ModalCard popups" />
  
  <Example code={`<script>
    import { Button, ModalCard } from 'svelma'
    
    let active = false
  </script>
  
  <Button class="block" on:click={() => active = !active}>Toggle</Button>
  <ModalCard bind:active={active} title="My Modal Title">
    <p class="image is-4by3">
      <img alt="Test image" src="https://via.placeholder.com/1280x920"/>
    </p>
  </ModalCard>`}>
    <div slot="preview">
      <Button class="block" on:click={() => active = !active}>Toggle</Button>
      <ModalCard bind:active={active} title="My Modal Title">
        <p class="image is-4by3">
          <img alt="Test" src="https://via.placeholder.com/1280x920"/>
        </p>
      </ModalCard>
    </div>
  </Example>
  