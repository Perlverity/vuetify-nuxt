const buildTarget = process.env.BUILD_TARGET
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  dir: {
    layouts: buildTarget ? `layouts/${buildTarget}` : undefined,
    middleware: buildTarget ? `middleware/${buildTarget}` : undefined,
    pages: buildTarget ? `pages/${buildTarget}` : undefined,
  },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
