# Svelma

> Svelma is a set of UI components for [Svelte](https://svelte.dev) based on the [Bulma](http://bulma.io) CSS framework.

<a href="https://www.npmjs.com/package/svelma"><img src="https://img.shields.io/npm/v/svelma.svg" /></a>
<a href="https://www.npmjs.com/package/svelma"><img src="https://img.shields.io/npm/l/svelma.svg" /></a>
<a href="https://bundlephobia.com/result?p=svelma"><img src="https://badgen.net/bundlephobia/minzip/svelma"></a>
<a href="https://travis-ci.com/c0bra/svelma"><img src="https://travis-ci.com/c0bra/svelma.svg?branch=master"></a>

<!-- <a href="https://circleci.com/gh/c0bra/svelma"><img src="https://img.shields.io/circleci/project/c0bra/svelma/svelma.svg?style=flat-square" /></a> -->
<!-- <a href="https://codecov.io/gh/svelma/svelma"><img src="https://img.shields.io/codecov/c/github/svelma/svelma.svg?style=flat-square" /></a> -->

# Inspiration

Much thanks to the [Buefy](https://buefy.org) project! It provided the inspiration and lots of code examples for Svelma.. If you like Vue.js and Bulma, check it out.

# Features

- Extremely lightweight thanks to Svelte, a compile-only javascript framework. The bundle is `50K` minified, `14K` gzipped.
- Components can be used independently, so a modern tree-shaking bundler will reduce the final bundle size even further.
- Svelma does not bundle Bulma, so you are free to include it in your project however you wish, themes and all.

# Documentation

[See docs + demos site here](https://c0bra.github.io/svelma)

# Quick Start

### 1. Create a svelte app from the template

[https://github.com/sveltejs/template](sveltejs/template) is a template repo for svelte. [degit](https://www.npmjs.com/package/degit) will scaffold the repo for you:

    $ npx degit sveltejs/template my-svelma-project
    $ cd my-svelma-project
    $ npm install

_NOTE_: There are of course other ways to set up a project using svelte. This is just the quickest way to start.

### 2. Install svelma and dependencies via npm

Note that you'll need a CSS processing plugin for rollup so that you can import css files. Here we're using `rollup-plugin-postcss`. If you're going to use a
`<link>` tag in your HTML you can skip the plugin and the `import ... css` statement below in step #2

    $ npm install --save bulma svelma
    $ npm install node-sass svelte-preprocess rollup-plugin-postcss --save-dev

Add the postcss plugin to your rollup config (I don't think the order really matters):

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

<button type="is-primary">I'm a Button!</button>
```

### 4. Include [Font Awesome](https://fontawesome.com/) icons

From CDN in your HTML page:

```html
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"></link>
```

...or as an npm package imported into your root component:

    $ npm install --save @fortawesome/fontawesome-free

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

# Development

1. Clone this repo: `git clone https://github.com/c0bra/svelma.git`
2. Install dependencies:
   1. `npm i && (cd docs; npm i)`
   2. `npm install -g semantic-release-cli commitizen`
3. Start the automated build and automated docs: `npm run dev`
4. Open url that console prints in your browser

## Commit

    $ git cz

# Publish

_NOTE_: CI should publish new versions using `semantic-release` automatically

```bash
$ npm version <version>
$ npm publish
```

# License

Code released under MIT license.

Copyright &copy;, Brian Hann.
