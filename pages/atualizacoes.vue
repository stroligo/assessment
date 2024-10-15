<template>
  <layoutNav />

  <main>
    <!-- Introdução -->
    <section>
      <div class="container mx-auto px-5 py-10 md:px-0 md:!pb-24">
        <div class="md:w-6/12">
          <div class="pb-8 font-slab text-3xl font-bold text-blue md:text-6xl">
            Atualizações
          </div>
          <div class="text-xl text-gray md:text-2xl">
            Ut vitae ex iaculis, aliquet erat vitae, consequat nisl. Pellentesque ornare
            ac quam ut viverra.
          </div>
        </div>

        <div class="py-8 text-2xl font-bold text-blue md:py-12 md:text-4xl">Notícias</div>
        <FeatureGridCards
          type="Noticia"
          :data="resultados"
          :columns="4"
          :itemsToShow="12"
        />

        <div class="py-8 text-2xl font-bold text-blue md:py-12 md:text-4xl">
          Publicações
        </div>
        <FeatureGridCards
          type="Publicacao"
          :data="publicacoes"
          :columns="4"
          :itemsToShow="12"
        />
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
      depoimento: data.depoimento,
      conteudo: ['item1', 'item2', 'item3', 'item4', 'item1', 'item2', 'item3', 'item4'],
      publicacoes: [
        'item1',
        'item2',
        'item3',
        'item4',
        'item1',
        'item2',
        'item3',
        'item4',
      ],
      resultados: [
        'item1',
        'item2',
        'item3',
        'item4',
        'item1',
        'item2',
        'item3',
        'item4',
      ],
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
