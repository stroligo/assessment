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
                <img :src="`img/home/hero.png`" class="h-full object-cover" />
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
        class="container relative mx-auto flex flex-col gap-16 px-5 pb-0 pt-20 md:gap-32 md:px-0"
      >
        <InteractionOptionsBottom />
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
            imagemPerfil="img/home/sima.jpg"
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
                :src="`img/home/parte1.png`"
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
            <div class="flex flex-wrap md:flex-row">
              <div class="order-2 w-1/2 md:order-1 md:w-3/12">
                <!-- Chart Girl -->
                <ChartDonut
                  titulo="Meninas"
                  :legendas="[
                    {
                      texto: 'Leucemias e linfomas',
                      valor: 34.6,
                      cor: 'primary',
                    },
                    {
                      texto: 'Tumores do sistema nervoso central',
                      valor: 39.5,
                      cor: 'blue',
                    },
                    { texto: 'Tumores sólidos', valor: 19.5, cor: 'orange' },
                    {
                      texto: 'Neoplasias não especificadas',
                      valor: 6.5,
                      cor: 'gray',
                    },
                  ]"
                >
                  <figure
                    class="relative flex max-h-[400px] items-center justify-center overflow-clip md:z-10 md:max-h-none"
                  >
                    <img
                      :src="`img/chart/pizzaGirl.svg`"
                      class="h-full object-cover"
                    />
                  </figure>
                </ChartDonut>
              </div>
              <div class="order-1 w-full md:order-2 md:w-6/12">
                <!-- Chart Total -->
                <ChartDonut titulo="Total" :destaque="true">
                  <figure
                    class="relative flex h-full items-center justify-center overflow-clip md:z-10 md:max-h-none"
                  >
                    <img
                      :src="`img/chart/pizzaAll.svg`"
                      class="h-full object-cover"
                    />
                  </figure>
                </ChartDonut>
              </div>
              <div class="order-3 w-1/2 md:order-3 md:w-3/12">
                <!-- Chart Boy -->
                <ChartDonut
                  titulo="Meninos"
                  :legendas="[
                    {
                      texto: 'Leucemias e linfomas',
                      valor: 34.6,
                      cor: 'primary',
                    },
                    {
                      texto: 'Tumores do sistema nervoso central',
                      valor: 39.5,
                      cor: 'blue',
                    },
                    { texto: 'Tumores sólidos', valor: 19.5, cor: 'orange' },
                    {
                      texto: 'Neoplasias não especificadas',
                      valor: 6.5,
                      cor: 'gray',
                    },
                  ]"
                >
                  <figure
                    class="relative flex max-h-[400px] items-center justify-center overflow-clip md:z-10 md:max-h-none"
                  >
                    <img
                      :src="`img/chart/pizzaBoy.svg`"
                      class="h-full object-cover"
                    />
                  </figure>
                </ChartDonut>
              </div>
            </div>
          </div>
        </div>

        <!-- Parte 2 -->
        <!-- Bloco - Mortalidade -->
        <!-- FeatureEspecialista -->
        <div class="flex flex-col gap-8">
          <FeatureSectionTitle
            parte="Parte 2"
            titulo="Mortalidade"
            id="parte2"
          />

          <FeatureEspecialista
            titulo="A importância do uso do registro hospitalar de câncer na gestão das políticas públicas de câncer infantojuvenil."
            imagemPerfil="img/home/sima.jpg"
            nomePerfil="Rejane de Souza Reis"
            cargoPerfil="Associação Brasileira de Registros de Câncer"
            texto="<p>O conhecimento das informações acerca de uma doença é primordial para gestão de saúde pública e tomada de decisões, vide o que estamos vivenciando com a pandemia da COVID-19. No câncer, a necessidade desse conhecimento das informações não é diferente. Para suprir a demanda e alocar esforços e recursos, o gestor de saúde precisa contar com o apoio dos pilares da vigilância do câncer: incidência, morbidade hospitalar e mortalidade.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>"
            lerMaisText="Leia Mais"
            palavrasCorte="50"
          >
            <!-- Slot -->
            <figure class="relative w-full overflow-clip md:z-10">
              <img
                :src="`img/home/parte2.png`"
                class="h-full w-full object-cover"
              />
            </figure>
          </FeatureEspecialista>
        </div>

        <!-- Bloco - Principais causas de mortalidade -->
        <!-- InteractionControlModal / ChartBarCause / UiBigNumber -->
        <div class="flex flex-col gap-16 md:gap-8">
          <FeatureSectionBlock
            titulo="Principais causas de mortalidade"
            descricao="O Sistema de Informação sobre Mortalidade (SIM), está disponível nacionalmente
            desde 1979. É uma ferramenta robusta e essencial para a coleta e análise das
            informações sobre a mortalidade da população brasileira. Analisar as
            informações sobre a distribuição da mortalidade entre crianças e adolescentes
            é fundamental para entender a gravidade e a distribuição geográfica desse
            problema na saúde pública do país. Essa análise permite a formulação de
            políticas de saúde mais eficazes, com o desenvolvimento de estratégias
            direcionadas para regiões com maiores índices de mortalidade."
          />

          <!--  FeatureIntroChart -->
          <FeatureIntroChart
            titulo="Principais causas de mortalidade infantojuvenil (1-19 anos), Brasil,
                2016-2022"
            fonte="MS/SVS/CGIAE, Sistema de Informações sobre Mortalidade, 2024."
            showSobreIndicador
            showComoCitar
            showNotaAcao
            showLegislacao
          />

          <!--  Grafico Barra -->
          <div>
            <ChartBarCause
              :indicador1="{
                valor: 53,
                legenda: 'Causas externas de morbidade e mortalidade',
              }"
              :indicador2="{ valor: 46, legenda: 'Doenças' }"
            />
          </div>

          <!--  BigNumbers -->
          <div class="grid gap-10 md:grid-cols-3 md:gap-4">
            <div>
              <UiBigNumber
                icone="SvgoTumor"
                valor="7.93"
                titulo="Neoplasias (tumores)"
                subtitulo="<b>17.188</b> óbitos no período"
              />
            </div>
            <div>
              <UiBigNumber
                icone="SvgoSistemanervoso"
                valor="6.15"
                titulo="Doenças do sistema nervoso"
                subtitulo="<b>14.570</b> óbitos no período"
              />
            </div>
            <div>
              <UiBigNumber
                icone="SvgoPulmao"
                valor="6.72"
                titulo="Doenças do aparelho respiratório"
                subtitulo="<b>13.330</b> óbitos no período"
              />
            </div>
          </div>
        </div>

        <!-- Bloco - Mortalidade por câncer -->
        <!-- InteractionControlModal / UiButtonToogle / UiHighlight / Map / ChartBar -->
        <div class="flex flex-col gap-16 md:gap-8">
          <FeatureSectionBlock
            titulo="Mortalidade por câncer"
            descricao="A taxa média de mortalidade por câncer é fundamental para compreender a saúde
            infantojuvenil no Brasil, identificar disparidades regionais e direcionar
            recursos e esforços de maneira mais eficaz. As análises das taxas de
            mortalidade específicas por idade, raça/cor e sexo ressaltam a importância de
            políticas públicas voltadas para reduzir as inequidades no acesso ao
            tratamento do câncer infantojuvenil no Brasil."
          />
          <!--  FeatureIntroChart -->
          <FeatureIntroChart
            titulo="Taxa média de mortalidade por câncer infantojuvenil, por 1 milhão de
                crianças e adolescentes (0-19 anos), Brasil, 2016-2022"
            fonte="IBGE, 2022; Sistema de Informações sobre Mortalidade, 2024."
            showSobreIndicador
            showComoCitar
            showNotaAcao
            showLegislacao
          />

          <!-- GraficoArea -->
          <div class="flex flex-col gap-8 md:flex-row">
            <div class="w-full md:w-3/12">
              <UiHighlight>
                <div
                  class="flex flex-col gap-0 font-slab text-xl font-bold leading-none md:text-2xl"
                >
                  <div class="text-3xl text-orange md:text-5xl">42,6</div>
                  <div class="text-orange">óbitos no Brasil</div>
                  <div class="text-base font-normal md:text-base">
                    a cada 1 milhão de crianças e adolescentes
                  </div>
                </div>
                <div class="text-white">
                  <div class="text-white">
                    Média de <b>2.581</b> óbitos por ano
                  </div>
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

        <!-- Bloco - Grafico torre -->
        <!-- ChartColumn -->
        <div class="grid gap-10 md:grid-cols-3 md:gap-4">
          <div>
            <ChartColumn
              icon1="SvgoPanGirl1"
              icon2="SvgoPanGirl2"
              icon3="SvgoPanBoy1"
              title="Mortalidade por câncer infantojuvenil"
              subtitle="raça/cor"
              showSobreIndicador
              showComoCitar
              showNotaAcao
              :items="[
                { height: 170, value: 42.6, legend: 'Branca' },
                { height: 100, value: 24.2, legend: 'Negra' },
                { height: 50, value: 14.8, legend: 'Amarela' },
                { height: 247, value: 76.9, legend: 'Indigena' },
              ]"
            />
          </div>
          <div>
            <ChartColumn
              custom="blue"
              icon1="SvgoPanGirl"
              icon3="SvgoPanBoy"
              title="Mortalidade por câncer infantojuvenil"
              subtitle="meninas e meninos"
              showSobreIndicador
              showComoCitar
              showNotaAcao
              :items="[
                { height: 170, value: 42.6, legend: 'Branca' },
                { height: 100, value: 24.2, legend: 'Negra' },
              ]"
            />
          </div>
          <div>
            <ChartColumn
              custom="orange"
              icon1="SvgoPanToy"
              icon2="SvgoPanToy2"
              icon3="SvgoPanToy3"
              title="Mortalidade por câncer infantojuvenil"
              subtitle="faixa etária"
              showSobreIndicador
              showComoCitar
              showNotaAcao
              :items="[
                { height: 150, value: 42.6, legend: '0 a 4' },
                { height: 200, value: 24.2, legend: '4 a 7' },
                { height: 200, value: 14.8, legend: '7 a 9' },
                { height: 100, value: 76.9, legend: '10 a 12' },
              ]"
            />
          </div>
        </div>

        <!-- Bloco - Série histórica mortalidade por câncer -->
        <!-- InteractionControlModal -->
        <div class="flex flex-col gap-16 md:gap-8">
          <FeatureSectionBlock
            titulo="Série histórica mortalidade por câncer"
            descricao="A análise da série temporal das taxas de mortalidade por câncer infantojuvenil
            permite identificar tendências ao longo dos anos, como aumento, redução ou
            estabilização dessas taxas. Possibilita também detectar períodos de mudanças,
            que podem estar associadas a diversos fatores como intervenções médicas,
            políticas de saúde ou outras causas."
          />

          <!--  FeatureIntroChart -->
          <FeatureIntroChart
            titulo="Série temporal de mortalidade por câncer infantojuvenil (0-19 anos),
                2003-2022"
            fonte="INCA, Atlas de Mortalidade por Câncer, 2024."
            showSobreIndicador
            showComoCitar
            showNotaAcao
            showLegislacao
          />

          <!--  Filtro Grafico ChartLine -->
          <div class="flex flex-wrap items-center justify-center gap-2">
            <UiLabelSerie text="Brasil" custom="brasil" />
            <UiLabelSerie text="Centro-Oeste" />
            <UiLabelSerie text="Nordeste" custom="blue" />
            <UiLabelSerie text="Norte" custom="orange" />
            <UiLabelSerie text="Sudeste" custom="darkblue" />
            <UiLabelSerie text="Sul" custom="gray" />
          </div>
          <!-- ChartLine  -->
          <div class="flex flex-col gap-8 md:flex-row">
            <figure
              class="relative max-h-[400px] overflow-clip md:z-10 md:max-h-none"
            >
              <img
                :src="`img/chart/chartline.svg`"
                class="h-full object-cover"
              />
            </figure>
          </div>
        </div>

        <!-- Parte 3 Acesso ao Tratamento -->
        <!-- FeatureEspecialista -->
        <div class="flex flex-col gap-8">
          <FeatureSectionTitle
            parte="Parte 3"
            titulo="Acesso ao Tratamento"
            id="parte3"
          />

          <FeatureEspecialista
            titulo="A situação do câncer infantojuvenil no Brasil, a qualificação do diagnóstico."
            imagemPerfil="img/home/sima.jpg"
            nomePerfil="Sima Ferman"
            cargoPerfil="Chefe do Serviço de Oncologia Pediátrica Instituto Nacional de Câncer- INCA"
            texto="<p>Atualmente, um grande número de crianças e adolescentes com câncer podem ser curadas com o diagnóstico precoce e tratamento em centros especializados. O progresso no tratamento do câncer foi mais evidente nos países de alta renda, onde as taxas de sobrevida em 5 anos estão em 80%, enquanto em países de baixa e média renda estas taxas ainda podem ser melhoradas. Muitos fatores são responsáveis por estas diferenças e constituem desafios a serem vencidos: dificuldade de acesso a diagnóstico e tratamento, doença avançada ao adquirir o diagnóstico, dificuldades financeiras e abandono de tratamento.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>"
            lerMaisText="Leia Mais"
            palavrasCorte="50"
          >
            <!-- Slot -->
            <figure class="relative w-full overflow-clip md:z-10">
              <img
                :src="`img/home/parte3.png`"
                class="h-full w-full object-cover"
              />
            </figure>
          </FeatureEspecialista>
        </div>

        <!-- Bloco - Atendimento infantojuvenil -->
        <!-- InteractionControlModal / UiButtonToogle / UiHighlight / Map / ChartBar -->
        <div class="flex flex-col gap-16 md:gap-8">
          <FeatureSectionBlock
            titulo="Atendimento infantojuvenil"
            descricao="Analisar o número de serviços habilitados em oncologia pediátrica no Brasil é
            fundamental, especialmente considerando a raridade do câncer infantojuvenil,
            que impõe desafios únicos ao planejamento e à distribuição dos serviços de
            saúde. Esse indicador serve, principalmente, para que os gestores de saúde
            possam alocar melhor os recursos e o planejamento da rede de serviços de
            oncologia pediátrica do Brasil, garantindo uma distribuição estratégica que
            equilibre acessibilidade e qualidade."
          />

          <!--  UiButtonToogle -->
          <UiButtonToogle
            :buttons="[
              { text: 'Serviços habilitados', active: true },
              { text: 'Oncopediatras', active: false },
            ]"
          />

          <!--  FeatureIntroChart -->
          <FeatureIntroChart
            titulo="Número de serviços habilitados em oncologia pediátrica, 2024"
            fonte="Portaria SAES/MS nº 688, de 28/08/2023."
            showSobreIndicador
            showComoCitar
            showNotaAcao
            showLegislacao
          />

          <!-- GraficoArea -->
          <div class="flex flex-col gap-8 md:flex-row">
            <div class="w-full md:w-3/12">
              <UiHighlight>
                <div class="flex flex-col gap-2 leading-none">
                  <div
                    class="font-slab text-3xl font-bold leading-none text-orange md:text-5xl"
                  >
                    77
                  </div>
                  <div
                    class="-mt-1 font-slab text-xl font-bold text-orange md:text-2xl"
                  >
                    serviços habilitados em oncologia pediátrica no Brasil
                  </div>
                  <div class="">
                    O país conta também com
                    <b>66 hospitais habilitados em hematologia.</b>
                  </div>
                </div>
                <div>
                  <div
                    class="font-slab text-xl font-bold text-orange md:text-2xl"
                  >
                    74,62%
                  </div>
                  <!-- Barra -->
                  <div>
                    <ChartBarSingle valor="55" />
                  </div>
                  <div class="leading-none">
                    Cobertura de atenção básica à saúde
                  </div>
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

          <!--  UiButtonToogle -->
          <UiButtonToogle
            :buttons="[
              { text: 'Serviços habilitados', active: false },
              { text: 'Oncopediatras', active: true },
            ]"
          />

          <!--  FeatureIntroChart -->
          <FeatureIntroChart
            titulo=" Razão de médicos oncologistas pediátricos por 1 milhão de crianças e
                adolescentes, 2023"
            fonte="DATASUS, CNES, 2024."
            showSobreIndicador
            showComoCitar
            showNotaAcao
            showLegislacao
          />

          <!-- GraficoArea -->
          <div class="flex flex-col gap-8 md:flex-row">
            <div class="w-full md:w-3/12">
              <UiHighlight>
                <div class="flex flex-col gap-2 leading-none">
                  <div
                    class="font-slab text-3xl font-bold leading-none text-orange md:text-5xl"
                  >
                    6,6
                  </div>
                  <div
                    class="-mt-1 font-slab text-xl font-bold text-orange md:text-2xl"
                  >
                    médicos oncologistas pediátricos
                  </div>
                  <div class="">
                    a cada 1 milhão de crianças e adolescentes, no Brasil
                  </div>
                </div>
                <div>
                  <div
                    class="font-slab text-xl font-bold text-orange md:text-2xl"
                  >
                    85,9%
                  </div>
                  <!-- Barra -->
                  <div>
                    <ChartBarSingle valor="85.9" />
                  </div>
                  <div class="leading-none">atendem no SUS</div>
                </div>
              </UiHighlight>
            </div>
            <div class="w-full md:w-6/12">
              <Map />
            </div>
            <div class="w-full md:w-3/12">
              <ChartBar
                titulo="Médicos oncologistas pediátricos"
                subtitulo="a cada 1 milhão de crianças e adolescentes"
                :graficos="[
                  {
                    região: 'Sudeste',
                    valor: 60,
                    legenda: '60% atendem no SUS',
                  },
                  {
                    região: 'Sul',
                    valor: 50,
                    legenda: '60% atendem no SUS',
                  },
                  {
                    região: 'Centro-Oeste',
                    valor: 40,
                    legenda: '60% atendem no SUS',
                  },
                  {
                    região: 'Nordeste',
                    valor: 40,
                    legenda: '60% atendem no SUS',
                  },
                  {
                    região: 'Norte',
                    valor: 40,
                    legenda: '60% atendem no SUS',
                  },
                ]"
              />
            </div>
          </div>
        </div>

        <!-- Bloco - ChartColumnSingle -->
        <div class="flex flex-col gap-10">
          <FeatureIntroChart
            titulo="Quantidade de hospitais com atendimento de câncer em crianças e adolescentes (0-19 anos), por média de casos atendidos ao ano, segundo habilitação, 2017-2021"
            fonte="Integrador RHC, 2024, casos analíticos."
            showSobreIndicador
            showComoCitar
            showLegislacao
          />

          <!-- ChartColumn -->
          <div class="grid gap-10 md:grid-cols-3 md:gap-8">
            <div>
              <ChartColumnSingle
                icon="SvgoPanBoypouco"
                title="Até 30 casos"
                :items="[
                  {
                    height: 50,
                    value: 31,
                    legend: 'Oncologia Ped.',
                    color: 'default',
                  },
                  {
                    height: 69,
                    value: 50,
                    legend: 'Hematologia',
                    color: 'blue',
                  },
                  {
                    height: 150,
                    value: 151,
                    legend: 'Não habilitado',
                    color: 'orange',
                  },
                ]"
              />
            </div>
            <div>
              <ChartColumnSingle
                icon="SvgoPanBoymedio"
                title="Até 30 casos"
                :items="[
                  {
                    height: 50,
                    value: 31,
                    legend: 'Oncologia Ped.',
                    color: 'default',
                  },
                  {
                    height: 69,
                    value: 50,
                    legend: 'Hematologia',
                    color: 'blue',
                  },
                  {
                    height: 150,
                    value: 151,
                    legend: 'Não habilitado',
                    color: 'orange',
                  },
                ]"
              />
            </div>
            <div>
              <ChartColumnSingle
                icon="SvgoPanBoymuito"
                title="Até 30 casos"
                :items="[
                  {
                    height: 50,
                    value: 31,
                    legend: 'Oncologia Ped.',
                    color: 'default',
                  },
                  {
                    height: 69,
                    value: 50,
                    legend: 'Hematologia',
                    color: 'blue',
                  },
                  {
                    height: 150,
                    value: 151,
                    legend: 'Não habilitado',
                    color: 'orange',
                  },
                ]"
              />
            </div>
          </div>
        </div>

        <!-- Bloco - ChartBarGroup -->
        <div class="flex flex-col gap-10">
          <FeatureIntroChart
            titulo="Casos de câncer infantojuvenil (0-19 anos) atendidos em hospitais não habilitados em oncologia pediátrica, segundo faixa etária e localidade, Brasil, 2017-2021"
            fonte="Integrador RHC, 2024, casos analíticos."
            showSobreIndicador
            showComoCitar
          />

          <div class="flex flex-col gap-6">
            <!-- Legenda -->
            <div class="flex items-center gap-2">
              <div class="h-4 w-4 rounded bg-primary"></div>
              <div class="translate-y-[1px] text-gray-80">
                Percentual de casos atendidos em hospitais não habilitados
              </div>
            </div>
            <!-- ChartBarGroup -->
            <div class="grid gap-10 md:grid-cols-3 md:gap-8">
              <div>
                <ChartBarGroup
                  icon="SvgoPanToyBlue"
                  title="Menores de 1 ano"
                  :items="[
                    {
                      value: 29.4,
                      legend: 'Brasil',
                      type: 'big',
                    },
                    {
                      value: 10,
                      legend: 'Centro-Oeste',
                    },
                    {
                      value: 50,
                      legend: 'Nordeste',
                    },
                    {
                      value: 60,
                      legend: 'Norte',
                    },
                    {
                      value: 34,
                      legend: 'Sudeste',
                    },
                    {
                      value: 20,
                      legend: 'Sul',
                    },
                  ]"
                />
              </div>
              <div>
                <ChartBarGroup
                  icon="SvgoPanToy2Blue"
                  title="1 a 14 anos"
                  :items="[
                    {
                      value: 29.4,
                      legend: 'Brasil',
                      type: 'big',
                    },
                    {
                      value: 10,
                      legend: 'Centro-Oeste',
                    },
                    {
                      value: 50,
                      legend: 'Nordeste',
                    },
                    {
                      value: 60,
                      legend: 'Norte',
                    },
                    {
                      value: 34,
                      legend: 'Sudeste',
                    },
                    {
                      value: 20,
                      legend: 'Sul',
                    },
                  ]"
                />
              </div>
              <div>
                <ChartBarGroup
                  icon="SvgoPanToy3Blue"
                  title="15 a 19 anos"
                  :items="[
                    {
                      value: 29.4,
                      legend: 'Brasil',
                      type: 'big',
                    },
                    {
                      value: 10,
                      legend: 'Centro-Oeste',
                    },
                    {
                      value: 50,
                      legend: 'Nordeste',
                    },
                    {
                      value: 60,
                      legend: 'Norte',
                    },
                    {
                      value: 34,
                      legend: 'Sudeste',
                    },
                    {
                      value: 20,
                      legend: 'Sul',
                    },
                  ]"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Bloco - Crianças e adolescentes que não iniciaram o tratamento -->
        <!-- InteractionControlModal / UiButtonToogle / UiHighlight / Map / ChartBar -->
        <div class="flex flex-col gap-16 md:gap-8">
          <FeatureSectionBlock
            titulo="Crianças e adolescentes que não iniciaram o tratamento"
          />
          <!--  FeatureIntroChart -->
          <FeatureIntroChart
            titulo="Proporção de crianças e adolescentes (0-19 anos) que não iniciaram o tratamento, 2017-2021"
            fonte="Integrador RHC, 2024, casos analíticos."
            showSobreIndicador
            showComoCitar
            showNotaAcao
          />

          <!-- GraficoArea -->
          <div class="flex flex-col gap-8 md:flex-row">
            <div class="w-full md:w-3/12">
              <UiHighlight>
                <div class="flex flex-col gap-2 leading-none">
                  <div
                    class="font-slab text-3xl font-bold leading-none text-orange md:text-5xl"
                  >
                    5,5%
                  </div>
                  <ChartBarSingle valor="5.5" />

                  <div
                    class="font-slab text-xl font-bold text-orange md:text-2xl"
                  >
                    não iniciaram o tratamento no Brasil
                  </div>
                </div>
              </UiHighlight>
            </div>
            <div class="w-full md:w-6/12">
              <Map />
            </div>
            <div class="w-full md:w-3/12">
              <ChartBar
                titulo="Proporção de crianças e adolescentes que não iniciaram o tratamento"
                :graficos="[
                  {
                    região: 'Sudeste',
                    valor: 60,
                  },
                  {
                    região: 'Sul',
                    valor: 50,
                  },
                  {
                    região: 'Centro-Oeste',
                    valor: 40,
                  },
                  {
                    região: 'Nordeste',
                    valor: 40,
                  },
                  {
                    região: 'Norte',
                    valor: 40,
                  },
                ]"
              />
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-16 md:gap-8">
          <!--  FeatureIntroChart -->
          <FeatureIntroChart
            titulo="Razões para não iniciar o tratamento, Brasil, 2017-2021"
            fonte="Integrador RHC, 2024, casos analíticos."
            showSobreIndicador
            showComoCitar
          />

          <!-- GraficoArea -->
          <div class="flex flex-col gap-8 md:flex-row">
            <div class="flex w-full items-center justify-center md:w-6/12">
              <figure
                class="relative max-h-[400px] overflow-clip md:z-10 md:max-h-none"
              >
                <img
                  :src="`img/chart/chartring.svg`"
                  class="h-full object-cover"
                />
              </figure>
            </div>
            <div class="w-full md:w-6/12">
              <ChartBarGroupSingle
                :items="[
                  {
                    value: 29.4,
                    legend: 'Outras',
                  },
                  {
                    value: 10,
                    legend: 'Óbito',
                  },
                  {
                    value: 50,
                    legend: 'Sem informação',
                  },
                  {
                    value: 60,
                    legend: 'Tratamento realizado fora',
                  },
                  {
                    value: 34,
                    legend:
                      'Doença avançada, falta de condições clínicas ou outras',
                  },
                  {
                    value: 20,
                    legend: 'Abandono do tratamento',
                  },
                  {
                    value: 30,
                    legend: 'Complicações do tratamento',
                  },
                  {
                    value: 10,
                    legend: 'Recusa do tratamento',
                  },
                ]"
              />
            </div>
          </div>
        </div>

        <!-- Bloco - Tempo para crianças e adolescentes iniciarem o tratamento -->
        <!-- InteractionControlModal / UiButtonToogle / UiHighlight / Map / ChartBar -->
        <div class="flex flex-col gap-16 md:gap-8">
          <FeatureSectionBlock
            titulo="Tempo para crianças e adolescentes iniciarem o tratamento"
            descricao="   O câncer é uma doença tempo-dependente com um desfecho favorável para o
            paciente. No Brasil, duas leis regulamentam o diagnóstico e o tratamento
            oncológico, estabelecendo prazos de 30 dias para a realização de exames e 60
            dias para o início do tratamento após a confirmação de neoplasia maligna. As
            leis reforçam que pacientes com câncer, incluindo crianças e adolescentes,
            iniciem o quanto antes o seu tratamento. Porém, no contexto da oncologia
            pediátrica, principalmente relacionada a fatores biológicos da doença, é
            necessário pensar em um ajuste às necessidades particulares dessa faixa
            etária. O tratamento oportuno é crucial para melhorar as chances de cura e
            reduzir o impacto da doença no desenvolvimento físico e emocional dos jovens
            pacientes."
          />
          <!--  FeatureIntroChart -->
          <FeatureIntroChart
            titulo="Proporção de casos de câncer infantojuvenil (0-19 anos) por intervalo de tempo decorrido (em dias), 2017-2021"
            fonte="Integrador RHC, 2024, casos analíticos."
            showSobreIndicador
            showComoCitar
            showNotaAcao
            showLegislacao
          />

          <!-- ChartBlocks -->
          <div class="grid gap-10 md:grid-cols-3 md:gap-16">
            <div>
              <ChartBlocks
                titulo="Entre primeira consulta e diagnóstico"
                diagnostico="Sem diagnóstico prévio"
                showComoCitar
                showLegislacao
                :legendas="[
                  { texto: '0 a 30 dias', valor: 34.6, cor: 'primary' },
                  {
                    texto: '31 a 60 dias',
                    valor: 39.5,
                    cor: 'blue',
                  },
                  { texto: '61 a 365 dias', valor: 19.5, cor: 'orange' },
                  { texto: 'Mais de 365 dias', valor: 6.5, cor: 'gray' },
                ]"
              >
                <figure
                  class="relative flex max-h-[400px] items-center justify-center overflow-clip md:z-10 md:max-h-none"
                >
                  <img
                    :src="`img/chart/chartBlock.svg`"
                    class="h-full object-cover"
                  />
                </figure>
              </ChartBlocks>
            </div>
            <div>
              <ChartBlocks
                titulo="Entre primeira consulta e diagnóstico"
                diagnostico="Sem diagnóstico prévio"
                showComoCitar
                showLegislacao
                showNotaAcao
                showSobreIndicador
                :legendas="[
                  { texto: '0 a 30 dias', valor: 34.6, cor: 'primary' },
                  {
                    texto: '31 a 60 dias',
                    valor: 39.5,
                    cor: 'blue',
                  },
                  { texto: '61 a 365 dias', valor: 19.5, cor: 'orange' },
                  { texto: 'Mais de 365 dias', valor: 6.5, cor: 'gray' },
                ]"
              >
                <figure
                  class="relative flex max-h-[400px] items-center justify-center overflow-clip md:z-10 md:max-h-none"
                >
                  <img
                    :src="`img/chart/chartBlock.svg`"
                    class="h-full object-cover"
                  />
                </figure>
              </ChartBlocks>
            </div>
            <div>
              <ChartBlocks
                titulo="Entre primeira consulta e diagnóstico"
                diagnostico="Sem diagnóstico prévio"
                showComoCitar
                showLegislacao
                showNotaAcao
                showSobreIndicador
                :legendas="[
                  { texto: '0 a 30 dias', valor: 34.6, cor: 'primary' },
                  {
                    texto: '31 a 60 dias',
                    valor: 39.5,
                    cor: 'blue',
                  },
                  { texto: '61 a 365 dias', valor: 19.5, cor: 'orange' },
                  { texto: 'Mais de 365 dias', valor: 6.5, cor: 'gray' },
                ]"
              >
                <figure
                  class="relative flex max-h-[400px] items-center justify-center overflow-clip md:z-10 md:max-h-none"
                >
                  <img
                    :src="`img/chart/chartBlock.svg`"
                    class="h-full object-cover"
                  />
                </figure>
              </ChartBlocks>
            </div>
          </div>
        </div>

        <!-- Deslocamento de crianças e adolescentes para tratamento -->
        <div class="flex flex-col gap-16 md:gap-8">
          <FeatureSectionBlock
            titulo="Deslocamento de crianças e adolescentes para tratamento"
            descricao=" Avaliar o deslocamento para tratamento permite a identificação de lacunas no
            sistema de saúde, proporcionando uma melhor base para o desenvolvimento de
            políticas e estratégias direcionadas a organizar o fluxo da rede e melhorar a
            distribuição de unidades que ofertam tratamento, reduzindo desigualdades e
            aumentando as chances de sucesso no combate à doença."
          />
          <!--  FeatureIntroChart -->
          <FeatureIntroChart
            titulo=" Proporção de crianças e adolescentes (0-19 anos) que se deslocaram em
                busca de tratamento, 2017-2021"
            fonte="Integrador RHC, 2024, casos analíticos."
            showSobreIndicador
            showComoCitar
            showNotaAcao
            showLegislacao
          />

          <!--  UiButtonToogle -->
          <UiButtonToogle
            :buttons="[
              { text: 'Deslocados', active: true },
              { text: 'Atendidos', active: false },
            ]"
          />
          <!-- GraficoArea -->
          <div class="flex flex-col gap-8 md:flex-row">
            <div class="w-full md:w-3/12">
              <UiHighlight>
                <div
                  class="flex flex-col gap-3 font-slab text-xl font-bold leading-none text-orange md:text-2xl"
                >
                  <div class="text-3xl md:text-5xl">7,3%</div>
                  <div class="">
                    das crianças e adolescentes buscaram atendimento fora da
                    região de sua residência
                  </div>
                </div>
              </UiHighlight>
            </div>
            <div class="w-full md:w-6/12">
              <Map />
            </div>
            <div class="w-full md:w-3/12">
              <ChartBarDeslocamento
                titulo="Percentual que se deslocaram e principais destinos"
                subtitulo="a cada 1 milhão de crianças e adolescentes"
                :graficos="[
                  {
                    região: 'Norte',
                    valores: [
                      { nome: 'Sudeste', valor: 15 },
                      { nome: 'Nordeste', valor: 10 },
                      { nome: 'Norte', valor: 5 },
                    ],
                    percentual: ((15 + 10 + 5) / 100) * 100,
                  },
                  {
                    região: 'Nordeste',
                    valores: [
                      { nome: 'Sudeste', valor: 15 },
                      { nome: 'Nordeste', valor: 10 },
                      { nome: 'Norte', valor: 5 },
                    ],
                    percentual: ((15 + 10 + 5) / 100) * 100,
                  },
                  {
                    região: 'Peru',
                    valores: [
                      { nome: 'Amazonas', valor: 20 },
                      { nome: 'Lima', valor: 30 },
                      { nome: 'Cusco', valor: 10 },
                    ],
                    percentual: ((20 + 30 + 10) / 100) * 100,
                  },
                ]"
                :max="100"
              />
            </div>
          </div>

          <!--  UiButtonToogle -->
          <UiButtonToogle
            :buttons="[
              { text: 'Deslocados', active: false },
              { text: 'Atendidos', active: true },
            ]"
          />
          <!-- GraficoArea -->
          <div class="flex flex-col gap-8 md:flex-row">
            <div class="w-full md:w-3/12">
              <UiHighlight>
                <div
                  class="flex flex-col gap-3 font-slab text-xl font-bold leading-none text-orange md:text-2xl"
                >
                  <div class="text-3xl md:text-5xl">7,3%</div>
                  <div class="">
                    das crianças e adolescentes buscaram atendimento fora da
                    região de sua residência
                  </div>
                </div>
              </UiHighlight>
            </div>
            <div class="w-full md:w-6/12">
              <Map />
            </div>
            <div class="w-full md:w-3/12">
              <ChartBarDeslocamento
                titulo="Percentual que se deslocaram e principais destinos"
                subtitulo="a cada 1 milhão de crianças e adolescentes"
                :graficos="[
                  {
                    região: 'Norte',
                    valores: [
                      { nome: 'Sudeste', valor: 15 },
                      { nome: 'Nordeste', valor: 10 },
                      { nome: 'Norte', valor: 5 },
                    ],
                    percentual: ((15 + 10 + 5) / 100) * 100,
                  },
                  {
                    região: 'Nordeste',
                    valores: [
                      { nome: 'Sudeste', valor: 15 },
                      { nome: 'Nordeste', valor: 10 },
                      { nome: 'Norte', valor: 5 },
                    ],
                    percentual: ((15 + 10 + 5) / 100) * 100,
                  },
                  {
                    região: 'Peru',
                    valores: [
                      { nome: 'Amazonas', valor: 20 },
                      { nome: 'Lima', valor: 30 },
                      { nome: 'Cusco', valor: 10 },
                    ],
                    percentual: ((20 + 30 + 10) / 100) * 100,
                  },
                ]"
                :max="100"
              />
            </div>
          </div>
        </div>

        <!-- Parte 4 -->
        <!-- FeatureEspecialista -->
        <div class="flex flex-col gap-8">
          <FeatureSectionTitle
            parte="Parte 4"
            titulo="Monitoramento da Informação"
            id="parte4"
          />

          <FeatureEspecialista
            titulo="A importância do uso do registro hospitalar de câncer na gestão das políticas públicas de câncer infantojuvenil."
            imagemPerfil="img/home/sima.jpg"
            nomePerfil="Rejane de Souza Reis"
            cargoPerfil="Associação Brasileira de Registros de Câncer"
            texto="<p>O conhecimento das informações acerca de uma doença é primordial para gestão de saúde pública e tomada de decisões, vide o que estamos vivenciando com a pandemia da COVID-19. No câncer, a necessidade desse conhecimento das informações não é diferente. Para suprir a demanda e alocar esforços e recursos, o gestor de saúde precisa contar com o apoio dos pilares da vigilância do câncer: incidência, morbidade hospitalar e mortalidade.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>"
            lerMaisText="Leia Mais"
            palavrasCorte="50"
          >
            <!-- Slot -->
            <figure class="relative w-full overflow-clip md:z-10">
              <img
                :src="`img/home/parte4.png`"
                class="h-full w-full object-cover"
              />
            </figure>
          </FeatureEspecialista>
        </div>

        <!-- Registro de Câncer de Base Populacional  -->
        <div class="flex flex-col gap-16 md:gap-8">
          <FeatureSectionBlock
            titulo="Registro de Câncer de Base Populacional"
            descricao="Os Registros de Câncer de Base Populacional (RCBP) são essenciais para o monitoramento da incidência do câncer, permitindo a formulação e avaliação de políticas de saúde baseadas em informações reais. Eles identificam tendências e padrões epidemiológicos, apoiam pesquisas clínicas e epidemiológicas, e contribuem para a melhoria da qualidade do atendimento ao revelar lacunas nos serviços de saúde. Além disso, os RCBP também podem auxiliar em campanhas de conscientização e educação pública sobre o câncer, facilitando a detecção precoce e a abordagem adequada da doença."
          />

          <!--  FeatureIntroChart -->
          <FeatureIntroChart
            titulo="Número de Registros de Câncer de Base Populacional ativos, Brasil, 2024"
            fonte="MS/INCA/DVAS, Registro de Câncer de Base Populacional, 2024."
            showComoCitar
          />

          <!-- GraficoArea -->
          <div class="flex flex-col gap-8 md:flex-row">
            <div class="w-full md:w-3/12">
              <UiHighlight>
                <div
                  class="flex flex-col gap-3 font-slab text-xl font-bold leading-none text-orange md:text-2xl"
                >
                  <div>
                    <div class="text-3xl md:text-5xl">29</div>
                    <div class="">ativos no Brasil</div>
                  </div>
                  <div>
                    <div class="text-3xl md:text-5xl">1</div>
                    <div class="">em fase de implementação</div>
                  </div>
                </div>
              </UiHighlight>
            </div>
            <div class="w-full md:w-6/12">
              <Map />
            </div>
            <div class="w-full md:w-3/12">
              <ChartBar
                titulo="RCBP ativos"
                :graficos="[
                  {
                    região: 'Sudeste',
                    valor: 60,
                    legenda: '0 em implementação',
                  },
                  {
                    região: 'Sul',
                    valor: 50,
                    legenda: '0 em implementação',
                  },
                  {
                    região: 'Centro-Oeste',
                    valor: 40,
                    legenda: '0 em implementação',
                  },
                  {
                    região: 'Nordeste',
                    valor: 40,
                    legenda: '0 em implementação',
                  },
                  {
                    região: 'Norte',
                    valor: 40,
                    legenda: '0 em implementação',
                  },
                ]"
              />
            </div>
          </div>

          <!--  FeatureIntroChart -->
          <FeatureIntroChart
            titulo="Quantidade de RCBPs contribuintes com informação por ano, Brasil*, 2011-2020"
            fonte="MS/INCA/DVAS, Registro de Câncer de Base Populacional, 2024."
            showComoCitar
          />

          <!-- GraficoArea -->
          <div class="flex flex-col gap-8 md:flex-row">
            <div class="w-full">
              <figure
                class="relative max-h-[400px] overflow-clip md:z-10 md:max-h-none"
              >
                <img
                  :src="`img/chart/chartline2.svg`"
                  class="h-full object-cover"
                />
              </figure>
            </div>
          </div>

          <FeatureSectionBlock
            titulo="Registros Hospitalares de Câncer"
            descricao="Os registros hospitalares de câncer são fundamentais para a gestão da saúde pública, fornecendo informações detalhadas sobre diagnóstico, tratamento e desfecho dos pacientes com câncer. Eles permitem o monitoramento assistência prestada ao doente (morbidade hospitalar), apoiam a formulação e a avaliação de políticas de saúde dentro da sua unidade de saúde, e facilitam pesquisas clínicas e epidemiológicas. Além disso, ajudam a identificar lacunas na qualidade do atendimento prestados aos pacientes e a melhorar as estratégias de tratamento. As informações dos RHC permitem também fazer uma avaliação da rede oncológica como um todo."
          />

          <!--  FeatureIntroChart -->
          <FeatureIntroChart
            titulo="Casos de câncer infantojuvenil (0-19 anos) registrados nos hospitais, Brasil, 2017-2021"
            fonte="Integrador RHC, 2024, casos analíticos."
            showComoCitar
          />

          <!-- GraficoArea -->
          <div class="flex flex-col gap-8 md:flex-row">
            <div class="w-full">
              <figure
                class="relative max-h-[400px] overflow-clip md:z-10 md:max-h-none"
              >
                <img
                  :src="`img/chart/chartline3.svg`"
                  class="h-full object-cover"
                />
              </figure>
            </div>
          </div>

          <!--  FeatureIntroChart -->
          <FeatureIntroChart
            titulo="Percentual de diagnóstico de casos de câncer infantojuvenil (0-19 anos) por verificação microscópica, segundo localidade, 2017-2021"
            fonte="Integrador RHC, 2024, casos analíticos."
            showComoCitar
          />

          <div class="flex">
            <div class="md:w-6/12">
              <ChartBarGroupLimit
                :recomendavel="80"
                :items="[
                  {
                    value: 29.4,
                    legend: 'Brasil',
                    type: 'big',
                  },
                  {
                    value: 10,
                    legend: 'Centro-Oeste',
                  },
                  {
                    value: 50,
                    legend: 'Nordeste',
                  },
                  {
                    value: 60,
                    legend: 'Norte',
                  },
                  {
                    value: 34,
                    legend: 'Sudeste',
                  },
                  {
                    value: 20,
                    legend: 'Sul',
                  },
                ]"
              />
            </div>
          </div>

          <!--  FeatureIntroChart -->
          <FeatureIntroChart
            titulo="Incompletude de dados obrigatórios, Brasil, 2017-20211"
            fonte="Integrador RHC, 2024, casos analíticos."
            showComoCitar
          />

          <div class="flex gap-8 md:gap-16">
            <div class="md:w-6/12">
              <ChartBarGroupSingleNumber
                title="Informação classificada como Excelente"
                subtitle="<5% sem informação"
                :items="[
                  {
                    value: 29.4,
                    legend: 'Outras',
                  },
                  {
                    value: 10,
                    legend: 'Óbito',
                  },
                  {
                    value: 50,
                    legend: 'Sem informação',
                  },
                  {
                    value: 60,
                    legend: 'Tratamento realizado fora',
                  },
                  {
                    value: 34,
                    legend:
                      'Doença avançada, falta de condições clínicas ou outras',
                  },
                  {
                    value: 20,
                    legend: 'Abandono do tratamento',
                  },
                  {
                    value: 30,
                    legend: 'Complicações do tratamento',
                  },
                  {
                    value: 10,
                    legend: 'Recusa do tratamento',
                  },
                ]"
              />
            </div>
            <div class="md:w-6/12">
              <ChartBarGroupSingleNumber
                title="Informação classificada como Excelente"
                subtitle="<5% sem informação"
                :items="[
                  {
                    value: 29.4,
                    legend: 'Outras',
                  },
                  {
                    value: 10,
                    legend: 'Óbito',
                  },
                  {
                    value: 50,
                    legend: 'Sem informação',
                  },
                  {
                    value: 60,
                    legend: 'Tratamento realizado fora',
                  },
                  {
                    value: 34,
                    legend:
                      'Doença avançada, falta de condições clínicas ou outras',
                  },
                  {
                    value: 20,
                    legend: 'Abandono do tratamento',
                  },
                  {
                    value: 30,
                    legend: 'Complicações do tratamento',
                  },
                  {
                    value: 10,
                    legend: 'Recusa do tratamento',
                  },
                ]"
              />
            </div>
          </div>

          <!-- Espaço para barra -->
          <div class="py-28"></div>
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
