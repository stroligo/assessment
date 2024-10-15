<template>
  <div :class="gridClass">
    <component
      v-for="(item, index) in displayData"
      :key="index"
      :is="getCardComponent(type)"
      :data="item"
    />
  </div>
  <div class="flex items-center justify-center py-8">
    <UiButton :text="buttonText" @click="toggleShowAll" />
  </div>
</template>

<script setup>
import { ref, defineProps, defineAsyncComponent, computed } from 'vue';

// Defina os tipos que você tem
const cardComponents = {
  Noticia: defineAsyncComponent(() => import('@/components/card/Noticia.vue')),
  Publicacao: defineAsyncComponent(() => import('@/components/card/Publicacao.vue')),
};

// Receba as props do componente pai
const props = defineProps({
  type: {
    type: String,
    required: true,
  },
  data: {
    type: Array,
    required: true,
  },
  columns: {
    type: Number,
    default: 4, // Número padrão de colunas
  },
  itemsToShow: {
    type: Number,
    default: 4, // Número padrão de itens a serem mostrados
  },
});

// Função para obter o componente de card apropriado com base no tipo fornecido
const getCardComponent = (type) => {
  return cardComponents[type] || null;
};

// Computed property para definir a classe da grid dinamicamente
const gridClass = computed(() => {
  if (props.columns === 1) {
    return 'grid grid-cols-1 gap-8';
  } else {
    return `grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-${props.columns}`;
  }
});

// Estado local para controlar a exibição de todos os itens ou apenas a quantidade inicial de itens
const showAll = ref(false);

// Computed property para determinar quais itens exibir
const displayData = computed(() => {
  return showAll.value ? props.data : props.data.slice(0, props.itemsToShow);
});

// Computed property para determinar o texto do botão
const buttonText = computed(() => {
  return showAll.value ? 'Ver menos' : 'Ver todos';
});

// Método para alternar o estado de showAll
const toggleShowAll = () => {
  showAll.value = !showAll.value;
};
</script>

<style scoped>
/* Ajuste o estilo aqui se necessário */
.grid {
  /* Adicione estilos específicos para a grid se necessário */
}
</style>
