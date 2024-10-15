<template>
  <layoutNav />

  <main>
    <!-- Home -->
    <section>
      <div
        class="container relative mx-auto flex flex-col gap-16 px-5 py-20 md:gap-32 md:px-0"
      >
        <TableModel />
      </div>
    </section>
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
