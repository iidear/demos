import typescript from 'rollup-plugin-typescript2'

export default {
  input: './index',
  output: {
    file: 'dist/build.js',
    format: 'iife',
    name: 'Mvvm'
  },
  plugins: [
    typescript()
  ]
}
