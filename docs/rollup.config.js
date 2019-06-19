import path from 'path'
import { promisify } from 'util'
import { exec as execRaw } from 'child_process'
import alias from 'rollup-plugin-alias'
import autoPreprocess from 'svelte-preprocess'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import svelte from 'rollup-plugin-svelte'
import { terser } from 'rollup-plugin-terser'
import config from 'sapper/config/rollup.js'
import pkg from './package.json'

const exec = promisify(execRaw)
const mode = process.env.NODE_ENV
const dev = mode === 'development'
const legacy = !!process.env.SAPPER_LEGACY_BUILD

export default {
  client: {
    watch: { chokidar: true },
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
      // scss(),
      svelte({
        dev,
        hydratable: true,
        emitCss: true,
        preprocess: autoPreprocess({
          postcss: {
            plugins: [require('autoprefixer')()],
          },
        })
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

      {
        name: 'jsdocs',
        async generateBundle(opts, bundle) {
          return await exec('npx jsdoc -c jsdoc/conf.js')
        },
      },
    ],
  },

  server: {
    watch: { chokidar: true },
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
      // scss(),
      svelte({
        generate: 'ssr',
        dev,
        preprocess: autoPreprocess({
          postcss: {
            plugins: [require('autoprefixer')()],
          },
        })
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
    watch: { chokidar: true },
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
