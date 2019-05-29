import { dirname } from 'path'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
// import sass from 'node-sass'
import svelte from 'rollup-plugin-svelte'
import { sass } from 'svelte-preprocess-sass';
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

const production = !process.env.ROLLUP_WATCH

const { name } = pkg

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
    svelte({
      // enable run-time checks when not in production
      dev: !production,
      // generate: production ? 'dom' : 'ssr',
      hydratable: true,

      preprocess: {
        style: sass(),
        // style: async ({ content, attributes, filename }) => {
        //   // only process <style lang="sass">
        //   if (attributes.lang !== 'sass') return;
      
        //   const { css, stats } = await new Promise((resolve, reject) => sass.render({
        //     file: filename,
        //     data: content,
        //     includePaths: [
        //       dirname(filename),
        //     ],
        //   }, (err, result) => {
        //     if (err) reject(err);
        //     else resolve(result);
        //   }));

        //   console.log('CSS', css.toString());
      
        //   return {
        //     code: css.toString(),
        //     dependencies: stats.includedFiles
        //   };
        // }
      },
    }),

    resolve(),
    commonjs(),

    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
}
