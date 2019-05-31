const fs = require('fs')
const { groupBy, mapKeys, mapValues, omit, pick } = require('lodash')

const colorStr = ['is-white', 'is-black', 'is-light', 'is-dark', 'is-primary', 'is-info', 'is-success', 'is-warning', 'is-danger']
  .map(c => `<code>${c}</code>`)
  .join(', ')

/**
 * Publish hook for the JSDoc template.  Writes to JSON stdout.
 * @param {function} data The root of the Taffy DB containing doclet records.
 * @param {Object} opts Options.
 */
exports.publish = function(data, opts) {
  let docs = data()
    .get()
    .filter(function(doc) {
      return !doc.undocumented
    })

  docs = groupBy(docs, s => s.memberof || s.longname)
  
  delete docs['package:undefined']
  docs = mapKeys(docs, (v, k) => k.replace(/^module:/, ''))
  docs = mapValues(docs, cs => cs.map(c => omit(c, ['comment', '___id', 'meta.code'])))
  docs = mapValues(docs, cs => cs.filter(x => x.kind !== 'module'))
  docs = mapValues(docs, cs => cs.map(c => {
    if (c.values) c.values = c.values.replace(/\$\$colors\$\$/, colorStr)

    return c
  }))

  fs.writeFileSync(opts.destination, JSON.stringify(docs, null, 2))
}
