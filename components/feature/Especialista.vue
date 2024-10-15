<template>
  <div class="flex flex-col-reverse gap-16 md:flex-row md:gap-8">
    <!-- Coluna 1 -->
    <div class="flex flex-col gap-8 md:w-8/12 md:gap-16">
      <!-- FeatureIntroEspecialista -->
      <div class="flex flex-col gap-10">
        <div class="flex flex-col gap-8">
          <!-- Titulo -->
          <h4>{{ titulo }}</h4>
          <!-- Profile Introdução -->
          <div class="flex items-center gap-4">
            <!-- Imagem Perfil -->
            <figure
              class="filtro-profile relative h-[72px] min-w-[72px] squircle-8 squircle-bottom-left-2"
            >
              <img
                :src="`${imagemPerfil}`"
                class="h-full w-full object-cover"
              />
            </figure>
            <div>
              <!-- Nome Perfil -->
              <div class="text-xl text-blue-dark md:text-2xl">
                Por <strong>{{ nomePerfil }}</strong>
              </div>
              <!-- Cargo Perfil -->
              <div class="text-teal">
                {{ cargoPerfil }}
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col">
          <!-- Texto -->
          <div
            v-html="textoExibido"
            :class="{ 'fade-in': textoExpandido }"
            class="text-base md:text-lg"
          ></div>
          <!-- Botão Ler Mais -->
          <div>
            <button
              type="button"
              class="flex flex-row items-center justify-center gap-2 rounded-full font-bold text-yellow transition-all duration-300 ease-in-out hover:text-blue-dark disabled:pointer-events-none disabled:text-white disabled:opacity-40"
              @click="expandirTexto"
            >
              <!-- Text -->
              <span class="block translate-y-[1.2px] whitespace-nowrap">
                {{ textoExpandido ? 'Leia Menos' : lerMaisText }}
              </span>
              <!-- Icon -->
              <component
                :is="textoExpandido ? 'SvgoMinus' : 'SvgoPlus'"
                class="text-2xl"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Coluna 2 -->
    <div class="flex items-center justify-center md:w-4/12">
      <slot />
    </div>
  </div>
</template>

<style>
.fade-in {
  opacity: 0;
  animation: fade-in 0.7s ease-in-out forwards;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>

<script>
export default {
  props: {
    titulo: {
      type: String,
      required: true,
    },
    imagemPerfil: {
      type: String,
      required: true,
    },
    nomePerfil: {
      type: String,
      required: true,
    },
    cargoPerfil: {
      type: String,
      required: true,
    },
    texto: {
      type: String,
      required: true,
    },
    lerMaisText: {
      type: String,
      required: true,
    },
    lerMaisLink: {
      type: String,
      default: '',
    },
    palavrasCorte: {
      type: String,
      default: 50,
    },
  },
  data() {
    return {
      textoExpandido: false,
    };
  },
  computed: {
    textoExibido() {
      if (this.textoExpandido) {
        return this.texto;
      } else {
        const textoArray = this.texto.split(' ');
        if (textoArray.length > this.palavrasCorte) {
          return textoArray.slice(0, this.palavrasCorte).join(' ') + '...';
        } else {
          return this.texto;
        }
      }
    },
  },
  methods: {
    expandirTexto() {
      this.textoExpandido = !this.textoExpandido;
    },
  },
};
</script>
