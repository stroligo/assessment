<template>
  <div>
    <div class="mb-2 text-gray">{{ parte }}</div>
    <h3>{{ titulo }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    parte: {
      type: String,
      default: '',
    },
    titulo: {
      type: String,
      default: '',
    },
  },
};
</script>
