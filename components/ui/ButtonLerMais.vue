<template>
  <a :href="`${link}`">
    <button
      type="button"
      class="flex flex-row items-center justify-center gap-2 rounded-full font-bold text-yellow transition-all duration-300 ease-in-out hover:text-blue-dark disabled:pointer-events-none disabled:text-white disabled:opacity-40"
      :class="custom"
    >
      <!-- Text -->
      <span class="block translate-y-[1.2px] whitespace-nowrap" v-if="text">{{
        text
      }}</span>
      <!-- Icon -->
      <slot></slot>
    </button>
  </a>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
    custom: {
      type: String,
      default: '',
    },
  },
  computed: {
    baseURL() {
      return this.$config.public.baseUrl;
    },
  },
};
</script>
<style scoped>
button {
  &.iconleft {
    @apply flex-row-reverse;
  }
  &.large {
    @apply px-6 py-4;
  }
  &.medium {
    @apply px-5 py-2;
  }
  &.small {
    @apply px-4 py-1;
  }
}
</style>
