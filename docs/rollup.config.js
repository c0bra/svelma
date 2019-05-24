import path from 'path'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import svelte from 'rollup-plugin-svelte'
import { terser } from 'rollup-plugin-terser'
import config from 'sapper/config/rollup.js'
import pkg from './package.json'

const mode = process.env.NODE_ENV
const dev = mode === 'development'
const legacy = !!process.env.SAPPER_LEGACY_BUILD

function resolveSvelma() {
  return {
    name: 'resolveSvelma',
    resolveId(source) {
      if (dev && source === 'svelma') {
        console.log('SOURCE', source, `${__dirname}/../src/main.js`)
        return { id: `${__dirname}/../src/main.js` }
      }
      if (dev && source.indexOf('svelma') === 0) {
        console.log('SOURCEY', source, source.replace('svelma', `${__dirname}/../src/`))
        return { id: source.replace('svelma', `${__dirname}/../src/`) }
      }
      if (source.indexOf('~') === 0) return { id: source.replace('~', `${__dirname}/../src/`) }

      return null // other ids should be handled as usually
    },
  }
}

export default {
  client: {
    input: config.client.input(),
    output: config.client.output(),
    plugins: [
      replace({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode),
        SVELMA: dev ? path.resolve(__dirname, '../dist/module.js') : 'svelma',
      }),
      // resolveSvelma(),
      svelte({
        dev,
        hydratable: true,
        emitCss: true,
      }),
      resolve(),
      commonjs(),

      legacy &&
        babel({
          extensions: ['.js', '.mjs', '.html', '.svelte'],
          runtimeHelpers: true,
          exclude: ['node_modules/@babel/**'],
          presets: [
            [
              '@babel/preset-env',
              {
                targets: '> 0.25%, not dead',
              },
            ],
          ],
          plugins: [
            '@babel/plugin-syntax-dynamic-import',
            [
              '@babel/plugin-transform-runtime',
              {
                useESModules: true,
              },
            ],
          ],
        }),

      !dev &&
        terser({
          module: true,
        }),
    ],
  },

  server: {
    input: config.server.input(),
    output: config.server.output(),
    plugins: [
      replace({
        'process.browser': false,
        'process.env.NODE_ENV': JSON.stringify(mode),
        SVELMA: dev ? path.resolve(__dirname, '../dist/module.js') : 'svelma',
      }),
      svelte({
        generate: 'ssr',
        dev,
      }),
      resolve(),
      commonjs(),
    ],
    external: Object.keys(pkg.dependencies).concat(
      require('module').builtinModules || Object.keys(process.binding('natives'))
    ),
  },

  serviceworker: {
    input: config.serviceworker.input(),
    output: config.serviceworker.output(),
    plugins: [
      resolve(),
      replace({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
      commonjs(),
      !dev && terser(),
    ],
  },
}
