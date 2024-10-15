<template>
  <a :href="`${link}`">
    <button
      type="button"
      class="flex flex-row items-center justify-center gap-2 rounded-lg bg-gray-5 px-3 py-2 text-sm font-bold text-gray-80 transition-all duration-300 ease-in-out hover:bg-beige disabled:pointer-events-none disabled:text-gray disabled:opacity-40"
      :class="[objeto, custom]"
    >
      <!--  Adiciona Icone  -->
      <div v-if="objeto === 'institucional'" class="text-base">
        <SvgoInstitucional />
      </div>
      <div v-if="objeto === 'obesidade'" class="text-base">
        <SvgoObesidade />
      </div>
      <div v-if="objeto === 'cancer'" class="text-base">
        <SvgoCancer />
      </div>
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
    objeto: {
      type: String,
      validator(value) {
        return ['institucional', 'obesidade', 'cancer'].includes(value);
      },
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
.iconleft {
  @apply flex-row-reverse;
}
.obesidade {
  @apply text-blue-dark;
}
.cancer {
  @apply text-green-60;
}
.institucional {
  @apply text-blue;
}
</style>
