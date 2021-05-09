# Svelma

> Svelma is a set of UI components for [Svelte](https://svelte.dev) based on the [Bulma](http://bulma.io) CSS framework.

<a href="https://www.npmjs.com/package/svelma"><img src="https://img.shields.io/npm/v/svelma.svg" /></a>
<a href="https://www.npmjs.com/package/svelma"><img src="https://img.shields.io/npm/l/svelma.svg" /></a>
<a href="https://bundlephobia.com/result?p=svelma"><img src="https://badgen.net/bundlephobia/minzip/svelma"></a>
<a href="https://travis-ci.com/c0bra/svelma"><img src="https://travis-ci.com/c0bra/svelma.svg?branch=master"></a>


[Change Log](CHANGELOG.md)



# Documentation

[See docs + demos site here](https://c0bra.github.io/svelma)

# Quick Start

### 1. Import svelma and dependencies via npm to your project

```bash
$ npm install --save bulma svelma
$ npm install node-sass svelte-preprocess rollup-plugin-postcss --save-dev
```

### 2. Add the postcss plugin to your rollup config

```js
// rollup.config.js
import postcss from 'rollup-plugin-postcss'
import preprocess from 'svelte-preprocess'

// ...

export default {
  // ...
  plugins: [
    svelte({
      // ...
      preprocess: preprocess()
    }),

    postcss(),
  }
}
```

### 3. Import Bulma's CSS and Svelma components

```html
<!-- App.svelte -->
<script>
  import 'bulma/css/bulma.css'
  import { Button } from 'svelma'
</script>

<Button type="is-primary">I'm a Button!</Button>
```

### 4. Include [Font Awesome](https://fontawesome.com/) icons

From CDN in your HTML page:

```html
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" />
```

Or as an npm package imported into your root component:

`$ npm install --save @fortawesome/fontawesome-free`

```html
<!-- App.svelte -->
<script>
  import 'bulma/css/bulma.css'
  import '@fortawesome/fontawesome-free/css/all.css'
</script>
```

### SSR

If you are doing server-side rendering with Sapper, you'll need to import the .svelte files directly so that your app can compile them, rather than importing from the compiled module.

i.e.:

```js
import Button from 'svelma/src/components/Button.svelte'
```

instead of

```js
import { Button } from 'svelma'
```


# Inspiration

Much thanks to the [Buefy](https://buefy.org) and [Svelma2](https://github.com/abbychau/svelma2) projects! It provided the inspiration and lots of code examples for this version of Svelma.
