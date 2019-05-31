// JSDoc plugin for Svelte
const { basename, join, relative,resolve } = require('path')
const svelte = require('svelte/compiler')

const scriptLines = {}

function seekScriptLine(source, filename) {
  // eslint-disable-next-line no-restricted-syntax
  for (const [i, line] of source.split(/\r?\n/).entries()) {
    if (line.trim() === '') {
      continue;
    }

    if (/<script[^>]*>/.test(line)) {
      return i - 1;
    }
  }

  return 0;
}

exports.defineTags = function(dictionary) {
  dictionary.defineTag('svelte-prop', {
    canHaveType: true,
    canHaveName: true,
    onTagged: function(doclet, tag) {
      if (tag.value) {
        Object.assign(doclet, tag.value)
        if (tag.value.type) doclet.type = tag.value.type.names
      };

      doclet._isSvelteDoc = true;
      // doclet._svelteProps = doclet._svelteProps || []
      // doclet._svelteProps.push(tag.value || {})
      doclet._svelteProps = tag.value
      doclet.kind = 'prop'
    }
  });

  dictionary.defineTag('values', {
    onTagged: function(doclet, tag) {
      doclet.values = tag.value
    }
  });
};

exports.handlers = {
  beforeParse: function(e) {
    if (!/\.svelte$/.test(e.filename)) return

    scriptLines[e.filename] = seekScriptLine(e.source, e.filename);

    let source
    svelte.preprocess(e.source, {
      script({ content, filename }) {
        source = content

        return { content, filename }
      },
    });

    const componentName = basename(e.filename, '.svelte');

    e.source = `/** @module ${componentName}
*/
${source}`
  },

  newDoclet(e) {
    const fullPath = join(e.doclet.meta.path, e.doclet.meta.filename);

    const root =  resolve(__dirname, '../../..')
    e.doclet.meta.path = relative(root, e.doclet.meta.path)

    if (/\.svelte$/.test(e.doclet.meta.filename)) {
      e.doclet.meta.lineno += scriptLines[fullPath]
    }
  },
};