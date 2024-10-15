<template>
  <div class="flex gap-1.5">
    <!-- Sobre o indicador -->
    <InteractionTooltip v-if="showSobreIndicador" text="Sobre o indicador" type="blue">
      <uiIcon custom="btnmodal" link="#">
        <SvgoInfo class="text-lg md:text-2xl" />
      </uiIcon>
    </InteractionTooltip>

    <!--  Como citar -->
    <InteractionTooltip v-if="showComoCitar" text="Como citar" type="blue">
      <uiIcon custom="btnmodal" link="#">
        <SvgoCitation class="text-lg md:text-2xl" />
      </uiIcon>
    </InteractionTooltip>

    <!--  Nota de atenção -->
    <InteractionTooltip v-if="showNotaAcao" text="Nota de atenção" type="blue">
      <uiIcon custom="btnmodal" link="#">
        <SvgoAlerta class="text-lg md:text-2xl" />
      </uiIcon>
    </InteractionTooltip>

    <!--  Legislação -->
    <InteractionTooltip v-if="showLegislacao" text="Legislação" type="blue">
      <uiIcon custom="btnmodal" link="#">
        <SvgoProtocolo class="text-lg md:text-2xl" /> </uiIcon
    ></InteractionTooltip>
  </div>
</template>

<script>
export default {
  props: {
    showSobreIndicador: { type: Boolean, default: false },
    showComoCitar: { type: Boolean, default: false },
    showNotaAcao: { type: Boolean, default: false },
    showLegislacao: { type: Boolean, default: false },
  },
};
</script>
