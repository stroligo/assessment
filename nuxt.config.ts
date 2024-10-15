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
    baseURL: process.env.NODE_ENV === 'development' ? '/' : '/',
    head: {
      titleTemplate: '%s - Desiderata',
      meta: [
        { name: 'description', content: '-' },
        { property: 'og:site_name', content: 'Desiderata' },
        { property: 'og:image', content: '/compartilhamento.jpg' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  nitro: {
    output: {
      publicDir: '~/build',
    },
  },

  runtimeConfig: {
    public: {
      baseUrl: process.env.NODE_ENV === 'development' ? '/' : '/',
    },
  },

  plugins: ['~/plugins/splide.js', '~/plugins/squircle.js'],

  compatibilityDate: '2024-07-18',
});
