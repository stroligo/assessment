<template>
  <div class="card-noticia flex flex-col justify-between" :class="custom">
    <!-- Foto  -->
    <div class="relative flex items-center justify-center">
      <figure v-if="imagem" class="h-64 w-full overflow-clip squircle-8">
        <img
          :src="`${baseURL}img/${imagem}`"
          :alt="`${titulo}`"
          class="h-full w-full object-cover"
        />
      </figure>
    </div>
    <!-- Infos -->
    <div class="infos flex flex-col justify-center gap-4 px-2 pb-4 pt-6">
      <div class="flex flex-row items-center gap-1">
        <uiLabel text="Notícias" link="#" custom="noticia" />
        <div class="text-xs uppercase text-green-60">• {{ dia }}</div>
      </div>

      <div class="titulocard font-slab text-xl text-blue-dark" v-if="titulo">
        {{ titulo }}
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center gap-1 text-gray">
          <span><SvgoTimer filled /></span><span class="text-sm">{{ hora }}</span>
        </div>
        <!-- Botao avançar -->
        <div v-if="btniconlink" class="btn-link">
          <uiIcon custom="primary small" :link="btniconlink">
            <SvgoArrowright />
          </uiIcon>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    imagem: {
      type: String,
      default: 'noticias/noticia1.jpg',
    },
    titulo: {
      type: String,
      default:
        'Inciativa de diagnóstico precoce do câncer infantojuvenil avança em Pernambuco',
    },
    btniconlink: {
      type: String,
      default: '#',
    },
    dia: {
      type: String,
      default: '20 dez, 2023',
    },
    hora: {
      type: String,
      default: '5 min',
    },
    categoria: {
      type: Array,
      default: () => ['cancer', 'obesidade', 'institucional'],
    },

    custom: {
      type: String,
      default: '',
    },
  },

  computed: {
    baseURL() {
      return this.$config.public.baseUrl;
    },
  },
};
</script>
<style scoped>
.card-noticia {
  @apply transition-all ease-out;
  .infos {
    @apply transition-all duration-300 ease-out;
  }
  .btn-link {
    @apply transition-all duration-300 ease-out md:opacity-0;
  }
  img {
    @apply transition-all duration-300 ease-out;
  }
  .titulocard {
    @apply transition-all duration-300 ease-out;
  }
  &:hover {
    .btn-link {
      @apply opacity-100;
    }
    .infos {
      @apply -translate-y-2;
    }
    img {
      @apply scale-105;
    }
    .titulocard {
      @apply text-green-60;
    }
  }
}
</style>
