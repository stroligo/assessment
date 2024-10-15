<template>
  <div class="flex flex-col gap-5 pb-8">
    <!-- Graficos -->
    <div>
      <div class="bg-primary relative mb-1 h-7 overflow-clip rounded-md">
        <!-- Valor 1 -->
        <div
          class="absolute left-0 top-0 h-7 bg-gray-20"
          :style="{ width: `${indicador1.valor}%` }"
        ></div>
        <div
          class="absolute left-0 top-[1px] flex h-7 w-full items-center justify-between px-2 text-xl font-bold"
        >
          <!--  Valor 1 -->
          <div class="text-gray-70">{{ indicador1.valor }}%</div>
          <!--  Valor 2 -->
          <div class="text-white">{{ indicador2.valor }}%</div>
        </div>
      </div>

      <!-- Legenda -->
      <div class="relative w-full">
        <!--  Legenda 1 -->
        <div class="text-gray-70 absolute left-0 top-0 md:text-lg">
          {{ indicador1.legenda }}
        </div>
        <!--  Legenda 2 -->
        <div class="text-primary absolute right-0 top-0 md:text-lg">
          {{ indicador2.legenda }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    indicador1: {
      type: Object,
      required: true,
    },
    indicador2: {
      type: Object,
      required: true,
    },
  },
};
</script>
