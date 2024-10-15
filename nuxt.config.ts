// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/public/',
  },

  devtools: { enabled: true },
  css: ['~/assets/css/main.css', '~/assets/css/font.css'],
  modules: ['nuxt-svgo'],
  router: {},
  svgo: {
    autoImportPath: './assets/img/icons',
  },

  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      titleTemplate: 'Assessment',
      meta: [
        { name: 'description', content: '-' },
        { property: 'og:site_name', content: 'Assessment' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  nitro: {
    output: {
      publicDir: '~/build',
    },
  },

  runtimeConfig: {},

  plugins: ['~/plugins/squircle.js'],

  compatibilityDate: '2024-07-18',
});
