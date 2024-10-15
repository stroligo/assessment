<template>
  <layoutNav />

  <main>
    <!-- Hero Home -->
    <section class="radial-hero relative">
      <div class="container relative mx-auto px-5 pb-40 md:px-0">
        <div class="absolute left-0 top-8">
          <div class="mb-4 text-sm text-gray">Realização:</div>
          <SvgoDesideratahome
            class="w-[128px]"
            :fontControlled="false"
            filled
          />
        </div>
        <div class="flex items-center justify-center md:pt-10">
          <div class="flex flex-col pt-12 md:w-8/12 md:items-center md:pt-0">
            <div class="relative flex w-full justify-center">
              <!-- Figure1 -->
              <figure
                class="relative max-h-[400px] overflow-clip md:z-10 md:max-h-none"
              >
                <nuxt-img
                  src="/img/home/hero.png"
                  class="h-full object-cover"
                />
              </figure>
              <h2
                class="absolute bottom-0 left-0 z-20 flex w-full justify-center text-center text-blue"
              >
                Panorama da Oncologia Pediátrica no Brasil
              </h2>
            </div>

            <div class="mt-6 text-center text-lg text-blue-dark">
              O Instituto Desiderata acredita que o acesso à informação de
              qualidade é fundamental para guiar estratégias em prol do aumento
              das chances de cura para crianças e adolescentes brasileiros.
              Neste sentido, temos o compromisso de elaborar e publicar
              bienalmente dados relativos ao câncer infantojuvenil neste
              Panorama da Oncologia Pediátrica, com a expectativa de que este
              seja um instrumento que oriente a formulação de políticas públicas
              equânimes, visando a melhores resultados e maiores chances de cura
              para todas as crianças e adolescentes brasileiros.
            </div>
          </div>
        </div>
      </div>
      <!--  SVG Curva Desktop -->
      <div class="absolute bottom-0 left-0 z-10 hidden w-full md:flex">
        <svg
          width="100%"
          viewBox="0 0 1440 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="translate-y-[1px] fill-white"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 48C227.773 16.7871 469.574 0 720 0C970.426 0 1212.23 16.7871 1440 48L0 48Z"
          />
        </svg>
      </div>
      <!--  SVG Curva Mobile -->
      <div class="absolute -bottom-[1px] left-0 z-0 flex w-full md:hidden">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 360 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 56C56.9433 19.585 117.394 0 180 0C242.606 0 303.057 19.585 360 56H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>

    <InteractionNavAnchor />

    <!-- Conteudo Home -->
    <section>
      <div
        class="container relative mx-auto flex flex-col gap-16 px-5 py-20 md:gap-32 md:px-0"
      >
        <!-- Parte 1 -->
        <div class="flex flex-col gap-8">
          texto
          <!-- Figure1 -->
          <figure
            class="relative max-h-[400px] overflow-clip md:z-10 md:max-h-none"
          >
            <nuxt-img src="/img/home/hero.png" class="h-full object-cover" />
          </figure>
          <div>
            <div class="bg-red-200 w-40 h-40">as</div>
          </div>
        </div>
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
      conteudo: [
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
