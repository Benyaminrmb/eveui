const tailwindColors = require("tailwindcss/colors")

const postcssJs = require("postcss-js")
const plugin = require("tailwindcss/plugin")


const mainFunction = ({ addBase, addComponents, config }) => {
    addBase({
        'h1':{
            '@apply text-2xl font-bold mb-6':{},
        }
    })

    addComponents({
        '.btn-primary2': {
            '@apply bg-blue-500 text-white font-bold py-2 px-4 rounded-full':{},
        },
        '.btn-secondary': {
            '@apply bg-gray-500 text-white font-bold py-2 px-4 rounded-full':{},
        },
        '.btn-outline': {
            '@apply bg-transparent text-blue-500 font-bold py-2 px-4 border border-blue-500 rounded-full':{},
        },
    })
    console.log('hey there')
}

module.exports = require("tailwindcss/plugin")(mainFunction, {

    theme: {
        extend: {
            colors: {
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
