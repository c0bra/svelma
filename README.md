# Svelma

> Svelma is a set of UI components for [Svelte](https://svelte.dev) based on the [Bulma](http://bulma.io) CSS framework.

<a href="https://www.npmjs.com/package/svelma"><img src="https://img.shields.io/npm/v/svelma.svg" /></a>
<a href="https://www.npmjs.com/package/svelma"><img src="https://img.shields.io/npm/l/svelma.svg" /></a>
<a href="https://bundlephobia.com/result?p=svelma"><img src="https://badgen.net/bundlephobia/minzip/svelma"></a>
<a href="https://travis-ci.com/c0bra/svelma"><img src="https://travis-ci.com/c0bra/svelma.svg?branch=master"></a>


[Change Log](CHANGELOG.md)



# Documentation

[See docs + demos site here](https://docs-abbychau.vercel.app/svelma)

# Quick Start

### 1. Import svelma and dependencies via npm to your project

```bash
$ npm install --save-dev svelma @fortawesome/fontawesome-free bulma
```

### 2. Import CSS dependencies

From CDN in your HTML page:

```html
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" />
```

```html
<!-- App.svelte -->
<script>
  import 'bulma/css/bulma.css'
  import '@fortawesome/fontawesome-free/css/all.css'
  import { Button } from 'svelma'
</script>

<Button type="is-primary">I'm a Button!</Button>
```

### SSR

If you are doing server-side rendering with [SvelteKit](https://kit.svelte.dev/)). You'll need to import the .svelte files directly so that your app can compile them, rather than importing from the compiled module.

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