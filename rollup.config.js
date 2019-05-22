import svelte from "rollup-plugin-svelte";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import pkg from './package.json';

const production = ~(process.env.NODE_ENV || '').indexOf('prod');

const name = pkg.name
	.replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
	.replace(/^\w/, m => m.toUpperCase())
  .replace(/-\w/g, m => m[1].toUpperCase());

export default {
  input: "src/main.js",
  output: [
    {
      file: pkg.module,
      format: "es",
      sourcemap: true,
      name,
    },
    {
      file: pkg.main,
      format: "umd",
      sourcemap: true,
      name,
    }
  ],
  plugins: [
    svelte({
      // enable run-time checks when not in production
      dev: !production,
    }),

    resolve(),
    commonjs(),

    production && terser()
  ]
};
