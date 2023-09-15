import { defineNuxtPlugin } from '#app'
import plugin from 'tailwindcss/plugin';

export default defineNuxtPlugin((nuxtApp) => {

  module.exports = plugin('myModule', ({ addComponents }) => {
    addComponents({
      '.btn-primary': {
        '@apply': 'py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75;',
      },
    });
  });
})
