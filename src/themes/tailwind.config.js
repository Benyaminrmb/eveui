module.exports = {
  content: [{ raw: "" }],
  experimental: {
    optimizeUniversalDefaults: true,
  },
  corePlugins: {
    preflight: false,
  },
  eveui: {
    base: false,
    themes: true,
  },
  plugins: [require("../index")],
}
