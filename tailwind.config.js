/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  // Definindo onde o Tailwind deve procurar por classes CSS
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#45A1BA',
        white: '#fff',
        black: '#000',
        beige: '#FFFBDC',
        yellow: '#FFD500',
        'yellow-20': '#FFEF8A',
        'yellow-50': '#FABB00',
        orange: '#F7A600', // USADA
        gray: '#878787', // USADA
        'gray-5': '#F0F0F0',
        'gray-10': '#F6F6F6', // USADA
        'gray-20': '#DADADA',
        'gray-70': '#737373', // USADA
        'gray-80': '#575756',
        'gray-90': '#40403F', // USADA
        blue: '#0083CA', // USADA
        'blue-light': '#B1D6E4', // USADA
        'blue-dark': '#042B60', // USADA
        teal: '#3C8BA0', // USADA
        'blue-5': '#DCF2FE',
        'blue-20': '#97D9FC',
        'blue-70': '#0068B2',
        'green-5': '#E4F1F6', // USADA
        'green-10': '#CEE5EE', // USADA
        'green-60': '#45A1BA', // USADA
      },
      fontFamily: {
        sans: ['BreveSans', 'sans-serif'],
        slab: ['BreveSlab', 'serif'],
      },
      spacing: {
        15: '3.75rem',
        '8xl': '3.75rem',
        '9xl': '4.75rem',
      },
      borderWidth: {
        1.5: '1.5px',
      },
      boxShadow: {
        none: 'none',
        default: '0px 16px 32px  rgba(3, 29, 64, 0.15)',
      },
      dropShadow: {
        default: '6px 6px 0px 0px #000',
      },

      borderRadius: {
        desiderata: '3rem',
        btn: '2rem',
      },
    },
    // Configuração padrão de sombra
    boxShadow: {
      none: 'none',
      desiderata: '0px 16px 32px -32px rgba(3, 29, 64, 0.15)',
    },
    // Configuração padrão de drop shadow
    dropShadow: {
      desiderata: '0px 16px 32px -32px rgba(3, 29, 64, 0.15)',
      DEFAULT: '6px 6px  #000',
    },
  },

  // Plugins Personalizados
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms')({
      strategy: 'base', // Estilos gerais
    }),

    // Utilitários Basicos e Drop Shadow Teste depois
    function ({ addUtilities, addComponents }) {
      addUtilities(
        {
          '.font-sans': {
            fontFamily: 'BreveSans, serif',
            fontWeight: '400',
          },
          '.nuxticon': {
            marginBottom: '30px !important',
          },
        },
        ['responsive', 'hover', 'focus', 'active'],
      );
      addComponents({
        '.t2': {
          '@apply text-4xl md:text-6xl': {},
        },
        '.t3': {
          '@apply text-3xl md:text-5xl': {},
        },
        '.t4': {
          '@apply text-2xl md:text-3xl': {},
        },
        '.t5': {
          '@apply text-2xl md:text-3xl': {},
        },
        '.t6': {
          '@apply text-lg md:text-xl': {},
        },
      });
    },
  ],

  /* Carrega mesmo que não esteja sendo usado */
  safelist: [],
};
