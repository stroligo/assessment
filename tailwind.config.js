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
        blue: '#0083CA',
        'blue-light': '#B1D6E4',
        'blue-dark': '#042B60',
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
        /*    teste: '4px 4px 4px rgba(230, 4, 4, 0.8)', */
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

    // Definindo o plugin squircle antes
    plugin(function ({ addUtilities, theme }) {
      const spacing = theme('spacing');
      const directions = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
      const utilities = {};

      // Função para converter rem para px
      const remToPx = (rem) => {
        const remValue = parseFloat(rem);
        return `${remValue * 16}px`;
      };

      /* Squircle - Default */
      // Gerar classes para squircle em todos os lados
      Object.keys(spacing).forEach((size) => {
        const value = spacing[size];
        const valueInPx = remToPx(value);
        utilities[`.squircle-${size}`] = {
          'mask-image': 'paint(squircle)',
          'border-radius': valueInPx,
          '--squircle-radius': valueInPx,
        };
      });
      // Gerar classes para squircle com direção específica
      directions.forEach((direction) => {
        Object.keys(spacing).forEach((size) => {
          const value = spacing[size];
          const valueInPx = remToPx(value);
          utilities[`.squircle-${direction}-${size}`] = {
            'mask-image': 'paint(squircle)',
            [`border-${direction}-radius`]: valueInPx,
            [`--squircle-radius-${direction}`]: valueInPx,
          };
        });
      });
      /* Squircle - Shadow */
      // Gerar classe para sombra drop-shadow específica
      Object.keys(spacing).forEach((size) => {
        const value = spacing[size];
        const valueInPx = remToPx(value);
        utilities[`.squircle-shadow-${size}`] = {
          background: 'paint(squircle)',
          ' --squircle-fill': '#fff',
          'border-radius': valueInPx,
          '--squircle-radius': valueInPx,
          filter: 'drop-shadow(0px 16px 38px rgba(115, 115, 115, 0.15))',
        };
      });
      // Gerar classes para sombra drop-shadow com direção específica
      directions.forEach((direction) => {
        Object.keys(spacing).forEach((size) => {
          const value = spacing[size];
          const valueInPx = remToPx(value);
          utilities[`.squircle-shadow-${direction}-${size}`] = {
            background: 'paint(squircle)',
            ' --squircle-fill': '#fff',
            [`border-${direction}-radius`]: valueInPx,
            [`--squircle-radius-${direction}`]: valueInPx,
            filter: 'drop-shadow(0px 16px 38px rgba(115, 115, 115, 0.15))',
          };
        });
      });

      // Adiciona classes para preenchimento de cor em caso de sombra
      const colors = theme('colors');
      // Cores do Tailwind
      Object.keys(colors).forEach((colorKey) => {
        if (typeof colors[colorKey] === 'string') {
          utilities[`.squircle-color-${colorKey}`] = {
            '--squircle-fill': colors[colorKey],
          };
        }
      });

      addUtilities(utilities, ['responsive', 'hover', 'focus', 'active']);
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
        ['responsive', 'hover', 'focus', 'active']
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
