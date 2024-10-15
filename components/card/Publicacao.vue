<template>
  <div
    class="card-publicacao flex flex-col justify-between bg-green-60 text-white squircle-8"
    :class="custom"
  >
    <!-- Foto  -->
    <div class="relative flex items-center justify-center">
      <div
        class="capa absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center"
      >
        <figure v-if="imagem" class="px-8 py-5 shadow-desiderata">
          <img
            :src="`${baseURL}img/${imagem}`"
            :alt="`${titulo}`"
            class="max-h-[200px]"
          />
        </figure>
      </div>

      <figure v-if="imagem" class="h-64 w-full overflow-clip rounded-t-3xl">
        <img
          :src="`${baseURL}img/${imagem}`"
          :alt="`${titulo}`"
          class="capafundo h-full w-full object-cover"
        />
      </figure>
      <div
        class="efeito absolute left-0 top-0 h-full w-full overflow-clip rounded-t-3xl"
      ></div>
      <div class="absolute left-0 top-0 z-20 flex h-full w-full gap-2 p-6"></div>
    </div>
    <!-- Infos -->
    <div class="infos flex flex-col justify-center gap-4 px-6 pb-6 pt-2">
      <div class="flex flex-row items-center gap-1">
        <uiLabel text="Publicação" link="#" custom="publicacao" />
        <div class="text-xs uppercase text-green-10">• {{ dia }}</div>
      </div>

      <div class="titulocard font-slab text-xl" v-if="titulo">
        {{ titulo }}
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center gap-1 text-sm text-green-10">
          {{ autor }}
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
      default: 'publicacao/publicacao1.jpg',
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
      default: 'Dez, 2023',
    },
    autor: {
      type: String,
      default: 'Por Instituto Desiderata',
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
.card-publicacao {
  @apply transition-all ease-out;
  .infos {
    @apply transition-all duration-300 ease-out;
  }
  .btn-link {
    @apply transition-all duration-300 ease-out md:opacity-0;
  }
  .capafundo {
    @apply transition-all duration-300 ease-out;
  }
  .titulocard {
    @apply transition-all duration-300 ease-out;
  }
  .efeito {
    background: linear-gradient(180deg, #042b6099 0%, #45a1ba40 25%, #45a1ba 60%);
    backdrop-filter: blur(8px);
  }
  .capa {
    @apply transition-all duration-300 ease-out;
  }
  &:hover {
    .btn-link {
      @apply opacity-100;
    }
    .infos {
      @apply -translate-y-2;
    }
    .capafundo {
      @apply scale-105;
    }
    .titulocard {
      @apply opacity-80;
    }
    .capa {
      @apply -rotate-[5deg];
    }
  }
}
</style>
