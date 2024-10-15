<template>
  <div class="flex flex-col gap-4 md:flex-row">
    <div class="md:w-8/12">
      <h6>{{ titulo }}</h6>
      <div class="text-gray">
        Fonte: <strong>{{ fonte }}</strong>
      </div>
    </div>
    <!-- Acesso ao Modal -->
    <div class="flex md:w-4/12 md:justify-end">
      <InteractionControlModal
        :showSobreIndicador="showSobreIndicador"
        :showComoCitar="showComoCitar"
        :showNotaAcao="showNotaAcao"
        :showLegislacao="showLegislacao"
      />
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
    fonte: {
      type: String,
      required: true,
    },
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
};
</script>
