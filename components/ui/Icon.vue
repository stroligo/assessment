<template>
  <button
    type="button"
    class="flex flex-row items-center justify-center gap-2 rounded-full bg-yellow text-2xl font-bold text-blue-dark transition-all duration-300 ease-in-out hover:bg-orange hover:text-white active:bg-yellow disabled:pointer-events-none disabled:text-white disabled:opacity-40"
    :class="custom"
  >
    <!-- Icon -->
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: {
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
  &.primary {
    @apply flex h-11 w-11;
    svg {
      @apply text-7xl text-blue-dark;
    }
  }
  &.btnmodal {
    @apply flex h-8 w-8 text-lg md:h-11 md:w-11 md:text-2xl;
  }
  &.secondary {
    @apply flex h-11 w-11  border-1.5 border-yellow bg-transparent text-yellow hover:border-orange hover:bg-orange hover:bg-opacity-15 hover:text-orange active:border-yellow active:bg-yellow active:text-white;
    svg {
      @apply text-7xl text-blue-dark;
    }
  }
  &.tertiary {
    @apply flex  h-11  w-11 bg-transparent text-yellow hover:bg-orange hover:bg-opacity-15 hover:text-orange active:bg-yellow active:text-white;
    svg {
      @apply text-7xl text-blue-dark;
    }
  }
  &.small {
    @apply h-6 w-6;
  }
  &.medium {
    @apply h-11 w-11;
  }
  &.large {
    @apply h-14 w-14;
  }
}
</style>
