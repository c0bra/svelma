import path from 'path'
import alias from 'rollup-plugin-alias'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import svelte from 'rollup-plugin-svelte'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

const production = !process.env.ROLLUP_WATCH

const { name } = pkg

function customResolve() {
  return {
    name: 'customResolve',
    resolveId(source) {
      if (source.indexOf('~') === 0) return { id: source.replace('~', `${__dirname}/src/`) }

      return null // other ids should be handled as usually
    },
  }
}

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
      name,
    },
    {
      file: pkg.main,
      format: 'umd',
      sourcemap: true,
      name,
    },
  ],
  plugins: [
    alias({
      resolve: ['.js', '.mjs', '.html', '.svelte'],
      '~': path.join(__dirname, './src'),
    }),
    svelte({
      // enable run-time checks when not in production
      dev: !production,
      // generate: production ? 'dom' : 'ssr',
      hydratable: true,
    }),

    resolve(),
    commonjs(),

    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
}
