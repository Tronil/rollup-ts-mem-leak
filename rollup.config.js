import typescript from '@rollup/plugin-typescript';

export default {
  input: "src/index.ts",
  output: {
    file: 'bundle.test.js',
    format: 'esm',
    sourcemap: true
  },
  perf: true,
  watch: {
    clearScreen: false
  },
  plugins: [
    typescript()
  ]
};