<template>
  <div v-if="items && Array.isArray(items)" class="h-full">
    <div class="type-defautl" :class="custom">
      <!-- Area Total -->
      <div class="relative">
        <!--  conteudo Grafico -->
        <div class="flex flex-col gap-4">
          <div class="text-xl text-primary">
            <div class="font-bold">{{ title }}</div>
            <div>{{ subtitle }}</div>
          </div>
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
    custom: String,

    title: String,
    subtitle: String,
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
    @apply flex h-3 w-full items-center gap-2  rounded bg-green-5;
    .bar {
      @apply relative h-3 rounded bg-primary;
    }
  }

  .legenda {
    @apply relative  text-base font-bold text-blue-dark;
  }

  .valor {
    @apply absolute -right-1 top-0  flex -translate-y-1 translate-x-full text-right  font-bold text-primary;
  }

  .big {
    .valor {
      @apply text-xl;
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
</style>
