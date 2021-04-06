<script>
  import { onDestroy, onMount } from 'svelte'
  import DocHeader from '../../components/DocHeader.svelte'
  import Example from '../../components/Example.svelte'
let Draggabilly;
  async function waitForDraggabilly() {
    return new Promise((resolve, reject) => {
      const interval = setInterval(() => {
        if (Draggabilly) {
          clearInterval(interval);
          resolve();
        }
      }, 250);
    });
  }

  onMount(async () => {
    const draggables = document.querySelectorAll('.tile.is-child');

    await waitForDraggabilly();

    for (const elm of draggables) {
      let drag = new Draggabilly(elm, { // .tile:not(.is-ancestor)
        containment: '.tile.is-ancestor',
      });
    }
  })
</script>

<style>
.tile:not(.is-ancestor) {
  user-select: none;
}

:global(.is-dragging) {
  transform: rotate(25deg);
  cursor: move;
}
</style>

<DocHeader title="Tiles" subtitle="2D grids with flexbox" />

<Example code={`<script>
  import { onMount } from 'svelte'

  waitForDraggabilly() {
    return new Promise((resolve, reject) => {
      const interval = setInterval({
        if (Draggabilly) {
          clearInterval(interval);
          resolve();
        }
      }, 100);
    });
  }

  onMount(async () => {
    const draggables = document.querySelectorAll('.tile.is-child');

    await waitForDraggabilly();

    for (const elm of draggables) {
      let drag = new Draggabilly(elm, {
        containment: '.tile.is-ancestor',
      });
    }
  })
</script>

<style>
.tile:not(.is-ancestor) {
  user-select: none;
}

:global(.is-dragging) {
  transform: rotate(25deg);
  cursor: move;
}
</style>

<script src="https://unpkg.com/draggabilly@2/dist/draggabilly.pkgd.min.js"></script>

<div class="tile is-ancestor">
  <div class="tile is-vertical is-8">
    <div class="tile">
      <div class="tile is-parent is-vertical">
        <article class="tile is-child notification is-primary">
          <p class="title">Vertical...</p>
          <p class="subtitle">Top tile</p>
        </article>
        <article class="tile is-child notification is-warning">
          <p class="title">...tiles</p>
          <p class="subtitle">Bottom tile</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-info">
          <p class="title">Middle tile</p>
          <p class="subtitle">With an image</p>
          <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/640x480.png" />
          </figure>
        </article>
      </div>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child notification is-danger">
        <p class="title">Wide tile</p>
        <p class="subtitle">Aligned with the right tile</p>
        <div class="content">
          <!-- Content -->
        </div>
      </article>
    </div>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child notification is-success">
      <div class="content">
        <p class="title">Tall tile</p>
        <p class="subtitle">With even more content</p>
        <div class="content">
          <!-- Content -->
        </div>
      </div>
    </article>
  </div>
</div>`}>
  <div slot="preview">
    <script src="https://unpkg.com/draggabilly@2/dist/draggabilly.pkgd.min.js"></script>

    <h5 class="title">Click to drag tiles</h5>

    <div class="tile is-ancestor">
      <div class="tile is-vertical is-8">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-primary">
              <p class="title">Vertical...</p>
              <p class="subtitle">Top tile</p>
            </article>
            <article class="tile is-child notification is-warning">
              <p class="title">...tiles</p>
              <p class="subtitle">Bottom tile</p>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-info">
              <p class="title">Middle tile</p>
              <p class="subtitle">With an image</p>
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/640x480.png" alt="profile" />
              </figure>
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-danger">
            <p class="title">Wide tile</p>
            <p class="subtitle">Aligned with the right tile</p>
            <div class="content">
              <!-- Content -->
            </div>
          </article>
        </div>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-success">
          <div class="content">
            <p class="title">Tall tile</p>
            <p class="subtitle">With even more content</p>
            <div class="content">
              <!-- Content -->
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</Example>
