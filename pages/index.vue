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
                <img
                  src="~/assets/img/home/hero.png"
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
          <FeatureSectionTitle
            parte="Parte 1"
            titulo="Incidência do Câncer Infantojuvenil"
            id="parte1"
          />

          <!-- FeatureEspecialista -->
          <FeatureEspecialista
            titulo="A situação do câncer infantojuvenil no Brasil, a qualificação do diagnóstico."
            imagemPerfil="~/assets/img/home/sima.jpg"
            nomePerfil="Sima Ferman"
            cargoPerfil="Chefe do Serviço de Oncologia Pediátrica Instituto Nacional de Câncer - INCA"
            texto="<p>Atualmente, um grande número de crianças e adolescentes com câncer podem ser curadas com o diagnóstico precoce e tratamento em centros especializados. O progresso no tratamento do câncer foi mais evidente nos países de alta renda, onde as taxas de sobrevida em 5 anos estão em 80%, enquanto em países de baixa e média renda estas taxas ainda podem ser melhoradas. Muitos fatores são responsáveis por estas diferenças e constituem desafios a serem vencidos: dificuldade de acesso a diagnóstico e tratamento, doença avançada ao adquirir o diagnóstico, dificuldades financeiras e abandono de tratamento.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>"
            lerMaisText="Leia Mais"
            palavrasCorte="50"
          >
            <!-- Slot -->
            <figure class="relative w-full overflow-clip md:z-10">
              <img
                src="~/assets/img/home/parte1.png"
                class="h-full w-full object-cover"
              />
            </figure>
          </FeatureEspecialista>
        </div>
        <!-- Bloco - Estimativa de novos casos -->
        <!-- InteractionControlModal / UiButtonToogle / UiHighlight / Map / ChartBar -->
        <div class="flex flex-col gap-16 md:gap-8">
          <FeatureSectionBlock
            titulo="Estimativa de novos casos"
            descricao="A estimativa de incidência de câncer infantojuvenil é um indicador essencial
            para o entendimento e controle do câncer, serve como base para ações de saúde
            pública e pesquisa. Através da estimativa é possível ter uma visão abrangente
            e atualizada da incidência de câncer entre crianças e adolescentes no Brasil.
            Fundamental para entender a magnitude do problema, além de ajudar os
            formuladores de políticas a desenvolverem estratégias eficazes para
            diagnóstico precoce e tratamento do câncer infantojuvenil."
          />

          <!--  FeatureIntroChart -->
          <FeatureIntroChart
            titulo="Estimativa anual das taxas brutas de incidência por 1 milhão de crianças e
                adolescentes (0-19 anos) e do número de casos novos de câncer segundo sexo
                e localidade, 2023-2025"
            fonte="INCA, 2022."
            showSobreIndicador
            showComoCitar
            showNotaAcao
            showLegislacao
          />

          <!--  UiButtonToogle -->
          <UiButtonToogle
            :buttons="[
              { text: 'Total', active: true },
              { text: 'Meninos', active: false },
              { text: 'Meninas', active: false },
            ]"
          />

          <!-- GraficoArea -->
          <div class="flex flex-col gap-8 md:flex-row">
            <div class="w-full md:w-3/12">
              <UiHighlight>
                <div
                  class="flex flex-col gap-3 font-slab text-xl font-bold leading-none text-orange md:text-2xl"
                >
                  <div class="text-3xl md:text-5xl">7.930</div>
                  <div class="">
                    novos casos de câncer infantojuvenil no Brasil
                  </div>
                </div>
                <div>
                  Taxa de incidência de <strong>134,8 novos casos</strong> a
                  cada 1 milhão de crianças e adolescentes.
                </div>
              </UiHighlight>
            </div>
            <div class="w-full md:w-6/12">
              <Map />
            </div>
            <div class="w-full md:w-3/12">
              <ChartBar
                titulo="Taxa de incidência"
                subtitulo="a cada 1 milhão de crianças e adolescentes"
                :graficos="[
                  {
                    região: 'Sudeste',
                    valor: 60,
                    legenda: 'Estimativa de 1.180 novos casos',
                  },
                  {
                    região: 'Sul',
                    valor: 50,
                    legenda: 'Estimativa de 1.180 novos casos',
                  },
                  {
                    região: 'Centro-Oeste',
                    valor: 40,
                    legenda: 'Estimativa de 1.180 novos casos',
                  },
                  {
                    região: 'Nordeste',
                    valor: 40,
                    legenda: 'Estimativa de 1.180 novos casos',
                  },
                  {
                    região: 'Norte',
                    valor: 40,
                    legenda: 'Estimativa de 1.180 novos casos',
                  },
                ]"
              />
            </div>
          </div>
        </div>

        <!-- Bloco - Principais tipos de câncer -->
        <!-- InteractionControlModal / ChartDonut -->
        <div class="flex flex-col gap-16 md:gap-8">
          <FeatureSectionBlock titulo="Principais tipos de câncer" />
          <!--  FeatureIntroChart -->
          <FeatureIntroChart
            titulo="Principais tipos de câncer infantojuvenil (0-19 anos), segundo sexo,
                Brasil, 2014-2018"
            fonte="MS/INCA/DVAS, Registro de Câncer de Base Populacional, 2024."
            showSobreIndicador
            showComoCitar
            showNotaAcao
            showLegislacao
          />

          <!-- GraficoArea -->
          <div class="flex flex-col gap-2 py-2">
            <div class="md:flex md:justify-center md:py-4">
              <!-- Legenda -->
              <div class="flex flex-col md:flex-row md:gap-8">
                <div class="flex flex-row items-center gap-2 text-sm text-gray">
                  <span class="h-3 w-3 rounded-full bg-primary"></span>
                  <span class="whitespace-nowrap">Leucemias e linfomas</span>
                </div>
                <div class="flex flex-row items-center gap-2 text-sm text-gray">
                  <span class="h-3 w-3 rounded-full bg-blue"></span>
                  <span class="whitespace-nowrap"
                    >Tumores do sistema nervoso central</span
                  >
                </div>
                <div class="flex flex-row items-center gap-2 text-sm text-gray">
                  <span class="h-3 w-3 rounded-full bg-orange"></span>
                  <span class="whitespace-nowrap">Tumores sólidos</span>
                </div>
                <div class="flex flex-row items-center gap-2 text-sm text-gray">
                  <span class="h-3 w-3 rounded-full bg-gray"></span>
                  <span class="whitespace-nowrap"
                    >Neoplasias não especificadas</span
                  >
                </div>
              </div>
            </div>
            <div class="flex flex-wrap md:flex-row">testes</div>
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
