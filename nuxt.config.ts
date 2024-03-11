// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  app: {
    head: {
      title: '',
      titleTemplate: '%s',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/reset.scss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-electron', 
    '@nuxtjs/google-fonts', 
    'nuxt-icon', 
    '@nuxt/image', 
    '@pinia/nuxt',
    '@nuxt/ui'
  ],

  devtools: { enabled: true },
  electron: {
    build: [
      {
        // Main-Process entry file of the Electron App.
        entry: 'electron/main.ts',
      },
    ],
  },
  googleFonts: {
    display: 'swap',
    families: {
      Montserrat: true,
    }
  },
  //nuxtIcon: {},
  image: {},
  
})

