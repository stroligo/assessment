// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Remove o baseURL ou deixe no padrão '/' para evitar confusões
  app: {
    baseURL: '/', // ou remova completamente se não for necessário
  },

  devtools: { enabled: true },

  // CSS
  css: ['~/assets/css/main.css', '~/assets/css/font.css'],

  // Módulos e plugins
  modules: ['nuxt-svgo'],
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

  // Nitro output - recomenda-se usar o diretório padrão 'dist' ou 'public'
  nitro: {
    output: {
      publicDir: 'dist', // Altere para o padrão ou remova esta configuração
    },
  },

  // Runtime config
  runtimeConfig: {},

  // Plugins
  plugins: ['~/plugins/squircle.js'],

  // Compatibilidade
  compatibilityDate: '2024-07-18',
});
