import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: true,
  external: [
    'react', 
    'react-dom', 
    'react/jsx-runtime',
    'tailwindcss'
  ],
  esbuildOptions(options) {
    options.jsx = 'automatic'
    options.jsxImportSource = 'react'
  },
  banner: {
    js: '"use client";',
  },
  treeshake: true,
  target: 'es2018',
  outDir: 'dist'
})