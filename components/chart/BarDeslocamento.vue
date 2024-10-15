<template>
  <div class="flex flex-col gap-5 pb-8">
    <!-- Título -->
    <div>
      <div class="text-primary text-xl font-bold">{{ titulo }}</div>
      <div class="text-sm text-gray">{{ subtitulo }}</div>
    </div>
    <!-- Graficos -->
    <div v-for="(gráfico, index) in graficos" :key="index">
      <div class="font-bold text-blue-dark">{{ gráfico.região }}</div>
      <div>
        <div class="flex items-center gap-2">
          <div class="bg-gray-200 relative h-3 rounded" :style="{ width: `${max}%` }">
            <div
              class="bg-primary absolute left-0 h-3.5 rounded"
              :style="{ width: `${gráfico.percentual}%` }"
            >
              <span
                class="absolute right-1 top-1.5 h-3 -translate-y-1/2 text-xs font-bold text-white"
                >{{ gráfico.percentual }}%</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="flex gap-3 py-2 text-sm text-gray">
        <span v-for="(valor, index) in gráfico.valores" :key="index">
          {{ valor.valor }} <br />
          {{ valor.nome }}
          <span v-if="index < gráfico.valores.length - 1"> </span>
        </span>
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
    subtitulo: {
      type: String,
      required: true,
    },
    graficos: {
      type: Array,
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
  },
};
</script>
