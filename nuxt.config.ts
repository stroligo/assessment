// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // CSS
  css: ['~/assets/css/main.css', '~/assets/css/font.css'],

  // Módulos e plugins
  modules: ['@nuxt/image', 'nuxt-svgo'],
  image: {
    domains: ['localhost', 'assessment-rouge.vercel.app'], // Adicione domínios conforme necessário
  },
  svgo: {
    autoImportPath: './assets/img/icons',
  },

  // PostCSS e Tailwind
  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // Head e Metatags
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

  runtimeConfig: {},

  // Compatibilidade
  compatibilityDate: '2024-07-18',
});
