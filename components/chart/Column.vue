<template>
  <div v-if="items && Array.isArray(items)" class="h-full">
    <div
      class="type-defautl flex min-h-full flex-col justify-between gap-6 px-8 py-12 squircle-16"
      :class="custom"
    >
      <!-- Header -->
      <div class="flex flex-col gap-4">
        <div class="flex items-center justify-center gap-4">
          <component :is="icon1" filled class="h-12 w-12" :fontControlled="false" />
          <component :is="icon2" filled class="h-12 w-12" :fontControlled="false" />
          <component :is="icon3" filled class="h-12 w-12" :fontControlled="false" />
        </div>
        <div class="flex flex-col items-center justify-center gap-1 text-center">
          <div class="text-sm text-gray-80">{{ title }}</div>
          <div class="text-xl font-bold leading-none text-blue-dark">{{ subtitle }}</div>
        </div>
        <div class="flex items-center justify-center">
          <InteractionControlModal
            :showSobreIndicador="showSobreIndicador"
            :showComoCitar="showComoCitar"
            :showNotaAcao="showNotaAcao"
          />
        </div>
      </div>
      <!-- Grafico -->
      <div class="py-6">
        <!-- Area Total -->
        <div class="relative" :style="{ height: maxHeight + 'px' }">
          <!--  conteudo Grafico -->
          <div class="relative z-10 flex items-end justify-between gap-3 px-4">
            <div
              class="flex h-full w-10 flex-col py-4 text-sm text-blue-dark"
              :style="{ height: mediaHeight + 'px' }"
            >
              <div class="font-bold">{{ mediaValue }}</div>
              <div>Taxa média</div>
            </div>
            <div class="flex flex-1 items-end justify-evenly gap-3">
              <div
                v-for="(item, index) in items"
                :key="index"
                class="bar"
                :style="{ height: item.height + 'px' }"
              >
                <div class="valor">{{ item.value }}</div>
                <div class="legenda">{{ item.legend }}</div>
              </div>
            </div>
          </div>
          <!-- Limite -->
          <div
            class="limite absolute bottom-0 w-full squircle-6"
            :style="{ height: mediaHeight + 'px' }"
          ></div>
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
    icon1: String,
    icon2: String,
    icon3: String,
    title: String,
    subtitle: String,
    showSobreIndicador: Boolean,
    showComoCitar: Boolean,
    showNotaAcao: Boolean,
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
    mediaHeight() {
      if (!this.items || !Array.isArray(this.items)) return 0;
      let sum = 0;
      for (let i = 0; i < this.items.length; i++) {
        sum += this.items[i].height;
      }
      return sum / this.items.length;
    },
    mediaValue() {
      if (!this.items || !Array.isArray(this.items)) return 0;
      let sum = 0;
      for (let i = 0; i < this.items.length; i++) {
        sum += this.items[i].value;
      }
      return sum / this.items.length;
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
  }
  .limite {
    background: linear-gradient(180deg, #fff 50%, rgba(255, 255, 255, 0) 100%);
  }
}
.blue {
  background: linear-gradient(180deg, rgba(220, 242, 254, 0.3) 0%, #bee7fd 100%);
  .bar {
    @apply bg-blue text-blue;
  }
}
.orange {
  background: linear-gradient(180deg, rgba(255, 251, 220, 0.3) 0%, #fff6ba 100%);
  .bar {
    @apply bg-orange text-orange;
  }
}
</style>
