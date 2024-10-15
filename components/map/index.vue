<template>
  <div class="flex flex-col items-center justify-center gap-4 px-8">
    <InteractionTooltip text="">
      <!-- Conteudo do TOOLTIP -->
      <template v-slot:tooltip>
        <div class="tooltip-base flex flex-col gap-4">
          <div class="flex flex-col gap-2">
            <div class="text-primary text-xl font-bold">Norte</div>
            <div>
              <div class="text-3xl font-bold text-blue-dark">99,6</div>
              <div class="text-lg font-bold leading-none text-blue-dark">
                novos casos de câncer infantojuvenil
              </div>
              <div class="text-gray-90 text-xs">
                a cada 1 milhão de crianças e adolescentes
              </div>
            </div>
          </div>
          <div class="text-gray-90 text-sm">650 novos casos por ano</div>
          <div class="text-sm font-bold text-orange">
            Clique para ver o panorama da Norte
          </div>
        </div>
      </template>

      <!-- IMAGEM DO MAPA -->
      <figure class="relative max-h-[400px] overflow-clip md:z-10 md:max-h-none">
        <img :src="`${baseURL}img/chart/model1.svg`" class="h-full object-cover" />
      </figure>
    </InteractionTooltip>
    <!-- Legenda do Mapa -->
    <MapLegenda
      :valor_inicial="'99'"
      :valor_final="'152,3'"
      :texto="'Número de casos a cada 1 milhão de crianças e adolescentes'"
    />
  </div>
</template>
<script>
export default {
  computed: {
    baseURL() {
      return this.$config.public.baseUrl;
    },
  },
};
</script>
