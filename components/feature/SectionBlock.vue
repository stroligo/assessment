<template>
  <div class="flex flex-col gap-6 md:w-8/12">
    <h5 v-if="titulo">{{ titulo }}</h5>

    <div class="pb-6 text-blue-dark md:text-lg" v-if="descricao">{{ descricao }}</div>
  </div>
</template>

<script>
export default {
  props: {
    titulo: {
      type: String,
      default: '',
    },
    descricao: {
      type: String,
      default: '',
    },
  },
};
</script>
