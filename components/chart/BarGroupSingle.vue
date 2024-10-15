<template>
  <div v-if="items && Array.isArray(items)" class="h-full">
    <div class="type-defautl" :class="custom">
      <!-- Area Total -->
      <div class="relative">
        <!--  conteudo Grafico -->

        <div class="flex flex-col gap-6">
          <div v-for="(item, index) in items" :key="index" :class="item.type">
            <div class="flex justify-between">
              <div class="legenda">{{ item.legend }}</div>
              <div class="valor">{{ item.value }}%</div>
            </div>

            <div class="area-bar">
              <div class="bar" :style="{ width: `${item.value}%` }" />
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
    @apply flex h-3 w-full items-center gap-2 overflow-clip rounded bg-green-5;
    .bar {
      @apply bg-primary h-3 rounded;
    }
  }

  .legenda {
    @apply relative text-lg text-blue-dark;
  }

  .valor {
    @apply text-primary relative  flex text-right  font-bold;
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
