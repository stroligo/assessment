<template>
  <div class="flex flex-col justify-center gap-6 text-center">
    <!-- Imagens -->
    <div class="flex justify-center" v-if="icone">
      <component :is="icone" filled class="h-16 w-16" :fontControlled="false" />
    </div>

    <div v-if="valor || titulo">
      <!-- Valor -->
      <div class="text-primary font-slab text-3xl font-bold md:text-5xl" v-if="valor">
        {{ valor }}%
      </div>
      <!-- Titulo -->
      <div class="text-lg font-bold text-blue-dark md:text-xl" v-if="titulo">
        {{ titulo }}
      </div>
    </div>
    <!-- Subtitulo -->
    <div class="text-blue-dark" v-if="subtitulo" v-html="subtitulo"></div>
    <!-- Local -->
    <div class="font-sm text-gray" v-if="local">{{ local }}</div>
  </div>
</template>

<script>
export default {
  props: {
    icone: String,
    valor: String,
    titulo: String,
    subtitulo: String,
    local: String,
  },
};
</script>
