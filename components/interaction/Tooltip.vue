<template>
  <div
    class="group relative inline-block cursor-pointer"
    @mouseenter="show = true"
    @mouseleave="show = false"
  >
    <slot />
    <div
      v-show="show"
      class="fade-in-out absolute bottom-full left-1/2 z-50 mb-4 w-max max-w-[280px] -translate-x-1/2 transform rounded-lg p-4 text-sm shadow-default"
      :class="{
        'tooltip-blue': type === 'blue',
      }"
      style="z-index: 9999999999"
    >
      {{ text }}

      <slot name="tooltip" />

      <!-- A pontinha -->
      <div
        class="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 transform border-l-8 border-r-8 border-t-8 border-transparent border-t-white"
        :class="{
          'pontinha-blue': type === 'blue',
        }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    type: String,
  },
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style scoped>
.fade-in-out {
  transition: opacity 3s ease-in-out;
  z-index: 999999999999;
  background: white;
}
.tooltip-blue {
  @apply bg-blue-dark px-4 py-2 text-white;
  z-index: 999999999999;
}
.pontinha-blue {
  @apply border-t-blue-dark;
}
</style>
