<template>
  <layoutNav />

  <main>
    <!-- UI KIT -->

    <!-- uiLabel -->
    <section>
      <div class="separadores">
        <div>
          <span class="introlabel"> uiLabel (Label): </span>
          <span class="p-4">
            <b>Parametros:</b> text / link / custom [noticia, publicacao, projeto, curso ,
            estrategia, outline]
          </span>
        </div>

        <div class="flex flex-col gap-2 py-5 md:flex-row">
          <div>
            <div class="flex flex-wrap gap-4 border border-gray-5 bg-gray-5 p-5">
              <!--  Botao Base   -->
              <uiLabel text="Rótulo do destaque" link="#" />
              <uiLabel text="Notícia" link="#" custom="noticia" />
              <uiLabel text="Publicação" link="#" custom="publicacao" />
              <uiLabel text="Projeto" link="#" custom="projeto" />
              <uiLabel text="Curso" link="#" custom="curso" />
              <uiLabel text="Estrategia" link="#" custom="estrategia" />
              <uiLabel text="outlinewhite" link="#" custom="outlinewhite" />
              <uiLabel text="outlineblue" link="#" custom="outlineblue" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- uiTag -->
    <section>
      <div class="separadores">
        <div>
          <span class="introlabel"> uiTag (Tags): </span>
          <span class="p-4">
            <b>Parametros:</b> text / link / custom [iconleft] / objeto [cancer ,
            institucional , obesidade ]
          </span>
        </div>

        <div class="flex flex-col gap-2 py-5 md:flex-row">
          <!--  Tamanho normal -->
          <div>
            <div class="flex flex-wrap gap-4 border border-gray-5 p-5">
              <!--  Botao Base   -->
              <uiTag text="Câncer Infantojuvenil" link="#" objeto="cancer" />
              <uiTag text="Institucional" link="#" objeto="institucional" />
              <uiTag text="Obesidade Infantojuvenil" link="#" objeto="obesidade" />
              <!--  Botao Base com Icone  -->
              <uiTag text="Advocacy no legislativo" link="#">
                <SvgoDashboard />
              </uiTag>
              <!--  Botao Base com Icone a esquerda -->
              <uiTag text="Advocacy no legislativo" link="#" custom="iconleft">
                <SvgoDashboard />
              </uiTag>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SVGs -->
    <section>
      <div class="separadores">
        <div>
          <span class="introlabel"> Svgo (SVGs): </span>
          <span class="p-4">
            <b>Parametros:</b> text-[size/color] / filled (mantem cor do svg) /
            :fontControlled="false" (funciona estilos padrões)
          </span>
        </div>
        <div class="flex flex-wrap gap-4 py-8">
          <!-- Controllers -->
          <!-- SvgoHome -->
          <SvgoHome class="text-2xl" />
          <!-- SvgoAngleleft -->
          <SvgoAngleleft class="text-2xl" />
          <!-- SvgoAngleright -->
          <SvgoAngleright class="text-2xl" />
          <!-- SvgoArrowright -->
          <SvgoArrowright class="text-2xl" />
          <!-- SvgoArrowupright -->
          <SvgoArrowupright class="text-2xl" />
          <!-- SvgoChevron -->
          <SvgoChevron class="text-2xl" />
          <!-- SvgoChevronup -->
          <SvgoChevronup class="text-2xl" />
          <!-- SvgoClose -->
          <SvgoClose class="text-2xl" />
          <!-- SvgoDashboard -->
          <SvgoDashboard class="text-2xl" />
          <!-- SvgoDownload -->
          <SvgoDownload class="text-2xl" />
          <!-- SvgoEdit -->
          <SvgoEdit class="text-2xl" />
          <!-- SvgoEnlarge -->
          <SvgoEnlarge class="text-2xl" />
          <!-- SvgoMenu -->
          <SvgoMenu class="text-2xl" />
          <!-- SvgoMinus -->
          <SvgoMinus class="text-2xl" />
          <!-- SvgoPlus -->
          <SvgoPlus class="text-2xl" />
          <!-- SvgoMore -->
          <SvgoMore class="text-2xl" />
          <!-- SvgoSearch -->
          <SvgoSearch class="text-2xl" />
          <!-- SOCIAL -->
          <!-- SvgoYoutube -->
          <SvgoYoutube class="text-2xl" />
          <!-- SvgoFacebook -->
          <SvgoFacebook class="text-2xl" />
          <!-- SvgoInstagram -->
          <SvgoInstagram class="text-2xl" />
          <!-- SvgoLinkedin -->
          <SvgoLinkedin class="text-2xl" />
          <!-- Gerais -->
          <!-- SvgoFruits -->
          <SvgoFruits class="text-2xl" />
          <!-- SvgoSun -->
          <SvgoSun class="text-2xl" />
          <!-- SvgoMoon -->
          <SvgoMoon class="text-2xl" />
          <!-- Institucionais -->
          <!-- SvgoApple -->
          <SvgoApple class="text-2xl" />
          <!-- SvgoInstitucional -->
          <SvgoInstitucional class="text-2xl" />
          <!-- SvgoRibbon -->
          <SvgoRibbon class="text-2xl" />
          <!-- ODS -->
          <!-- SvgoOds2 -->
          <SvgoOds2 class="text-2xl" />
          <!-- SvgoOds3 -->
          <SvgoOds3 class="text-2xl" />
          <!-- SvgoOds10 -->
          <SvgoOds10 class="text-2xl" />
          <!-- SvgoOds17 -->
          <SvgoOds17 class="text-2xl" />
          <!--  Somente Linhas -->
          <!-- SvgoRecomendacao -->
          <SvgoRecomendacao class="text-2xl" filled />
          <!-- SvgoApple3 -->
          <SvgoApple3 class="text-2xl" filled />
          <!-- SvgoCancer2 -->
          <SvgoCancer2 class="text-2xl" filled />
          <!-- SvgoComment1 -->
          <SvgoComment1 class="text-2xl" filled />
          <!-- SvgoDigitalasset -->
          <SvgoDigitalasset class="text-2xl" filled />
          <!-- SvgoDigitalasset2 -->
          <SvgoDigitalasset2 class="text-2xl" filled />
          <!-- SvgoDigitalization -->
          <SvgoDigitalization class="text-2xl" filled />
          <!-- SvgoDiploma -->
          <SvgoDiploma class="text-2xl" filled />
          <!-- SvgoEfficiency -->
          <SvgoEfficiency class="text-2xl" filled />
          <!-- SvgoFile1 -->
          <SvgoFile1 class="text-2xl" filled />
          <!-- SvgoFile2 -->
          <SvgoFile2 class="text-2xl" filled />
          <!-- SvgoLaptopribbon -->
          <SvgoLaptopribbon class="text-2xl" filled />
          <!-- SvgoManagement -->
          <SvgoManagement class="text-2xl" filled />
          <!-- SvgoObesidade1 -->
          <SvgoObesidade1 class="text-2xl" filled />
          <!-- SvgoObesidade2 -->
          <SvgoObesidade2 class="text-2xl" filled />
          <!-- SvgoSignpost -->
          <SvgoSignpost class="text-2xl" filled />
          <!-- SvgoStrategy -->
          <SvgoStrategy class="text-2xl" filled />
          <!-- SvgoSus -->
          <SvgoSus class="text-2xl" filled />
          <!-- SvgoValorcentral -->
          <SvgoValorcentral class="text-2xl" filled />
          <!-- SvgoVideolesson -->
          <SvgoVideolesson class="text-2xl" filled />
          <!-- SvgoVision -->
          <SvgoVision class="text-2xl" filled />
        </div>
      </div>
    </section>
    <!-- uiIcon -->
    <section>
      <div class="separadores">
        <div>
          <span class="introlabel"> uiIcon (Icone): </span>
          <span class="p-4">
            <b>Parametros:</b> link / custom [primary , secondary, tertiary, small ,
            medium, large ]
          </span>
        </div>
        <div class="flex gap-4">
          <!-- Primary -->secondaryuiB
          <div class="flex flex-col gap-2 py-5">
            <div>Estilo Primary</div>
            <div class="flex flex-wrap items-center gap-4 bg-gray-5 p-5">
              <uiIcon custom="primary small" link="#">
                <SvgoEdit />
              </uiIcon>
              <uiIcon custom="primary" link="#">
                <SvgoEdit />
              </uiIcon>
              <uiIcon custom="primary large" link="#">
                <SvgoEdit />
              </uiIcon>
            </div>
          </div>
          <!-- Secondary -->
          <div class="flex flex-col gap-2 py-5">
            <div>Estilo secondary</div>
            <div
              class="flex flex-wrap items-center gap-4 border border-gray-5 bg-white p-5"
            >
              <uiIcon custom="secondary small" link="#">
                <SvgoEdit />
              </uiIcon>
              <uiIcon custom="secondary" link="#">
                <SvgoEdit />
              </uiIcon>
              <uiIcon custom="secondary large" link="#">
                <SvgoEdit />
              </uiIcon>
            </div>
          </div>
          <!-- Tertiary -->
          <div class="flex flex-col gap-2 py-5">
            <div>Estilo Tertiary</div>
            <div
              class="flex flex-wrap items-center gap-4 border border-gray-5 bg-white p-5"
            >
              <uiIcon custom="tertiary small" link="#">
                <SvgoEdit />
              </uiIcon>
              <uiIcon custom="tertiary" link="#">
                <SvgoEdit />
              </uiIcon>
              <uiIcon custom="tertiary large" link="#">
                <SvgoEdit />
              </uiIcon>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- uiButton -->
    <section>
      <div class="separadores">
        <div>
          <span class="introlabel"> uiButton (Botões): </span>
          <span class="p-4">
            <b>Parametros:</b> text / link / custom [iconleft , small , medium, large ]
          </span>
        </div>
        <div class="flex flex-col gap-2 py-5 md:flex-row">
          <!--  Tamanho normal -->
          <div>
            <div>Tamanho Normal</div>
            <div class="flex flex-col flex-wrap gap-4 bg-gray-5 p-5">
              <!--  Botao Base   -->
              <uiButton text="Btn label" link="#" />
              <!--  Botao Base com Icone  -->
              <uiButton text="Btn label" link="#">
                <SvgoDashboard class="text-2xl" />
              </uiButton>
              <!--  Botao Base com Icone a esquerda -->
              <uiButton text="Btn label" link="#" custom="iconleft">
                <SvgoDashboard class="text-2xl" />
              </uiButton>
            </div>
          </div>
          <!-- Tamanho Large -->
          <div>
            <div>Tamanho Large</div>
            <div class="flex flex-col flex-wrap gap-4 bg-gray-5 p-5">
              <!--  Botao Large  -->
              <uiButton text="Btn label" link="#" custom="large" />
              <!--  Botao Large com Icone  -->
              <uiButton text="Btn label" link="#" custom="large">
                <SvgoDashboard class="text-2xl" />
              </uiButton>
              <!--  Botao Large com Icone a esquerda -->
              <uiButton text="Btn label" link="#" custom="large iconleft">
                <SvgoDashboard class="text-2xl" />
              </uiButton>
            </div>
          </div>
          <!-- Tamanho Small -->
          <div>
            <div>Tamanho Small</div>
            <div class="flex flex-col flex-wrap gap-4 bg-gray-5 p-5">
              <!--  Botao Small  -->
              <uiButton text="Btn label" link="#" custom="small" />
              <!--  Botao Small com Icone  -->
              <uiButton text="Btn label" link="#" custom="small">
                <SvgoDashboard class="text-2xl" />
              </uiButton>
              <!--  Botao Small com Icone a esquerda -->
              <uiButton text="Btn label" link="#" custom="small iconleft">
                <SvgoDashboard class="text-2xl" />
              </uiButton>
            </div>
          </div>
          <!-- uiButtonVoltar -->
          <div>
            <div>Botão Voltar</div>
            <uiButtonVoltar text="Voltar" link="#" custom="iconleft">
              <SvgoAngleleft class="text-2xl" />
            </uiButtonVoltar>
          </div>
        </div>
      </div>
    </section>
    <!-- Fontes -->
    <section>
      <div class="desiderata-text-custom separadores">
        <span class="introlabel">Fontes: (desiderata-text-custom)</span>
        <h2>
          Nosso compromisso é com a mudança do cenário do câncer e da obesidade
          infantojuvenil.
        </h2>
        <h3>
          Nosso compromisso é com a mudança do cenário do câncer e da obesidade
          infantojuvenil.
        </h3>
        <h5>
          Nosso compromisso é com a mudança do cenário do câncer e da obesidade
          infantojuvenil.
        </h5>
        <h3 class="light">
          Nosso compromisso é com a mudança do cenário do câncer e da obesidade
          infantojuvenil.
        </h3>
        <h4>
          Nosso compromisso é com a mudança do cenário do câncer e da obesidade
          infantojuvenil.
        </h4>
        <div>Rótulo pequeno</div>
        <p class="large">
          <a src="#">
            Nosso compromisso é com a mudança do cenário do câncer e da obesidade</a
          >
          infantojuvenil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          beatae, a eos fugiat earum qui cumque totam incidunt rerum, eum quisquam, modi
          asperiores quis nisi cum nulla eaque ex eius.
        </p>
        <p>
          Nosso compromisso é com a mudança do cenário do câncer e da obesidade
          infantojuvenil. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <a src="#">Libero beatae</a>, a eos fugiat earum qui cumque totam incidunt
          rerum, eum quisquam, modi asperiores quis nisi cum nulla eaque ex eius.
        </p>
        <h4 class="light">
          Nosso compromisso é com a mudança do cenário do câncer e da obesidade
          infantojuvenil.
        </h4>
      </div>
    </section>
    <!-- Cores -->
    <section>
      <div class="separadores">
        <span class="rounded-lg bg-black p-2 font-slab text-xl text-white">Cores:</span>
        <div
          class="grid grid-cols-2 items-center gap-4 py-5 text-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
        >
          <div class="border bg-white p-4">White</div>
          <div class="border bg-black p-4 text-white">Black</div>
          <div class="border bg-beige p-4">Beige</div>
          <div class="border bg-yellow p-4">Yellow</div>
          <div class="border bg-yellow-20 p-4">Yellow 20</div>
          <div class="border bg-yellow-50 p-4">Yellow 50</div>
          <div class="border bg-orange p-4">Orange</div>
          <div class="border bg-gray p-4">Gray Desiderata</div>
          <div class="border bg-gray-5 p-4">Gray 5</div>
          <div class="border bg-gray-20 p-4">Gray 20</div>
          <div class="border bg-gray-80 p-4">Gray 80</div>
          <div class="border bg-blue p-4">Blue Desiderata</div>
          <div class="border bg-blue-light p-4">Blue Light</div>
          <div class="border bg-blue-dark p-4 text-white">Blue Dark</div>
          <div class="border bg-teal p-4">Teal</div>
          <div class="border bg-blue-5 p-4">Blue 5</div>
          <div class="border bg-blue-20 p-4">Blue 20</div>
          <div class="border bg-blue-70 p-4">Blue 70</div>
          <div class="border bg-green-5 p-4">Green 5</div>
          <div class="border bg-green-60 p-4">Green 60</div>
        </div>
      </div>
    </section>

    <!--  Card CardNoticia -->
    <section>
      <div class="separadores">
        <div class="flex flex-col md:flex-row">
          <span class="introlabel"> Componete CardNoticia: </span>
          <span class="p-4">
            <b>Parametros:</b> titulo / imagem / data / hora / categoria / btniconlink
          </span>
        </div>

        <!-- Modelo1 -->
        <div class="grid gap-8 py-10 md:grid-cols-4">
          <CardNoticia
            imagem="noticias/noticia1.jpg"
            titulo="Inciativa de diagnóstico precoce do câncer infantojuvenil avança em Pernambuco"
            data="20 dez, 2023"
            hora="5 min"
            btniconlink="#"
          />
        </div>
      </div>
    </section>
    <!--  Card CardPublicacao -->
    <section>
      <div class="separadores">
        <div class="flex flex-col md:flex-row">
          <span class="introlabel"> Componete CardPublicacao: </span>
          <span class="p-4">
            <b>Parametros:</b> titulo / imagem / data / hora / categoria / btniconlink
          </span>
        </div>

        <!-- Modelo1 -->
        <div class="grid gap-8 py-10 md:grid-cols-4">
          <CardPublicacao
            imagem="publicacao/publicacao1.jpg"
            titulo="Inciativa de diagnóstico precoce do câncer infantojuvenil avança em Pernambuco"
            data="Dez, 2023"
            autor="Por Instituto Desiderata"
            btniconlink="#"
          />
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
      banner: data.banner,
    };
  },
  methods: {},
};
</script>
<style>
.introlabel {
  @apply mb-2  flex w-fit flex-col rounded-lg bg-black p-2 font-slab text-xl text-white md:flex-row;
}
.separadores {
  @apply container mx-auto border-b border-gray-5 p-5 md:p-0 md:py-10;
}
</style>
