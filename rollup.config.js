import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default {
  input: './src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'esm'
    },
  ],
  plugins: [
    babel({
      exclude: "node_modules/**",
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    }),
    resolve(),
    typescript(),
    commonjs(),
  ],
  external: id => /^react|styled-jsx/.test(id)
}