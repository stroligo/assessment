<template>
  <div class="flex flex-col gap-5 pb-8">
    <!-- Título -->
    <div>
      <div class="text-primary text-xl font-bold">{{ titulo }}</div>
      <div class="text-sm text-gray">{{ subtitulo }}</div>
    </div>
    <!-- Graficos -->
    <div v-for="(grafico, index) in graficos" :key="index">
      <div class="font-bold text-blue-dark">{{ grafico.região }}</div>
      <div>
        <div class="flex w-full items-center gap-2">
          <div class="bg-primary h-3 rounded" :style="{ width: `${grafico.valor}%` }" />
          <span class="text-primary font-bold">{{ grafico.valor }}</span>
        </div>
      </div>
      <div class="text-sm text-gray">{{ grafico.legenda }}</div>
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
    subtitulo: {
      type: String,
      required: false,
    },
    graficos: {
      type: Array,
      required: false,
    },
  },
};
</script>
