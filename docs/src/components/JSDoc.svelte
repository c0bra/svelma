<script>
  export let jsdoc
  export let showHeader = true
</script>

<style>
  @media screen and (max-width: 1087px) {
    .table-wrapper {
      overflow-x: scroll;
    }
  }
</style>

{#if jsdoc}
  {#if showHeader}<hr class="is-medium" />{/if}

  <section>
    {#if showHeader}<h2 class="title is-4">API</h2>{/if}

    <div class="table-wrapper">
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
              <td>
                <code>{doc.name}</code>
              </td>
              <td>
                {@html doc.description}{#if doc.optional}, optional{/if}
              </td>
              <td>{(doc.type || []).join(', ')}</td>
              <td>
                {@html doc.values || '&mdash;'}
              </td>
              <td>
                {@html ('defaultvalue' in doc && `<code>${doc.defaultvalue}</code>`) || '&mdash;'}
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </section>
{/if}
