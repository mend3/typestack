const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind')

module.exports = {
  presets: [require('./tailwind-workspace-preset.js')],
  content: [...createGlobPatternsForDependencies(__dirname)],
  darkMode: 'media', // or 'media' or 'class'
  plugins: [],
}
