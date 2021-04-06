<script>
  import { onDestroy, onMount } from 'svelte'
  import { fade, slide } from 'svelte/transition'
  import Codepreview from '../../components/Code.svelte'
  import DocHeader from '../../components/DocHeader.svelte'
  import Example from '../../components/Example.svelte'

  let timer
  let user

  const titleize = s => s.replace(/^([a-z])/, (_, r) => r.toUpperCase())

  async function updateUser() {
    user = null
    user = (await (await fetch('https://randomuser.me/api/')).json()).results[0]
  }

  onMount(() => updateUser())
</script>

<DocHeader title="Media" subtitle="Social media UI element" />

<Example horizontal={true} code={`<script>
  import { onDestroy, onMount } from 'svelte'
  import { fade } from 'svelte/transition'

  let user

  const titleize = s => s.replace(/^([a-z])/, (_, r) => r.toUpperCase())

  async function updateUser() {
    user = null
    user = (await (await fetch('https://randomuser.me/api/')).json()).results[0]
  }
</script>

<button class="button is-primary" on:click={updateUser}>Fetch New User</button>

<br />
<br />

<div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        {#if user}
          <img transition:fade class="is-rounded" src={user.picture.medium} alt="Profile picture" />
        {/if}
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        {#if user}
          <p transition:fade>
            <strong>{titleize(user.name.first)} {titleize(user.name.last)}</strong>
            <small>@{user.login.username}</small>
            <small />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla
            egestas. Nullam condimentum luctus turpis.
          </p>
        {/if}
      </div>
      {#if user}
        <nav class="level is-mobile" transition:fade>
          <div class="level-left">
            <a href class="level-item" aria-label="reply">
              <span class="icon is-small">
                <i class="fas fa-reply" aria-hidden="true" />
              </span>
            </a>
            <a href class="level-item" aria-label="retweet">
              <span class="icon is-small">
                <i class="fas fa-retweet" aria-hidden="true" />
              </span>
            </a>
            <a href class="level-item" aria-label="like">
              <span class="icon is-small">
                <i class="fas fa-heart" aria-hidden="true" />
              </span>
            </a>
          </div>
        </nav>
      {/if}
    </div>
  </article>
</div>`}>
  <div slot="preview">
    <button class="button is-primary" on:click={updateUser}>Fetch New User</button>

    <br />
    <br />

    <div class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            {#if user}
              <img transition:fade class="is-rounded" src={user.picture.medium} alt="Profile" />
            {/if}
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            {#if user}
              <p transition:fade>
                <strong>{titleize(user.name.first)} {titleize(user.name.last)}</strong>
                <small>@{user.login.username}</small>
                <small />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla
                egestas. Nullam condimentum luctus turpis.
              </p>
            {/if}
          </div>
          {#if user}
            <nav class="level is-mobile" transition:fade>
              <div class="level-left">
                <a href class="level-item" aria-label="reply">
                  <span class="icon is-small">
                    <i class="fas fa-reply" aria-hidden="true" />
                  </span>
                </a>
                <a href class="level-item" aria-label="retweet">
                  <span class="icon is-small">
                    <i class="fas fa-retweet" aria-hidden="true" />
                  </span>
                </a>
                <a href class="level-item" aria-label="like">
                  <span class="icon is-small">
                    <i class="fas fa-heart" aria-hidden="true" />
                  </span>
                </a>
              </div>
            </nav>
          {/if}
        </div>
      </article>
    </div>
  </div>
</Example>
