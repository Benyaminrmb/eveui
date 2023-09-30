const plugin = require("tailwindcss/plugin")
const responsiveRegex = require("../lib/responsiveRegex")
module.exports = {
  content: [{ raw: "" }],
  safelist: responsiveRegex,
  theme: {
    colors: require("../theming"),
  },
  corePlugins: [
    "animation",
    "backgroundColor",
    "backgroundImage",
    "borderColor",
    "divideColor",
    "gradientColorStops",
    "placeholderColor",
    "preflight",
    "ringColor",
    "ringOffsetColor",
    "ringOffsetWidth",
    "ringWidth",
    "textColor",
    "transitionProperty",
    "stroke",
  ],
  plugins: [
    plugin(function ({ addBase, addUtilities, addComponents, matchUtilities, theme }) {
      // addBase(require("../../dist/base"))
      addComponents(require("../../dist/styled"))


    }),
  ],
}
