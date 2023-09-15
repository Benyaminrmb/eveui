import { defineNuxtModule, createResolver, installModule } from '@nuxt/kit'
import {ModuleOptions} from "./runtime/module";

export default defineNuxtModule<ModuleOptions>({
  meta: {
    // Usually the npm package name of your module
    name: 'random-number-generator-rmb',
    // The key in `nuxt.config` that holds your module options
    configKey: 'random-number-generator-rmb',

  },
  async setup (options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    // We can inject our CSS file which includes Tailwind's directives
    nuxt.options.css.push(resolve('./runtime/assets/styles.css'))

    await installModule('@nuxtjs/tailwindcss', {
      // module configuration
      exposeConfig: true,
      config: {
        darkMode: 'class',
        content: {
          files: [
            resolve('./runtime/components/**/*.{vue,mjs,ts}'),
            resolve('./runtime/*.{mjs,js,ts}')
          ]
        }
      }
    })
  }
})
