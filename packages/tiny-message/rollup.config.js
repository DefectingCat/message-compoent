import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postCSS from 'rollup-plugin-postcss';

import pkg from './package.json';

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  external: [...Object.keys((pkg.peerDependencies && pkg.dependencies) || {})],
  plugins: [
    nodeResolve(),
    commonjs(),
    typescript({
      typescript: require('typescript'),
    }),
    postCSS({
      config: {
        path: './postcss.config.js',
      },
      extensions: ['css'],
    }),
    postCSS({
      config: {
        path: './postcss.config.js',
      },
      plugins: [
        require('autoprefixer'),
        require('tailwindcss')('./tailwind.config.js'),
      ],
    }),
  ],
};
