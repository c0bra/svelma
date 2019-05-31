import path from 'path'
import alias from 'rollup-plugin-alias'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import svelte from 'rollup-plugin-svelte'
import { sass } from 'svelte-preprocess-sass';
import { terser } from 'rollup-plugin-terser'
import config from 'sapper/config/rollup.js'
import pkg from './package.json'

const mode = process.env.NODE_ENV
const dev = mode === 'development'
const legacy = !!process.env.SAPPER_LEGACY_BUILD

export default {
  client: {
    input: config.client.input(),
    output: config.client.output(),
    plugins: [
      replace({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
      alias({
        resolve: ['.js', '.mjs', '.html', '.svelte'],
        '~': path.join(__dirname, '../src'),
        svelma: '../src/index.js',
      }),
      svelte({
        dev,
        hydratable: true,
        emitCss: true,
        preprocess: {
          style: sass(),
        },
      }),
      resolve(),
      commonjs(),
      json(),

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

      // {
      //   name: 'jsdocs',
      //   async generateBundle(opts, bundle) {
      //     console.log('bundle', bundle)
      //   },
      // }
    ],
  },

  server: {
    input: config.server.input(),
    output: config.server.output(),
    plugins: [
      replace({
        'process.browser': false,
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
      alias({
        resolve: ['.js', '.mjs', '.html', '.svelte'],
        '~': path.join(__dirname, '../src'),
        svelma: '../src/index.js',
      }),
      svelte({
        generate: 'ssr',
        dev,
        preprocess: {
          style: sass(),
        },
      }),
      resolve(),
      commonjs(),
      json(),
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
