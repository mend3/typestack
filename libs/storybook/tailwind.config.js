const { join } = require('path')
const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind')

module.exports = {
  presets: [require('../../tailwind-workspace-preset.js')],
  content: [...createGlobPatternsForDependencies(__dirname), join(__dirname, './src/**/*.{js,ts,jsx,tsx}')],
  darkMode: 'media', // or 'media' or 'class'
  plugins: [],
}
