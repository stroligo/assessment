<template>
  <div
    class="card-atualizacoes flex min-h-[550px] flex-col justify-end bg-blue text-white squircle-8"
    :class="custom"
  >
    <!-- Infos -->
    <div class="infos flex flex-col justify-center gap-4 px-6 pb-6 pt-2">
      <div class="flex flex-row items-center gap-1">
        <uiLabel text="Projeto" link="#" custom="atualizacoes" />
      </div>

      <div class="titulocard" v-if="titulo">
        {{ titulo }}
      </div>
    </div>

    <div class="absolute left-0 top-0 -z-10 h-full w-full">
      <figure v-if="imagem" class="h-full w-full overflow-clip rounded-t-3xl">
        <img
          :src="`${baseURL}img/${imagem}`"
          :alt="`${titulo}`"
          class="capafundo h-full object-cover"
        />
      </figure>
      <span
        class="efeito absolute left-0 top-0 h-full w-full overflow-clip rounded-t-3xl"
      ></span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    imagem: {
      type: String,
      default: 'fotos/atualizacoes1.png',
    },
    titulo: {
      type: String,
      default: '',
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
.card-atualizacoes {
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
    @apply font-slab text-2xl font-normal text-white transition-all duration-300  ease-out md:text-3xl;
  }
  .efeito {
    background: radial-gradient(
        115.99% 142.02% at 101.2% 99.63%,
        rgba(255, 213, 0, 0.25) 0%,
        rgba(255, 213, 0, 0) 60.05%
      ),
      linear-gradient(180deg, rgba(1, 116, 178, 0) 50%, rgba(1, 116, 178, 0.95) 70%);
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
