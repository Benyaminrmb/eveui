const colorNames = require("./colorNames")
const { colord, getFormat, extend } = require("colord")

module.exports = {
  injectThemes: function (addBase, config, themes, colorFunction) {
    const includedThemesObj = {}
    Object.entries(themes).forEach(([theme, value]) => {
      includedThemesObj[theme] = this.convertColorFormat(value, "hsl")
    })
    return {includedThemesObj}
  },
  convertColorFormat: function (input, colorFunction = "hsl") {
    if (typeof input !== "object" || input === null) {
      return input
    }

    const resultObj = {}

    Object.entries(input).forEach(([rule, value]) => {



      if (colorNames.hasOwnProperty(rule)) {
        const hslArray = colord(value).toHsl()
        resultObj[colorNames[rule]] = `${hslArray.h} ${hslArray.s}% ${hslArray.l}%`
      } else {
        resultObj[rule] = value
      }

    })
    return resultObj
  },
}