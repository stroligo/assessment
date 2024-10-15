<template>
  <button
    type="button"
    class="flex flex-row items-center justify-center gap-2 rounded-lg border border-blue px-3 py-2 text-xs leading-[8px] text-blue-dark hover:bg-gray-5 disabled:pointer-events-none disabled:text-gray disabled:opacity-40"
    :class="[
      custom,
      { 'border-transparent bg-gray-5 opacity-60 hover:bg-gray-5': active },
    ]"
    @click="toggleActive"
  >
    <!-- Icon -->
    <div class="icon"></div>
    <!-- Text -->
    <span class="block translate-y-[1.2px] whitespace-nowrap" v-if="text">{{
      text
    }}</span>
  </button>
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
  data() {
    return {
      active: false,
    };
  },
  methods: {
    toggleActive() {
      this.active = !this.active;
    },
  },
};
</script>

<style scoped>
.brasil {
  .icon {
    @apply relative z-10 flex bg-transparent;
    &::before {
      @apply absolute left-0 top-0 z-20 h-[6px] w-[6px] rounded-full bg-gray content-[""];
    }
    &::after {
      @apply absolute right-0 top-0 z-20 h-[6px] w-[6px] rounded-full bg-gray content-[""];
    }
  }
}
.icon {
  @apply bg-primary h-[6px] w-[16px] rounded-full;
}
.orange {
  .icon {
    @apply bg-orange;
  }
}
.blue {
  .icon {
    @apply bg-blue;
  }
}
.darkblue {
  .icon {
    @apply bg-blue-dark;
  }
}
.gray {
  .icon {
    @apply bg-gray;
  }
}
</style>
