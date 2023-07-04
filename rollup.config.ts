import path from 'node:path'
import { defineConfig } from 'rollup'
import dts from 'rollup-plugin-dts'
import typescript from '@rollup/plugin-typescript'

export default defineConfig([
  {
    input: './src/index.ts',
    output: [
      {
        file: path.resolve('./dist/index.cjs'),
        format: 'cjs',
      },
      {
        file: path.resolve('./dist/index.mjs'),
        format: 'es',
      },
    ],
    plugins: [typescript()],
  },
  {
    input: './src/index.ts',
    plugins: [dts()],
    output: {
      format: 'esm',
      file: 'dist/index.d.ts',
    },
  },
])
