# Svelma
> Svelma is a set of UI components for [Svelte](https://svelte.dev) based on the [Bulma](http://bulma.io) CSS framework.

<a href="https://www.npmjs.com/package/buefy"><img src="https://img.shields.io/npm/v/svelma.svg" /></a>
<a href="https://www.npmjs.com/package/svelma"><img src="https://img.shields.io/npm/l/svelma.svg" /></a>
<a href="https://bundlephobia.com/result?p=svelma"><img src="https://badgen.net/bundlephobia/minzip/svelma"></a>
<!-- <a href="https://circleci.com/gh/c0bra/svelma"><img src="https://img.shields.io/circleci/project/c0bra/svelma/svelma.svg?style=flat-square" /></a> -->
<!-- <a href="https://codecov.io/gh/svelma/svelma"><img src="https://img.shields.io/codecov/c/github/svelma/svelma.svg?style=flat-square" /></a> -->

# Inspiration

Much thanks to the [Buefy](https://buefy.org) project! It provided the inspiration and lots of code examples for Svelma.. If you like Vue.js and Bulma, check it out.

# Features

* Extremely lightweight thanks to Svelte, a compile-only javascript framework. The bundle is `50K` minified, `14K` gzipped.
* Components can be used independently, so a modern tree-shaking bundler will reduce the final bundle size even further.
* Svelma does not bundle Bulma, so you are free to include it in your project however you wish, themes and all.

# Documentation

Demos and docs live together as a [Sapper](https://sapper.svelte.dev) site.

[Check out the docs here](https://c0bra.github.io/svelma)

# Quick Start

### 1 Install via npm

    $ npm install --save bulma svelma

### 2 Import Bulma's CSS and Svelma components

```html
<!-- App.svelte -->
<script>
  import 'bulma/css/bulma.css'
  import { Button } from 'svelma'
</script>

<Button type="primary">I'm a Button!</Button>
```

### 3 Include [Font Awesome](https://fontawesome.com/) icons

CDN in your HTML page:

```html
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/   all.css"></link>
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

# Development

1. Clone this repo: `git clone https://github.com/c0bra/svelma.git`
2. Install dependencies: `npm i && (cd docs; npm i)`
3. Start the automated build and automated docs: `npm run dev`
4. Open url that console prints in your browser

# License

Code released under MIT license.

Copyright &copy;, Brian Hann.