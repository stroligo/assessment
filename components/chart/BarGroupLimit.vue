<template>
  <div v-if="items && Array.isArray(items)" class="h-full">
    <div class="type-defautl flex min-h-full flex-col justify-between" :class="custom">
      <!-- Area Total -->
      <div class="relative mb-14">
        <!--  conteudo Grafico -->
        <div class="flex flex-col gap-3">
          <div v-for="(item, index) in items" :key="index" :class="item.type">
            <div class="flex justify-between">
              <div class="legenda">{{ item.legend }}</div>
            </div>

            <div class="area-bar">
              <div class="bar" :style="{ width: `${item.value}%` }">
                <div class="valor">{{ item.value }}%</div>
              </div>
            </div>
          </div>
        </div>

        <div class="limite" :style="{ width: `${recomendavel}%` }">
          <div class="absolute -bottom-6 right-0 text-sm text-orange">
            Recomendável > {{ recomendavel }}%
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
    recomendavel: Number,
    showSobreIndicador: Boolean,
    showComoCitar: Boolean,
    showNotaAcao: Boolean,
  },
  computed: {},
};
</script>

<style scoped>
.type-defautl {
  .area-bar {
    @apply flex  h-5 w-full items-center gap-2 overflow-clip rounded bg-green-5;
    .bar {
      @apply relative h-5 rounded bg-primary;
    }
  }

  .legenda {
    @apply relative flex font-bold text-blue-dark;
  }

  .valor {
    @apply absolute right-1 top-0 flex -translate-y-[1px]   text-right  font-bold text-white;
  }

  .big {
    .valor {
      @apply translate-y-[2px] text-xl;
    }
    .area-bar {
      @apply h-7;
      .bar {
        @apply h-7;
      }
    }
  }
  &.blue {
    @apply bg-blue text-blue;
  }
  &.orange {
    @apply bg-orange text-orange;
  }
}
.limite {
  @apply absolute left-0 top-0 -z-10 h-full translate-y-3;
  border-radius: var(--radius-DEFAULT, 4px);
  background: linear-gradient(90deg, rgba(255, 246, 186, 0) 0%, #ffef8a 100%);
}
</style>
