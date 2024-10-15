<template>
  <div class="flex h-full flex-col gap-6 px-2 py-4 md:px-0 md:py-0">
    <div class="text-center text-lg font-bold leading-none text-blue-dark md:text-2xl">
      {{ titulo }}
    </div>
    <!-- Grafico -->
    <div class="flex h-full flex-1 flex-col justify-between gap-6">
      <slot />

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
      required: false,
    },
    legendas: {
      type: Array,
      required: false,
    },
    destaque: {
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
