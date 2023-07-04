import { defineConfig } from 'rollup'
import path from 'node:path'
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

export default defineConfig([
  {
    input: './src/index.ts',
    output: [
      {
        file: path.resolve('./dist/index.cjs'),
        format: "cjs"
      },
      {
        file: path.resolve('./dist/index.mjs'),
        format: "es"
      }
    ],
    plugins: [typescript()]
  },
  {
    input: './src/index.ts',
    plugins: [dts()],
    output: {
      format: 'esm',
      file: 'dist/index.d.ts',
    }
  }
])
