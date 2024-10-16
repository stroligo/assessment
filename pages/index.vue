<template>
  <layoutNav />

  <main>
    <!-- Home -->
    <TableModel />
  </main>

  <layoutFooter />
</template>

<script>
import data from '~/static/data.json';
export default {
  data() {
    return {
      tableData: data.table,
    };
  },
  methods: {},
  computed: {
    baseURL() {
      return this.$config.public.baseUrl;
    },
  },
};
</script>
