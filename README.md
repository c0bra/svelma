<h1 align="center">Svelma</h1>

<div align="center">

<a href="https://www.npmjs.com/package/svelma-enhanced"><img src="https://img.shields.io/npm/v/svelma-enhanced.svg" /></a>
<a href="https://www.npmjs.com/package/svelma-enhanced"><img src="https://img.shields.io/npm/l/svelma-enhanced.svg" /></a>
<a href="https://www.npmjs.com/package/svelma-enhanced"><img src="https://img.shields.io/npm/dm/svelma-enhanced"></a>
<a href="https://travis-ci.org/saravanabalagi/svelma"><img src="https://travis-ci.org/saravanabalagi/svelma.svg?branch=master"></a>

Svelma is a set of UI components for [Svelte](https://svelte.dev) based on the [Bulma](http://bulma.io) CSS framework. Some features are experimental and are being developed. Pull requests are welcome. Forked from https://github.com/c0bra/svelma. This fork currently only has bug fixes.

</div>

## Documentation

See documentation and demo [here](https://saravanabalagi.github.io/svelma)

## Setup

#### 1. Install svelma and dependencies via npm

```sh
yarn add bulma @saravanbalagi/svelma
yarn add -D node-sass svelte-preprocess rollup-plugin-postcss
```

#### 2. Add the postcss plugin to your rollup config

```js
// rollup.config.js
import postcss from 'rollup-plugin-postcss';
import preprocess from 'svelte-preprocess';

// ...

export default {
  // ...
  plugins: [
    svelte({
      // ...
      preprocess: preprocess()
    }),

    postcss(),
    // ...
  ]
}
```

#### 3. Import Bulma's CSS and Svelma components

```html
<!-- App.svelte -->
<script>
  import 'bulma/css/bulma.css';
  import { Button } from 'svelma';
</script>

<Button type="is-primary">I'm a Button!</Button>
```
You can [customize](https://bulma.io/documentation/customize/with-node-sass/#6-add-your-own-bulma-styles) Bulma to suit your branding:

1. Create SASS/SCSS file, say `app.scss`, and add it to App.svelte
1. Import required SASS files from Bulma in `app.scss`
1. Override SASS/SCSS variables

#### 4. Install [Font Awesome](https://fontawesome.com/) icons

Fontawesome Webfonts come with certain side effects and so SVG Icons are recommended for use with svelte.

```sh
# add SVG icons
yarn add -D @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-solid-svg-icons
```

Add fontawesome to your App. The following will add all icons, but you can also add SVG icons [selectively](https://fontawesome.com/how-to-use/on-the-web/advanced/svg-javascript-core) if you wanted to make you app a lot smaller.

```html
<!-- App.svelte -->
<script>
  import 'bulma/css/bulma.css';

  // add all fontawesome icons
  import { library, dom } from '@fortawesome/fontawesome-svg-core';
  import { fas } from '@fortawesome/free-solid-svg-icons';
  import { far } from '@fortawesome/free-regular-svg-icons';
  import { fab } from '@fortawesome/free-brands-svg-icons';
  library.add(fab, fas, far);
  dom.watch();
</script>
```

Alternatively, you shall also use a link tag in your `index.html` using a [CDN](https://cdnjs.com/libraries/font-awesome), or use [webfonts](https://www.npmjs.com/package/@fortawesome/fontawesome-free) but this is not recommended.


If you are doing server-side rendering with Sapper (or [SvelteKit](https://kit.svelte.dev/)), you'll need to import the `.svelte` files directly so that your app can compile them, rather than importing from the compiled module.

```js
import Button from 'svelma/src/components/Button.svelte';          // Use this
// import { Button } from 'svelma';                                // Don't use this
```

## License

See attached [Licence](LICENCE)
