<template>
  <div class="flex h-full flex-col gap-6 px-2 py-4 md:px-0 md:py-0">
    <!-- Header -->
    <div class="flex flex-col gap-2">
      <div class="text-primary text-lg font-bold leading-none md:text-xl">
        {{ titulo }}
      </div>

      <!-- Acesso ao Modal -->
      <div class="flex">
        <InteractionControlModal
          :showSobreIndicador="showSobreIndicador"
          :showComoCitar="showComoCitar"
          :showNotaAcao="showNotaAcao"
          :showLegislacao="showLegislacao"
        />
      </div>
    </div>

    <!-- Grafico -->
    <div class="flex h-full flex-1 flex-col justify-between gap-6">
      <div>
        <div class="pb-1 font-bold text-black" v-if="diagnostico">{{ diagnostico }}</div>
        <slot />
      </div>

      <div class="legenda" v-if="!destaque">
        <div
          v-for="(legenda, index) in legendas"
          :key="index"
          class="item"
          :class="legenda.cor"
        >
          <span class="circle"></span>
          <span class="texto">{{ legenda.texto }}</span>
          <span class="valor">{{ legenda.valor }}%</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titulo: {
      type: String,
      required: true,
    },
    diagnostico: {
      type: String,
      required: true,
    },
    legendas: {
      type: Array,
      required: true,
    },
    destaque: {
      type: Boolean,
      default: false,
    },
    showSobreIndicador: {
      type: Boolean,
      default: false,
    },
    showComoCitar: {
      type: Boolean,
      default: false,
    },
    showNotaAcao: {
      type: Boolean,
      default: false,
    },
    showLegislacao: {
      type: Boolean,
      default: false,
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
.legenda {
  @apply flex  flex-col gap-4 text-xs text-gray md:text-sm;
  .item {
    @apply flex items-center gap-2;
    .circle {
      @apply bg-primary h-3 w-3 rounded-full;
    }
    .texto {
      @apply flex-1;
    }
    .valor {
      @apply text-primary text-xs font-bold md:text-sm;
    }

    &.primary {
      .circle {
        @apply bg-primary;
      }
      .valor {
        @apply text-primary;
      }
    }
    &.blue {
      .circle {
        @apply bg-blue;
      }
      .valor {
        @apply text-blue;
      }
    }
    &.orange {
      .circle {
        @apply bg-orange;
      }
      .valor {
        @apply text-orange;
      }
    }
    &.gray {
      .circle {
        @apply bg-gray;
      }
      .valor {
        @apply text-gray;
      }
    }
  }
}
</style>
