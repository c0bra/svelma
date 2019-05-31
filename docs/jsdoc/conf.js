const { resolve } = require('path')

const root = resolve(__dirname, '../..')

module.exports = {
  opts: {
    recurse: true,
    template: './template',
    destination: resolve(root, 'docs/src/routes/components/jsdocs.json'),
  },
  source: {
    include: [resolve(root, 'src/components')],
    includePattern: '.+\\.svelte$', // (js(doc|x)?
  },
  plugins: ['plugins/svelte.js'],
}
