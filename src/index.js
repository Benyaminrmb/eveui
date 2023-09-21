const plugin = require('tailwindcss/plugin')

const components = require('../dist/styled')
const utilities = require('../dist/utilities')
console.log('...EveUI init...')
const TailwindUiKitPlugin = plugin(
    function ({ addUtilities, addComponents }) {
        addUtilities(utilities)
        addComponents(components)
    },
)

module.exports = TailwindUiKitPlugin