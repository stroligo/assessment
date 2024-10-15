<!-- Componente Footer -->
<script setup>
const props = defineProps(['footer']);
</script>
<template>
  <section class="bg-gray-10">
    <div class="container mx-auto py-15 md:px-0 md:py-24">
      <!-- Titulo Mobile -->
      <div class="mb-6 flex w-full text-center md:hidden">
        <h2 class="text-blue-dark">Conheça mais sobre o nosso trabalho</h2>
      </div>
    </div>
  </section>
  <footer>
    <!--  Content Footer -->
    <div class="bg-blue text-white">
      <div
        class="container mx-auto flex flex-col gap-12 px-5 pb-5 pt-15 md:px-0 md:pb-10 md:pt-24"
      >
        <div class="flex flex-col-reverse gap-12 md:flex-row md:gap-8">
          <!-- Col1 -->
          <div class="flex flex-col gap-10 md:w-6/12 md:gap-10">
            <!-- Logos -->
            <div class="flex w-full gap-4 divide-x md:gap-8">
              <div class="flex w-3/12 items-center justify-center">
                <SvgoLogo
                  class="w-[80px] md:w-[120px]"
                  :fontControlled="false"
                  filled
                />
              </div>
              <div class="flex items-center pl-4 md:w-9/12 md:pl-8">
                <SvgoPanorama
                  class="w-full max-w-[310px] md:w-full"
                  :fontControlled="false"
                  filled
                />
              </div>
            </div>
            <div class="flex flex-col gap-6">
              <!--Equipe editorial -->
              <div class="flex flex-col gap-3">
                <div class="font-slab text-green-10">Equipe editorial</div>
                <div>
                  Anna Carolina Cardoso, Carolina Motta, Claudia Bezerra,
                  Michele G. da Costa e Roberta Costa Marques
                </div>
              </div>
              <!--Colaboradores -->
              <div class="flex flex-col gap-3">
                <div class="font-slab text-green-10">Colaboradores</div>
                <div>
                  Alfredo Scaff, Karina de Cássia Braga Ribeiro e Rejane de
                  Souza Reis
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-6">
              <!-- Redes Sociais -->
              <div class="flex flex-col gap-4">
                <div class="font-slab text-sm font-bold md:text-base">
                  Acesse nossas redes sociais
                </div>
                <div class="flex gap-4 text-blue-dark">
                  <button
                    class="flex h-11 w-11 items-center justify-center rounded-full bg-yellow text-2xl transition-all ease-in-out hover:scale-105"
                  >
                    <SvgoInstagram />
                  </button>
                  <button
                    class="flex h-11 w-11 items-center justify-center rounded-full bg-yellow text-2xl transition-all ease-in-out hover:scale-105"
                  >
                    <SvgoFacebook />
                  </button>
                  <button
                    class="flex h-11 w-11 items-center justify-center rounded-full bg-yellow text-2xl transition-all ease-in-out hover:scale-105"
                  >
                    <SvgoLinkedin />
                  </button>
                  <button
                    class="flex h-11 w-11 items-center justify-center rounded-full bg-yellow text-2xl transition-all ease-in-out hover:scale-105"
                  >
                    <SvgoYoutube />
                  </button>
                </div>
              </div>
              <!--Endereço -->
              <div class="flex">
                Rua Humaitá, 275 - 7° andar, Humaitá, Rio de Janeiro - RJ - CEP:
                22261-005Email desiderata@desiderata.org.br
              </div>
            </div>
          </div>
          <!-- Col 2 -->
          <div
            class="flex justify-between gap-6 md:w-6/12 md:justify-normal md:gap-16"
          >
            <div class="flex w-full flex-col gap-8">
              <div class="text-lg">
                Agradecimentos especiais aos especialistas lorem ipsum dolor set
                amet
              </div>
              <div class="flex gap-4 md:flex-row">
                <div class="flex w-1/2 flex-col gap-4">
                  <!-- Colaborador 1 -->
                  <div class="flex flex-col gap-3">
                    <div class="font-breve text-lg font-bold leading-none">
                      Sima Ferman
                    </div>
                    <div class="text-green-10">
                      Chefe do Serviço de Oncologia Pediátrica Instituto
                      Nacional de Câncer- INCA
                    </div>
                  </div>
                  <!-- Colaborador 2 -->
                  <div class="flex flex-col gap-3">
                    <div class="font-breve text-lg font-bold leading-none">
                      Neviçolino Pereira de Carvalho Filho
                    </div>
                    <div class="text-green-10">
                      Presidente da Sociedade Brasileira de Oncologia Pediátrica
                    </div>
                  </div>
                  <!-- Colaborador 3 -->
                  <div class="flex flex-col gap-3">
                    <div class="font-breve text-lg font-bold leading-none">
                      Rejane de Souza Reis
                    </div>
                    <div class="text-green-10">
                      Associação Brasileira de Registros de Câncer
                    </div>
                  </div>
                  <!-- Colaborador 4 -->
                  <div class="flex flex-col gap-3">
                    <div class="font-breve text-lg font-bold leading-none">
                      Sima Ferman
                    </div>
                    <div class="text-green-10">
                      Chefe do Serviço de Oncologia Pediátrica Instituto
                      Nacional de Câncer- INCA
                    </div>
                  </div>
                  <!-- Colaborador 5 -->
                  <div class="flex flex-col gap-3">
                    <div class="font-breve text-lg font-bold leading-none">
                      Neviçolino Pereira de Carvalho Filho
                    </div>
                    <div class="text-green-10">
                      Presidente da Sociedade Brasileira de Oncologia Pediátrica
                    </div>
                  </div>
                </div>
                <div class="flex w-1/2 flex-col gap-4">
                  <!-- Colaborador 3 -->
                  <div class="flex flex-col gap-3">
                    <div class="font-breve text-lg font-bold leading-none">
                      Rejane de Souza Reis
                    </div>
                    <div class="text-green-10">
                      Associação Brasileira de Registros de Câncer
                    </div>
                  </div>
                  <!-- Colaborador 1 -->
                  <div class="flex flex-col gap-3">
                    <div class="font-breve text-lg font-bold leading-none">
                      Sima Ferman
                    </div>
                    <div class="text-green-10">
                      Chefe do Serviço de Oncologia Pediátrica Instituto
                      Nacional de Câncer- INCA
                    </div>
                  </div>
                  <!-- Colaborador 2 -->
                  <div class="flex flex-col gap-3">
                    <div class="font-breve text-lg font-bold leading-none">
                      Neviçolino Pereira de Carvalho Filho
                    </div>
                    <div class="text-green-10">
                      Presidente da Sociedade Brasileira de Oncologia Pediátrica
                    </div>
                  </div>
                  <!-- Colaborador 3 -->
                  <div class="flex flex-col gap-3">
                    <div class="font-breve text-lg font-bold leading-none">
                      Rejane de Souza Reis
                    </div>
                    <div class="text-green-10">
                      Associação Brasileira de Registros de Câncer
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  CopyRight Footer -->
    <div class="bg-blue-70 text-white">
      <div class="container mx-auto px-5 py-2.5 md:px-0">
        <div
          class="flex flex-wrap justify-center gap-4 md:flex-row md:justify-between"
        >
          <div>2024 © Instituto Desiderata</div>
          <div>Política de privacidade</div>
          <div>
            Design e creative code por
            <a class="https://cafe.art.br/"
              ><button class="font-bold hover:text-orange">
                Cafe.art.br
              </button></a
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
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
  computed: {
    baseURL() {
      return this.$config.public.baseUrl;
    },
  },
};
</script>
<style>
.menu_footer {
  @apply flex flex-col justify-between font-slab font-bold md:text-xl;
  li {
    @apply cursor-pointer hover:text-orange;
  }
}
.menu_footer2 {
  @apply flex flex-col gap-4 font-slab text-sm md:text-xl;
  li {
    @apply cursor-pointer hover:text-yellow;
  }
}
</style>
