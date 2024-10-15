<template>
  <div class="flex h-[44px] w-fit rounded-full bg-[#F0F0F0]">
    <button
      v-for="(button, index) in localButtons"
      :key="index"
      type="button"
      class="hover:bg-blue; flex h-[44px] flex-row items-center justify-center gap-2 rounded-full px-5 py-2 font-bold text-blue-dark transition-all duration-300 ease-in-out hover:bg-orange hover:text-white active:bg-yellow disabled:pointer-events-none disabled:text-white disabled:opacity-40"
      :class="{ active: button.active }"
      @click="toggleButton(index)"
    >
      <!-- Text -->
      <span class="block translate-y-[1.2px] whitespace-nowrap">{{ button.text }}</span>
      <!-- Icon -->
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    buttons: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      localButtons: [],
    };
  },
  mounted() {
    this.localButtons = this.buttons.map((button) => ({ ...button, active: false }));
    this.localButtons[0].active = true;
  },
  methods: {
    toggleButton(index) {
      this.localButtons.forEach((button, i) => {
        button.active = i === index;
      });
    },
  },
};
</script>

<style scoped>
button {
  &.iconleft {
    @apply flex-row-reverse;
  }

  &.active {
    @apply bg-blue-dark text-white;
  }
}
</style>
