// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', '~/assets/css/font.css'],
  modules: ['@nuxt/image', 'nuxt-svgo'],
  router: {},
  svgo: {
    autoImportPath: './assets/img/icons',
  },

  image: {
    inject: true,
    format: ['webp'],
    provider: 'static',
    static: {
      baseURL: '/assets/img/',
    },
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
