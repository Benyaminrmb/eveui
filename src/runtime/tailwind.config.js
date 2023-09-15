const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    './src/runtime/**/*.{js,ts,vue}',
  ],
  plugins: [
    require(plugin(function ({addBase, theme}) {
      addBase({
        'h1':{
          color: theme('colors.red.800')
        }
      })
    })),
  ],
}
