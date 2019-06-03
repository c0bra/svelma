<script>
  export let jsdoc
</script>

{#if jsdoc}
  <hr class="is-medium">

  <section class="api-view">
    <h2 class="title is-4">API</h2>

    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Type</th>
          <th>Values</th>
          <th>Default</th>
        </tr>
      </thead>
      <tbody>
        {#each jsdoc as doc}
          <tr>
            <td><code>{doc.name}</code></td>
            <td>{@html doc.description}{#if doc.optional}, optional{/if}</td>
            <td>{doc.type.join(', ')}</td>
            <td>{@html doc.values || '&mdash;'}</td>
            <td>{@html doc.defaultvalue && `<code>${doc.defaultvalue}</code>` || '&mdash;'}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </section>
{/if}