// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Global page headers: https://go.nuxtjs.dev/config-head
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/scss/reset.scss"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "nuxt-electron",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
    "@nuxt/image",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
  ],

  imports: {
    dirs: ["stores"],
  },

  devtools: { enabled: true },
  electron: {
    build: [
      {
        // Main-Process entry file of the Electron App.
        entry: "electron/main.ts",
      },
    ],
  },

  googleFonts: {
    display: "swap",
    families: {
      Montserrat: true,
    },
  },
  //nuxtIcon: {},
  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
    },
    // domains allow to be used in nuxt-img
    domains: [""],
  },

  // fix app crash
  experimental: {
    appManifest: false,
  },
});
