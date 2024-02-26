// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-electron', '@nuxtjs/google-fonts', 'nuxt-icon', '@nuxt/image', '@pinia/nuxt',],
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
