<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { ref } from 'vue';
import { useHead } from '#imports';

const title = ref('Instituto Desiderata');

useHead({
  title: title,
  htmlAttrs: {
    lang: 'pt-br',
  },
  meta: [
    {
      name: 'description',
      content:
        'O Instituto Desiderata é uma OSCIP focada, desde 2003, na melhoria da saúde pública infantojuvenil no Rio de Janeiro. Trabalhamos na prevenção, diagnóstico precoce e tratamento de câncer e outras doenças crônicas não transmissíveis e fatores de risco, como a obesidade infantojuvenil.',
    },
    {
      property: 'og:image',
      content: 'compartilhamento.jpg',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico', // Caminho absoluto para o favicon
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: 'true',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap',
    },
  ],
});
</script>

<script>
export default {
  computed: {
    displayedCards() {
      return this.showAll ? this.cards : this.cards.slice(0, 6);
    },
  },
};
</script>
