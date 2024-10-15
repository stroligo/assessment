<template>
  <div class="default flex flex-col gap-5 pb-4" :class="custom">
    <div class="area-bar">
      <div class="bar" :style="{ width: `${valor}%` }" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    valor: {
      type: String,
    },
    custom: {
      type: String,
    },
  },
};
</script>
<style>
.default {
  .area-bar {
    @apply flex h-3 w-full items-center gap-2 overflow-clip rounded bg-[#031D40];
    .bar {
      @apply h-3 rounded bg-orange;
    }
  }
}
.azul {
  .area-bar {
    @apply bg-gray;
    .bar {
      @apply bg-blue;
    }
  }
}
</style>
