<template>
  <div class="flex w-full flex-col justify-center gap-2 text-xs text-gray">
    <div class="flex w-full items-center gap-2">
      <span>{{ valor_inicial }}</span>
      <div class="h-3 w-full rounded bg-gradient-to-r from-[#B1D6E4] to-[#042B60]" />
      <span>{{ valor_final }}</span>
    </div>
    <div class="text-center">
      {{ texto }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    valor_inicial: {
      type: String,
      required: true,
    },
    valor_final: {
      type: String,
      required: true,
    },
    texto: {
      type: String,
      required: true,
    },
  },
};
</script>
