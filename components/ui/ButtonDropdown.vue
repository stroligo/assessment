<template>
  <div class="relative">
    <button
      id="button"
      type="button"
      @click="toggleDropdown"
      class="flex w-full flex-row items-center justify-center gap-2 rounded-full bg-yellow px-5 py-2 font-bold text-blue-dark transition-all duration-300 ease-in-out hover:bg-orange hover:text-white active:bg-yellow disabled:pointer-events-none disabled:text-white disabled:opacity-40 md:w-fit"
      :class="custom"
    >
      <!-- Text -->
      <span class="block translate-y-[1.2px] whitespace-nowrap" v-if="text">
        {{ text }}
      </span>
      <!-- Icon -->
      <SvgoChevron />
    </button>
    <div :class="['dropdown', { 'dropdown-open': isOpen }]" id="dropdown">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
    custom: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    baseURL() {
      return this.$config.public.baseUrl;
    },
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    closeDropdown(event) {
      if (this.$el.contains(event.target)) {
        return;
      }
      this.isOpen = false;
    },
  },
  mounted() {
    document.addEventListener('click', this.closeDropdown);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.closeDropdown);
  },
};
</script>

<style>
#button {
  &.secondary {
    @apply bg-blue-dark text-white hover:bg-blue;
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
  &.filter {
    @apply py-3;
  }
}
#dropdown {
  @apply absolute -bottom-2 left-0 z-40 w-full translate-y-full opacity-0 transition-opacity duration-500 md:w-fit;
  &.dropdown-open {
    @apply opacity-100;
  }
  ul {
    @apply overflow-clip rounded-xl bg-white text-blue-dark shadow-default;
    li {
      @apply cursor-pointer px-5 py-[14px] hover:text-orange;
    }
  }
}
</style>
