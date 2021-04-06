import autoPreprocess from 'svelte-preprocess'
import bundleSize from 'rollup-plugin-bundle-size'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import svelte from 'rollup-plugin-svelte'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'
import css from 'rollup-plugin-css-only'

const production = !process.env.ROLLUP_WATCH

const { name } = pkg

export default {
	input: 'src/index.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: name,
		file: 'public/build/bundle.js'
	},
  plugins: [
    css({ output: 'bundle.css' }),
    svelte({
      // enable run-time checks when not in production
			compilerOptions: {
				hydratable: true,
				dev: !production,
      },
      preprocess: autoPreprocess({
        postcss: {
          plugins: [require('autoprefixer')()],
        },
      })
    }),

    resolve(),
    commonjs(),

    production && terser(),

    // production && analyze(),
    production && bundleSize(),
  ],
  watch: {
    clearScreen: false,
  },
}
