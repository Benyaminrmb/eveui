const plugin = require('tailwindcss/plugin')
const tailwindColors = require("tailwindcss/colors")
const colors = require("./theming/index")
const theme = require("./theming/themes")
const p = require("./../package.json")


function mainFunction({ addUtilities, addComponents,theme}) {
    const components = require('../dist/styled')
    const utilities = require('../dist/utilities')
    console.log(`...EveUI init haha [${p.version}]...`)
    addUtilities(utilities)
    addComponents(components)
}
module.exports = require("tailwindcss/plugin")(mainFunction, {
    theme: {
        extend: {
            colors: {
                ...theme["theme-1"],
                // adding all Tailwind `neutral` shades here so they don't get overridden by daisyUI `neutral` color
                "aaaaaaaaaa": tailwindColors.red[500],
                "neutral-50": tailwindColors.neutral[50],
                "neutral-100": tailwindColors.neutral[100],
                "neutral-200": tailwindColors.neutral[200],
                "neutral-300": tailwindColors.neutral[300],
                "neutral-400": tailwindColors.neutral[400],
                "neutral-500": tailwindColors.neutral[500],
                "neutral-600": tailwindColors.neutral[600],
                "neutral-700": tailwindColors.neutral[700],
                "neutral-800": tailwindColors.neutral[800],
                "neutral-900": tailwindColors.neutral[900],
            },
        },
    },
})
