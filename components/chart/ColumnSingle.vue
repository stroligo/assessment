<template>
  <div v-if="items && Array.isArray(items)" class="h-full">
    <div
      class="type-defautl flex min-h-full flex-col justify-between gap-6 px-8 py-12 squircle-16"
      :class="custom"
    >
      <!-- Header -->
      <div class="flex flex-col gap-4">
        <div class="flex items-center justify-center gap-4">
          <component :is="icon" filled class="h-12" :fontControlled="false" />
        </div>
        <div class="flex flex-col items-center justify-center gap-1 text-center">
          <div class="text-xl font-bold leading-none text-blue-dark">{{ title }}</div>
        </div>
        <div class="flex items-center justify-center">
          <InteractionControlModal
            :showSobreIndicador="showSobreIndicador"
            :showComoCitar="showComoCitar"
            :showNotaAcao="showNotaAcao"
            :showLegislacao="showLegislacao"
          />
        </div>
      </div>
      <!-- Grafico -->
      <div class="py-6">
        <!-- Area Total -->
        <div class="relative" :style="{ height: maxHeight + 'px' }">
          <!--  conteudo Grafico -->
          <div class="relative z-10 flex items-end justify-between gap-3 px-4">
            <div class="flex flex-1 items-end justify-evenly gap-3">
              <div
                v-for="(item, index) in items"
                :key="index"
                class="bar"
                :class="item.color"
                :style="{ height: item.height + 'px' }"
              >
                <div class="valor">{{ item.value }}</div>
                <div class="legenda">{{ item.legend }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
    custom: String,
    icon: String,
    title: String,
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
    maxHeight() {
      if (!this.items || !Array.isArray(this.items)) return 0;
      let max = 0;
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].height > max) {
          max = this.items[i].height;
        }
      }
      return max;
    },
  },
};
</script>

<style scoped>
.type-defautl {
  background: linear-gradient(180deg, rgba(228, 241, 246, 0.3) 0%, #cee5ee 100%);
  .media {
  }
  .bar {
    @apply bg-primary text-primary relative flex w-7 justify-center rounded px-4;
    .valor {
      @apply absolute left-0 top-0 flex w-7 -translate-y-full justify-center text-xl font-bold;
    }
    .legenda {
      @apply absolute bottom-0 left-0 flex w-7 translate-y-full justify-center text-nowrap text-sm font-normal text-blue-dark;
    }
    &.blue {
      @apply bg-blue text-blue;
    }
    &.orange {
      @apply bg-orange text-orange;
    }
  }
  .limite {
    background: linear-gradient(180deg, #fff 50%, rgba(255, 255, 255, 0) 100%);
  }
}
</style>
