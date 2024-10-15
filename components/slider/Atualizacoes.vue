<template>
  <div class="flex items-center overflow-hidden md:pt-0" id="banner">
    <div class="container mx-auto">
      <!-- Custom Splide + Controllers -->
      <div class="flex flex-col-reverse gap-8 md:flex-row">
        <!-- Controller -->
        <div class="flex items-center justify-center gap-8 md:w-4/12 md:justify-normal">
          <div class="flex flex-col gap-6">
            <!-- Titulo Desktop -->
            <div>
              <slot></slot>
            </div>
            <!-- Controller Splide -->
            <InteractionSliderController
              :splideInstance="splideInstance"
              :currentSlide="currentSlide"
              :totalSlides="totalSlides"
            />
          </div>
        </div>
        <!-- Splide -->
        <div class="px-5 md:w-8/12 md:px-0">
          <Splide ref="splide" :options="options">
            <template v-for="(card, index) in cards" :key="index">
              <SplideSlide>
                <CardAtualizacoes
                  @click="goToSlide(index)"
                  imagem="atualizacoes/destaque1.jpg"
                  titulo="Manual gratuito para a boa alimentação dos brasileiros completa dez anos"
                  :categoria="['cancer', 'obesidade', 'institucional']"
                  btniconlink="#"
                />
              </SplideSlide>
            </template>
          </Splide>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';

export default {
  components: {
    Splide,
    SplideSlide,
  },
  props: {
    base: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      options: {
        perPage: 2,
        rewind: false,
        pagination: false,
        arrows: false,
        gap: '2rem',
        breakpoints: {
          640: {
            perPage: 1,
            gap: '1.5rem',
          },
          768: {
            perPage: 2,
            gap: '2rem',
          },
          1024: {
            perPage: 2,
            gap: '2rem',
          },
          1280: {
            perPage: 2,
            gap: '2rem',
          },
        },
      },
      cards: this.base,
      splideInstance: null,
      currentSlide: 1,
      totalSlides: 1,
    };
  },
  computed: {
    baseURL() {
      return this.$config.public.baseUrl;
    },
  },
  mounted() {
    this.splideInstance = this.$refs.splide.splide;
    this.totalSlides = this.splideInstance.length;
    this.splideInstance.on('move', (newIndex) => {
      this.currentSlide = newIndex + 1;
    });
  },
};
</script>

<style scoped>
.videoarea {
  @apply cursor-pointer;
  .capafundo {
    @apply transition-all duration-300 ease-out;
  }
  .playerbtn {
    @apply text-6xl text-yellow opacity-75 transition-all duration-300 ease-out;
  }
  &:hover {
    .playerbtn {
      @apply text-6xl text-white opacity-100;
    }
    .capafundo {
      @apply scale-105;
    }
  }
}
.bg-card {
  background: linear-gradient(180deg, #fffbdc 0%, #fff6ba 100%);
}
.filtroimg {
  @apply absolute left-0 top-0 h-full w-full;
  background: linear-gradient(
    148deg,
    rgba(255, 213, 0, 0.06) 0.04%,
    rgba(0, 131, 202, 0.25) 100.04%
  );
}
</style>
