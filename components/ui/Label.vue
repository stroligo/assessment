<template>
  <a :href="`${link}`">
    <button
      type="button"
      class="flex flex-row items-center justify-center gap-2 rounded-lg bg-blue-light px-3 py-2 text-xs leading-[8px] text-blue-dark hover:bg-beige disabled:pointer-events-none disabled:text-gray disabled:opacity-40"
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
  data() {
    return {
      localObjeto: this.objeto,
    };
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
  &.noticia {
    @apply bg-green-60 text-white;
  }
  &.publicacao {
    @apply bg-blue-light text-green-60;
  }
  &.atualizacoes {
    @apply bg-white  uppercase text-blue-dark;
  }
  &.outlinewhite {
    @apply border border-white bg-transparent text-white;
  }
  &.outlineblue {
    @apply border border-blue bg-transparent text-blue;
  }
}
</style>
